import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";

function App() {
  return (
    <div className='bg'>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
