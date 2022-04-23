import Calendar from "../calendar.jsx";
import Message from "../message.jsx";
const introduction = {
  name: "Introduction",
  id: 1, ///determines the order
  date: new Calendar({ year: 273 }),
  expDate: null,
  type: "dialogue",
  location: "home",
  event: {
    dialogues: [
      new Message({
        header: "Old Man",
        faceicon: "villageChief",
        text: "I am the new village chief. My name is Nicolas.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
      new Message({
        header: "Nicolas",
        faceicon: "villageChief",
        text: "Our previous chief passed away suddenly, but he left behind a thoroguh instruction about his plans.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
      new Message({
        header: "Nicolas",
        faceicon: "villageChief",
        text: "Though many villagers may not agree with his plan, we are in a very desperate situation.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
      new Message({
        header: "Nicolas",
        faceicon: "villageChief",
        text: "I will give you 5 bundles of potato seed to start you off.",
        fullimage: null,
        rewards: [{ name: "Potato Seed Bundle", quantity: 5, quality: 1 }],
        moneyReward: null,
        costs: null,
      }),
    ],
  },
};
export default introduction;
