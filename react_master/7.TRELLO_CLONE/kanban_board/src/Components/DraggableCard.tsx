import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
  margin-bottom: 5px;
`;

function DraggableCard({toDo, index}: {toDo: string; index: number}) {
  console.log(toDo, "has been rendered");
    return (
      <Draggable key={index} draggableId={toDo} index={index}>
        {(provided) => (
            <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
              {toDo}
            </Card>
        )}
      </Draggable>
  );
}

export default React.memo(DraggableCard);