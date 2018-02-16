# makeDraggable

[CHECK OUT THE DEMO!](https://okaybenji.github.io/makeDraggable/)

You've found perhaps the simplest library out there for enabling drag-and-drop on your DOM elements. Just look at these *impressive* numbers!

* 1 file
* 40 lines
* 1 function
* 0 dependencies
* 7 billion potential users

To be honest, you could probably just copy and paste the code. Go ahead, no one's looking.

## How To Use It
Make an element draggable with `makeDraggable(element)`.

### Handles
There's support for "handles" like title bars.

Make just the top 25 pixels accept dragging:
```makeDraggable(element, {top: 25})```

Make just the top, right corner accept dragging:
```makeDraggable(element, {top: 25, right: 25})```

(Note right now you can't make, e.g., the top *and* bottom grabbable at the same time. I don't imagine you would want to do that anyway.)