const toggleInventory = function(state) {
  let obj = { ...state };
  obj.openInventory = !obj.openInventory;
  return obj;
};
export default toggleInventory;
