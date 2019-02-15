import {text, pink, normal} from 'style'
import {print} from 'game'
import {play} from 'Scene'
import Scene from 'Scene'
import {IntroNo} from 'scenes.mock'
import Player from 'Player'
import {enter} from 'Room'
import Room from 'Room'
import {Church, ChurchWestWing, ChurchNorthWing} from 'rooms.mock'

export default Object.assign new Room,
  writer: 'Lucky'

  onEnter: ->
    print"""
      A nondescript north wing. You see a large boulder blocking a passageway.
    """

  "s North Wing": ->
    print"""
      You go back to the main church area. You feel a bit stronger for some strange reason.
    """
    Player.addStat 'strength', 1
    enter Church

  "e Attempt to Move Boulder": ->
    if Player.statistics.strength > 5
      print"""
        You successfully move the boulder, but the passageway was only a trick of your imagination.
      """
    else
      print"""
        You are unable to move the boulder and give up.
      """