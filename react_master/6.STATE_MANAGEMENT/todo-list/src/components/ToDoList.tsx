import {useRecoilState, useRecoilValue} from "recoil";
import {categoryState, toDoSelector, toDoState} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList(){
    const toDos= useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);

    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value);
    }

    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                <option value="To_do">To do</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => (
                <ToDo key={toDo.id} {...toDo} />
            ))}
        </div>
    );
}

export default ToDoList;