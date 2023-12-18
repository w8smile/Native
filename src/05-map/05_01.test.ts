import {createGreetingMessage, ManType} from "./05_01";

let people: Array<ManType> = [
    {name: "Serg Nakovnick", age: 29},
    {name: "Alex White", age: 31},
    {name: "Kris Podl", age: 25},
]

beforeEach( ()=> {

})

test('should get array of greeting', ()=> {
    const messages = createGreetingMessage(people);
    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Serg. Welcome to IT')
    expect(messages[1]).toBe('Hello Alex. Welcome to IT')
    expect(messages[2]).toBe('Hello Kris. Welcome to IT')
})

