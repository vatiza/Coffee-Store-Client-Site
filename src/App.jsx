import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center font-bold text-6xl text-purple-700">
        Coffe Store
      </h1>
     <div className="text-center m-5">
     <Link className="btn btn-outline me-5" to="/addCoffee">
        Add New Coffee
      </Link>
      <Link className="btn btn-outline" to="/updateCoffee">
        Update Coffee
      </Link>
     </div>
    </>
  );
}

export default App;
