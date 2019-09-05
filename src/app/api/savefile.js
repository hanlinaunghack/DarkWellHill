import { FieldObject } from "../../data/field/fieldData.jsx";
import { Character } from "../../data/npcCharacters/npcCharacters.jsx";
import Item from "../../data/inventory/item.jsx";
export const save_file = (data, url) => {
  fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response)
    .catch(err => console.log(err));
};

export const load_file = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(err => err);
};

export const delete_file = url => {
  return fetch(url)
    .then(response => response.text())
    .then(data => data)
    .catch(err => err);
};

export const load_parse = data => {
  data = JSON.parse(data);
  data.fields = data.fields.map((e, i) => new FieldObject(e, i));
  data.player.inventory = data.player.inventory.map((e, i) => new Item(e));
  for (let npcType in data.npc) {
    var typeOfNpc = data.npc[npcType];
    //parse each character
    for (let npc in typeOfNpc) {
      typeOfNpc[npc] = new Character(typeOfNpc[npc]);
      //parse their inventory
      typeOfNpc[npc].parseInventory();
    }
  }
  return data;
};
