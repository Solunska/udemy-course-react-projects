import { useRef } from "react";
import classes from '../NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const textInput = useRef<HTMLInputElement>(null);

    function submitHandler(event: React.FormEvent) {
        event.preventDefault();

        const enteredText = textInput.current!.value;

        if (enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="text">Todo text</label>
        <input type="text" id="text" ref={textInput} />
        <button>Add Todo</button>
    </form>
}

export default NewTodo;