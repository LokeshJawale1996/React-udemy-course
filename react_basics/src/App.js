import "./App.css";
import Nested1 from "./components/nestedComponents/Nested1";
import MobileList from "./components/mobileShop/MobileList";
import MobileListWithJs from "./components/mobileShop/MobileListWithJs";

function App() {
  return (
    <div className="App">
      {/* 1) Nested Components */}
      <Nested1 />
      <MobileList />
      <MobileListWithJs />
    </div>
  );
}

export default App;
