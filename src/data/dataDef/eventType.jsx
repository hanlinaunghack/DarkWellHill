export default class GameEvent {
  constructor({
    name,
    id,
    date,
    expDate = null,
    type = "dialogue",
    location = "home",
    event,
  }) {
    this.name = name;
    this.id = id;
    this.date = date;
    this.expDate = expDate;
    this.type = type;
    this.location = location;
    this.event = event;
  }
}
