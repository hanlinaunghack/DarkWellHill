export default class Item {
  constructor(item) {
    this.name = item.name;
    this.id = item.id;
    this.value = item.value || 0;
    this.type = item.type;
    this.description = item.description || "";
    this.quantity = item.quantity || 1;
    this.quality = item.quality || 1;
  }
}
