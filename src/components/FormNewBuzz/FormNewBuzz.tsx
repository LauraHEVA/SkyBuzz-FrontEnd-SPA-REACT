const FormNewBuzz = (): JSX.Element => {
  return (
    <>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Options
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
    </>
  );
};

export default FormNewBuzz;
