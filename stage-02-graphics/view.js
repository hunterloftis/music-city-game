const WIDTH = 1920
const FLAPPY_LEFT = 250

function Sprite(path, n = 1) {
    const files = Array(n).fill(true).map((_, n) => `${path}${n}.png`)
    return files.map(f => {
        const im = new Image()
        im.src = f
        return im
    })
}

export default class View {
    constructor() {
        this.bg = Sprite('assets/background')
        this.flappy = Sprite('assets/flappy', 4)
    }
    render(game, ctx) {
        const flappyFrame = Math.floor(performance.now() / 100) % this.flappy.length
        const flappy = this.flappy[flappyFrame]

        ctx.save()
            ctx.drawImage(this.bg[0], 0, 0)
            ctx.save()
                ctx.translate(FLAPPY_LEFT - game.flappy.x, 0)
                ctx.drawImage(flappy, game.flappy.x - flappy.width * 0.6, game.flappy.y - flappy.height * 0.5)
            ctx.restore()
        ctx.restore()
    }
}