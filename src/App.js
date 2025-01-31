
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" about="about us" />

      <div className="container my-3">
        <TextForm heading="Enter the Text to analyze below" />
        <About/>
      </div>
    </>
  );
}

export default App;
