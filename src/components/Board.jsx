import React, { useContext } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckIcon from '@mui/icons-material/Check';
import { MainContext } from '../context/ContextProvider';

const Board = () => {
    const { todos, setTodos } = useContext(MainContext)

    const deleteTodo = (index) => {
        alert("index of todo:" + index)
        const newList = todos;
        newList.splice(index, 1)
        setTodos([...newList])
    }
    return (
        <div >
            {todos.map((t, index) => (
                <div className='todo-row'>
                    <li style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }} key={index}>{t} <div ><CloseRoundedIcon onClick={() => deleteTodo(index)} /> <CheckIcon /></div></li>
                </div>
            ))}
        </div>
    )
}

export default Board