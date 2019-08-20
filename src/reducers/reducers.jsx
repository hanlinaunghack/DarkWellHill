import InitialState from "../data/initialstate.jsx";

const reducers = (state = InitialState, action) => {
  switch (action.type) {
    case "SAVE_PLAYER":
      var obj = { ...state.main };
      obj.player.name = action.data.name;
      obj.player.gender = action.data.gender;
      return {
        ...state,
        main: obj
      };

    default:
      return state;
  }
};

export default reducers;
