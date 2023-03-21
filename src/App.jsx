import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className=" flex flex-col h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
