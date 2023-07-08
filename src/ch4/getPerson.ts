// This file does not contain JSX. It is a utility. The filename and function can be lowercase.

// Represents the name and age of a person.
interface Person {
    name : string
    age  : number
}


const personMap = new Map<string, {name: string, age: number}>()


export function getPerson(name?: string): Promise<Person> {
    
    // This function asynchronously returns a Person, after a second has elapsed.
    return new Promise((resolve) => {
        
        setTimeout(() => 
        {
            if (name !== undefined) {
                const person = personMap.get(name)
                
                if(person !== undefined) {
                    resolve(person)
                } else {
                    personMap.set(name, {name: name, age: 20})
                    resolve({name: name, age: 20})
                }
            }
        }
        , 100)
        //resolve({ name: "Bob", age: 43 })
    })
}




