import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="m-20">
      <h1 className="text-center font-bold text-6xl text-purple-700">
        Coffe Store {coffees.length}
      </h1>
     <div className="grid md:grid-cols-2 gap-4 mt-5">
     {
        coffees.map(coffee=><CoffeeCard key={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
      }
     </div>
      {/* <div className="text-center m-5">
        <Link className="btn btn-outline me-5" to="/addCoffee">
          Add New Coffee
        </Link>
        <Link className="btn btn-outline" to="/updateCoffee">
      

          Update Coffee
        </Link>
      </div> */}
    </div>
  );
}

export default App;
