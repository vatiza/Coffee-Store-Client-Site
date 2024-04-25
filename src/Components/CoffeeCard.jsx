import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, quantity, chefname, supplier, category, details, photourl } =
    coffee;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photourl} alt="coffee" />
      </figure>
      <div className="flex justify-between w-full">
        <div>
          <h2 className="card-title">Name : {name}</h2>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Category : {category}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-3">
            <button className="btn join-item"><FaEye className="w-6"></FaEye></button>
            <button className="btn join-item"><CiEdit></CiEdit></button>
            <button className="btn join-item"><MdDelete></MdDelete></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
