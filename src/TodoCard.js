import { useHistory } from 'react-router'
import './todo.css'

const TodoCard = ({id, title, completed}) => {
    const history = useHistory()
    return (
        <div className="todo-card" onClick={() => history.push(`todos/${id}`)}>
            
            <h3>title: {title}</h3>
            <h6>{`completed: ${completed}`}</h6>
        </div>
    )
}

export default TodoCard
