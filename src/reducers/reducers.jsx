import InitialState from "../data/initialstate.jsx";

const reducers = (state = InitialState, action) => {
  switch (action.type) {
    case "SAVE_STATE":
      return { ...state, main: action.data };
    case "SAVE_PLAYER":
      return {
        ...state,
        main: {
          ...state.main,
          player: action.data,
        },
      };
    case "SAVE_FARM":
      return {
        ...state,
        main: {
          ...state.main,
          farm: action.farm,
        },
      };
    case "SAVE_EVENTLIST":
      return {
        ...state,
        main: {
          ...state.main,
          eventList: action.data,
        },
      };
    case "SAVE_UNLOCKABLES":
      return { ...state, main: { ...state.main, unlockables: action.data } };
    case "SAVE_RESEARCHTREE":
      return {
        ...state,
        main: {
          ...state.main,
          unlockables: { ...state.main.unlockables, researchTree: action.data },
        },
      };
    case "UPDATE_INVENTORY":
      let inventory =
        action.data.items && action.data.items.length
          ? [...action.data.items]
          : action.data;
      return {
        ...state,
        main: {
          ...state.main,
          player: { ...state.main.player, inventory },
        },
      };
    case "UPDATE_NPC":
      return {
        ...state,
        main: {
          ...state.main,
          npcData: {
            ...state.main.npcData,
            [action.data.name]: action.data.npc,
          },
        },
      };
    case "UPDATE_VILLAGE":
      return { ...state, main: { ...state.main, villageData: action.data } };
    case "UPDATE_CALENDAR":
      return { ...state, main: { ...state.main, time: action.data } };
    default:
      return state;
  }
};

export default reducers;
