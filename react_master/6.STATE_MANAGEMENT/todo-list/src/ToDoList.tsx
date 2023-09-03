import {useState} from "react";

function ToDoList() {
    const [toDo, setToDo] = useState("");
    const [toDoError, setToDoError] = useState(""); // [value, setter
    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {currentTarget:{value},} = event;
        setToDo(value);
        setToDoError("");
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo.length < 10){
            return setToDoError("Too short");
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} placeholder="Write to do" />
                <button>Add</button>
            </form>
            <span>{toDoError !== "" ? toDoError : null}</span>
        </div>
    );
}

export default ToDoList;