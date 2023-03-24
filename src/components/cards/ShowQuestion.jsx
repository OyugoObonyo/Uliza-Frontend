import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import IconBar from "../question/IconBar";

export default function ShowQuestion() {
  return (
    <>
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
      </div>
      <IconBar />
    </>
  );
}
