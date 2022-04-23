export const researchFunc = {
  ["Endurance"]: async function (main, savePlayer) {
    let energy = [...main.player.energy];
    energy[1] = energy[1] + 50;
    energy[0] = energy[1];
    await savePlayer({ ...main.player, energy });
  },
};
export class ResearchTree {
  constructor({ name, isResearched, isUnlocked, children }) {
    this.name = name;
    this.isResearched = isResearched;
    this.isUnlocked = isUnlocked;
    this.children = children;
  }
  unlockResearch(name) {
    if (this.name === name) {
      this.isUnlocked = true;
    }
  }
  unlockAllChildren() {
    if (this.children && this.children.length) {
      this.children = this.children.map((e, i) => {
        e.isUnlocked = true;
        return e;
      });
    }
  }
  researchResearch(name) {
    if (this.name === name) {
      this.isUnlocked = true;
      this.isResearched = true;
      this.unlockAllChildren();
    } else {
      if (this.children && this.children.length) {
        this.children = this.children.map((e, i) => {
          return new ResearchTree(e);
        });
        this.children.forEach((e) => {
          e.researchResearch(name);
        });
      }
    }
  }
  findResearch(name) {
    if (this.name === name && this.isResearched) {
      return true;
    } else if (this.children && this.children.length) {
      for (let i = 0; i < this.children.length; i++) {
        let c = new ResearchTree(this.children[i]);
        if (c.findResearch(name) === true) return true;
      }
    }
    return false;
  }
}
