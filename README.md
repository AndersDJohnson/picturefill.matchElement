# Picturefill.matchElement

A Picturefill plugin for matching against elements.

This is a plugin [my modified version][my-picturefill] of [Scott Jehl's Picturefill][scott-picturefill], in which I have (conveniently) implemented plugin support.

Supports source rules like min/mix-width/height for other DOM elements.

Last matching source wins, just as in the original plugin.

## Install

Requires its Bower dependencies.

```sh
bower install
```

## Dependencies

Specified in the Bower file (`bower.json`). For now, jQuery is the only hard dependency. There's an optional dependency on [Ben Alman's jquery-resize][jquery-resize]] plugin to support per-element resize events that re-evaluate the chosen source.

## Example

See below, but also the included `index.html`.

### Basic usage:

```html
<span id="picture" data-picture>
  <span data-src="external/imgs/small.jpg"></span>
  <span data-src="external/imgs/medium.jpg" data-rules='{"#picture": {"min-width": 400}}'></span>
  <span data-src="external/imgs/large.jpg" data-rules='{"#picture": {"min-width": 800}}'></span>
  <span data-src="external/imgs/extralarge.jpg" data-rules='{"#picture": {"min-width": 1000}}'></span>
</span>
```

### Per-element resize events (with jquery-resize):

```html
<span id="picture" data-picture data-picture-resize>
  <span data-src="external/imgs/small.jpg"></span>
  <span data-src="external/imgs/medium.jpg" data-rules='{"#picture": {"min-width": 400}}'></span>
  <!-- ... -->
</span>
```


[my-picturefill]: https://github.com/AndersDJohnson/picturefill (AndersDJohnson's Picturefill)
[scott-picturefill]: https://github.com/scottjehl/picturefill (Scott Jehl's Picturefill)
[jquery-resize]: https://github.com/cowboy/jquery-resize (Cowboy's Picturefill)
