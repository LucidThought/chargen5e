// stores static information for the D&D component to use
var races = ['Dwarf','Elf','Halfling','Human','Dragonborn','Gnome','Half-Elf','Half-Orc','Tiefling'];
var subRaces = {
    dwarf:["Hill Dwarf","Mountain Dwarf"],
    elf:["High Elf","Wood Elf", "Dark Elf"],
    halfling:["Lighfoot","Stout"]
}
var classes = {
    barbarian: {
        name: "Barbarian",
        paths: {
            title: "Primal Path",
            level: 3,
            options: [
                {
                    path: "Path of the Berserker"
                },
                {
                    path: "Path of the Totem Warrior"
                }
            ]
        }
    },
    bard: {
        name: "Bard",
        paths: {
            title: "Bard College",
            level: 3,
            options: [
                {
                    path: "College of Lore"
                },
                {
                    path: "College of Valor"
                }
            ]
        }
    },
    cleric: {
        name: "Cleric",
        paths: {
            title: "Divine Domain",
            level: 1,
            options: [
                {
                    path: "Knowledge Domain"
                },
                {
                    path: "Life Domain"
                },
                {
                    path: "Light Domain"
                },
                {
                    path: "Nature Domain"
                },
                {
                    path: "Tempest Domain"
                },
                {
                    path: "Trickery Domain"
                },
                {
                    path: "War Domain"
                }
            ]
        }
    },
    druid: {
        name: "Druid",
        paths: {
            title: "Druid Circle",
            level: 2,
            options: [
                {
                    path: "Circle of the Land" // This comes with more options, may need to handle this differently to show the options
                },
                {
                    path: "Circle of the Moon"
                }
            ]
        }
    },
    fighter: {
        name: "Fighter",
        paths: {
            title: "Martial Archetype",
            level: 3,
            options: [
                {
                    path: "Champion"
                },
                {
                    path: "Battle Master"
                },
                {
                    path: "Eldritch Knight"
                }
            ]
        }
    },
    monk: {
        name: "Monk",
        paths: {
            title: "Monastic Tradition",
            level: 3,
            options: [
                {
                    path: "Way of the Open Hand"
                },
                {
                    path: "Way of Shadow"
                },
                {
                    path: "Way of the Four Elements"
                }
            ]
        }
    },
    paladin: {
        name: "Paladin",
        paths: {
            title: "Sacred Oath",
            level: 3,
            options: [
                {
                    path: "Oath of Devotion"
                },
                {
                    path: "Oath of the Ancients"
                },
                {
                    path: "Oath of Vengeance"
                }
            ]
        }
    },
    ranger: {
        name: "Ranger",
        paths: {
            title: "Ranger Archetype",
            level: 3,
            options: [
                {
                    path: "Hunter"
                },
                {
                    path: "Beast Master"
                }
            ]
        }
    },
    rogue: {
        name: "Rogue",
        paths: {
            title: "Rogueish Archetype",
            level: 3,
            options: [
                {
                    path: "Thief"
                },
                {
                    path: "Assassin"
                },
                {
                    path: "Arcane Trickster"
                }
            ]
        }
    },
    sorcerer: {
        name: "Sorcerer",
        paths: {
            title: "Sorcerous Origin",
            level: 1,
            options: [
                {
                    path: "Draconic Bloodline"
                },
                {
                    path: "Wild Magic"
                },
                {
                    path: "Eldritch Knight"
                }
            ]
        }
    },
    warlock: {
        name: "Warlock",
        paths: {
            title: "Otherworldly Patron",
            level: 1,
            options: [
                {
                    path: "The Archfey"
                },
                {
                    path: "The Fiend"
                },
                {
                    path: "The Great Old One"
                }
            ]
        }
    },
    wizard: {
        name: "Wizard",
        paths: {
            title: "Arcane Tradition",
            level: 2,
            options: [
                {
                    path: "School of Abjuration"
                },
                {
                    path: "School of Conjuration"
                },
                {
                    path: "School of Divination"
                },
                {
                    path: "School of Enchantment"
                },
                {
                    path: "School of Evocation"
                },
                {
                    path: "School of Illusion"
                },
                {
                    path: "School of Necromancy"
                },
                {
                    path: "School of Transmutation"
                }
            ]
        }
    }
}

export {
    races,
    subRaces,
    classes
}