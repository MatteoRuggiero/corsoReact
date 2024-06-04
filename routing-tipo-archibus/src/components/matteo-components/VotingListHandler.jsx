import { useState } from "react";

export default function VotingListHandler(props) {
  const [label, setLabel] = useState("");

  const handleUpdateLabel = (e) => setLabel(e.target.value);

  const handleClick = () => {
    const person = createRow(label);
    props.handleAddRow(person);
    setLabel("");
  };

  const handleClickDel = () => {
    props.handleRemoveRow(label);
    setLabel("");
  };
  
  function createRow(label) {
    return {
      id: Math.floor(Math.random * 100000),
      label: label,
      votes: 1,
    };
  }

  return (
    <>

      <div class="input-group">

        <input
          placeholder="Please insert the name"
          type="text"
          value={label}
          onChange={handleUpdateLabel}
          className="form-control"
        />
        <button onClick={handleClick} className="btn btn-primary">Add person</button>
        <button onClick={handleClickDel} className="btn btn-danger">Delete person</button>
      </div>
    </>
  );
}
