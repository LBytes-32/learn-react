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

# Questions
## Question 1
The following component renders some text for 5 seconds. Why is this problematic?
```tsx
export function TextVanish({ text }: Props) {
    if (!text)
        return null
    
    const [textToRender, setTextToRender] = useState(text)
    
    useEffect(() => {
        setTimeout(() => setTextToRender(""), 5000)
    }, [])
    
    return <span>{textToRender}</span>
}
```
> The `useState` and `useEffect` hooks must be declared at the top level.

## Question 2
The following code is a snippet from a React component that fetches some data and stores it in state.

There are several problems with this code. What are they?

```tsx
const [data, setData] = useState([])

useEffect(async () => {
    const data = await getData()
    setData(data)
})
```
> `useEffect` does not support async functions. `data` is also ambiguous.

## Question 3
How many times will the following component re-render in production mode when the button is clicked?

What will the button content be after one click?

```tsx
export function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <button onClick={() => {
                setCount(count + 1);
                setCount(count + 1);
                setCount(count + 1);
            }}>
            {count}
        </button>
    )
}
```
> It will re-render 3 times. `count` will be `1`, since the value of `count` isn't updated immediately after each `setCount`.

## Question 4
How many times will the following component re-render in production mode when the button is clicked?

What will the button content be after one click?

```tsx
export function CounterRef() {
    const count = useRef(0)
    
    return (
        <button
            onClick={() => {
                count.current = count.current + 1;
            }}>
            {count.current}
        </button>
    );
}
```
> It will re-render zero times. The button content will remain as `0`. (Reference hooks do not cause a re-render).

## Question 5
Consider the following `reducer` function.

```tsx
type State = {
    steps: number
}

type Action = 
    | { type: 'forward' steps: number }
    | { type: 'backwards' steps: number }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'forward':
            return { ...state,
                steps: state.steps + action.steps
            }
            
        case 'backwards':
            return { ...state,
                steps: state.steps - action.steps
            }
            
        default:
            return state
    }
}
```

What will the type of the `action` parameter be narrowed down to in the `"backwards"` switch branch?

> ?

## Question 6
Consider the following `Counter` component.
```tsx
export function Counter() {
    const [count, setCount] = useState(0);
    const memoCount = useMemo(() => count, []);
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                {memoCount}
            </button>
        </div>
    )
}
```