import Todo from "../models/todo";
import TodoItem from "./Todo";
import classes from '../Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
    return <ul className={classes.todos}>
        {props.items.map(item => <TodoItem onRemoveTodo={props.onRemoveTodo} item={item} />)}
    </ul>
}

export default Todos;