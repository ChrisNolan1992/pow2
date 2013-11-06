
//// Items
eburp.registerData("items",[
   //// Level 1
   {
      "name" : "Short Sword",
      "type" : "weapon",
      "icon" : "data/textures/items/shortSword.png",
      "rarity" : 900, // Chance of the item coming up as random treasure, 1000 is about average, lower is rarer.
      "groups" : ["default", "weapon"], // These groups indicate on which maps (and in which shops) the item should appear.
      "meleeMinDamage" : 1,
      "meleeMaxDamage" : 4,
      "baseValue" : 12, // Base value to buy/sell
      "level" : 1,
      "usedBy" : ["warrior"] // Only general classes here, no specific allowed
   },
   {
      "name" : "Crude Club",
      "type" : "weapon",
      "icon" : "data/textures/items/club.png",
      "rarity" : 1500,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 1,
      "meleeMaxDamage" : 3,
      "baseValue" : 6,
      "level" : 1,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Goblin Scimitar",
      "type" : "weapon",
      "icon" : "data/textures/items/scimitar.png",
      "rarity" : 1000,
      "groups" : ["goblin", "kobold"],
      "meleeMinDamage" : 2,
      "meleeMaxDamage" : 6,
      "toHitBonus" : -2,
      "baseValue" : 8,
      "level" : 1,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Sling",
      "type" : "weapon",
      "icon" : "data/textures/items/sling.png",
      "rarity" : 1500,
      "groups" : ["default", "weapon"],
      "rangeMinDamage" : 1,
      "rangeMaxDamage" : 2,
      "baseValue" : 8,
      "level" : 1,
      "rangeAnimation" : "animRockSmall1.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Short Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/shortBow2.png",
      "rarity" : 900,
      "groups" : ["default", "weapon"],
      "rangeMinDamage" : 1,
      "rangeMaxDamage" : 3,
      "baseValue" : 15,
      "level" : 1,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Goblin Crossbow",
      "type" : "weapon",
      "icon" : "data/textures/items/crossbow3.png",
      "rarity" : 1000,
      "groups" : ["goblin", "kobold"],
      "rangeMinDamage" : 2,
      "rangeMaxDamage" : 4,
      "toHitBonus" : -2,
      "baseValue" : 12,
      "level" : 1,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Short Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/shortStaff.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 1,
      "meleeMaxDamage" : 2,
      "baseValue" : 5,
      "level" : 1,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Leather Armor",
      "type" : "armor",
      "icon" : "data/textures/items/leatherArmor.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 2,
      "baseValue" : 18,
      "level" : 1,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Cloak",
      "type" : "armor",
      "icon" : "data/textures/items/cloak.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 1,
      "baseValue" : 9,
      "level" : 1,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Leather Shield",
      "type" : "shield",
      "icon" : "data/textures/items/leatherShield.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 1,
      "baseValue" : 6,
      "level" : 1,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Leather Helm",
      "type" : "hat",
      "icon" : "data/textures/items/leatherHelm.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 1,
      "baseValue" : 8,
      "level" : 1,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Leather Boots",
      "type" : "boots",
      "icon" : "data/textures/items/leatherBoots2.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 1,
      "baseValue" : 10,
      "level" : 1,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Healing Salve",
      "type" : "use",
      "icon" : "data/textures/items/redSalve.png",
      "rarity" : 2500,
      "groups" : ["default", "potion", "elf"],
      "spell" : "Basic Heal",
      "chargesMin" : 1,
      "chargesMax" : 4,
      "baseValue" : 4,
      "level" : 1,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Imp Talisman",
      "type" : "use",
      "icon" : "data/textures/items/impTalisman.png",
      "rarity" : 200,
      "groups" : ["default", "misc"],
      "spell" : "Summon Imp2",
      "chargesMin" : 1,
      "chargesMax" : 1,
      "baseValue" : 8,
      "level" : 1,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   //// Level 2
   {
      "name" : "Apprentice Hat",
      "type" : "hat",
      "icon" : "data/textures/items/wizardHat1.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 1,
      "resistance" : 1,
      "baseValue" : 22,
      "level" : 2,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Snake Flute",
      "type" : "use",
      "icon" : "data/textures/items/flute.png",
      "rarity" : 200,
      "groups" : ["default", "misc"],
      "spell" : "Summon Snake",
      "chargesMin" : 1,
      "chargesMax" : 4,
      "baseValue" : 10,
      "level" : 2,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Coral Helm",
      "type" : "hat",
      "icon" : "data/textures/items/coralHelm.png",
      "rarity" : 1000,
      "groups" : ["water"],
      "armorClass" : 2,
      "baseValue" : 35,
      "level" : 2,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Fish-oil Salve",
      "type" : "use",
      "icon" : "data/textures/items/yellowSalve.png",
      "rarity" : 1000,
      "groups" : ["water"],
      "spell" : "Better Heal",
      "chargesMin" : 2,
      "chargesMax" : 10,
      "baseValue" : 4,
      "level" : 2,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Wand of Striking",
      "type" : "use",
      "icon" : "data/textures/items/blueWand2.png",
      "rarity" : 300,
      "groups" : ["default", "misc"],
      "spell" : "Strike",
      "chargesMin" : 1,
      "chargesMax" : 4,
      "baseValue" : 5,
      "level" : 2,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Goblin Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/staff2.png",
      "rarity" : 1000,
      "groups" : ["goblin", "kobold"],
      "meleeMinDamage" : 3,
      "meleeMaxDamage" : 6,
      "toHitBonus" : -1,
      "baseValue" : 12,
      "level" : 2,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Long Sword",
      "type" : "weapon",
      "icon" : "data/textures/items/equipWeapon.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 2,
      "meleeMaxDamage" : 8,
      "baseValue" : 20,
      "level" : 2,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Long Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/bow.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "rangeMinDamage" : 1,
      "rangeMaxDamage" : 5,
      "baseValue" : 35,
      "level" : 2,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Long Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/staff.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 1,
      "meleeMaxDamage" : 4,
      "baseValue" : 15,
      "level" : 2,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Studded Armor",
      "type" : "armor",
      "icon" : "data/textures/items/studdedArmor.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 3,
      "baseValue" : 36,
      "level" : 2,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Iron Shield",
      "type" : "shield",
      "icon" : "data/textures/items/ironShield.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 2,
      "baseValue" : 26,
      "level" : 2,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Iron Helm",
      "type" : "hat",
      "icon" : "data/textures/items/equipHat.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 2,
      "baseValue" : 30,
      "level" : 2,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Energy Salve",
      "type" : "use",
      "icon" : "data/textures/items/blueSalve.png",
      "rarity" : 2500,
      "groups" : ["default", "potion", "elf"],
      "spell" : "Basic Restore",
      "chargesMin" : 1,
      "chargesMax" : 6,
      "baseValue" : 5,
      "level" : 2,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   //// LEVEL 3
   {
      "name" : "Wand of Healing",
      "type" : "use",
      "icon" : "data/textures/items/yellowWand.png",
      "rarity" : 400,
      "groups" : ["default", "misc", "elf"],
      "spell" : "Good Heal",
      "chargesMin" : 2,
      "chargesMax" : 6,
      "baseValue" : 6,
      "level" : 3,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Seaweed Armor",
      "type" : "armor",
      "icon" : "data/textures/items/seaweedArmor.png",
      "rarity" : 1000,
      "groups" : ["water"],
      "armorClass" : 4,
      "baseValue" : 55,
      "level" : 3,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Merman Shield",
      "type" : "shield",
      "icon" : "data/textures/items/mermanShield.png",
      "rarity" : 1000,
      "groups" : ["water"],
      "armorClass" : 3,
      "baseValue" : 45,
      "level" : 3,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Enchanted Skull",
      "type" : "use",
      "icon" : "data/textures/items/skull.png",
      "rarity" : 200,
      "groups" : ["undead", "misc"],
      "spell" : "Summon Skeleton",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 15,
      "level" : 3,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Healing Potion",
      "type" : "use",
      "icon" : "data/textures/items/redPotion.png",
      "rarity" : 2500,
      "groups" : ["default", "potion", "elf"],
      "spell" : "Even Better Heal",
      "chargesMin" : 2,
      "chargesMax" : 6,
      "baseValue" : 10,
      "level" : 3,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Broadsword",
      "type" : "weapon",
      "icon" : "data/textures/items/sword2.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 2,
      "meleeMaxDamage" : 10,
      "toHitBonus" : 1,
      "baseValue" : 35,
      "level" : 3,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Heavy Axe",
      "type" : "weapon",
      "icon" : "data/textures/items/axe2.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 3,
      "meleeMaxDamage" : 12,
      "baseValue" : 32,
      "level" : 3,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Fine Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/shortBow.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon", "elf"],
      "rangeMinDamage" : 2,
      "rangeMaxDamage" : 7,
      "toHitBonus" : 2,
      "baseValue" : 60,
      "level" : 3,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Heavy Crossbow",
      "type" : "weapon",
      "icon" : "data/textures/items/crossbow2.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "rangeMinDamage" : 3,
      "rangeMaxDamage" : 9,
      "baseValue" : 55,
      "level" : 3,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Long Oak Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/hookedStaff.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon", "elf"],
      "meleeMinDamage" : 1,
      "meleeMaxDamage" : 6,
      "toHitBonus" : 1,
      "awarenessBonus" : 1,
      "baseValue" : 50,
      "level" : 3,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Coral Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/coralStaff.png",
      "rarity" : 1000,
      "groups" : ["water"],
      "meleeMinDamage" : 2,
      "meleeMaxDamage" : 7,
      "baseValue" : 45,
      "level" : 3,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Chain Mail Armor",
      "type" : "armor",
      "icon" : "data/textures/items/equipArmor.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 4,
      "baseValue" : 60,
      "level" : 3,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Elvish Cloak",
      "type" : "armor",
      "icon" : "data/textures/items/elvishCloak.png",
      "rarity" : 1000,
      "groups" : ["default", "armor", "elf"],
      "armorClass" : 2,
      "baseValue" : 48,
      "level" : 3,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Amulet of Protection",
      "type" : "amulet",
      "icon" : "data/textures/items/equipAmulet.png",
      "rarity" : 1000,
      "groups" : ["default", "misc", "elf"],
      "armorClass" : 1,
      "baseValue" : 45,
      "level" : 3,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Narwhal Sword",
      "type" : "weapon",
      "icon" : "data/textures/items/coralSword.png",
      "rarity" : 400,
      "groups" : ["water"],
      "meleeMinDamage" : 5,
      "meleeMaxDamage" : 10,
      "accuracyBonus" : 1,
      "baseValue" : 50,
      "level" : 3,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Potion of Strength",
      "type" : "use",
      "icon" : "data/textures/items/strengthPotion.png",
      "rarity" : 500,
      "groups" : ["default", "potion"],
      "spell" : "Self Strength",
      "chargesMin" : 2,
      "chargesMax" : 4,
      "baseValue" : 9,
      "level" : 3,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   //// Level 4
   {
      "name" : "Energy Potion",
      "type" : "use",
      "icon" : "data/textures/items/bluePotion2.png",
      "rarity" : 2500,
      "groups" : ["default", "potion", "elf"],
      "spell" : "Better Restore",
      "chargesMin" : 2,
      "chargesMax" : 6,
      "baseValue" : 12,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Curing Potion",
      "type" : "use",
      "icon" : "data/textures/items/yellowPotion.png",
      "rarity" : 500,
      "groups" : ["default", "potion", "elf"],
      "spell" : "Self Cure",
      "chargesMin" : 3,
      "chargesMax" : 8,
      "baseValue" : 10,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Merman Talisman",
      "type" : "use",
      "icon" : "data/textures/items/mermanTalisman.png",
      "rarity" : 200,
      "groups" : ["water"],
      "spell" : "Summon Merman",
      "chargesMin" : 2,
      "chargesMax" : 6,
      "baseValue" : 20,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Seaweed Cloak",
      "type" : "armor",
      "icon" : "data/textures/items/seaweedCloak.png",
      "rarity" : 1000,
      "groups" : ["water"],
      "armorClass" : 4,
      "baseValue" : 90,
      "level" : 4,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Wand of Blasting",
      "type" : "use",
      "icon" : "data/textures/items/blueWand2.png",
      "rarity" : 1000,
      "groups" : ["default"],
      "spell" : "Blast",
      "chargesMin" : 2,
      "chargesMax" : 10,
      "baseValue" : 10,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Battle-axe",
      "type" : "weapon",
      "icon" : "data/textures/items/battleAxe.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 5,
      "meleeMaxDamage" : 14,
      "baseValue" : 70,
      "level" : 4,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Great Sword",
      "type" : "weapon",
      "icon" : "data/textures/items/sword.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 4,
      "meleeMaxDamage" : 12,
      "toHitBonus" : 2,
      "baseValue" : 75,
      "level" : 4,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Elvish Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/elvishStaff.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon", "elf"],
      "meleeMinDamage" : 2,
      "meleeMaxDamage" : 8,
      "toHitBonus" : 2,
      "awarenessBonus" : 1,
      "baseValue" : 90,
      "level" : 4,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Spark Staff",
      "type" : "weapon",
      "legendary" : "#ff7da8",
      "icon" : "data/textures/items/sparkStaff.png",
      "rarity" : 35,
      "groups" : ["default", "weapon", "elf"],
      "meleeMinDamage" : 1,
      "meleeMaxDamage" : 8,
      "toHitBonus" : 1,
      "awarenessBonus" : 1,
      "baseValue" : 290,
      "level" : 4,
      "combatSpell" : "Spark Blast",
      "usedBy" : ["mage"]
   },
   {
      "name" : "Elvish Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/greenBow.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon", "elf"],
      "rangeMinDamage" : 3,
      "rangeMaxDamage" : 10,
      "toHitBonus" : 3,
      "baseValue" : 100,
      "level" : 4,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Elvish Armor",
      "type" : "armor",
      "icon" : "data/textures/items/elvishArmor.png",
      "rarity" : 1000,
      "groups" : ["default", "armor", "elf"],
      "armorClass" : 4,
      "baseValue" : 90,
      "level" : 4,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Spiked Shield",
      "type" : "shield",
      "icon" : "data/textures/items/equipShield.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 3,
      "baseValue" : 70,
      "level" : 4,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Great Helm",
      "type" : "hat",
      "icon" : "data/textures/items/greatHelm.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 3,
      "baseValue" : 80,
      "level" : 4,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Amulet of Thought",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet.png",
      "rarity" : 1000,
      "groups" : ["default", "misc"],
      "awarenessBonus" : 2,
      "baseValue" : 100,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Amulet of Precision",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet3.png",
      "rarity" : 1000,
      "groups" : ["default", "misc"],
      "accuracyBonus" : 2,
      "baseValue" : 100,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Amulet of Might",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet2.png",
      "rarity" : 1000,
      "groups" : ["default", "misc"],
      "strengthBonus" : 2,
      "baseValue" : 100,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Sharkbone Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/sharkbow.png",
      "rarity" : 500,
      "groups" : ["water"],
      "rangeMinDamage" : 5,
      "rangeMaxDamage" : 12,
      "toHitBonus" : 2,
      "baseValue" : 150,
      "level" : 4,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Elvish Hat",
      "type" : "hat",
      "icon" : "data/textures/items/elvishHat.png",
      "rarity" : 800,
      "groups" : ["default", "armor", "elf"],
      "armorClass" : 2,
      "resistance" : 2,
      "awareness" : 1,
      "baseValue" : 123,
      "level" : 4,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Elvish Boots",
      "type" : "boots",
      "icon" : "data/textures/items/elvishBoots.png",
      "rarity" : 1000,
      "groups" : ["default", "armor", "elf"],
      "armorClass" : 2,
      "baseValue" : 80,
      "level" : 4,
      "usedBy" : ["warrior", "archer", "mage"]
   },

   //// Level 5
   {
      "name" : "Military Boots",
      "type" : "boots",
      "icon" : "data/textures/items/militaryBoots.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 3,
      "baseValue" : 130,
      "level" : 5,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Explosive Vial",
      "type" : "use",
      "icon" : "data/textures/items/explosiveVial.png",
      "rarity" : 800,
      "groups" : ["default", "potion", "water"],
      "spell" : "Vial Toss",
      "chargesMin" : 3,
      "chargesMax" : 9,
      "baseValue" : 19,
      "level" : 5,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Anti-Magic Amulet",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet12.png",
      "rarity" : 800,
      "groups" : ["default", "misc"],
      "resistance" : 2,
      "baseValue" : 140,
      "level" : 5,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Serpentine Robes",
      "type" : "armor",
      "icon" : "data/textures/items/serpentRobes.png",
      "rarity" : 333,
      "groups" : ["default", "armor"],
      "armorClass" : 4,
      "resistance" : 2,
      "baseValue" : 160,
      "level" : 5,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Magic Sword",
      "type" : "weapon",
      "icon" : "data/textures/items/magicSword.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 3,
      "meleeMaxDamage" : 18,
      "toHitBonus" : 3,
      "baseValue" : 175,
      "level" : 5,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Dark Sword",
      "type" : "weapon",
      "icon" : "data/textures/items/blackSword.png",
      "rarity" : 300,
      "groups" : ["undead"],
      "meleeMinDamage" : 5,
      "meleeMaxDamage" : 25,
      "toHitBonus" : 3,
      "constitutionBonus" : -5,
      "baseValue" : 200,
      "level" : 5,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Magic Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/magicBow.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "rangeMinDamage" : 4,
      "rangeMaxDamage" : 12,
      "toHitBonus" : 3,
      "baseValue" : 175,
      "level" : 5,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Dark Bow",
      "type" : "weapon",
      "icon" : "data/textures/items/blackBow.png",
      "rarity" : 300,
      "groups" : ["undead"],
      "rangeMinDamage" : 6,
      "rangeMaxDamage" : 18,
      "toHitBonus" : 2,
      "constitutionBonus" : -5,
      "baseValue" : 210,
      "level" : 5,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Magic Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/blueStaff.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 3,
      "meleeMaxDamage" : 10,
      "rangeMinDamage" : 1,
      "rangeMaxDamage" : 5,
      "rangeAnimation" : "animSpell4.png",
      "toHitBonus" : 3,
      "awarenessBonus" : 2,
      "baseValue" : 195,
      "level" : 5,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Dark Staff",
      "type" : "weapon",
      "icon" : "data/textures/items/blackStaff.png",
      "rarity" : 300,
      "groups" : ["undead"],
      "meleeMinDamage" : 4,
      "meleeMaxDamage" : 12,
      "rangeMinDamage" : 2,
      "rangeMaxDamage" : 6,
      "rangeAnimation" : "animBlackBallSmall.png",
      "toHitBonus" : 2,
      "constitutionBonus" : -8,
      "awarenessBonus" : 2,
      "baseValue" : 255,
      "level" : 5,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Jewel of Health",
      "type" : "use",
      "icon" : "data/textures/items/redGem.png",
      "rarity" : 2500,
      "groups" : ["default", "potion", "water"],
      "spell" : "Best Heal",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 45,
      "level" : 5,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Scale Mail Armor",
      "type" : "armor",
      "icon" : "data/textures/items/scaleArmor.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 5,
      "baseValue" : 150,
      "level" : 5,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Elvish Helm",
      "type" : "hat",
      "icon" : "data/textures/items/elvishHelm.png",
      "rarity" : 1000,
      "groups" : ["default", "armor", "elf"],
      "armorClass" : 3,
      "resistance" : 1,
      "baseValue" : 140,
      "level" : 5,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Amulet of Sight",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet7.png",
      "rarity" : 1000,
      "groups" : ["default", "misc", "water"],
      "accuracyBonus" : 4,
      "baseValue" : 150,
      "level" : 5,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Amulet of Life",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet4.png",
      "rarity" : 1000,
      "groups" : ["default", "misc", "water"],
      "constitutionBonus" : 5,
      "baseValue" : 150,
      "level" : 5,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Oliphant Talisman",
      "type" : "use",
      "icon" : "data/textures/items/oliphantTalisman.png",
      "rarity" : 500,
      "groups" : ["default", "misc"],
      "spell" : "Summon Oliphant 2",
      "chargesMin" : 2,
      "chargesMax" : 4,
      "baseValue" : 35,
      "level" : 5,
      "usedBy" : ["warrior", "archer", "mage"]
   },

   //// Level 6
   {
      "name" : "Flamberge",
      "type" : "weapon",
      "icon" : "data/textures/items/flamberge2.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 8,
      "meleeMaxDamage" : 17,
      "toHitBonus" : 3,
      "accuracyBonus" : 2,
      "baseValue" : 255,
      "level" : 6,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Potion of Rage",
      "type" : "use",
      "icon" : "data/textures/items/ragePotion.png",
      "rarity" : 500,
      "groups" : ["default", "potion", "water"],
      "spell" : "Self Rage",
      "chargesMin" : 3,
      "chargesMax" : 7,
      "baseValue" : 35,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Blink Gem",
      "type" : "use",
      "icon" : "data/textures/items/turqoiseGem.png",
      "rarity" : 750,
      "groups" : ["default", "potion", "water"],
      "spell" : "Wink",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 41,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Wand of Fire",
      "type" : "use",
      "icon" : "data/textures/items/redWand2.png",
      "rarity" : 400,
      "groups" : ["default", "misc"],
      "spell" : "Fire",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 80,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Wand of Blessing",
      "type" : "use",
      "icon" : "data/textures/items/whiteWand.png",
      "rarity" : 500,
      "groups" : ["default", "misc", "water"],
      "spell" : "Aura of Blessing",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 65,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Wand of Paralysis",
      "type" : "use",
      "icon" : "data/textures/items/redWand.png",
      "rarity" : 500,
      "groups" : ["default", "misc", "water"],
      "spell" : "Beam of Paralysis",
      "chargesMin" : 3,
      "chargesMax" : 8,
      "baseValue" : 56,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Speed Boots",
      "type" : "boots",
      "icon" : "data/textures/items/speedBoots.png",
      "rarity" : 800,
      "groups" : ["default", "armor"],
      "armorClass" : 3,
      "baseValue" : 290,
      "extraMoves" : 1,
      "level" : 6,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Sheepskin Boots",
      "type" : "boots",
      "icon" : "data/textures/items/winterBoots.png",
      "rarity" : 1000,
      "groups" : ["tundra", "armor"],
      "armorClass" : 3,
      "constitutionBonus" : 3,
      "baseValue" : 265,
      "level" : 6,
      "usedBy" : ["warrior", "archer"]
   },
   {
      "name" : "Archer's Helm",
      "type" : "hat",
      "icon" : "data/textures/items/enchantedHelm.png",
      "rarity" : 750,
      "groups" : ["default", "armor"],
      "armorClass" : 4,
      "resistance" : 2,
      "baseValue" : 305,
      "level" : 6,
      "usedBy" : ["archer"]
   },
   {
      "name" : "Wizard Hat",
      "type" : "hat",
      "icon" : "data/textures/items/wizardHat2.png",
      "rarity" : 500,
      "groups" : ["default", "armor", "elf"],
      "armorClass" : 3,
      "resistance" : 3,
      "awareness" : 2,
      "baseValue" : 318,
      "level" : 6,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Ogre Talisman",
      "type" : "use",
      "icon" : "data/textures/items/ogreTalisman.png",
      "rarity" : 200,
      "groups" : ["default", "misc"],
      "spell" : "Summon Ogre",
      "chargesMin" : 2,
      "chargesMax" : 3,
      "baseValue" : 120,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Jewel of Energy",
      "type" : "use",
      "icon" : "data/textures/items/blueGem.png",
      "rarity" : 2500,
      "groups" : ["default", "potion", "water"],
      "spell" : "Best Restore",
      "chargesMin" : 3,
      "chargesMax" : 6,
      "baseValue" : 70,
      "level" : 6,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Embroidered Cloak",
      "type" : "armor",
      "icon" : "data/textures/items/embroideredCloak.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 5,
      "resistance" : 2,
      "baseValue" : 330,
      "level" : 6,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Tempered Shield",
      "type" : "shield",
      "icon" : "data/textures/items/forceShield.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 4,
      "resistance" : 1,
      "baseValue" : 300,
      "level" : 6,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Helm of Valor",
      "type" : "hat",
      "icon" : "data/textures/items/fancyHelm.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 4,
      "resistance" : 1,
      "baseValue" : 300,
      "level" : 6,
      "usedBy" : ["warrior"]
   },
   //// Level 7
   {
      "name" : "Cycloptic Statue",
      "type" : "use",
      "icon" : "data/textures/items/cyclopsTalisman.png",
      "rarity" : 500,
      "groups" : ["default", "misc"],
      "spell" : "Summon Cyclops",
      "chargesMin" : 2,
      "chargesMax" : 3,
      "baseValue" : 150,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Healing Vial",
      "type" : "use",
      "icon" : "data/textures/items/vialOfHealth.png",
      "rarity" : 1750,
      "groups" : ["default", "potion", "water"],
      "spell" : "Fast Heal",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 130,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Wand of Curing",
      "type" : "use",
      "icon" : "data/textures/items/yellowWand2.png",
      "rarity" : 1000,
      "groups" : ["default", "misc", "water"],
      "spell" : "Range Cure",
      "chargesMin" : 3,
      "chargesMax" : 9,
      "baseValue" : 115,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Wand of Disruption",
      "type" : "use",
      "icon" : "data/textures/items/greenWand.png",
      "rarity" : 1000,
      "groups" : ["default", "misc", "water"],
      "spell" : "Disrupt",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 130,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "War Amulet",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet9.png",
      "rarity" : 750,
      "groups" : ["default", "misc", "water"],
      "armorClass" : 1,
      "strengthBonus" : 3,
      "accuracyBonus" : 2,
      "constitutionBonus" : 1,
      "baseValue" : 500,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Amulet of Shadow",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet5.png",
      "rarity" : 750,
      "groups" : ["default", "misc", "water"],
      "armorClass" : 2,
      "accuracyBonus" : 4,
      "constitutionBonus" : 1,
      "baseValue" : 500,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Amulet of Light",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet10.png",
      "rarity" : 750,
      "groups" : ["default", "misc", "water"],
      "armorClass" : 3,
      "constitutionBonus" : 1,
      "awarenessBonus" : 4,
      "baseValue" : 500,
      "level" : 7,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Strengthsword",
      "type" : "weapon",
      "icon" : "data/textures/items/magicSword2.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 10,
      "meleeMaxDamage" : 30,
      "toHitBonus" : 5,
      "strengthBonus" : 5,
      "baseValue" : 600,
      "level" : 7,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Bow of Seeking",
      "type" : "weapon",
      "icon" : "data/textures/items/magicBow2.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "rangeMinDamage" : 5,
      "rangeMaxDamage" : 20,
      "toHitBonus" : 5,
      "accuracyBonus" : 3,
      "baseValue" : 610,
      "level" : 7,
      "rangeAnimation" : "animArrow.png",
      "usedBy" : ["archer"]
   },
   {
      "name" : "Staff of Wisdom",
      "type" : "weapon",
      "icon" : "data/textures/items/yellowStaff.png",
      "rarity" : 1000,
      "groups" : ["default", "weapon"],
      "meleeMinDamage" : 5,
      "meleeMaxDamage" : 15,
      "rangeMinDamage" : 4,
      "rangeMaxDamage" : 10,
      "rangeAnimation" : "animColdBallSmall.png",
      "toHitBonus" : 5,
      "awarenessBonus" : 3,
      "resistance" : 1,
      "baseValue" : 675,
      "level" : 7,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Platemail Armor",
      "type" : "armor",
      "icon" : "data/textures/items/plateMail.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 6,
      "resistance" : 1,
      "constitutionBonus" : 1,
      "baseValue" : 720,
      "level" : 7,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Armored Boots",
      "type" : "boots",
      "icon" : "data/textures/items/armoredBoots.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 4,
      "baseValue" : 540,
      "level" : 7,
      "usedBy" : ["warrior"]
   },
   //// Level 8
   {
      "name" : "Cloak of Displacement",
      "type" : "armor",
      "icon" : "data/textures/items/purpleCloak.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 6,
      "resistance" : 3,
      "baseValue" : 965,
      "level" : 8,
      "usedBy" : ["mage"]
   },
   {
      "name" : "Energy Vial",
      "type" : "use",
      "icon" : "data/textures/items/vialOfEnergy.png",
      "rarity" : 1750,
      "groups" : ["default", "potion", "elf", "water"],
      "spell" : "Fast Restore",
      "chargesMin" : 2,
      "chargesMax" : 5,
      "baseValue" : 120,
      "level" : 8,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Mithril Armor",
      "type" : "armor",
      "icon" : "data/textures/items/mithrilArmor.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 7,
      "resistance" : 2,
      "baseValue" : 1350,
      "level" : 8,
      "usedBy" : ["archer"]
   },
   {
      "name" : "Force Shield",
      "type" : "shield",
      "icon" : "data/textures/items/bigShield.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 5,
      "constitutionBonus" : 2,
      "baseValue" : 1100,
      "level" : 8,
      "usedBy" : ["warrior"]
   },
   {
      "name" : "Amulet of Awe",
      "type" : "amulet",
      "icon" : "data/textures/items/amulet11.png",
      "rarity" : 1000,
      "groups" : ["default", "misc", "water"],
      "armorClass" : 3,
      "strengthBonus" : 3,
      "accuracyBonus" : 3,
      "constitutionBonus" : 3,
      "awarenessBonus" : 3,
      "baseValue" : 1200,
      "level" : 8,
      "usedBy" : ["warrior", "archer", "mage"]
   },
   {
      "name" : "Enchanted Boots",
      "type" : "boots",
      "icon" : "data/textures/items/enchantedBoots.png",
      "rarity" : 1000,
      "groups" : ["default", "armor"],
      "armorClass" : 3,
      "resistance" : 1,
      "baseValue" : 940,
      "extraMoves" : 1,
      "level" : 8,
      "usedBy" : ["archer", "mage"]
   },
   {
      "name" : "Enchanted Helm",
      "type" : "hat",
      "icon" : "data/textures/items/enchantedHelm2.png",
      "rarity" : 750,
      "groups" : ["default", "armor"],
      "armorClass" : 5,
      "resistance" : 2,
      "accuracyBonus" : 1,
      "baseValue" : 550,
      "level" : 8,
      "usedBy" : ["archer"]
   },
   {
      "name" : "Flayer Talisman",
      "type" : "use",
      "icon" : "data/textures/items/flayerTalisman.png",
      "rarity" : 500,
      "groups" : ["default", "misc"],
      "spell" : "Summon Flayer",
      "chargesMin" : 2,
      "chargesMax" : 4,
      "baseValue" : 300,
      "level" : 8,
      "usedBy" : ["warrior", "archer", "mage"]
   }

]);