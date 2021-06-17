---
title: "Lit in 60 seconds"
preset: "lit"
---

<StepHead>

```ts src/index.ts focus=5,9
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`<h1>Hello Lit</h1>`;
  }
}
```

</StepHead>

To create a component with lit, you need to extend the LitElement class

<StepHead>

```ts src/index.ts focus=6:8

```

</StepHead>

then add the render method
and use a tagged template literal to return html.

<StepHead>

```ts src/index.ts focus=4,5,13
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  render() {
    return html`
      <div>
        <button>Hello</button>
      </div>
    `;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`<h1>Hello Lit</h1>`;
  }
}
```

</StepHead>

You also need to use the customElement decorator,

<StepHead>

```ts src/index.ts focus=4,20,21
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  render() {
    return html`
      <div>
        <button>Hello</button>
      </div>
    `;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component></my-component>
        <my-component></my-component>
      </div>
    `;
  }
}
```

</StepHead>

so you can use the element name from anywhere in your app

<StepHead>

```ts src/index.ts focus=20[23:34],21[23:36]
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  render() {
    return html`
      <div>
        <button>Hello</button>
      </div>
    `;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

If you want to pass data to a custom element

<StepHead>

```ts src/index.ts focus=6,7,23[23:34],24[23:36]
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name;

  render() {
    return html`
      <div>
        <button>Hello</button>
      </div>
    `;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

use a class field with the property decorator

<StepHead>

```ts src/index.ts focus=6,7,12,23[23:34],24[23:36]
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name;

  render() {
    return html`
      <div>
        <button>${this.name}</button>
      </div>
    `;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

then you can render it inside the template literal

<StepHead>

```ts src/index.ts focus=12[17:41],17:19
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
      </div>
    `;
  }

  private _addGoal(event) {
    // TODO
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

Templates can also include event listeners with this syntax

<StepHead>

```ts src/index.ts focus=13,14,24:26
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name;

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

You can define internal state with the state decorator

<StepHead>

```ts src/index.ts focus=13,14,20,25:27
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name;

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
        ${"⚽".repeat(this.goalCount)}
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

Every time you change the state Lit will re-render the component (show)

<StepHead>

```ts src/index.ts focus=25,27:29
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name = "Messi";

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
        ${"⚽".repeat(this.goalCount)}
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
    this.dispatchEvent(
      new CustomEvent("goal", { detail: { player: this.name } })
    );
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  render() {
    return html`
      <div>
        <my-component name="Messi"></my-component>
        <my-component name="Ronaldo"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

You can dispatch custom events to send data to the parent

<StepHead>

```ts src/index.ts focus=27:29,35:37,43,47
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name = "Messi";

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
        ${"⚽".repeat(this.goalCount)}
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
    this.dispatchEvent(
      new CustomEvent("goal", { detail: { player: this.name } })
    );
  }
}

@customElement("my-app")
class MyApp extends LitElement {
  private _onGoal(event) {
    console.log("Goal by " + event.detail.player);
  }
  render() {
    return html`
      <div>
        <my-component name="Messi" @goal="${this._onGoal}"></my-component>
        <my-component name="Ronaldo" @goal="${this._onGoal}"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

Custom events can be handled in the same way as dom events

<StepHead>

```ts src/index.ts focus=33
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name = "Messi";

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
        ${"⚽".repeat(this.goalCount)}
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
    this.dispatchEvent(
      new CustomEvent("goal", { detail: { player: this.name } })
    );
  }
}

const players = ["Messi", "Ronaldo", "Laspada"];

@customElement("my-app")
class MyApp extends LitElement {
  private _onGoal(event) {
    console.log("Goal by " + event.detail.player);
  }
  render() {
    return html`
      <div>
        <my-component name="Messi" @goal="${this._onGoal}"></my-component>
        <my-component name="Ronaldo" @goal="${this._onGoal}"></my-component>
      </div>
    `;
  }
}
```

</StepHead>

If you want to repeat something based on a list

<StepHead>

```ts src/index.ts focus=33,41,43:48,50
import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name = "Messi";

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
        ${"⚽".repeat(this.goalCount)}
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
    this.dispatchEvent(
      new CustomEvent("goal", { detail: { player: this.name } })
    );
  }
}

const players = ["Messi", "Ronaldo", "Laspada"];

@customElement("my-app")
class MyApp extends LitElement {
  private _onGoal(event) {
    console.log("Goal by " + event.detail.player);
  }
  render() {
    return html`
      <div>
        ${players.map(
          (player) => html`<my-component
            name="${player}"
            @goal="${this._onGoal}"
          ></my-component>`
        )}
      </div>
    `;
  }
}
```

</StepHead>

you map the array and nest the tagged template literals

<StepHead>

```ts src/index.ts focus=37:41
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-component")
class MyComponent extends LitElement {
  @property()
  name = "Messi";

  @state()
  goalCount = 2;

  render() {
    return html`
      <div>
        <button @click="${this._addGoal}">${this.name}</button>
        ${"⚽".repeat(this.goalCount)}
      </div>
    `;
  }

  private _addGoal(event) {
    this.goalCount++;
    this.dispatchEvent(
      new CustomEvent("goal", { detail: { player: this.name } })
    );
  }
}

const players = ["Messi", "Ronaldo", "Laspada"];

@customElement("my-app")
class MyApp extends LitElement {
  static styles = css`
    div {
      outline: 8px solid hotpink;
    }
  `;
  private _onGoal(event) {
    console.log("Goal by " + event.detail.player);
  }
  render() {
    return html`
      <div>
        ${players.map(
          (player) => html`<my-component
            name="${player}"
            @goal="${this._onGoal}"
          ></my-component>`
        )}
      </div>
    `;
  }
}
```

</StepHead>

There's also a static styles property

<StepHead>

```ts src/index.ts focus=37:41,45:47,54:56

```

</StepHead>

that only affect the elements within the component
...
