export default class Forest {
  constructor({ mines = {}, pond = {}, field = [] }) {
    this.mines = mines;
    this.pond = pond;
    this.field = field;
  }
}
