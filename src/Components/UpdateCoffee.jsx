import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
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

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const chefname = form.chefname.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const updateCoffeeValue = {
      name,
      quantity,
      chefname,
      supplier,
      category,
      details,
      photourl,
    };
    console.log(updateCoffeeValue);
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffeeValue),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount>0) {
          Swal.fire({
            title: "Success!",
            text: "Succefully Update  Coffee",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-purple-700">
        Update Coffee on <span className="text-orange-700">{name}</span>
      </h1>
      <form onSubmit={handleUpdateCoffee}>
        {/*! row */}
        <div className="md:flex ms-12 me-12">
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl">Coffee Name</span>
            </div>
            <input
              name="name"
              type="text"
              defaultValue={name}
              placeholder="Coffee Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text text-xl">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Available Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/*! row */}
        <div className="md:flex ms-12 me-12">
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl">Chef Name</span>
            </div>
            <input
              name="chefname"
              type="text"
              defaultValue={chefname}
              placeholder="Chef Name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text text-xl">Supplier Name</span>
            </div>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              placeholder="Supplier Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/*! row */}
        <div className="md:flex ms-12 me-12">
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl">Category</span>
            </div>
            <input
              name="category"
              type="text"
              defaultValue={category}
              placeholder="Category"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <div className="label">
              <span className="label-text text-xl">Details</span>
            </div>
            <input
              type="text"
              name="details"
              defaultValue={details}
              placeholder="Details"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="form-control ms-12 me-12">
          <div className="label">
            <span className="label-text text-xl">Photo Url</span>
          </div>
          <input
            type="text"
            name="photourl"
            defaultValue={photourl}
            placeholder="Photo Url"
            className="input input-bordered w-full"
          />
        </div>
        <input
          className="btn btn-outline  ms-14 m-4 w-11/12"
          type="submit"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
