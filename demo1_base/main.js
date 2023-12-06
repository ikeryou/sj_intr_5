
// 高さ設定用のdiv
const heightGuide = document.createElement('div')

// スクロールするターゲット
const scrollTarget = document.querySelector('.js-scroll-tg')
const scrollTargetPos = {
  y: 0,
}

init()


// 初期化
function init() {
  // 分かりやすいように色付け
  document.querySelectorAll('main > .block').forEach((el, i) => {
    el.style.backgroundColor = `hsl(${i * 30}, 70%, 70%)`
    el.innerHTML = `block_${i + 1}`
  })

  // 高さ設定用のdivをbodyに追加
  

  window.requestAnimationFrame(() => {
    update()
  })
}


// 毎フレーム実行
function update() {

  // メインコンテンツの高さを高さ設定用のdivに反映
  // 場合によっては毎フレームやんなくてもいいかも
  // リサイズイベントでやると、タイミング的にうまく高さがとれない時があるので避ける
  // 毎フレームやって重くなるとかはないと思う
  

  // スクロール位置
  
  
  // 目標値までのイージング demo2へ
  

  // gsap.set(scrollTarget, {
  //   y: -scrollTargetPos.y,
  // })

  window.requestAnimationFrame(() => {
    update()
  })
}
