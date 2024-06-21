import Todo from "../models/todo";
import classes from '../NewTodo.module.css';

const TodoItem: React.FC<{ item: Todo }> = (props) => {
    return <li key={props.item.id}>{props.item.text}</li>
}

export default TodoItem;