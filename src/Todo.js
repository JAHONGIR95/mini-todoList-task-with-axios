import { CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const Todo = () => {
    const [singleTodo, setSingleTodo] = useState()
    const { id: todoId } = useParams()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
            .then(res => {
                const todo = res.data
                setSingleTodo(todo)
            })
    }, [])

    console.log(singleTodo)
    return (
        <div>
            {
                singleTodo ? (
                    <div>
                        <h3>todo id: {singleTodo.id}</h3>
                        <h3>todo user id: {singleTodo.userId}</h3>
                        <h2>todo title: {singleTodo.title}</h2>
                        <h5>{`todo completed: ${singleTodo.completed}`}</h5>
                    </div>
                ) : (
                    <CircularProgress className="loader" />
                )
            }
        </div>
    )
}

export default Todo
