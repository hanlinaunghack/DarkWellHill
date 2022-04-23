export default class Calendar {
  constructor({ day = 1, month = 1, year = 1, hour = 1, minute = 10 }) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.hour = hour;
    this.minute = minute;
  }
  getMinute() {
    if (!this.minute) return "00";
    return "" + this.minute;
  }
  getHour() {
    return this.hour % 12;
  }
  increaseMinute(number) {
    if (number > 0) {
      let v = this.minute + number;
      this.minute = v % 60;
      this.increaseHour(Math.floor(v / 60));
    }
  }
  increaseHour(number) {
    if (number > 0) {
      let v = this.hour + number;
      this.hour = v % 24;
      this.increaseDay(Math.floor(v / 24));
    }
  }
  increaseDay(number = 1) {
    if (number > 0) {
      let v = this.day + number;
      this.day = v % 30;
      this.increaseMonth(Math.floor(v / 30));
    }
  }
  increaseMonth(number) {
    if (number > 0) {
      let v = this.month + number;
      this.month = v % 12;
      this.increaseYear(Math.floor(v / 12));
    }
  }
  increaseYear(number) {
    if (number > 0) {
      this.year = this.year + number;
    }
  }
  compareDates({ day, month, year, hour, minute }) {
    if (year < this.year) return true;
    if (year === this.year) {
      if (month < this.month) return true;
      if (month === this.month) {
        if (day < this.day) return true;
        if (day === this.day) {
          if (hour < this.hour) return true;
        }
      }
    }
    return false;
  }

  formatClock() {
    return this.hour >= 0 && this.hour < 12 ? " AM" : " PM";
  }

  increaseDayAndResetTime() {
    this.increaseDay(1);
    this.hour = 6;
    this.minute = 0;
  }

  checkValidity() {
    if (this.hour >= 21) {
      this.increaseDay(1);
      this.hour = 6;
      this.minute = 0;
      return true;
    }
    return false;
  }
}
