const AddCoffee = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-purple-700">Add New Coffee</h1>
      <form>
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
              name="chef"
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
              name="Category"
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
              name="Details"
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
          className="btn btn-block mt-6"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
