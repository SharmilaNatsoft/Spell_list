import { listSpells } from "./redux/reducer";
import axios from "axios";

export const getSpellsList = async () => {
  let list = [];
  let data = await axios({
    // Endpoint to send files
    url: "https://www.dnd5eapi.co/api/spells",
    method: "GET",
  });

  if (data.status == 200) {
    list = [...list, ...data.data.results];
  }
  console.log(list);
  return list;

 
};



export const getSpellsListItem = async (itemUrl) => {
  let word = {};
  let data = await axios({
    // Endpoint to send files
    url: `https://www.dnd5eapi.co${itemUrl}`,
    method: "GET",
  });
  if (data.status == 200) {
    word = {...word, ...data.data};
  }
  
  console.log(word,'word');
  return word;

 
};

