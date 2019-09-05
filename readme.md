# Let's Build a Game!

Workshop at Music City Code 2019

## How to use

Copy the stage you want to work from into a new directory:

```
$ cp -r stage-00-start mygame
```

Install & start the server:

```
$ npm install
$ npm run dev
```

Then [open http://localhost:8080](http://localhost:8080) and build your game!

## Publishing

First, edit the "start" script in `package.json` to `cd` into the directory of your game
(eg, `cd mygame && ...`). Then, create an app and publish it:

```
$ heroku create name-your-game
$ git push heroku master
$ heroku open
```

## Attributions

- [Flappy Chicken - Bevouliin](https://opengameart.org/content/bevouliin-free-flappy-chicken)
- [Spiky Monster - Bevouliin](https://opengameart.org/content/spiky-monster-obstacle)
- [Background Image - Bevouliin](https://opengameart.org/content/cozy-endless-game-background)
- [Gold Coin - Craftpix.net](https://craftpix.net/freebies/free-game-coins-sprite-sheets/)
- "Next..." assets: Bevouliin.net & Craftpix.net