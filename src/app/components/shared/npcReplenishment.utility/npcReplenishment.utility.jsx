import Character from "../../../../data/dataDef/character.jsx";
import { getRandomNumber } from "../../../api/utility.js";
import { Field } from "../../../../data/dataDef/field.jsx";
import { npcReplenishmentFormula } from "../../../../data/dataDef/npcReplenishment.jsx";

//accepts npcData Object
export const npcReplenishment = (npcData) => {
  let Joe = new Character(npcData.Joe);
  let Cole = new Character(npcData.Cole);
  npcReplenishmentFormula.Joe(Joe); //For JOE
  npcReplenishmentFormula.Cole(Cole); //For COLE
  return { ...npcData, Joe, Cole };
};

//accepts forestData object this.props.main.forestData
export const forestReplenishment = (forestData) => {
  let { mines, pond, fields } = forestData;
  let newFields = fields.map((e, i) => {
    let item = new Field(e);
    item.regenerateField(getRandomNumber(9, 21));
    return item;
  });
  return { mines, pond, fields: newFields };
};
