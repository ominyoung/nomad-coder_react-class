import {atom, selector} from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "To_do" | "Doing" | "Done";
}

export const categoryState = atom({
    key: "category",
    default: "To_do",
})

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category);
    }
});