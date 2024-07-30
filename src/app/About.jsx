import { useContext, useState } from "react";
import MenuBar from "../components/MenuBar";
import { CounterContextConsumer } from "../services/counter/CounterContext";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const CounterContextData = useContext(CounterContextConsumer);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      Data = {CounterContextData.userName}
      {isMenuOpen === true && (
        <div
          style={{
            backgroundColor: "silver",
            width: 200,
            height: "100vh",
          }}
        >
          <MenuBar />
        </div>
      )}
      <div>
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          M
        </button>
        <h1>About Page</h1>
      </div>
    </div>
  );
}

export default App;
