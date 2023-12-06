
const ball = document.querySelector('.ball')
const ballPos = {
  x: 0,
  y: 0,
}

init()

// 初期化
function init() {
  window.requestAnimationFrame(() => {
    update()
  })
}

// 毎フレーム実行
function update() {
  // 目標値
  const tgX = window.innerWidth - 100

  // 分割数
  const ease = 0.05

  // 目標値と現在地の差分
  let dx = tgX - ballPos.x

  // ポイント！！
  // 差分を分割する
  // これにより、目標値に近づくにつれて、移動量が減っていく
  dx *= ease

  // 移動する
  ballPos.x += dx

  // ↑まとめるとこう書ける
  // ballPos.x += (tgX - ballPos.x) * ease

  gsap.set(ball, {
    x: ballPos.x,
  })

  window.requestAnimationFrame(() => {
    update()
  })
}
