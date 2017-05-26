//

const createDotLineBackground = (selector) => {
  class Dot {
    constructor(x, y) {
      // 坐标
      this.x = x
      this.y = y
      // 半径
      this.r = Math.random() * 10
      // 移动距离
      this._mx = Math.random()
      this._my = Math.random()
    }
    drawDot(ctx) {
      // 开始路径
      ctx.beginPath()
      // 使用中心点和半径，为画布的当前子路径添加弧
      ctx.arc(this.x, this.y, this.r, 0, 360)
      // 创建从当前点到开始点的路径
      ctx.closePath()
      // 填充路径样式
      ctx.fillStyle = 'rgba(204, 204, 204, 0.3)'
      // 填充当前绘图
      ctx.fill()
    }
    drawLine(ctx, _dot) {
      let dx = this.x - _dot.x
      let dy = this.y - _dot.y
      let d = Math.sqrt(dx * dx + dy * dy)
      // 设置粒子圆心之间连线的范围
      if (d < 150) {
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        ctx.lineTo(_dot.x, _dot.y)
        ctx.closePath()
        ctx.strokeStyle = 'rgba(204, 204, 204, 0.3)'
        ctx.stroke()
      }
    }
    move(w, h) {
      // 必须在屏幕范围
      this._mx = (this.x < w && this.x > 0)
        ? this._mx
        : (-this._mx)
      this._my = (this.y < h && this.y > 0)
        ? this._my
        : (-this._my)
      this.x += this._mx / 2
      this.y += this._my / 2
    }
  }

  class CurrentDot extends Dot {
    constructor(x, y) {
      super(x, y)
    }

    drawDot(ctx) {
      ctx.beginPath()
      // 注释内容为鼠标脚垫的地方点的半径和样式变化
      // this.r = (this.r < 14 && this.r > 1)
      //   ? this.r + (Math.random() * 2 - 1)
      //   : 2
      this.r = 8
      ctx.arc(this.x, this.y, this.r, 0, 360)
      ctx.closePath()
      // ctx.fillStyle = 'rgba(0,0,0,' + (parseInt(Math.random() * 100) / 100) + ')'
      ctx.fillStyle = 'rgba(255, 77, 54, 0.6)'
      ctx.fill();
    }
  }

  // 更新页面用requestAnimationFrame替代setTimeout
  window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame

  let canvas = document.querySelector(selector)
  let ctx = canvas.getContext('2d')

  let w = canvas.width = canvas.offsetWidth
  let h = canvas.height = canvas.offsetHeight

  let dots = []
  let currentDot = new CurrentDot(0, 0)

  let draw = () => {
    ctx.clearRect(0, 0, w, h)
    for (let i = 0; i < dots.length; i++) {
      dots[i].move(w, h)
      dots[i].drawDot(ctx)
      for (let j = i + 1; j < dots.length; j++) {
        dots[i].drawLine(ctx, dots[j])
      }
    }
    if (currentDot.x) {
      currentDot.drawDot(ctx)
      for (let k = 1; k < dots.length; k++) {
        currentDot.drawLine(ctx, dots[k])
      }
    }
    requestAnimationFrame(draw)
  }

  const initDot = function (num) {
    for (let i = 0; i < num; i++) {
      dots.push(new Dot(Math.random() * w, Math.random() * h))
    }
    draw()
  }

  const init = (dotNum) => {
    window.addEventListener('load', initDot(dotNum))
    window.onmousemove = e => {
      e = e || window.event
      currentDot.x = e.clientX
      currentDot.y = e.clientY
    }
    window.onmouseout = function () {
      currentDot.x = null
      currentDot.y = null
    }
  }

  return {
    init
  }
}

export default createDotLineBackground






