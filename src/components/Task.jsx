import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Task = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      className="touch-none"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      key={id}
    >
      {title}
    </div>
  );
};
