# Questions

## Question 1
What would `flag`'s inferred type be?
```ts
let flag = false;
```
> `boolean`.

## Question 2
What is this function's return type?
```ts
function log(message: string) {
    return console.log(message);
}
```
> `any`.

## Question 3
What is the type annotation for an array of dates?
> `Date[]` or `Array<Date>`.

## Question 4
Will a type error occur in this code?
```ts
type Point = {
    x  : number
    y  : number
    z? : number
}
const point: Point = { x:24, y:65 }
```
> No. The `z` parameter is optional.

## Question 5
Use a type alias to create a number that can only hold integer values between and including 1 and 3.
> `type OneToThree = 1 | 2 | 3`

## Question 6
What TypeScript compiler option can be used to prevent the transpilation process when a type error is found?
> Set `noEmitOnError` to `true`.

## Question 7
This code raises a type error because `lastSale` does not accept `null`.
```ts
type Product = {
    name     : string
    lastSale : Date
}
const table: Product = {name: "Table", lastSale: null}
```
How can the `Product` type be changed for `lastSale` to allow `null`?
> `lastSale : Date | null`

