
export class Item {
  constructor(owner, slot, armoryJson) {
    this.owner = owner;
    this.slot = slot;
    this.wowId = armoryJson.id;
    this.name = armoryJson.name;
    this.icon = armoryJson.icon;
    this.quality = armoryJson.quality;
    this.itemLevel = armoryJson.itemLevel;
    this.tooltipParams = armoryJson.tooltipParams;
    this.stats = armoryJson.stats;
    this.bonusLists = armoryJson.bonusLists;
  }

  // This is really being used as a compound key in the redux state.
  get equalitySlug() {
    let bonusIDs = this.bonusLists.sort().join(",");
    return `${this.wowId}.${this.itemLevel}.[${bonusIDs}]`;
  }
}