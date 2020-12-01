import React, { useState } from "react";

function ComA() {
  const [state, setstate] = useState({
    toggal: false,
  });

  const changeHandler1 = () => {
    setstate({
      toggal: true,
    });
  };
  const changeHandler2 = () => {
    setstate({
      toggal: false,
    });
  };

  return (
    <div>
      <lable>Address1</lable>
      <input type="text" value="" /> <br />

      <lable>Address2</lable>
      <input type="text" /> <br />

      {state.toggal && (
        <>
          <lable>Address3</lable>
          <input type="text" />
          <br />
        </>
      )}

      <lable>State</lable>
      <input type="text" /> <br />

      <lable>City</lable>
      <input type="text" /> <br />
      
      {!state.toggal && (
        <button type="submit" onClick={changeHandler1}>
          Submit
        </button>
      )}
      {state.toggal && (
        <button type="submit" onClick={changeHandler2}>
          Change
        </button>
      )}
    </div>
  );
}

export default ComA;
