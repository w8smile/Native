export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Serg Nakovnick", age: 29},
    {name: "Alex White", age: 31},
    {name: "Kris Podl", age: 25},
]

const dimychTransformator = (man: ManType) => ({
        stack: ['css, html', 'js', 'tdd,', 'react'],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ['css, html', 'js', 'tdd,', 'react'],
        firstName: "Serg", lastName: "Nakovnick"
    },
    {
        stack: ['css, html', 'js', 'tdd,', 'react'],
        firstName: "Alex", lastName: "White"
    },
    {
        stack: ['css, html', 'js', 'tdd,', 'react'],
        firstName: "Kris", lastName: "Podl"
    }
]
const dev2 =
    dimychTransformator(people[0]);
    dimychTransformator(people[1]);
    dimychTransformator(people[2])

const dev3 = people.map(dimychTransformator)
const dev4 = people.map(man => ({
    stack: ['css, html', 'js', 'tdd,', 'react'],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map ( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT`)
export const createGreetingMessage = (people: Array<ManType>) => {
    return people.map ( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT`)
}