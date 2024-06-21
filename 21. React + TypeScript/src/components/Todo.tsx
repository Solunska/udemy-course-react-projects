import Todo from "../models/todo";
import classes from '../TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo; onRemoveTodo: (id: string) => void }> = (props) => {

    return <li key={props.item.id} className={classes.item} onClick={() => props.onRemoveTodo(props.item.id)}>{props.item.text}</li>
}

export default TodoItem;