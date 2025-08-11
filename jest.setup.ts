import 'whatwg-fetch';
import '@testing-library/jest-dom';

window.matchMedia =
  window.matchMedia ||
  function matchMedia() {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

// Mock IntersectionObserver
class IntersectionObserver {
  observe(target: Element) {
    return null;
  }

  unobserve(target: Element) {
    return null;
  }

  disconnect() {
    return null;
  }
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

// Optional: Additional setup for other window properties, if needed
window.scrollTo = jest.fn();
