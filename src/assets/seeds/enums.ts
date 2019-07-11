module.exports = {
  matchTypes: [
    { id: 0, value: 'none', text: 'None' },
    { id: 1, value: 'tournament', text: 'Tournament' },
    { id: 2, value: 'training', text: 'Training' }
  ],

  playerClassifications: [
    { id: 0, value: 'bc1', text: 'BC1' },
    { id: 1, value: 'bc2', text: 'BC2' },
    { id: 2, value: 'bc3', text: 'BC3' },
    { id: 3, value: 'bc4', text: 'BC4' }
  ],

  competitionTypes: ['individual', 'pair', 'team'],

  competitionEvents: {
    // default: [
    // { id: 0, value: 'none', text: 'None' }
    // ],
    individual: [
      // { id: 0, value: 'none', text: 'None' },
      { id: 1, value: 'bc1', text: 'Individual BC1', shortText: 'BC1' },
      { id: 2, value: 'bc2', text: 'Individual BC2', shortText: 'BC2' },
      { id: 3, value: 'bc3', text: 'Individual BC3', shortText: 'BC3' },
      { id: 4, value: 'bc4', text: 'Individual BC4', shortText: 'BC4' }
    ],
    pair: [
      // { id: 0, value: 'none', text: 'None' },
      { id: 5, value: 'pairBc3', text: 'Pair BC3', shortText: 'BC3' },
      { id: 6, value: 'pairBc4', text: 'Pair BC4', shortText: 'BC4' }
    ],
    team: [
      // { id: 0, value: 'none', text: 'None' },
      { id: 7, value: 'teamBc1Bc2', text: 'Team BC1/BC2', shortText: 'BC1/BC2' }
    ]
  },

  stageTypes: ['pool', 'elimination'],

  stageIndexes: {
    default: [
      { id: 0, value: 'none', text: 'None' }
    ],
    pool: [
      // { id: 0, value: 'none', text: 'N/A' },
      { id: 1, value: 'poolA', text: '1st' },
      { id: 2, value: 'poolB', text: '2nd' },
      { id: 3, value: 'poolC', text: '3rd' },
      { id: 4, value: 'poolD', text: '4th' },
      { id: 5, value: 'poolE', text: '5th' }
    ],

    elimination: [
      // { id: 0, value: 'none', text: 'N/A' },
      { id: 1, value: 'final8', text: '1/8' },
      { id: 2, value: 'final4', text: '1/4' },
      { id: 3, value: 'final2', text: '1/2' },
      { id: 4, value: 'bronzeFinal', text: 'Bronze' },
      { id: 5, value: 'final', text: 'Final' }
    ]
  },

  shotTypes: [
    { id: 1, value: 'firstBall', text: 'First ball', abbr: 'FB' },
    { id: 2, value: 'placement', text: 'Placement', abbr: 'PL' },
    { id: 3, value: 'pushOn', text: 'Push on', abbr: 'PO' },
    { id: 4, value: 'pushOff', text: 'Push off', abbr: 'PF' },
    { id: 5, value: 'smash', text: 'Smash', abbr: 'SM' },
    { id: 6, value: 'ricochet', text: 'Ricochet', abbr: 'RC' },
    { id: 7, value: 'bounceOver', text: 'Bounce over', abbr: 'BO' },
    { id: 8, value: 'rollOnTop', text: 'Roll on top', abbr: 'RT' },
    { id: 9, value: 'rollUpAndOver', text: 'Roll up and over', abbr: 'RU' },
    { id: 10, value: 'lobbingShot', text: 'Lob shot', abbr: 'LS' }
  ],

  deadBallTypes: [
    // { id: 0, value: 'none', text: 'None' },
    { id: 1, value: 'ballsNotThrown', text: 'Balls Not Thrown' },
    { id: 2, value: 'violation', text: 'Violation' },
    { id: 3, value: 'timeIsOut', text: 'Time expiring' }
  ],

  competitionBoxes: {
    individual: [
      { id: 3, teamColor: 'red' },
      { id: 4, teamColor: 'blue' }
    ],
    pair: [
      { id: 2, teamColor: 'red' },
      { id: 3, teamColor: 'blue' },
      { id: 4, teamColor: 'red' },
      { id: 5, teamColor: 'blue' }
    ],
    team: [
      { id: 1, teamColor: 'red' },
      { id: 2, teamColor: 'blue' },
      { id: 3, teamColor: 'red' },
      { id: 4, teamColor: 'blue' },
      { id: 5, teamColor: 'red' },
      { id: 6, teamColor: 'blue' }
    ]
  },

  throwDistances: [
    { id: 0, value: 'Undefined', text: 'unknown' },
    { id: 1, value: 'From15To20', text: '1m' },
    { id: 2, value: 'From20To25', text: '2m' },
    { id: 3, value: 'From25To30', text: '3m' },
    { id: 4, value: 'From30To35', text: '4m' },
    { id: 5, value: 'From35To40', text: '5m' },
    { id: 6, value: 'From40To45', text: '6m' },
    { id: 7, value: 'From45To50', text: '7m' },
    { id: 8, value: 'From50To55', text: '8m' },
    { id: 9, value: 'From55To60', text: '10m' },
    { id: 10, value: 'From60To65', text: '11m' },
    { id: 11, value: 'From65To75', text: '12m' }
    // { id: 12, value: 'From70To75', text: '7.0m' },
    // { id: 13, value: 'From75To80', text: '7.5m' },
    // { id: 14, value: 'From80To85', text: '7.0m' },
    // { id: 15, value: 'From85To90', text: '8.5m' },
    // { id: 16, value: 'From90To95', text: '8.0m' },
    // { id: 17, value: 'From95To100', text: '9.5m' }
  ]
}
