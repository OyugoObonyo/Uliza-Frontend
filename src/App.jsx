import Header from "./components/layouts/Header";
import Main from "./components/layouts/Main";
import Footer from "./components/layouts/Footer";

export default function App() {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
