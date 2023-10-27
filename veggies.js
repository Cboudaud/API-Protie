const veggies = [
    {
        id: 0,
        name: 'Whey végétale',
        // the value of protein is a value for 100grs
        protein: 70.00,
    },

    {
        id: 1,
        name: 'Farine de soja',
        protein: 47.01,
    },

    {
        id: 2,
        name: 'Spiruline séchée',
        protein: 57.47,
    },

    {
        id: 3,
        name: 'Levure alimentaire',
        protein: 40.4,
    },

    {
        id: 4,
        name: 'Lupin',
        protein: 36.17,
    },

    {
        id: 5,
        name: 'Soja (graine)',
        protein: 34.50,
    },

    {
        id: 6,
        name: 'Chanvre (graine)',
        protein: 32.73,
    },

    {
        id: 7,
        name: 'Citrouille (graine)',
        "protein": 30.23,
    },

    {
        id: 8,
        name: 'Cacahuètes (arachide)',
        protein: 25.8,
    },

    {
        id: 9,
        name: 'Lentille (crue)',
        protein: 24.63,
    },

    {
        id: 10,
        name: 'Fenugrec (graine)',
        protein: 23.00,
    },

    {
        id: 11,
        name: 'Amande',
        protein: 21.15,
    },

    {
        id: 12,
        name: 'Tournesol (graine)',
        protein: 20.78,
    },

    {
        id: 13,
        name: 'Pois-chiche',
        protein: 20.47,
    },

    {
        id: 14,
        name: 'Pistache',
        protein: 20.27,
    },

    {
        id: 15,
        name: 'Flageolet (haricot)',
        protein: 19.10,
    },

    {
        id: 16,
        name: 'Tempeh',
        protein: 18.54,
    },

    {
        id: 17,
        name: 'Noix de cajou (crue)',
        protein: 18.22,
    },

    {
        id: 18,
        name: 'Lardons végétaux',
        protein: 17.00,
    },

    {
        id: 19,
        name: 'Steak végétal',
        protein: 17.00,
    },

    {
        id: 20,
        name: 'Avoine',
        protein: 16.89,
    },

    {
        id: 21,
        name: 'Chia (graine)',
        protein: 16.54,
    },

    {
        id: 22,
        name: 'Son d’avoine',
        protein: 15.80,
    },

    {
        id: 23,
        name: 'Farine de blé entier',
        protein: 14.64,
    },

    {
        id: 24,
        name: 'Épeautre',
        protein: 14.57,
    },

    {
        id: 25,
        name: 'Noisette grillée',
        protein: 14.40,
    },

    {
        id: 26,
        name: 'Noix fraîche',
        protein: 14.30,
    },

    {
        id: 27,
        name: 'Noix séchée (cerneaux)',
        protein: 14.00,
    },

    {
        id: 28,
        name: 'Bacon végétal',
        protein: 14.00,
    },

    {
        id: 29,
        name: 'Noisette',
        protein: 13.90,
    },

    {
        id: 30,
        name: 'Pignon de pin',
        protein: 13.69,
    },

    {
        id: 31,
        name: 'Amarante (crue)',
        protein: 13.50,
    },

    {
        id: 32,
        name: 'Flocons d’avoine',
        protein: 13.30,
    },

    {
        id: 33,
        name: 'Sarrasin',
        protein: 13.25,
    },

    {
        id: 34,
        name: 'Quinoa cru',
        protein: 13.10,
    },

    {
        id: 35,
        name: 'Goji',
        protein: 13.00,
    },

    {
        id: 36,
        name: 'Edamame',
        protein: 12.95,
    },

    {
        id: 37,
        name: 'Orge',
        protein: 11.00,
    },

    {
        id: 38,
        name: 'Tofu (nature)',
        protein: 9.91,
    },

    {
        id: 39,
        name: 'Noix de pécan',
        protein: 9.57,
    },

    {
        id: 40,
        name: 'Maïs entier',
        protein: 8.10,
    },

    {
        id: 41,
        name: 'Noix de macadamia',
        protein: 7.91,
    },

    {
        id: 42,
        name: 'Riz blanc (cru)',
        protein: 7.04,
    },

    {
        id: 43,
        name: 'Riz complet (cru)',
        protein: 7.02,
    },

    {
        id: 44,
        name: 'Noix de coco sèche',
        protein: 6.62,
    },

    {
        id: 45,
        name: 'Ail',
        protein: 6.36,
    },

    {
        id: 46,
        name: 'Spiruline crue',
        protein: 5.92,
    },

    {
        id: 47,
        name: 'Petit pois',
        protein: 5.42,
    },

    {
        id: 48,
        name: 'Wasabi (racine crue)',
        protein: 4.80,
    },

    {
        id: 49,
        name: 'Choux de Bruxelles',
        protein: 3.38,
    },

    {
        id: 50,
        name: 'Noix de coco crue',
        protein: 3.33,
    },

    {
        id: 51,
        name: 'Lait de soja',
        protein: 3.31,
    },

    {
        id: 52,
        name: 'Chou kale',
        protein: 3.30,
    },

    {
        id: 53,
        name: 'Figue séchée',
        protein: 3.30,
    },
    
    {
        id: 54,
        name: 'Salsifis (cru)',
        protein: 3.30,
    },

    {
        id: 55,
        name: 'Artichaut',
        protein: 3.27,
    },

    {
        id: 56,
        name: 'Morille',
        protein: 3.12,
    },

    {
        id: 57,
        name: 'Champignon blanc',
        protein: 3.09,
    },

    {
        id: 58,
        name: 'Wakame (crue)',
        protein: 3.03,
    },

    {
        id: 59,
        name: 'Persil',
        protein: 2.97,
    },

    {
        id: 60,
        name: 'Epinard',
        protein: 2.86,
    },

    {
        id: 61,
        name: 'Brocoli',
        protein: 2.82,
    },

    {
        id: 62,
        name: 'Tamarin (cru)',
        protein: 2.80,
    },

    {
        id: 63,
        name: 'Cresson',
        protein: 2.60,
    },

    {
        id: 64,
        name: 'Roquette',
        protein: 2.58,
    },

    {
        id: 65,
        name: 'Goyave',
        protein: 2.55,
    },

    {
        id: 66,
        name: 'Échalotte',
        protein: 2.50,
    },

    {
        id: 67,
        name: 'Datte séchée',
        protein: 2.45,
    },

    {
        id: 68,
        name: 'Fruit de la passion',
        protein: 2.30,
    },

    {
        id: 69,
        name: 'Asperge',
        protein: 2.20,
    },

    {
        id: 70,
        name: 'Pruneau sec',
        protein: 2.18,
    },

    {
        id: 71,
        name: 'Raisin sec',
        protein: 2.09,
    },

    {
        id: 72,
        name: 'Pomme de terre',
        protein: 2.02,
    },

    {
        id: 73,
        name: 'Avocat',
        protein: 2.00,
    },

    {
        id: 74,
        name: 'Mâche',
        protein: 2.00,
    },

    {
        id: 75,
        name: 'Topinambour',
        protein: 2.00,
    },

    {
        id: 76,
        name: 'Chou-fleur',
        protein: 1.92,
    },

    {
        id: 77,
        name: 'Kumquat',
        protein: 1.88,
    },

    {
        id: 78,
        name: 'Haricot vert',
        protein: 1.85,
    },

    {
        id: 79,
        name: 'Grenade',
        protein: 1.67,
    },

    {
        id: 80,
        name: 'Châtaigne',
        protein: 1.63,
    },

    {
        id: 81,
        name: 'Marron',
        protein: 1.63,
    },

    {
        id: 82,
        name: 'Betterave',
        protein: 1.61,
    },

    {
        id: 83,
        name: 'Patate douce',
        protein: 1.57,
    },

    {
        id: 84,
        name: 'Céleri rave',
        protein: 1.50,
    },

    {
        id: 85,
        name: 'Poireau',
        protein: 1.50,
    },

    {
        id: 86,
        name: 'Abricot',
        protein: 1.40,
    },

    {
        id: 87,
        name: 'Cassis',
        protein: 1.40,
    },

    {
        id: 88,
        name: 'Chicorée (racine)',
        protein: 1.40,
    },

    {
        id: 89,
        name: 'Groseille',
        protein: 1.40,
    },

    {
        id: 90,
        name: 'Manioc',
        protein: 1.36,
    },

    {
        id: 91,
        name: 'Orange',
        protein: 1.30,
    },

    {
        id: 92,
        name: 'Framboise',
        protein: 1.28,
    },

    {
        id: 93,
        name: 'Endive',
        protein: 1.25,
    },

    {
        id: 94,
        name: 'Fenouil',
        protein: 1.24,
    },

    {
        id: 95,
        name: 'Courgette',
        protein: 1.21,
    },

    {
        id: 96,
        name: 'Panais',
        protein: 1.20,
    },

    {
        id: 97,
        name: 'Pâtisson',
        protein: 1.20,
    },

    {
        id: 98,
        name: 'Kiwi',
        protein: 1.14,
    },

    {
        id: 99,
        name: 'Airelle',
        protein: 1.10,
    },

    {
        id: 100,
        name: 'Citron',
        protein: 1.10,
    },

    {
        id: 101,
        name: 'Griotte',
        protein: 1.10,
    },

    {
        id: 102,
        name: 'Oignon',
        protein: 1.10,
    },

    {
        id: 103,
        name: 'Oseille',
        protein: 1.10,
    },

    {
        id: 104,
        name: 'Banane',
        protein: 1.09,
    },

    {
        id: 105,
        name: 'Rutabaga',
        protein: 1.08,
    },

    {
        id: 106,
        name: 'Nectarine',
        protein: 1.06,
    },

    {
        id: 107,
        name: 'Olive verte',
        protein: 1.03,
    },

    {
        id: 108,
        name: 'Cerise',
        protein: 1.00,
    },

    {
        id: 109,
        name: 'Citrouille',
        protein: 1.00,
    },

    {
        id: 110,
        name: 'Poivron',
        protein: 1.00,
    },

    {
        id: 111,
        name: 'Aubergine',
        protein: 0.98,
    },

    {
        id: 112,
        name: 'Carotte',
        protein: 0.93,
    },

    {
        id: 113,
        name: 'Pêche',
        protein: 0.91,
    },

    {
        id: 114,
        name: 'Laitue iceberg',
        protein: 0.90,
    },

    {
        id: 115,
        name: 'Navet',
        protein: 0.90,
    },

    {
        id: 116,
        name: 'Rhubarbe',
        protein: 0.90,
    },

    {
        id: 117,
        name: 'Clémentine',
        protein: 0.85,
    },

    {
        id: 118,
        name: 'Litchi',
        protein: 0.83,
    },

    {
        id: 119,
        name: 'Mangue',
        protein: 0.82,
    },

    {
        id: 120,
        name: 'Mandarine',
        protein: 0.81,
    },

    {
        id: 121,
        name: 'Myrtille',
        protein: 0.81,
    },

    {
        id: 122,
        name: 'Tomate',
        protein: 0.80,
    },

    {
        id: 123,
        name: 'Figue',
        protein: 0.75,
    },

    {
        id: 124,
        name: 'Potiron',
        protein: 0.75,
    },

    {
        id: 125,
        name: 'Figue de barbarie',
        protein: 0.73,
    },

    {
        id: 126,
        name: 'Melon',
        protein: 0.73,
    },

    {
        id: 127,
        name: 'Raisin (cru)',
        protein: 0.72,
    },

    {
        id: 128,
        name: 'Citron vert',
        protein: 0.70,
    },

    {
        id: 129,
        name: 'Prune',
        protein: 0.70,
    },

    {
        id: 130,
        name: 'Céleri branche',
        protein: 0.69,
    },

    {
        id: 131,
        name: 'Radis',
        protein: 0.68,
    },

    {
        id: 132,
        name: 'Radis',
        protein: 0.68,
    },

    {
        id: 133,
        name: 'Cocombre',
        protein: 0.65,
    },

    {
        id: 134,
        name: 'Fraise',
        protein: 0.65,
    },

    {
        id: 135,
        name: 'Pamplemousse',
        protein: 0.63,
    },

    {
        id: 136,
        name: 'Potimarron',
        protein: 0.63,
    },

    {
        id: 137,
        name: 'Pastèque',
        protein: 0.61,
    },

    {
        id: 138,
        name: 'Kaki',
        protein: 0.58,
    },

    {
        id: 139,
        name: 'Ananas',
        protein: 0.54,
    },

    {
        id: 140,
        name: 'Mirabelle',
        protein: 0.50,
    },

    {
        id: 141,
        name: 'Papaye',
        protein: 0.47,
    },

    {
        id: 142,
        name: 'Coing',
        protein: 0.40,
    },

    {
        id: 143,
        name: 'Poire',
        protein: 0.36,
    },

    {
        id: 144,
        name: 'Pomme',
        protein: 0.26,
    },

    {
        id: 145,
        name: 'Œuf',
        protein: 13.00,
    },

    {
        id: 146,
        name: 'Fromage blanc (vache)',
        protein: 8.00,
    },

    {
        id: 147,
        name: 'Skyr',
        protein: 14.00,
    },

    {
        id: 148,
        name: 'Petits suisses',
        protein: 9.50,
    },

  ];
  
  module.exports = veggies;
