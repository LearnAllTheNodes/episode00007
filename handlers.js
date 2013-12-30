exports.home = function home(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send('<html><head><title>NodeSlash</title></head><body><h1>Web\'s Premiere Browser Game</h1><p><form action="/login" method="POST"><label for="username">Username</label><input id="username" type="text" name="username"><button type="submit">Start ye adventures!</button></form></p><p><img src="/images/sword_and_shield.png"></p><a href="/adventures">Go to adventures</a></body></html>')
}

exports.adventuresIndex = function adventuresIndex(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Are ye bravez, " + req.session.username + "?</h1><form action='/adventures' method='POST'><button type='submit'>Yes I am bravez</button></form></body></html>")
}

exports.createAdventure = function createAdventure(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send('<html><head><title>Adventures - NodeSlash</title></head><body><h1>Thou hast bravez.</h1><form action="/adventures/42" method="POST"><input type="hidden" name="_method" value="put"><button type="submit">Cheat!</button></form><form action="adventures" method="POST"><button type="submit">Again!</button></form><p>You have found some <a href="/loot/1">loot.</a></p></body></html>')
}

exports.updateAdventure = function updateAdventure(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>It's a secret to everybody.</h1></body></html>")
}

exports.showLoot = function showLoot(req,res) {
  var id = req.params.id

  res.setHeader("Content-Type", 'text/html')
  res.send("<html><head><title>Adventures - NodeSlash</title></head><body><h1>Ogre-slaying knife</h1><p>It has +9 against ogres. It was id #" + id + "</p></body></html>")
}

exports.readFromDB = function readFromDB(req,res,next) {
  next(new Error("We don't need no stinkin' DB!"))
}


exports.login = function login(req,res) {
  if (req.body.username) {
    req.session.username = req.body.username
    res.redirect("/adventures")
  } else {
    res.redirect("/")
  }
}
