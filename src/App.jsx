import { Link } from "react-router-dom";
import "./App.css";

function App() {
 return (
  <>
   <div>
    <p>
     <Link to="/contact">Contact</Link>
    </p>
   </div>
   <h1>Vite + React</h1>
   <div className="card">
    <p>
     Choo Choo! This is an example of a Vite + React app running on Railway.
    </p>
   </div>
  </>
 );
}

export default App;
