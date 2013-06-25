# Picturefill.matchElement

A Picturefill plugin for matching against elements.

This is a plugin for [my modified version][my-picturefill] of [Scott Jehl's Picturefill][scott-picturefill], in which I have (conveniently) implemented plugin support.

- Supports source rules for matching against properties, including dimensions, of other DOM elements.
- Friendly to mix with the media query attributes of the original plugin.

## Install

Requires its Bower dependencies.

```sh
bower install
```

## Dependencies

Specified in the Bower file (`bower.json`). For now, jQuery is the only hard dependency. There's an optional dependency on [Ben Alman's jquery-resize][jquery-resize]] plugin to support per-element resize events that re-evaluate the chosen source.

## Usage

(See also the included `index.html`.)

Add a `data-rules` attribute to your source element(s). Its value should be a JSON string mapping a jQuery selector to a set of rules. Currently supported rules are:

- `"min-width": pixels`
- `"max-width": pixels`
- `"min-height": pixels`
- `"max-height": pixels`

Example:

```html
<span id="picture" data-picture>
  <span data-src="external/imgs/small.jpg"></span>
  <span data-src="external/imgs/medium.jpg" data-rules='{"#picture": {"min-width": 400}}'></span>
  <span data-src="external/imgs/large.jpg" data-rules='{"#picture": {"min-width": 800}}'></span>
  <span data-src="external/imgs/extralarge.jpg" data-rules='{"#picture": {"min-width": 1000}}'></span>
</span>
```

### Per-element resize events

With the [jquery-resize][jquery-resize] plugin, you can enable per-element resize events by adding a `data-picture-resize` attribute to your picture element.

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
