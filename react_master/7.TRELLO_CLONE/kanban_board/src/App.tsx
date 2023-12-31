import React from 'react';
import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {toDoState} from "./atoms";
import DraggableCard from "./Components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({draggableId,destination, source}: DropResult) => {
    if (!destination) return;

    setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      // 1) Delete item on source.index
      console.log("Delete item on", source.index);
      console.log(toDosCopy);
      toDosCopy.splice(source.index, 1);
      console.log("Put back", draggableId, "on ", destination.index);
      // 2) Put back the item on the destination.index
      toDosCopy.splice(destination?.index, 0, draggableId);
      console.log(toDosCopy);
      return toDosCopy;
    });
  };
  // @ts-ignore
  return (
      <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
      <Droppable droppableId="one">
        {(provided) => (
            <Board ref={provided.innerRef} {...provided.droppableProps}>
              {toDos.map((toDo, index) => (
                  <DraggableCard key={toDo} toDo={toDo} index={index}/>
              ))}
              {provided.placeholder}
            </Board>
        )}
      </Droppable>
      </Boards>
    </Wrapper>
  </DragDropContext>
);

}

export default App;
