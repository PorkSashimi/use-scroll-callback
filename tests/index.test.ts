import useScroll from '../src/index';
import { renderHook } from '@testing-library/react-hooks';
import { beforeAll, describe, expect, test } from 'vitest';

const SCROLL_CONTAINER_WIDTH = 400;
const SCROLL_CONTAINER_HEIGHT = 400;
const SCROLL_ELEMENT_DOM_ID = 'scroll-element';
const SCROLL_CONTAINER_DOM_ID = 'scroll-container';

/**
 * @vitest-environment jsdom
 */
describe('useScroll', () => {

  beforeAll(() => {

    let scrollElement = document.createElement('div');
    scrollElement.setAttribute('id', SCROLL_ELEMENT_DOM_ID);
    scrollElement.setAttribute('style', `width: ${SCROLL_CONTAINER_WIDTH * 2}px;height: ${SCROLL_CONTAINER_HEIGHT * 2}px`);

    let scrollContainer = document.createElement('div');
    scrollContainer.setAttribute('id', SCROLL_CONTAINER_DOM_ID);
    scrollContainer.setAttribute('style', `width: ${SCROLL_CONTAINER_WIDTH}px;height: ${SCROLL_CONTAINER_HEIGHT}px;overflow: auto`);

    scrollContainer.appendChild(scrollElement);
    document.body.appendChild(scrollContainer);
  });

  test('hook should be defined', () => {
    expect(useScroll).toBeDefined();
  });

  test('scroll element should be defined', () => {
    expect(document.getElementById(SCROLL_ELEMENT_DOM_ID)).toBeDefined();
  });

  test('scroll element should be defined', () => {
    expect(document.getElementById(SCROLL_CONTAINER_DOM_ID)).toBeDefined();
  });

  test('document body', () => {
    const hook = renderHook(
      () => useScroll({
        target: () => document.getElementById(SCROLL_CONTAINER_DOM_ID)!
      })
    );
    expect(hook.result.current).toEqual(undefined);
  });

});