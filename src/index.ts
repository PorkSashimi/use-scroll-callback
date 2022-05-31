import { useEffect, useRef } from 'react';

type TPosition = {
  top: number;
  left: number;
};

type TOptions = {
  /**
   * @default true
   */
  manual?: boolean;
  target: () => HTMLElement;
  onScroll?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
  onScrollTop?: (oldPosition: TPosition, newPosition: TPosition, event: Event) => void;
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

  const positionRef = useRef<TPosition>({ top: 0, left: 0 });

  // ------

  useEffect(() => {
    if (options.manual !== true) {
      onInit();
    }
    return () => {
      onDestory();
    };
  }, [options.target]);

  // ------

  function getElementPosition(element?: HTMLElement) {
    /**
     * TODO: type “EventTarget” not exist in “scroll*”。ts(2339)
     */
    const target = element as HTMLInputElement;
    if (element) {
      const top = (target.scrollTop / (target.scrollHeight - target.clientHeight)) || 0;
      const left = (target.scrollLeft / (target.scrollWidth - target.clientWidth)) || 0;
      return { top, left };
    } else {
      return { top: 0, left: 0 };
    }
  }

  // ------

  function onInit() {
    options.target().addEventListener('scroll', onScroll);
  }

  function onDestory() {
    options.target().removeEventListener('scroll', onScroll);
  }

  function onScroll(event: Event) {
    let oldPosition: TPosition = positionRef.current;
    let newPosition: TPosition = getElementPosition(event.target as HTMLInputElement);

    if (oldPosition.top > newPosition.top) {
      if (newPosition.top === 0) {
        options.onScrollTop?.(oldPosition, newPosition, event);
      }
    }

    if (oldPosition.top < newPosition.top) {
      if (newPosition.top > 0.9998) {
        options.UNSAFE_onScrollBottom?.(oldPosition, newPosition, event);
      }
    }

    if (oldPosition.left > newPosition.left) {
      if (newPosition.left === 0) {
        options.onScrollLeft?.(oldPosition, newPosition, event);
      }
    }

    if (oldPosition.left < newPosition.left) {
      if (newPosition.left > 0.9998) {
        options.UNSAFE_onScrollRight?.(oldPosition, newPosition, event);
      }
    }

    options.onScroll?.(oldPosition, newPosition!, event);
    positionRef.current = newPosition;

  }

  // ------

  return {
    addScrollListener: onInit,
    removeScrollListener: onDestory
  };

}

export default useScroll;
