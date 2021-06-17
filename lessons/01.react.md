---
title: "React in 60 seconds"
preset: "react"
---

<StepHead>

```jsx
import React from "react";

export default function App() {
  return <h1 style={{ color: "salmon" }}>Hello React</h1>;
}
```

</StepHead>

React provides a createElement function to declare what we want to render to the DOM

<StepHead>

```jsx focus=4
import React from "react";

export default function App() {
  return <h1 style={{ color: "teal" }}>Hello React</h1>;
}
```

</StepHead>

But instead of using createElement directly you can use JSX.
