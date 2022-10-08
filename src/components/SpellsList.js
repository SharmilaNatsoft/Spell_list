import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { getSpellsList } from '../Apicalls';
import { connect } from "react-redux";
import Listitems from './Listitems';
import {
    listSpells
  } from "../redux/reducer";

  function SpellsList(props) {

  useEffect(async()=>{
  props.listSpellsAction(await getSpellsList())  
    // listSpells([]) 
  },[]) 



  return (
    <div>
      <Listitems/>
    </div>

  )
}

const mapDispatchToProps = (dispatch) => {
  return {
      listSpellsAction:(obj) => dispatch(listSpells(obj))
    
  };
};


export default connect(null, mapDispatchToProps)(SpellsList) ;
