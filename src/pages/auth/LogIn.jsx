import LoginForm from "../../components/elements/forms/auth/LoginForm";
import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="bg-slate-100 h-screen flex items-center">
      <div className="flex flex-col p-2 mx-auto bg-white rounded-2xl">
        <div className="flex flex-col items-center">
          <h2 className="pt-3 text-lg">Log in</h2>
          <p className="text-sm pb-3 tracking-tighter">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-blue-600 underline">
              Sign up
            </Link>
          </p>
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
