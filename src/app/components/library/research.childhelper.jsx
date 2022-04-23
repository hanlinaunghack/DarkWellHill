export const rootContainer = {
  display: "flex",
  width: "100%",
  height: "auto",
};
export const getTextClass = (child) => {
  if (child.isResearched) return "research-active";
  if (!child.isUnlocked) {
    return "research-disabled";
  } else {
    return "research-available";
  }
};
export const getDynamicWidth = (length) => {
  return {
    textAlign: "center",
    width: length + "%",
  };
};
export const childClickHandler = (event, child, researchItemClickHandler) => {
  researchItemClickHandler(event, child);
};
