import { useEffect, useMemo, useRef } from 'react';

type TPosition = {
  top: number;
  left: number;
  direction: TDirection[];
};

type TDirection = 'up' | 'down' | 'left' | 'right' | 'unknown';

type TOptions = {
  target?: () => HTMLElement;
  onScrollTop?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
  onScroll?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
  onScrollLeft?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
  /**
   * TODO: unsafe
   */
  UNSAFE_onScrollRight?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
  /**
   * TODO: unsafe
   */
  UNSAFE_onScrollBottom?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
};

function useScroll(options: TOptions) {

  const positionRef = useRef<TPosition>({ top: 0, left: 0, direction: ['unknown'] });

  // ------

  const target = useMemo(() => {
    return options?.target?.() || window;
  }, [options.target]);

  // ------

  useEffect(() => {
    target?.addEventListener('scroll', onScroll)
    return () => {
      target?.removeEventListener('scroll', onScroll);
    };
  }, [target]);

  // ------

  function onScroll(event: Event) {
    /**
     * TODO: type “EventTarget” not exist in “scroll*”。ts(2339)
     */
    const target = event.target as HTMLInputElement;
    const top = (target.scrollTop / (target.scrollHeight - target.clientHeight)) || 0;
    const left = (target.scrollLeft / (target.scrollWidth - target.clientWidth)) || 0;
    let newPosition: null | TPosition = null;
    let oldPosition: TPosition = positionRef.current;

    if (oldPosition.top > top) {
      newPosition = { top, left, direction: ['up'] };
      if (top === 0) {
        options.onScrollTop?.(oldPosition, newPosition, event);
      }
    }

    if (oldPosition.top < top) {
      newPosition = { top, left, direction: ['down'] };
      if (top > 0.9998) {
        options.UNSAFE_onScrollBottom?.(oldPosition, newPosition, event);
      }
    }

    if (oldPosition.left > left) {
      newPosition = { top, left, direction: ['left'] };
      if (left === 0) {
        options.onScrollLeft?.(oldPosition, newPosition, event);
      }
    }

    if (oldPosition.left < left) {
      newPosition = { top, left, direction: ['right'] };
      if (left > 0.9998) {
        options.UNSAFE_onScrollRight?.(oldPosition, newPosition, event);
      }
    }

    options.onScroll?.(oldPosition, newPosition!, event);
    positionRef.current = newPosition!;

  }
}

export default useScroll;
