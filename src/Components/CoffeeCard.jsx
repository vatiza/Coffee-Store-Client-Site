import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {
    _id,
    name,
    quantity,
    chefname,
    supplier,
    category,
    details,
    photourl,
  } = coffee;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
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
            <button className="btn join-item">
              <FaEye className="w-6"></FaEye>
            </button>
            <button className="btn join-item">
              <Link to={`/updateCoffee/${_id}`}>
                <CiEdit></CiEdit>
              </Link>
            </button>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn join-item bg-red-600 hover:bg-red-800  "
            >
              <MdDelete></MdDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
