import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="shadow-md p-[10px]">
      <div>
        <h2>Ul!za</h2>
      </div>
      <div>
        <input type="text" className="border-b-2 focus:outline-none" />
        <span className="">
          <FaSearch />
        </span>
      </div>
      <div></div>
    </nav>
  );
}
