import { save_file } from "../../../api/savefile.js";
const sleepHandler = (main, dispatch) => {
  let obj = { ...main };
  //time advances
  obj.time.day++;
  if (obj.time.day % 30 === 1) {
    obj.time.day = 1;
    obj.time.month++;
    if (obj.time.month % 12 === 1) {
      obj.time.month = 1;
      obj.time.year++;
    }
  }
  //you gain health and energy
  obj.player.energy[0] = obj.player.energy[1];
  obj.player.health[0] = obj.player.health[1];
  //dispatch
  dispatch(obj);
  //save game
  save_file(obj, "/api/savefile");
  save_file(obj, "/api/tempfile");
};

export default sleepHandler;
