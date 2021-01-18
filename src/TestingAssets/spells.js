export const spell = {
  index: 'burning-hands',
  name: 'Burning Hands',
  desc: [
    'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.',
    "The fire ignites any flammable objects in the area that aren't being worn or carried.",
  ],
  higher_level: [
    'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
  ],
  range: 'Self',
  components: ['V', 'S'],
  ritual: false,
  duration: 'Instantaneous',
  concentration: false,
  casting_time: '1 action',
  level: 1,
  area_of_effect: {
    type: 'cone',
    size: 15,
  },
  school: {
    index: 'evocation',
    name: 'Evocation',
    url: '/api/magic-schools/evocation',
  },
  classes: [
    {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/classes/sorcerer',
    },
    {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/classes/wizard',
    },
  ],
};

export const spellMending = {
  index: 'mending',
  name: 'Mending',
  desc: [
    'As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.',
    "The fire ignites any flammable objects in the area that aren't being worn or carried.",
  ],
  higher_level: [
    'When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.',
  ],
  range: 'Self',
  components: ['V', 'S'],
  ritual: false,
  duration: 'Instantaneous',
  material: 'Two lodestones.',
  concentration: false,
  casting_time: '1 action',
  level: 0,
  area_of_effect: {
    type: 'cone',
    size: 15,
  },
  school: {
    index: 'evocation',
    name: 'Evocation',
    url: '/api/magic-schools/evocation',
  },
  classes: [
    {
      index: 'sorcerer',
      name: 'Sorcerer',
      url: '/api/classes/sorcerer',
    },
    {
      index: 'wizard',
      name: 'Wizard',
      url: '/api/classes/wizard',
    },
  ],
};
