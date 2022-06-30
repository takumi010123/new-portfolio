// ハンバーガーメニュー
function hamburger() {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('nav').classList.toggle('in');
  document.getElementById('body').classList.toggle('in');
}
document.getElementById('hamburger').addEventListener('click' , function () {
  hamburger();
} );

document.getElementById('nav').addEventListener('click' , function () {
  document.getElementById('line1').classList.remove('line_1');
  document.getElementById('line2').classList.remove('line_2');
  document.getElementById('line3').classList.remove('line_3');
  document.getElementById('nav').classList.remove('in');
  document.getElementById('body').classList.remove('in');
} );

//スクロールアニメーション
AOS.init({
  duration: 1000,
  once: true,
});

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
     let href = smoothScrollTrigger[i].getAttribute('href'); // 各a要素のリンク先を取得
     let targetElement = document.getElementById(href.replace('#', '')); // リンク先の要素（コンテンツ）を取得
     const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
     const offset = window.pageYOffset; // 現在のスクロール量を取得
     const gap = 50; // 固定ヘッダー分の高さ
     const target = rect + offset - gap; //最終的な位置を割り出す
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });

}