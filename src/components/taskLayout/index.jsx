import React from "react";
import "./index.css";
import LayoutHeading from "../layoutHeading";
import TaskCard from "../taskCard";
import { Droppable, Draggable } from "react-beautiful-dnd";

const TaskLayouts = ({ title, data }) => {
  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <div
          className="TaskLayoutContainner"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          <LayoutHeading title={title} />
          {data &&
            data.map((ele, index) => (
              <Draggable key={ele._id} draggableId={ele._id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard info={ele} />
                  </div>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskLayouts;
