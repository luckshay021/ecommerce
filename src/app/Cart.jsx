import { useState } from "react";
import MenuBar from "../components/MenuBar";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
      }}
    >
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
        <h1>Cart Page</h1>
      </div>
    </div>
  );
}

export default App;
