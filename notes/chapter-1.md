# Summary
## Syntax
- **Components** are declared using **JSX syntax**. Example:
```jsx
    <div className="App">
        <Alert type="information" heading="Success">
            Hello World!
        </Alert>
    </div>
```
## JSX & Props
- **JSX** transpiles to normal JavaScript.
- **Props are passed to components as JSX attributes**. This allows consumers of the component to control its output and behavior.
- **Props act as parameters** for the component.
## Events & State
- **Events** executes code when the user interacts with a component.
- **State is used to re-render** a component and update its output.
- State is defined using the **`useState` hook**.
- State is often updated in event handlers.
- **Custom events are implemented as function props**. This allows consumers of the component to execute logic when the user interacts with it.
## Other
- **React component names** must begin with a capital letter. Otherwise, it will be treated as a DOM element. (E.g. `<div>` VS `<Alert>`)
- **`ReactDOM.createRoot`** allows a React component tree to be rendered inside a DOM element.

# Details
## JSX Transpilation
- Plain text between tags are **evaluated as literal text**.
- Text enclosed in `{`braces`}` are **evaluated as expressions**.

## Plain Text Syntax Example
Suppose this JSX example.
```jsx
<div className="title">
    <span> Hello World! </span>
</div>
```
This JSX will transpile into the following code.
```js
React.createElement(
    "div",
    {className: "title"},

    React.createElement(
        "span",
        null,
        "Hello World!"
    )
)
```

## Braces Syntax Example
Suppose this JSX example.
```jsx
const title = "Hello World!"
<div className="title">
    <span>{title}</span>
</div>
```
This JSX will transpile into the following code.
```jsx
const title = "Hello World!"
React.createElement(
    "div",
    {className: "title"},
    
    React.createElement(
        "span",
        null,
        title
    )
)
```

## React Entry Point
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
```

# Questions
## Question 1
What is wrong with the following component definition?
```jsx
export function important() {
    return <div>
        This is really important!
    </div>
}
```
> React functions must begin with an uppercase letter. (Use `Important` instead!)

## Question 2
A component with a prop is defined as follows. The value of the prop is not properly output. What is the problem?
```jsx
export function Name({ name }) {
    return <div> name </div>
}
```
> To output the value of `name`, it must be surrounded as `{name}`. Otherwise, the literal string "name" would be output instead.

## Question 3
Component props are passed into a component.
```jsx
<ContactDetails name="Fred" email="fred@example.com" />
```
The component is defined here. The name `"Fred"` isn't output. Why?
```jsx
export function ContactDetails({ firstName, email }) {
    return (
        <div>
            <div> {firstName} </div>
            <div> {email} </div>
        </div>
    )
}
```
> A `name` prop is passed instead of a `firstName` prop.

## Question 4
What is wrong with this `click` event implementation?
```jsx
<button click={() => console.log("clicked")}>
    Click me
</button>
```
> `click` is used instead of `onClick`.

## Question 5
What is the initial value of the `loading` state defined here?
```jsx
const [loading, setLoading] = useState(true)
```
> `loading` is set to `true`.

## Question 6
What is wrong with how the state is set in this component?
```jsx
export function Agree() {
    const [agree, setAgree] = useState()

    return (
        <button onClick={() => agree = true}>
            Click to agree
        </button>
    )
}
```
> DO NOT DIRECTLY ASSIGN VALUES TO STATES. Instead of `agree = true`, use `setAgree(true)`.

## Question 7
The following component implements an optional `Agree` event. What is wrong with this implementation?
```jsx
export function Agree({ onAgree }) {
    function handleClick() {
        onAgree()
    }
    
    return (
        <button onClick={handleClick}>
            Click to agree
        </button>
    )
}
```
> If `onAgree` isn't passed, it will be `undefined`. If so, calling `onAgree()` will cause an error. Ensure `(onClick != undefined)` before calling it.