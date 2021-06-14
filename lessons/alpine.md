---
title: 'Alpine in 60 seconds'
preset: 'alpine'
---

<StepHead>

```html index.html
<html>
  <body>
    <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
      defer
    ></script>

    <div>
      <div x-data="{count: 0, player: 'Messi'}">
        <button
          x-text="player"
          @click="count++;dispatch('goal', player)"
        ></button>
        <span x-text="'⚽'.repeat(count)"></span>
      </div>
    </div>
  </body>
</html>
```

</StepHead>

You write a template, specify a dom element,  
and Vue will do the render for you.

<StepHead>

```html index.html
<html>
  <body>
    <script
      src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
      defer
    ></script>

    <div>
      <div x-data="{count: 0, player: 'Messi'}">
        <button
          x-text="player"
          @click="count++;dispatch('goal', player)"
        ></button>
        <span x-text="'⚽'.repeat(count)"></span>
      </div>
    </div>

    <div x-data="dropdown()">
      <button x-on:click="open">Open</button>

      <div x-show="isOpen()" x-on:click.away="close">
        Content for my first dropdown
      </div>
    </div>

    <div>Random stuff...</div>

    <div x-data="dropdown()">
      <button x-on:click="open">Open</button>

      <div x-show="isOpen()" x-on:click.away="close">
        Content for my second dropdown
      </div>
    </div>

    <script>
      function dropdown() {
        return {
          show: false,
          open() {
            this.show = true
          },
          close() {
            this.show = false
          },
          isOpen() {
            return this.show === true
          },
        }
      }
    </script>
  </body>
</html>
```

</StepHead>

to render a list of elements.
