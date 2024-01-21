import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Task } from "./Task";

export const Column = ({ tasks, setTasks }) => {
  return (
    <div>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task, index) => (
          <Task
            setTasks={setTasks}
            tasks={tasks}
            index={index}
            id={task.id}
            title={task.title}
            trollies={task.trollies}
            extras={task.extras}
            key={task.id}
          />
        ))}
      </SortableContext>
    </div>
  );
};
