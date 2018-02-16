const makeDraggable = (element, {top, right, bottom, left} = {}) => {
  const $ = (query) => document.querySelector(query);
  let offsetX, offsetY;

  // Move element to mouse position (maintaining mouse position relative to element).
  const move = e => {
    element.style.top = `${e.clientY - offsetY}px`;
    element.style.left = `${e.clientX - offsetX}px`;
  };

  element.addEventListener('mousedown', e => {
    // Capture mouse position relative to element
    offsetX = e.clientX - element.offsetLeft;
    offsetY = e.clientY - element.offsetTop;

    // Allow making only part of the element accept drag.
    // (Note that currently you can't do top *&* bottom nor left *&* right.)
    if ((top && offsetY > top) || (bottom && element.offsetHeight - offsetY > bottom)) {
      return;
    }

    if ((right && element.offsetWidth - offsetX > right) || (left && offsetX > left)) {
      return;
    }

    // Disable highlighting while dragging
    element.style.userSelect = 'none';

    $('body').addEventListener('mousemove', move);
  }, false);

  const reset = (e) => {
    element.style.userSelect = 'auto'; // Re-enable highlighting.
    $('body').removeEventListener('mousemove', move);
  }

  $('body').addEventListener('mouseup', reset, false);
  element.addEventListener('mouseup', reset, false);
};
