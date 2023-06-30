// This file does not contain JSX. It is a utility. The filename and function can be lowercase.

// Represents the name and age of a person.
interface Person {
    name : string
    age  : number
}

export function getPerson(): Promise<Person> {
    
    // This function asynchronously returns a Person, after a second has elapsed.
    return new Promise((resolve) => {
        setTimeout(() => resolve({ name: "Bob", age: 43 }), 1500)
    })
}
