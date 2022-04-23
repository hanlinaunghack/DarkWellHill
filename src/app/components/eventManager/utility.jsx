export const on = (eventType, listener) => {
  document.addEventListener(eventType, listener);
};
export const off = (eventType, listener) => {
  document.removeEventListener(eventType, listener);
};
export const trigger = (eventType, data) => {
  const event = new CustomEvent(eventType, { detail: data });
  document.dispatchEvent(event);
};
