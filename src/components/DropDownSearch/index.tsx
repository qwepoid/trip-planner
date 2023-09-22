const DropDownSearch = () => {
  return (
    <div className="flex justify-between border">
      <div className="flex gap-20 justify-around">
        <select className="w-40 border">
          <option value="">Op1</option>
        </select>
        <select className="w-40 border">
          <option value="">Op1</option>
        </select>
        <select className="w-40 border">
          <option value="">Op1</option>
        </select>
      </div>
      <div>
        <button>SEARCH</button>
      </div>
    </div>
  );
};

export default DropDownSearch;
