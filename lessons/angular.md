---
title: 'Angular in 60 seconds'
preset: 'angular'
---

<StepHead>

```ts app.ts focus=3:7
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1>Angular</h1>`,
})
class MyApp {}

export default {
  declarations: [MyApp],
  bootstrap: [MyApp],
}
```

</StepHead>

Angular uses classes and decorators to define components

<StepHead>

```ts app.ts focus=9:15
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<h1>Angular</h1>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button>Hello Angular</button>
  </div>`,
})
class MyComponent {}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

Inside the decorator, you define a selector and a template

<StepHead>

```ts app.ts focus=5:8,13
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component></my-component>
    <my-component></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button>Hello Angular</button>
  </div>`,
})
class MyComponent {}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

You can use the selector inside any template

<StepHead>

```ts app.ts focus=6[19:30],7[19:32]
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button>Hello Angular</button>
  </div>`,
})
class MyComponent {}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

If you want to pass data to a child component

<StepHead>

```ts app.ts focus=6[19:30],7[19:32],19
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button>Hello Angular</button>
  </div>`,
})
class MyComponent {
  @Input() name
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

you can define an input

<StepHead>

```ts app.ts focus=15,19
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button>{{ name }}</button>
  </div>`,
})
class MyComponent {
  @Input() name
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

and render it inside curly braces

<StepHead>

```ts app.ts focus=15[13:31]
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
  </div>`,
})
class MyComponent {
  @Input() name

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

To add event handlers you use this parentheses syntax

<StepHead>

```ts app.ts focus=15[13:31],21:23
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
  </div>`,
})
class MyComponent {
  @Input() name

  addGoal() {
    console.log('goal')
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

and add the handler method to the class

<StepHead>

```ts app.ts focus=21:24
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
  </div>`,
})
class MyComponent {
  @Input() name

  count = 2
  addGoal() {
    this.count++
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

You can add state as class properties

<StepHead>

```ts app.ts focus=16,22
import { Component, Input, Output } from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
    <span>{{ '⚽'.repeat(count) }}</span>
  </div>`,
})
class MyComponent {
  @Input() name

  count = 2
  addGoal() {
    this.count++
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

inside the curly braces in templates you can put any javascript expression

<StepHead>

```ts app.ts focus=16,22,24

```

</StepHead>

and every time the state changes, angular will re render the component (show)

<StepHead>

```ts app.ts focus=26,31
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component name="Messi"></my-component>
    <my-component name="Ronaldo"></my-component>
  </div>`,
})
class MyApp {}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
    <span>{{ '⚽'.repeat(count) }}</span>
  </div>`,
})
class MyComponent {
  @Input() name
  @Output() goal = new EventEmitter()

  count = 2
  addGoal() {
    this.count++
    this.goal.emit({ player: this.name })
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

You can use outputs to send data to the component's parent

<StepHead>

```ts app.ts focus=11,13,14,15,17,18,22:24
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component
      name="Messi"
      (goal)="showGoal($event)"
    ></my-component>
    <my-component
      name="Ronaldo"
      (goal)="showGoal($event)"
    ></my-component>
  </div>`,
})
class MyApp {
  showGoal(goal) {
    console.log(goal.player)
  }
}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
    <span>{{ '⚽'.repeat(count) }}</span>
  </div>`,
})
class MyComponent {
  @Input() name
  @Output() goal = new EventEmitter()

  count = 2
  addGoal() {
    this.count++
    this.goal.emit({ player: this.name })
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

you can handle the custom event, similar to how you handle clicks

<StepHead>

```ts app.ts focus=22
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component
      name="Messi"
      (goal)="showGoal($event)"
    ></my-component>
    <my-component
      name="Ronaldo"
      (goal)="showGoal($event)"
    ></my-component>
  </div>`,
})
class MyApp {
  players = ['Messi', 'Ronaldo', 'Laspada']

  showGoal(goal) {
    console.log(goal.player)
  }
}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
    <span>{{ '⚽'.repeat(count) }}</span>
  </div>`,
})
class MyComponent {
  @Input() name
  @Output() goal = new EventEmitter()

  count = 2
  addGoal() {
    this.count++
    this.goal.emit({ player: this.name })
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

If you want to repeat something based on a list

<StepHead>

```ts app.ts focus=11,12,13,15,19
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'my-app',
  template: `<div>
    <my-component
      *ngFor="let player of players"
      [name]="player"
      (goal)="showGoal($event)"
    ></my-component>
  </div>`,
})
class MyApp {
  players = ['Messi', 'Ronaldo', 'Laspada']
  showGoal(goal) {
    console.log(goal.player)
  }
}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
    <span>{{ '⚽'.repeat(count) }}</span>
  </div>`,
})
class MyComponent {
  @Input() name
  @Output() goal = new EventEmitter()

  count = 2
  addGoal() {
    this.count++
    this.goal.emit({ player: this.name })
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

you can use the ngFor directive

<StepHead>

```ts app.ts focus=10
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'

@Component({
  selector: 'my-app',
  styles: ['div { outline: 10px solid hotpink; }'],
  template: `<div>
    <my-component
      *ngFor="let player of players"
      [name]="player"
      (goal)="showGoal($event)"
    ></my-component>
  </div>`,
})
class MyApp {
  players = ['Messi', 'Ronaldo', 'Laspada']
  showGoal(goal) {
    console.log(goal.player)
  }
}

@Component({
  selector: 'my-component',
  template: `<div>
    <button (click)="addGoal()">{{ name }}</button>
    <span>{{ '⚽'.repeat(count) }}</span>
  </div>`,
})
class MyComponent {
  @Input() name
  @Output() goal = new EventEmitter()

  count = 2
  addGoal() {
    this.count++
    this.goal.emit({ player: this.name })
  }
}

export default {
  declarations: [MyApp, MyComponent],
  bootstrap: [MyApp],
}
```

</StepHead>

You can also declare styles

<StepHead>

```ts app.ts focus=10,11,17

```

</StepHead>

that only affect the elements within the component's template
