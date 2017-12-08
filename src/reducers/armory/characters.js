import {combineReducers} from "redux";
import {RECEIVE_CHARACTER} from "../../actions/armory/characters";


const initialState = {
  "us.azuremyst.magicnumber": {
    "lastModified": 1512231953000,
    "name": "Magicnumber",
    "realm": "Azuremyst",
    "battlegroup": "Shadowburn",
    "class": 8,
    "race": 10,
    "gender": 1,
    "level": 110,
    "achievementPoints": 14690,
    "thumbnail": "azuremyst/68/157413956-avatar.jpg",
    "calcClass": "e",
    "faction": 1,
    "items": {
      "averageItemLevel": 952,
      "averageItemLevelEquipped": 946,
      "head": {
        "id": 151810,
        "name": "Shattered Fragments of Sindragosa",
        "icon": "inv_helmet_133",
        "quality": 5,
        "itemLevel": 1000,
        "tooltipParams": {
          "transmogItem": 32329,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 1287
        }, {
          "stat": 36,
          "amount": 1115
        }, {
          "stat": 5,
          "amount": 5509
        }, {
          "stat": 7,
          "amount": 8265
        }],
        "armor": 361,
        "context": "",
        "bonusLists": [1811, 3630],
        "artifactId": 0,
        "displayInfoId": 97601,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 32329,
          "itemAppearanceModId": 0,
          "transmogItemAppearanceModId": 0
        }
      },
      "neck": {
        "id": 134488,
        "name": "Stabilized Energy Pendant",
        "icon": "inv_7_0raid_necklace_14d",
        "quality": 4,
        "itemLevel": 955,
        "tooltipParams": {
          "enchant": 5439,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 2341
        }, {
          "stat": 40,
          "amount": 1755
        }, {
          "stat": 7,
          "amount": 3057
        }],
        "armor": 0,
        "context": "challenge-mode-jackpot",
        "bonusLists": [3418, 1607, 3337],
        "artifactId": 0,
        "displayInfoId": 0,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "enchantDisplayInfoId": 5439
        }
      },
      "shoulder": {
        "id": 147150,
        "name": "Mantle of the Arcane Tempest",
        "icon": "inv_shoulder_cloth_raidmage_r_01",
        "quality": 4,
        "itemLevel": 935,
        "tooltipParams": {
          "gem0": 151583,
          "enchant": 5883,
          "set": [147145, 147150, 147149, 147146],
          "transmogItem": 32273,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 49,
          "amount": 948
        }, {
          "stat": 36,
          "amount": 464
        }, {
          "stat": 5,
          "amount": 2255
        }, {
          "stat": 7,
          "amount": 3383
        }],
        "armor": 264,
        "context": "raid-heroic",
        "bonusLists": [3562, 1808, 1517, 3337],
        "artifactId": 0,
        "displayInfoId": 159712,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 32273,
          "enchantDisplayInfoId": 5883,
          "itemAppearanceModId": 1,
          "transmogItemAppearanceModId": 0
        }
      },
      "back": {
        "id": 147145,
        "name": "Drape of the Arcane Tempest",
        "icon": "inv_cape_cloth_raidmage_r_01mythic",
        "quality": 4,
        "itemLevel": 930,
        "tooltipParams": {
          "enchant": 5436,
          "set": [147145, 147150, 147149, 147146],
          "transmogItem": 32337,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 40,
          "amount": 654
        }, {
          "stat": 49,
          "amount": 386
        }, {
          "stat": 7,
          "amount": 2422
        }, {
          "stat": 71,
          "amount": 1615
        }],
        "armor": 173,
        "context": "raid-mythic",
        "bonusLists": [3563, 1512, 3528],
        "artifactId": 0,
        "displayInfoId": 160624,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 32337,
          "enchantDisplayInfoId": 5436,
          "itemAppearanceModId": 3,
          "transmogItemAppearanceModId": 0
        }
      },
      "chest": {
        "id": 147149,
        "name": "Robes of the Arcane Tempest",
        "icon": "inv_robe_cloth_raidmage_r_01",
        "quality": 4,
        "itemLevel": 920,
        "tooltipParams": {
          "set": [147145, 147150, 147149, 147146],
          "transmogItem": 32340,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 699
        }, {
          "stat": 36,
          "amount": 1081
        }, {
          "stat": 5,
          "amount": 2614
        }, {
          "stat": 7,
          "amount": 3922
        }],
        "armor": 334,
        "context": "raid-heroic",
        "bonusLists": [3562, 1502, 3336],
        "artifactId": 0,
        "displayInfoId": 161285,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 32340,
          "itemAppearanceModId": 1,
          "transmogItemAppearanceModId": 0
        }
      },
      "wrist": {
        "id": 138140,
        "name": "Magtheridon's Banished Bracers",
        "icon": "inv_bracer_64v1",
        "quality": 5,
        "itemLevel": 1000,
        "tooltipParams": {
          "transmogItem": 139754,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 49,
          "amount": 868
        }, {
          "stat": 36,
          "amount": 482
        }, {
          "stat": 5,
          "amount": 3099
        }, {
          "stat": 7,
          "amount": 4649
        }],
        "armor": 194,
        "context": "",
        "bonusLists": [3459, 3630],
        "artifactId": 0,
        "displayInfoId": 41265,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 139754,
          "itemAppearanceModId": 0,
          "transmogItemAppearanceModId": 0
        }
      },
      "hands": {
        "id": 147146,
        "name": "Gloves of the Arcane Tempest",
        "icon": "inv_glove_cloth_raidmage_r_01mythic",
        "quality": 4,
        "itemLevel": 930,
        "tooltipParams": {
          "set": [147145, 147150, 147149, 147146],
          "transmogItem": 32353,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 40,
          "amount": 485
        }, {
          "stat": 36,
          "amount": 901
        }, {
          "stat": 5,
          "amount": 2153
        }, {
          "stat": 7,
          "amount": 3229
        }],
        "armor": 216,
        "context": "raid-mythic",
        "bonusLists": [3563, 1512, 3528],
        "artifactId": 0,
        "displayInfoId": 159725,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 32353,
          "itemAppearanceModId": 3,
          "transmogItemAppearanceModId": 0
        }
      },
      "waist": {
        "id": 146998,
        "name": "Braided Torture Lash",
        "icon": "inv_belt_cloth_raidmage_r_01",
        "quality": 4,
        "itemLevel": 920,
        "tooltipParams": {
          "gem0": 151583,
          "transmogItem": 87332,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 896
        }, {
          "stat": 36,
          "amount": 438
        }, {
          "stat": 5,
          "amount": 1961
        }, {
          "stat": 7,
          "amount": 2941
        }],
        "armor": 188,
        "context": "raid-normal",
        "bonusLists": [3561, 1808, 1502, 3337],
        "artifactId": 0,
        "displayInfoId": 159691,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 87332,
          "itemAppearanceModId": 0,
          "transmogItemAppearanceModId": 0
        }
      },
      "legs": {
        "id": 133610,
        "name": "Leggings of Swirling Runes",
        "icon": "inv_pant_cloth_legiondungeon_c_01",
        "quality": 4,
        "itemLevel": 955,
        "tooltipParams": {
          "transmogItem": 126301,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 49,
          "amount": 623
        }, {
          "stat": 36,
          "amount": 1406
        }, {
          "stat": 5,
          "amount": 3623
        }, {
          "stat": 7,
          "amount": 5435
        }],
        "armor": 331,
        "context": "challenge-mode-jackpot",
        "bonusLists": [3418, 1607, 3337],
        "artifactId": 0,
        "displayInfoId": 145267,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 126301,
          "itemAppearanceModId": 0,
          "transmogItemAppearanceModId": 0
        }
      },
      "feet": {
        "id": 146986,
        "name": "Emberscatter Treads",
        "icon": "inv_boot_cloth_raidwarlockmythic_r_01",
        "quality": 4,
        "itemLevel": 930,
        "tooltipParams": {
          "transmogItem": 32609,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 604
        }, {
          "stat": 49,
          "amount": 782
        }, {
          "stat": 5,
          "amount": 2153
        }, {
          "stat": 7,
          "amount": 3229
        }],
        "armor": 238,
        "context": "raid-mythic",
        "bonusLists": [3563, 1512, 3528],
        "artifactId": 0,
        "displayInfoId": 159019,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "itemId": 32609,
          "itemAppearanceModId": 3,
          "transmogItemAppearanceModId": 0
        }
      },
      "finger1": {
        "id": 147195,
        "name": "Seal of the Second Duumvirate",
        "icon": "inv_misc_ring_mop19",
        "quality": 4,
        "itemLevel": 925,
        "tooltipParams": {
          "enchant": 5428,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 36,
          "amount": 1854
        }, {
          "stat": 32,
          "amount": 1561
        }, {
          "stat": 7,
          "amount": 2311
        }],
        "armor": 0,
        "context": "raid-heroic",
        "bonusLists": [3562, 1507, 3528],
        "artifactId": 0,
        "displayInfoId": 0,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "enchantDisplayInfoId": 5428
        }
      },
      "finger2": {
        "id": 147021,
        "name": "Yathae's Thumb Ring",
        "icon": "inv_70_dungeon_ring1b",
        "quality": 4,
        "itemLevel": 930,
        "tooltipParams": {
          "enchant": 5428,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 2414
        }, {
          "stat": 40,
          "amount": 1106
        }, {
          "stat": 7,
          "amount": 2422
        }],
        "armor": 0,
        "context": "raid-mythic",
        "bonusLists": [3563, 1512, 3528],
        "artifactId": 0,
        "displayInfoId": 0,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {
          "enchantDisplayInfoId": 5428
        }
      },
      "trinket1": {
        "id": 147017,
        "name": "Tarnished Sentinel Medallion",
        "icon": "inv_jewelcrafting_purpleowl",
        "quality": 4,
        "itemLevel": 930,
        "tooltipParams": {
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 49,
          "amount": 1320
        }],
        "armor": 0,
        "context": "raid-mythic",
        "bonusLists": [3563, 1512, 3528],
        "artifactId": 0,
        "displayInfoId": 0,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {}
      },
      "trinket2": {
        "id": 147016,
        "name": "Terror From Below",
        "icon": "trade_archaeology_sharkjaws",
        "quality": 4,
        "itemLevel": 925,
        "tooltipParams": {
          "gem0": 151583,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 32,
          "amount": 1296
        }],
        "armor": 0,
        "context": "raid-heroic",
        "bonusLists": [3562, 1808, 1507, 3336],
        "artifactId": 0,
        "displayInfoId": 0,
        "artifactAppearanceId": 0,
        "artifactTraits": [],
        "relics": [],
        "appearance": {}
      },
      "mainHand": {
        "id": 128862,
        "name": "Ebonchill",
        "icon": "inv_staff_2h_artifactantonidas_d_02",
        "quality": 6,
        "itemLevel": 979,
        "tooltipParams": {
          "gem0": 142185,
          "gem1": 147076,
          "gem2": 147092,
          "transmogItem": 32344,
          "timewalkerLevel": 110
        },
        "stats": [{
          "stat": 49,
          "amount": 1051
        }, {
          "stat": 36,
          "amount": 1051
        }, {
          "stat": 5,
          "amount": 3940
        }, {
          "stat": 7,
          "amount": 5910
        }],
        "armor": 0,
        "weaponInfo": {
          "damage": {
            "min": 11860,
            "max": 16048,
            "exactMin": 11860.0,
            "exactMax": 16047.0
          },
          "weaponSpeed": 3.6,
          "dps": 3875.9724
        },
        "context": "scenario-normal",
        "bonusLists": [731, 1544, 1540, 1546],
        "artifactId": 53,
        "displayInfoId": 157671,
        "artifactAppearanceId": 172,
        "artifactTraits": [{
          "id": 1296,
          "rank": 1
        }, {
          "id": 790,
          "rank": 4
        }, {
          "id": 793,
          "rank": 1
        }, {
          "id": 792,
          "rank": 4
        }, {
          "id": 796,
          "rank": 1
        }, {
          "id": 786,
          "rank": 4
        }, {
          "id": 794,
          "rank": 1
        }, {
          "id": 791,
          "rank": 4
        }, {
          "id": 797,
          "rank": 1
        }, {
          "id": 788,
          "rank": 4
        }, {
          "id": 789,
          "rank": 5
        }, {
          "id": 795,
          "rank": 1
        }, {
          "id": 787,
          "rank": 4
        }, {
          "id": 785,
          "rank": 6
        }, {
          "id": 798,
          "rank": 1
        }, {
          "id": 784,
          "rank": 4
        }, {
          "id": 1373,
          "rank": 1
        }, {
          "id": 1641,
          "rank": 1
        }, {
          "id": 1537,
          "rank": 4
        }, {
          "id": 1538,
          "rank": 1
        }, {
          "id": 1539,
          "rank": 1
        }, {
          "id": 1540,
          "rank": 24
        }],
        "relics": [{
          "socket": 0,
          "itemId": 142185,
          "context": 35,
          "bonusLists": [3418, 1567, 3337]
        }, {
          "socket": 1,
          "itemId": 147076,
          "context": 6,
          "bonusLists": [3563, 1517, 3336]
        }, {
          "socket": 2,
          "itemId": 147092,
          "context": 6,
          "bonusLists": [3563, 1537, 3337]
        }],
        "appearance": {
          "itemId": 32344,
          "itemAppearanceModId": 13,
          "transmogItemAppearanceModId": 0
        }
      }
    },
    "stats": {
      "health": 5656380,
      "powerType": "mana",
      "power": 1155000,
      "str": 4551,
      "agi": 6249,
      "int": 66551,
      "sta": 94273,
      "speedRating": 33.969376,
      "speedRatingBonus": 0.0,
      "crit": 33.745003,
      "critRating": 11098,
      "haste": 26.274666,
      "hasteRating": 9853,
      "hasteRatingPercent": 26.274666,
      "mastery": 51.969376,
      "masteryRating": 6039,
      "leech": 0.0,
      "leechRating": 0.0,
      "leechRatingBonus": 0.0,
      "versatility": 4000,
      "versatilityDamageDoneBonus": 8.421053,
      "versatilityHealingDoneBonus": 8.421053,
      "versatilityDamageTakenBonus": 4.210526,
      "avoidanceRating": 0.0,
      "avoidanceRatingBonus": 0.0,
      "spellPen": 0,
      "spellCrit": 33.745003,
      "spellCritRating": 11098,
      "mana5": 82500.0,
      "mana5Combat": 82500.0,
      "armor": 2299,
      "dodge": 3.0,
      "dodgeRating": 0,
      "parry": 0.0,
      "parryRating": 0,
      "block": 0.0,
      "blockRating": 0,
      "mainHandDmgMin": 14144.0,
      "mainHandDmgMax": 19139.0,
      "mainHandSpeed": 2.851,
      "mainHandDps": 5837.034,
      "offHandDmgMin": 0.0,
      "offHandDmgMax": 1.0,
      "offHandSpeed": 1.584,
      "offHandDps": 0.376462,
      "rangedDmgMin": -1.0,
      "rangedDmgMax": -1.0,
      "rangedSpeed": -1.0,
      "rangedDps": -1.0
    },
    "totalHonorableKills": 1646
  }
  // "us.azuremyst.magicnumber" : { (json) }
};

const byKey = (state = initialState, action) => {
  switch (action.type)
  {
    case RECEIVE_CHARACTER:

      let FQN = action.characterKey.FQN;
      let newState = {};
      newState[FQN] = action.json;

      return Object.assign({}, state, newState);
    // eventually we want this, but while we're bypassing loading from armory, we'd lose the pre-baked state forever.
    // case Common.Dehydrate:
    //   return {};
    default:
      return state;
  }
};

const characters = combineReducers({
  byKey: byKey
});
export default characters;

export const getCharacter = (characters, characterKey) => {
  return characters.byKey[characterKey.FQN];
};

