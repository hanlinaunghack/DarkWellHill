import Calendar from "../calendar.jsx";
import Message from "../message.jsx";
const jacksHutIntro = {
  name: "Jack's Hut Introduction",
  id: 3, ///determines the order
  date: new Calendar({ year: 273 }),
  expDate: null,
  type: "dialogue",
  location: "jacks-hut",
  event: {
    dialogues: [
      new Message({
        header: "Old Man",
        faceicon: "Jack",
        text: "Who goes there?!",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
      new Message({
        header: "Old Man",
        faceicon: "Jack",
        text: "Oh! If it isn't our new neighbor. My name is Jack.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
    ],
  },
};
export default jacksHutIntro;
