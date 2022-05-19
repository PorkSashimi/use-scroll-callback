import useScroll from '../src/index';
import { renderHook } from '@testing-library/react-hooks';
import { vi, beforeAll, describe, expect, test, } from 'vitest';

const SCROLL_CONTAINER_WIDTH = 400;
const SCROLL_CONTAINER_HEIGHT = 400;
const SCROLL_ELEMENT_DOM_ID = 'scroll-element';
const SCROLL_CONTAINER_DOM_ID = 'scroll-container';

/**
 * @vitest-environment jsdom
 */
describe('useScroll', () => {

  beforeAll(() => {
    Element.prototype.scroll = vi.fn(() => { });
  });

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
    expect(document.getElementById(SCROLL_ELEMENT_DOM_ID).getAttribute('id')).equal(SCROLL_ELEMENT_DOM_ID);
    expect(document.getElementById(SCROLL_ELEMENT_DOM_ID).getAttribute('style')).equal(`width: ${SCROLL_CONTAINER_WIDTH * 2}px;height: ${SCROLL_CONTAINER_HEIGHT * 2}px`);
  });

  test('scroll container should be defined', () => {
    expect(document.getElementById(SCROLL_CONTAINER_DOM_ID)).toBeDefined();
    expect(document.getElementById(SCROLL_CONTAINER_DOM_ID).getAttribute('id')).equal(SCROLL_CONTAINER_DOM_ID);
    expect(document.getElementById(SCROLL_CONTAINER_DOM_ID).getAttribute('style')).equal(`width: ${SCROLL_CONTAINER_WIDTH}px;height: ${SCROLL_CONTAINER_HEIGHT}px;overflow: auto`);
  });

  test('onScroll', () => {
    const mockOnScroll = vi.fn();
    const mockOnScrollLeft = vi.fn();
    renderHook(
      () => {
        return useScroll({
          onScroll: () => mockOnScroll(),
          onScrollLeft: () => mockOnScrollLeft(),
          target: () => document.getElementById(SCROLL_CONTAINER_DOM_ID)!
        })
      }
    );
    document.getElementById(SCROLL_CONTAINER_DOM_ID).scroll({ top: 100, behavior: 'smooth' });
    expect(mockOnScroll).toHaveBeenCalledOnce();
  });

});