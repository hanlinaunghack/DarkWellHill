export default class Message {
  constructor({
    header = "Village Girl",
    faceicon = "villageGirl",
    text = "I am a village girl",
    fullimage = null,
    rewards = null,
    moneyReward = null,
    costs = null,
  }) {
    this.header = header;
    this.faceicon = faceicon;
    this.fullimage = fullimage ? fullimage : faceicon;
    this.text = text;
    this.rewards = rewards;
    this.moneyReward = moneyReward;
    this.costs = costs;
  }
}
