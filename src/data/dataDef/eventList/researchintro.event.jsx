import Calendar from "../calendar.jsx";
import Message from "../message.jsx";
const researchIntro = {
  name: "Research Introduction",
  id: 4, ///determines the order
  date: new Calendar({ year: 327, month: 3, day: 22 }),
  expDate: null,
  type: "dialogue",
  location: "home",
  event: {
    dialogues: [
      new Message({
        header: "Poowa",
        faceicon: "Poowa",
        text: "Hey! Forgot to give tell you.",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
      new Message({
        header: "Poowa",
        faceicon: "Poowa",
        text: "You can use this to fund our effort to revive our ancient technologies!",
        fullimage: null,
        rewards: null,
        moneyReward: null,
        costs: null,
      }),
    ],
    unlockables: {
      researchBook: true,
    },
    researchBookName: "Farmer",
  },
};
export default researchIntro;
