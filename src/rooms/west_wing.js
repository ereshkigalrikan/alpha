import {print, choose, change_mana, go} from '../core/game.js';
import {text, pink, blue} from '../core/game.js';
import {aphex_church} from './aphex_church.js';

export function west_wing() {
  print(text`
    A nondescript west wing.
  `);

  choose({
    'd': {
      label: 'Church Hall',
      action: function() {
        print(text`
          You go back to the main church area.
        `);

        go(aphex_church);
      },
    },
  });
};