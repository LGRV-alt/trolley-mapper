import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Task = ({
  id,
  tasks,
  setTasks,
  title,
  extras,
  trollies,
  index,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  function handleDel(index) {
    const newList = tasks.filter((item) => tasks.indexOf(item) !== index);
    setTasks(newList);
  }

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
      <div
        onClick={() => console.log(title)}
        className="  w-full h-11 lg:h-11 grid grid-rows-1 grid-cols-[3fr_1fr] border-b-2 "
      >
        <div className="flex flex-row lg:gap-1 ">
          <button
            onClick={() => handleDel(index)}
            className="w-6 flex items-center justify-center text-sm lg:text-lg text-transparent dark:text-red-600  hover:text-white hover:rounded-full "
          >
            X
          </button>
          <h3 className="flex lg:text-lg   items-center sm:text-base  hover:text-blue-500 hover:cursor-pointer">
            {index + 1} - {title}
          </h3>
        </div>

        <div className="flex flex-row gap-2 w-full">
          {trollies ? (
            <p className="text-red-500 flex justify-center items-center  ">
              {" "}
              {trollies}T
            </p>
          ) : null}
          <p className="text-amber-600 flex items-center">{extras}</p>
        </div>
      </div>
    </div>
  );
};
