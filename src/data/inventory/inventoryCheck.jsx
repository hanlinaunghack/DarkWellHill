const inventoryCheck = (playerInventory, reqItems) => {
  //checks to see if you have the required tool to perform a task
  for (let i = 0; i < reqItems.length; i++) {
    let temp = playerInventory.filter(e => {
      return e.name === reqItems[i].name;
    });
    if (temp.length === 0) {
      alert(`You need ${temp[i].name} to perform this task!`);
      return false;
    }
  }
  return true;
};

export default inventoryCheck;
