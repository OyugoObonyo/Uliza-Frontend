import { MdAddCircleOutline } from "react-icons/md";

export default function PostQuestion() {
  return (
    <form className="flex flex-col space-y-1">
      <input
        type="text"
        placeholder="Title..."
        name="title"
        className="border-b focus:outline-none"
      />
      <input
        type="text"
        placeholder="Body..."
        name="body"
        className="focus:outline-none rows"
      />
      <button className="">
        <MdAddCircleOutline className="absolute bottom-0 right-0 h-8 w-8 p-1" />
      </button>
    </form>
  );
}
