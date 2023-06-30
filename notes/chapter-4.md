# Summary

## React Hooks
- A Hook must be called at the function's top-level.
- Cannot call in conditions, loops, nor nested functions.
- **Only used in functional components**.
- CANNOT be used in **class components**.

## The `useEffect` Hook
- Executes component side effects when rendered.
- **Common use case** is fetching data.
- You must provide `useEffect` with a function `F`.
- `F` will run **during a re-render**.
- `F` will run **when a dependency variable is changed** (if provided).
- **Place dependencies in an array** (as the second parameter).
  
```tsx
// Dependencies DO NOT EXIST HERE.

function MyComponent() {
    useEffect(() => {
        console.log("Hello world")
    })
    
    return (
        <> Hello world </>
    )
}
```

```tsx
// Dependencies DO EXIST HERE.
// It depends on the "text" prop.

function MyComponent({ text }) {
    useEffect(() => {
        console.log("Hello, ", text)
    }, [text])
    
    return (
        <> Hello world! </>
    )
}
```

## Effect Cleanup
An **effect (The function you provided)** can return a function that performs a cleanup when the component is unmounted.
- **Protects against memory leaks**.

```tsx
function MyComponent({ onMyClick }) {
    useEffect(() => {
        function handleClick() {
            onMyClick()
        }
        
        // Create the event listener.
        document.addEventListener("click", listener)
        
        return () => {
            // Remove the event listener when unmounted.
            document.removeEventListener("click", listener)
        }
    })
    
    return (
        <> Hello world! </>
    )
}
```

## The `useState` Hook

## The `useReducer` Hook
- Alternative to `useState`.
- **Good for complex object state values** (e.g. when state changes depend on previous state values).

## The `useRef` Hook
- Creates a mutable value.
- Does not cause a re-render when changed.
- **Common use case** to set focus to an HTML element after it was rendered.

## The `useMemo` Hook
- Used to "memoize" **values**.
- Used for performance optimization.

## The `useCallback` Hook
- Used to "memoize" **functions**.
- Used for performance optimization.

