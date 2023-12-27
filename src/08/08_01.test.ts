type UserType = {
    [key: string]: { id: string, name: string }
}

let users: UserType =

beforeEach( ()=> {
    users ={
        '1': {id: '10', name: 'Cristian'},
        '2': {id: '20', name: 'david'},
        '3': {id: '30', name: 'joe'},
        '4': {id: '40', name: 'tom'},
        '5': {id: '50', name: 'qwe'},
        '6': {id: '60', name: 'op'},
        '7': {id: '70', name: 'name'},
        '8': {id: '80', name: 'guy'},
    }
})

test ('update user 8', ()=> {
    users['8'].name='qq'

    expect(users['8']).toEqual({id: '80', name: 'qq'})
})

test ('delete user 7', ()=> {
    delete users['7']

    expect(users['7']).toBe(undefined)
})