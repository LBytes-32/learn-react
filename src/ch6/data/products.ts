
export type Product = {
    id          : number
    name        : string
    description : string
    price       : number
}

export const products: Product[] = [
    {
        description : "A collection of navigational components that compose declaratively with your app.",
        id          : 1,
        name        : "React Router",
        price       : 7.99
    },
    {
        description : "A library that helps manage state across your app.",
        id          : 2,
        name        : "React Redux",
        price       : 11.99
    },
    {
        description : "A library that helps you implement robust forms.",
        id          : 3,
        name        : "React Hook Form",
        price       : 9.99
    },
    {
        description : "A library that helps you interact with a REST API.",
        id          : 4,
        name        : "React Apollo",
        price       : 10.99
    },
    {
        description : "A library that provides utility CSS.",
        id          : 5,
        name        : "Tailwind CSS",
        price       : 7.99
    }
]

