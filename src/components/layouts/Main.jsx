import PostQuestion from "../elements/forms/question/PostQuestionForm";
import ShowQuestion from "../cards/ShowQuestion";

export default function Main() {
  return (
    <main className="flex-1 bg-slate-100">
      <div className="relative m-2 p-2 rounded-2xl bg-white">
        <PostQuestion />
      </div>
      <div className="p-2 m-2 rounded-2xl flex space-x-4 items-center bg-white">
        <ShowQuestion />
      </div>
    </main>
  );
}
