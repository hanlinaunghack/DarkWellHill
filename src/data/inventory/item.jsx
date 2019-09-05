export default class Item {
  constructor(item) {
    this.name = item.name;
    this.id = item.id;
    this.value = item.value;
    this.type = item.type;
    this.description = item.description || "";
    this.quantity = item.quantity;
    this.quality = item.quality;
  }
  changeQuantity(num) {
    this.quantity = this.quantity + num;
  }
}
