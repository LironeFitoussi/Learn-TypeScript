import { useRef } from "react";
// interface NewTodoProps {
//     onAddTodo: (text: string) => void;
// }

interface NewTodoProps {
    onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        // console.log(enteredText);
        onAddTodo?.(enteredText);
        // onAddTodo(text);
    }


    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setText(event.target.value);
    // }


    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id="todo-text" ref={textInputRef}/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default NewTodo;