import React, { useEffect } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { listSpellsType } from "../redux/reducer";
import "../App.css";

const Lists = (props) => {
  const listOptions = [
    { label: "All", value: 1 },
    { label: "Favourites", value: 2 },
  ];
  const handleChange = (option) => {
    props.listSpellsTypeAction(option);
  };
  useEffect(() => {
    props.listSpellsTypeAction(listOptions[0]);
  }, []);

  return (
    <div className="selectdiv">
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={listOptions[0]}
        name="color"
        onChange={handleChange}
        options={listOptions}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    listSpellsTypeAction: (obj) => dispatch(listSpellsType(obj)),
  };
};

//we can use connect method to connect this component with redux store
export default connect(null, mapDispatchToProps)(Lists);
