import React from 'react'
import TodoList from './TodoList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Todo from './Todo'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" children={<TodoList />} />
                <Route path="/todos/:id" children={<Todo />} />
            </Switch>
        </Router>
    )
}

export default App
