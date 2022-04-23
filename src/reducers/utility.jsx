export const mapStateToProps = (state) => {
  return state;
};
export const mapDispatchToProps = (dispatch) => {
  return {
    saveState: (data) => dispatch({ type: "SAVE_STATE", data }),
    savePlayer: (data) => dispatch({ type: "SAVE_PLAYER", data }),
    saveEventList: (data) => dispatch({ type: "SAVE_EVENTLIST", data }),
    saveUnlockable: (data) => dispatch({ type: "SAVE_UNLOCKABLES", data }),
    saveResearchTree: (data) => dispatch({ type: "SAVE_RESEARCHTREE", data }),
    updateCalendar: (data) => dispatch({ type: "UPDATE_CALENDAR", data }),
    updateInventory: (data) => dispatch({ type: "UPDATE_INVENTORY", data }),
    updateNpc: (data) => dispatch({ type: "UPDATE_NPC", data }),
    updateVillage: (data) => dispatch({ type: "UPDATE_VILLAGE", data }),
  };
};
