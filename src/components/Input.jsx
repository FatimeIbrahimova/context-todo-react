import { TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { MainContext } from '../context/ContextProvider'

const Input = () => {
    const { todos, setTodos } = useContext(MainContext)
    const [value, setValue] = useState("")

    function handleChange(e) {
        setValue(e.target.value)
        console.log(value);
    }
    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, value]);
        setValue("");
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <TextField onChange={(e) => handleChange(e)} id="outlined-basic" label="add a todo" variant="outlined" value={value} />
                <button style={{ backgroundColor: "blue", color: "white", border: "none", height: 40, marginTop: 8, marginLeft: 5 }}>Add Todo</button>
            </form>
        </div>
    )
}

export default Input