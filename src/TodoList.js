import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TodoCard from './TodoCard'
import './todo.css'
import { CircularProgress } from '@material-ui/core'

const TodoList = () => {
    const [todos, setTodos] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                const todos = res.data
                setTodos(todos)
            })
    }, [])

    console.log(todos)

    return (
        <div className="todos">
            {
                todos ? (
                    todos.slice(0, 10).map(todo => (
                        <TodoCard key={todo.id} {...todo} />
                    ))
                ) : (
                    <CircularProgress />
                )
            }

        </div>
    )
}

export default TodoList
