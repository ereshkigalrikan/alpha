import {text, pink, normal} from 'style'
import {print} from 'game'
import {play} from 'Scene'
import Scene from 'Scene'
import {IntroNo} from 'scenes.mock'
import Player from 'Player'
import Room from 'Room'

export default Object.assign new Room,
  writer: 'Lucky'

  onEnter: ->
    print"""
      You are floating in a void. How did you get here?
    """
