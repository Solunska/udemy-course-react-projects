import Todo from "../models/todo";
import TodoItem from "./Todo";
import classes from '../Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return <ul>
        {props.items.map(item => <TodoItem item={item} />)}
    </ul>
}

export default Todos;