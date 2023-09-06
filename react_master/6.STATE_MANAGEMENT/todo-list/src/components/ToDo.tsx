import {IToDo, toDoState} from "../atoms";
import {useSetRecoilState} from "recoil";

// replace element of array
// 방법 1
// const food = ["🍔", "🍕", "🍟", "🌭", "🍿"];
// const front = ["🍔"];
// const back = [ "🍟", "🌭", "🍿"];
// const finalPart = [...food, "감", ...back];

// 방법 2
// const food = ["🍔", "🍕", "🍟", "🌭", "🍿"];
// const target = 1;
// const finalPart = [...food.slice(0, target), "감", ...food.slice(target + 1)];


// "To_do" | "Doing" | "Done";
function Todo({text, category, id}: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget: { name },} = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = {text, id, category:name as any};
            return [...oldToDos.slice(0, targetIndex), newToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };

    return (
        <li>
            <span>{text}</span>
            {category !== "To_do" && (
                <button name="To_do" onClick={onClick}>
                    To do
                </button>
            )}
            {category !== "Doing" && (
                <button name="Doing" onClick={onClick}>
                    Doing
                </button>
            )}
            {category !== "Done" && (
                <button name="Done" onClick={onClick}>
                    Done
                </button>
            )}
        </li>

    );
}

export default Todo;