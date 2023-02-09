import './App.css';
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import WhatsApp from './components/WhatsApp';

function App() {



  return (
    <div className='bg'>
      <RouterProvider router={routes} />
      <WhatsApp />
    </div>
  );
}

export default App;
