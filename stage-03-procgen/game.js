const START_X = 0
const START_Y = 540

const GRID_LEFT = 200
const GRID_TOP = 200
const GRID_SIZE = 200
const GRID_COLUMNS = 800
const GRID_ROWS = 5
const GRID_DENSITY = 0.06

class Entity {
    constructor(x, y, size) {
        Object.assign(this, { x, y, size })
    }
}

class Flappy extends Entity {
    constructor(x, y) {
        super(x, y, 55)
    }
}

class Spike extends Entity {
    constructor(x, y) {
        super(x, y, 50)
    }
}

class Coin extends Entity {
    constructor(x, y) {
        super(x, y, 55)
    }
}

export default class Game {
    constructor() {
        this.flappy = new Flappy(START_X, START_Y)
        this.spikes = []
        this.coins = []

        for (let c = 0; c < GRID_COLUMNS; c++) {
            for (let r = 0; r < GRID_ROWS; r++) {
                const x = GRID_LEFT + c * GRID_SIZE
                const y = GRID_TOP + r * GRID_SIZE
                if (Math.random() < GRID_DENSITY) {
                    this.spikes.push(new Spike(x, y))
                }
                else if (Math.random() < GRID_DENSITY) {
                    this.coins.push(new Coin(x, y))
                }
            }
        }
    }
}