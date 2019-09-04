const timeCheck = (timeLimit, currentTime) => {
  if (currentTime > timeLimit) return false;
  return true;
};

export default timeCheck;
