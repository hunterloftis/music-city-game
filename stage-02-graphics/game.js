const START_X = 0
const START_Y = 540
const FLAPPY_SIZE = 55

class Entity {
    constructor(x, y, size) {
        Object.assign(this, { x, y, size })
    }
}

class Flappy extends Entity {
    constructor(x, y) {
        super(x, y, FLAPPY_SIZE)
    }
}

export default class Game {
    constructor() {
        this.flappy = new Flappy(START_X, START_Y)
    }
}