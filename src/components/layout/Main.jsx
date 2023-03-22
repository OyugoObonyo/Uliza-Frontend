import {
  MdAddCircleOutline,
  MdBookmarkBorder,
  MdChatBubbleOutline,
  MdMoreHoriz,
  MdIosShare,
} from "react-icons/md";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

export default function Main() {
  return (
    <main className="flex-1 bg-slate-100">
      <div>
        <div className="relative m-2 p-2 rounded-2xl bg-white">
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
        </div>
      </div>
      <div>
        <div className="p-2 m-2 rounded-2xl flex space-x-2 items-center bg-white">
          <div className="flex flex-col space-y-2 items-center">
            <button>
              <SlArrowUp />
            </button>
            <p className="text">10k</p>
            <button>
              <SlArrowDown />
            </button>
          </div>
          <div className="flex flex-col space-y-2 ">
            <div>
              <h2>This is the question title</h2>
            </div>
            <div>
              <p>
                QUESION BODY Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore sunt dolore quibusdam minus sed dolores? Doloribus
                sunt exercitationem animi autem voluptates nostrum deleniti
                suscipit! Harum ullam sit consequatur eligendi excepturi!
              </p>
            </div>
            <div className="flex items-center justify-center border-t p-1">
              <div className="w-1/4 flex space-x-1 items-center justify-center">
                <MdChatBubbleOutline className="w-5 h-5" />
                <span className="text-xs">56,789</span>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <MdBookmarkBorder className="w-5 h-5" />
              </div>
              <div className="w-1/4 flex justify-center">
                <MdIosShare className="w-5 h-5" />
              </div>
              <div className="w-1/4 flex justify-center">
                <MdMoreHoriz className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
