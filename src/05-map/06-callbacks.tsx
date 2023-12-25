import React, {ChangeEvent,MouseEvent} from 'react';


// const callback = (): number => {
//     alert('hey')
//     return 12;
// };

// window.setTimeout(callback, 1000)


export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const onNameChanged = () => {
        alert('NAME CHANGED')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        alert('AGE CHANGED' +event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return (
        <div><textarea
            onChange={onNameChanged}
            onBlur={focusLostHandler}>Dimych</textarea>
            <input onChange={onAgeChanged}/>
            <button name='delete' onClick={deleteUser}>delete</button>
        </div>
    )
}