import { Link } from "react-router-dom";
import SignUpForm from "../../components/elements/forms/auth/SignUpForm";

export default function SignUp() {
  return (
    <div className="bg-slate-100 h-screen flex items-center">
      <div className="flex flex-col p-2 mx-auto bg-white rounded-2xl">
        <div className="flex flex-col items-center">
          <h2 className="pt-3 text-lg">Create account</h2>
          <p className="text-sm pb-3 tracking-tighter">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 underline">
              Sign in
            </Link>
          </p>
        </div>
        <div>
          <SignUpForm />
        </div>
      </div>
    </div>
  );
}
