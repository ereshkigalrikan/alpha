// Generated by CoffeeScript 2.3.2
var IntroYes;

import {
  text,
  pink,
  normal
} from 'style';

import {
  print
} from 'game';

import {
  play
} from 'Scene';

import Scene from 'Scene';

import {
  IntroNo
} from 'scenes.mock';

import Player from 'Player';

import {
  enter
} from 'Room';

import Room from 'Room';

import {
  Church,
  ChurchWestWing,
  ChurchNorthWing
} from 'rooms.mock';

IntroYes = function() {
  print`${pink}\n"I thank you for your service. And the world does not know it yet, but it thanks you, too."\n${normal}\n\nShe stands up and puts her hand on your shoulder.\n\n${pink}\n"I will bestow your body with the mana I can sacrifice. However, your body has no ability to regenerate it.\n${normal}\n\nYou can feel a rush of energy enter your body, awakening nerves you never knew you had.\n\nYou blink and find yourself in a totally different place.`;
  return enter(Church);
};

export default Object.assign(new Scene, {
  writer: 'Lucky',
  onPlay: function() {
    return print`You try to open your eyes but see only darkness. You instinctively blink a few times, but you can't feel your eyelids. But you know there to be a silhouette in front of you--its very existence exuding power into your soul.\n\nIt speaks a command that you cannot hear and your body lurches forward in response, pushing you through a ethereal fabric, tearing a hole for you to enter. Passing through, your body feels heavy and you fall to your knees, gasping for air as your lungs fill with air for what seems like the first time. Your ${(true ? 'rough' : 'gentle')} entry knocks over a candle on the floor."\n\nShe lowers herself to kneel on one knee, pointing her head towards your feet.\n\n${pink}\n"I beg of you, will you accept my quest and restore order to this world?\n${normal}`;
  },
  "1 Yes": function() {
    print`You agree that you will do it. You're not sure what you need to do or if you can succeed, but you will try your best to help her.`;
    Player.is_willing = true;
    return play(IntroYes);
  },
  "2 Yes (lie)": function() {
    print`You agree that you will do it. You're not sure what you need to do or if you can succeed, but you will try your best to help her.`;
    Player.is_willing = true;
    return play(IntroYes);
  },
  "3 No": function() {
    return play(IntroNo);
  }
});
