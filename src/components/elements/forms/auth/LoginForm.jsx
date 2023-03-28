import { MdOutlineArrowForward } from "react-icons/md";

export default function LoginForm() {
  return (
    <form>
      <form className="flex flex-col space-y-2">
        <input
          className="border rounded-lg p-1 bg-gray-100 focus:outline-none"
          type="email"
          placeholder="E-mail"
          name="email"
        />
        <input
          className="border rounded-lg p-1 bg-gray-100 focus:outline-none"
          type="password"
          placeholder="Password"
          name="password"
        />
        <div className="bg-blue-600 text-white p-1 rounded-lg flex items-center">
          <p className="mx-auto">Log In</p>
          <MdOutlineArrowForward />
        </div>
      </form>
    </form>
  );
}
