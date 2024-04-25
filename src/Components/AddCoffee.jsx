import useTitle from "./UseHooks";
import Swal from "sweetalert2";
const AddCoffee = () => {
  useTitle("Add New Coffee");
  const handleAddNewCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const chefname = form.chefname.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const newCoffee = {
      name,
      quantity,
      chefname,
      supplier,
      category,
      details,
      photourl,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Succefully Add New Coffee",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset();
      });
  };
  return (
    <div>
      <h1 className="text-center text-3xl text-purple-700">Add New Coffee</h1>
      <form onSubmit={handleAddNewCoffee}>
        {/*! row */}
        <div className="md:flex ms-12 me-12">
          <div className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text text-xl">Coffee Name</span>
            </div>
            <input
              name="name"
              type="text"
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
            placeholder="Photo Url"
            className="input input-bordered w-full"
          />
        </div>
        <input
          className="btn btn-outline  ms-14 m-4 w-11/12"
          type="submit"
          value="Add New Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
