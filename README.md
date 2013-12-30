# Node code in other files

We've had lots of fun so far, but our application is getting out of hand.  We've been cramming everything into a single file.  It would sure be nice if we could put code into other files so that we don't have to look at everything all at once and get lost.

Node certainly does have a mechanism for this, and it's the `require` function that we've already seen.   But it isn't quite as straightforward as it may seem.  There's more to `require` than meets the eye, and in this episode we demystify Node modules and how the `require` function works.  We'll figure out where Node looks for files that you `require` as well as the difference between `exports` and `module.exports`.

This is a longer episode, but this is a fundamental Node concept and well worth understanding properly.

## Notes

[The Episode](http://www.learnallthenodes.com/episodes/7-node-code-in-other-files)

[Common JS](http://www.commonjs.org/)

[Node.js modules documentation](http://nodejs.org/api/modules.html)

[Hacksparrow on exports vs module.exports](http://www.hacksparrow.com/node-js-exports-vs-module-exports.html)

    // This is the tl;dw summary of the episode.  It glosses over many important details.
    require("express")
    require("./express")
    exports.theAnswer = 42
    module.exports = {
      theAnswer: 42
    }
