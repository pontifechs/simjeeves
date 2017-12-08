

// TODO:: Missing some here I'm sure. (weapons mainly)
const Slot = {
    Head: 'head',
    Neck: 'neck',
    Shoulder: 'shoulder',
    Back: 'back',
    Chest: 'chest',
    Shirt: 'shirt',
    Tabard: 'tabard',
    Wrist: 'wrist',
    Hands: 'hands',
    Waist: 'waist',
    Legs: 'legs',
    Feet: 'feet',
    Finger: 'finger',
    Finger1: 'finger1',
    Finger2: 'finger2',
    Trinket: 'trinket',
    Trinket1: 'trinket1',
    Trinket2: 'trinket2',
    MainHand: 'mainHand',
    OffHand: 'offHand',
};

Slot.values = () => {
  return [
      Slot.Head,
      Slot.Neck,
      Slot.Shoulder,
      Slot.Back,
      Slot.Chest,
      Slot.Shirt,
      Slot.Tabard,
      Slot.Wrist,
      Slot.Hands,
      Slot.Waist,
      Slot.Legs,
      Slot.Feet,
      Slot.Finger,
      Slot.Finger1,
      Slot.Finger2,
      Slot.Trinket,
      Slot.Trinket1,
      Slot.Trinket2,
      Slot.MainHand,
      Slot.OffHand
  ];
};

Object.freeze(Slot);

export default Slot;




