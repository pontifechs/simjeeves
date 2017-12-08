import * as React from "react";
import Slot from "../concepts/Slot";

// lego: #ff8000
// epic: #c600ff
// heirloom: #0cf
// rare: #0081ff
// uncommon: #1eff00

const qualityToColor = (quality) => {
  switch (quality) {
    case 5:
      return "#FF8000";
    case 4:
      return "#C600FF";
    case 3:
      return "#0081FF";
    case 2:
      return "#1EFF00";
    default:
      return "#FFFFFF";
  }
};


//TODO:: Move somewhere?
const buildWowDbUrl = (item) => {
  let bonusIDs = item.bonusLists.join(",");

  return `http://www.wowdb.com/items/${item.id}?bonusIDs=${bonusIDs}`;
};

const getYOffset = (slot) => {
  switch (slot) {
    case Slot.Head:
      return "0%";
    case Slot.Neck:
      return "-100%";
    case Slot.Shoulder:
      return "-200%";
    case Slot.Chest:
      return "-300%";
    case Slot.Tabard:
      return "-400%";
    case Slot.Shirt:
      return "-500%";
    case Slot.Wrist:
      return "-600%";
    case Slot.Hands:
      return "-700%";
    case Slot.Waist:
      return "-800%";
    case Slot.Legs:
      return "-900%";
    case Slot.Feet:
      return "-1000%";
    case Slot.Finger:
      return "-1100%";
    case Slot.OffHand:
      return "-1400%";
    case Slot.Trinket:
      return "-1600%";
  }
};

export const Item = ({item, slot, style}) => {
  if (item !== undefined) {

    let myStyle = {marginTop: "10px", marginBottom: "10px", display: "flex", position: "relative"};

    return (
      <div style={Object.assign(myStyle, style)}>
        <div>
          <a href={buildWowDbUrl(item)}>
            <div>
              <img
                style={{width: "47px", height: "47px", marginRight: "10px", marginLeft: "10px"}}
                src={`https://render-us.worldofwarcraft.com/icons/56/${item.icon}.jpg`}/>
              <span style={{position: "absolute", bottom: 0, left: 0, background: "rgba(0, 0, 0, 0.7)", color: qualityToColor(item.quality), fontSize: ".65rem"}}>
              {item.itemLevel}
              </span>
            </div>
          </a>
        </div>
        <div>
          <a href={buildWowDbUrl(item)}>
            <span style={{color: qualityToColor(item.quality)}}>
            {item.name}
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{marginTop: "10px", marginBottom: "10px"}}>
      <div style={{
        backgroundPosition: `0% ${getYOffset(slot)}`,
        backgroundImage: "url('https://worldofwarcraft.akamaized.net/static/components/GameIcon/GameIcon-slots.png')",
        width: "47px",
        height: "47px"
      }}/>
    </div>
  )
};
