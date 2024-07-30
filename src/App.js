import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./infrastructure/Root";
import "./App.css";

import { CounterContextProvider } from "./services/counter/CounterContext";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

function App() {
  return (
    <CounterContextProvider>
      <RouterProvider router={router} />
    </CounterContextProvider>
  );
}

export default App;
