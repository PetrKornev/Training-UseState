import { useState } from "react";


const User = () => {
    const [user, setUser] = useState({
        name: "Иван",
        age: 25,
        isActive: true,
    });
    const changeName = () => {
        setUser((oldUser) => ({ ...oldUser, name: 'Пётр' }))
    }
    const changeAge = () => {
        setUser((oldUser) => ({ ...oldUser, age: oldUser.age + 1 }))
    }
    const changeActivity = () => {
        setUser((oldUser) => ({ ...oldUser, isActive: !oldUser.isActive }))
    }

    return <>

        <h1>Профиль пользователя</h1>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Активен: {user.isActive ? 'Да' : 'Нет'}</p>
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={changeAge}>Увеличить возраст</button>
        <button onClick={changeActivity}>Переключить активность</button>

    </>
}



export default User