import { MdAddCircleOutline } from "react-icons/md";

export default function Main() {
  return (
    <main className="flex-1">
      <div>
        <div className="relative p-2 m-2 border-2 rounded-2xl">
          <form className="flex flex-col items-center space-y-1">
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
        </div>
      </div>
    </main>
  );
}
