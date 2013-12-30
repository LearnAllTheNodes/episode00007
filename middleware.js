
// Middlwarez
function stoopidLogger(options) {
  return function stoopidLoggerInner(req,res,next) {
    console.log("Hi! I was called at: ", req.path)
    next()
  }
}

function notFound(req,res) {
  res.setHeader("Content-Type", 'text/html')
  res.send(404, "Confound it all!  We could not find ye's page! ")
}

function catchErrors(err,req,res,next) {
  console.log("There was an error! In the real world, I might be alerting the engineering team.")
  next(err)
}

function showErrorPage(err,req,res,next) {
  res.setHeader("Content-Type", 'text/html')
  res.send(500, "Confound it all! It's a 500 error!")
}

module.exports = function(app,express) {
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.cookieParser())
  app.use(express.cookieSession({secret: "it'sasecrettoeverybody", key: "session"}))
  app.use("/", stoopidLogger())
  app.use(app.router)
  app.use(express.static(__dirname + '/public'))
  app.use(notFound)
  app.use(catchErrors)
  app.use(showErrorPage)
}
