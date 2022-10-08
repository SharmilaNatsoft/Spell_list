import React, { useState } from "react";
import { connect } from "react-redux";
import "../App.css";
import DetailedList from "./DetailedList";
import { getSpellsListItem } from "../Apicalls";
import { DetailedSpell } from "../redux/reducer";

function Listitems(props) {
  console.log("kdnnck", props);
  let list = [];
  if (props?.listType?.label && props.listType.label === "All") {
    list = props?.SpellsList || [];
  } else {
    list = props?.favList || [];
  }

  const [item, setItem] = useState({});
  //   const openListItem = async(item)=>{
  //    props.DetailedSpellsAction(await getSpellsListItem(item.url))
  //     setItem(await getSpellsListItem(item.url))
  //   }

  return (
    <div>
      <div className="flex-container">
        {(list || []).map((item) => {
          return (
            <div key={item.index}>
              <DetailedList name={item.name} itemurl={item.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    SpellsList: state.list,
    listType: state.listType,
    favList: state.favList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    DetailedSpellsAction: (obj) => dispatch(DetailedSpell(obj)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Listitems);
