import Calendar from "../calendar.jsx";
import Message from "../message.jsx";
const marketintro = {
  name: "Market Introduction",
  id: 2, ///determines the order
  date: new Calendar({ year: 273 }),
  expDate: null,
  type: "dialogue",
  location: "market",
  event: {
    dialogues: [
      new Message({
        header: "Old Man",
        faceicon: "Joe",
        text: "My name is Joe. I buy and sell.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
      new Message({
        header: "Joe",
        faceicon: "Joe",
        text: "Look around.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
    ],
  },
};
export default marketintro;
