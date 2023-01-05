import React, { useContext } from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckIcon from '@mui/icons-material/Check';
import { MainContext } from '../context/ContextProvider';

const Board = () => {
    const { todos } = useContext(MainContext)
    return (
        <div >
            {todos.map((t, index) => (
                <div className='todo-row'>
                    <li style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }} key={index}>{t} <div><CloseRoundedIcon /> <CheckIcon /></div></li>

                </div>
            ))}
        </div>
    )
}

export default Board