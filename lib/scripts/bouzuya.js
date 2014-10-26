// Description
//   A Hubot script that ([:-P
//
// Configuration:
//   None
//
// Commands:
//   ([:-P - ([:-P
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  return robot.hear(/^\((?:(?:\[(?::(?:-(?:P)?)?)?)?)?$/i, function(res) {
    return res.send('([:-P http://bouzuya.net');
  });
};
