# Questions
## Question 1
What type will the `name` prop have in the following component, which has no type annotations?
```tsx
export function Name({ name }) {
    return <div>{name}</div>
}
```
> The `name` prop will be of type `any`.

## Question 2
What type will the `firstName` state have in the following `useState` statement?
```tsx
const [firstName, setFirstName] = useState("")
```
> `firstName` will be of type `string`.

## Question 3
A `ContactDetails` component has the following `Props`.
```tsx
interface Props {
    firstName? : string
    email      : string
}
export function ContactDetails({ firstName, email }: Props) {
    // ...
}
```
The proceeding component is referenced in another component's JSX as follows.
```tsx
<ContactDetails email="fred@example.com" />
```
Will a type error be raised?
> No. The `firstName` field is optional.

## Question 4
A `status` state variable can hold values `"Good"` and `"Bad"`. It is initially `"Good"`. It is defined as follows.
```tsx
const [status, setStatus] = useState("Good")
```
What is the type given to `status`? How can its type be narrowed to only `"Good"` or `"Bad"`?
> `status` is of type `string`. Use `useState<"Good" | "Bad">("Good")` to restrict the type.

## Question 5
A `FruitList` component takes in an array of fruit names and displays them in a list. It is referenced in another component's JSX as follows.
```jsx
<FruitList fruits={["Banana", "Apple", "Strawberry"]} />
```
What props would you define for the `FruitList` component?
> The props would define as
> ```tsx
> interface Props {
>   fruits: string[]   
> }
> ```

## Question 6
An `email` state variable can hold `null`, or an email address. It's initially `null`. How would you define this state using the `useState` hook?
> Define using `const [email, setEmail] = useState<null | string>(null)`.

## Question 7
The following component allows the user to agree:
```tsx
export function Agree({ onAgree }: Props) {
    return (
        <button onClick={() => onAgree()}>
            Click to agree.
        </button>
    )
}
```
What would you define as the type definition for `Props`?
> I would define `Props` as the following.
> ```tsx
> interface Props {
>     onAgree: () => void   
> }
> ```