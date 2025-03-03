import { FaCheckSquare, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TodoList = ({
  key,
  data,
  checked,
  onHandleDeleteTask,
  onHandleCheckedTask,
}) => {
  return (
    <li
      key={key}
      className="bg-white rounded-xl w-[360px] px-8 py-3 flex  items-center justify-between  font-semibold"
    >
      <span className={`text-xl ${checked ? "line-through" : "no-underline"}`}>
        {data}
      </span>
      <div className="flex gap-2 items-center justify-between">
        <button id="check-btn ">
          <FaCheckSquare
            onClick={() => onHandleCheckedTask(data)}
            className="text-2xl text-[#22c55e]"
          />
        </button>
        <button id="edit-btn">
          <FaEdit className="text-2xl text-[#002E55]" />
        </button>
        <button id="delete-btn">
          <MdDelete
            onClick={() => onHandleDeleteTask(data)}
            className="text-2xl text-red-600"
          />
        </button>
      </div>
    </li>
  );
};
