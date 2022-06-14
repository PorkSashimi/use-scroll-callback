import { useEffect, useState } from 'react';

type TPosition = {
  top: number;
  left: number;
};

type TOptions = {
  manual?: boolean;
  UNSAFE_onScrollRight?: () => void;
  target: () => HTMLElement;
  UNSAFE_onScrollBottom?: () => void;
  onScrollTop?: () => void;
  onScroll?: (oldPosition?: TPosition, newPosition?: TPosition) => void;
  onScrollLeft?: () => void;
};

function useScroll(options: TOptions) {

  const [listenning, setListenning] = useState<boolean>(false);
  const [position, setPosition] = useState<[undefined | TPosition, undefined | TPosition]>([{ top: 0, left: 0 }, undefined]);

  // ------

  useEffect(() => {
    if (options.manual !== true) {
      onInit();
    }
    return () => {
      onDestory();
    };
  }, []);

  useEffect(() => {
    onChange(position[0], position[1]);
  }, [position]);

  // ------

  function onInit() {
    options.target()?.addEventListener('scroll', onScroll);
    setListenning(true);
  }

  function onDestory() {
    options.target()?.removeEventListener('scroll', onScroll);
    setListenning(false);
  }

  function onScroll(event: Event) {
    let newPosition: undefined | TPosition;
    const target = event.target as HTMLInputElement;
    if (target) {
      newPosition = {
        top: target.scrollTop / (target.scrollHeight - target.clientHeight),
        left: target.scrollLeft / (target.scrollWidth - target.clientWidth),
      };
    } else {
      newPosition = undefined;
    }
    setPosition(pre => [pre[1], newPosition]);
  }

  function onChange(oldPosition: undefined | TPosition, newPosition: undefined | TPosition) {

    if (!listenning) {
      return;
    }

    options.onScroll?.(oldPosition, newPosition);

    if (!oldPosition || !newPosition) {
      return;
    }

    if (oldPosition.top > newPosition.top) {
      if (newPosition.top === 0) {
        options.onScrollTop?.();
      }
    }

    if (oldPosition.top < newPosition.top) {
      if (newPosition.top > 0.9998) {
        options.UNSAFE_onScrollBottom?.();
      }
    }

    if (oldPosition.left > newPosition.left) {
      if (newPosition.left === 0) {
        options.onScrollLeft?.();
      }
    }

    if (oldPosition.left < newPosition.left) {
      if (newPosition.left > 0.9998) {
        options.UNSAFE_onScrollRight?.();
      }
    }
  }

  // ------

  return {
    position,
    addScrollListener: onInit,
    removeScrollListener: onDestory
  };

}

export default useScroll;
