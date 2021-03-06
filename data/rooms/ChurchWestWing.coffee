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
      A nondescript west wing.
    """

  "d North Wing": ->
    print"""
      You go back to the main church area.
    """
    enter Church
