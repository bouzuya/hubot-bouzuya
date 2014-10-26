# Description
#   A Hubot script that ([:-P
#
# Configuration:
#   None
#
# Commands:
#   ([:-P - ([:-P
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  robot.hear /^\((?:(?:\[(?::(?:-(?:P)?)?)?)?)?$/i, (res) ->
    res.send '([:-P http://bouzuya.net'
