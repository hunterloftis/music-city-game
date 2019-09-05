const FLAPPY_LEFT = 250

function Sprite(path, frames = 1) {
    const files = Array(frames).fill(true).map((_, n) => `${path}${n}.png`)
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
        this.spike = Sprite('assets/spike')
        this.coin = Sprite('assets/coin', 10)
    }
    render(game, ctx) {
        const flappyFrame = Math.floor(performance.now() / 100) % this.flappy.length
        const flappy = this.flappy[flappyFrame]
        const spike = this.spike[0]
        const coinFrame = Math.floor(performance.now() / 100) % this.coin.length
        const coin = this.coin[coinFrame]

        ctx.save()
            ctx.drawImage(this.bg[0], 0, 0)
            ctx.save()
                ctx.translate(FLAPPY_LEFT - game.flappy.x, 0)
                ctx.drawImage(flappy, game.flappy.x - flappy.width * 0.6, game.flappy.y - flappy.height * 0.5)
                game.spikes.forEach(s => {
                    if (s.x < game.flappy.x - 300 || s.x > game.flappy.x + 2000) return
                    ctx.drawImage(spike, s.x - spike.width * 0.5, s.y - spike.height * 0.55)
                })
                game.coins.forEach(c => {
                    if (c.collected) return
                    if (c.x < game.flappy.x - 300 || c.y > game.flappy.x + 2000) return
                    ctx.drawImage(coin, c.x - coin.width * 0.5, c.y - coin.height * 0.5)
                })
            ctx.restore()
        ctx.restore()
    }
}