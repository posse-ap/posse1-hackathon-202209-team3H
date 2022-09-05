'use strict';
{
  // ハンバーガーメニュー
  const topBody = document.getElementById('js-topBody')
  const header = document.getElementById('js-header');
  const headerHamburger = document.getElementById('js-headerHamburger');
  const main = document.getElementById('js-main');
  const footer = document.getElementById('js-footer');
  headerHamburger.addEventListener('click', () => {
    topBody.classList.toggle('is-changed')
    header.classList.toggle('is-open');
    main.classList.toggle('hide');
    footer.classList.toggle('is-changed');
  });

  // いいねボタン
  const like = document.getElementsByName('js-like');
  const likeButton = document.getElementsByName('js-likeButton');
  for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click', () => {
      likeButton[i].classList.toggle('is-pushed')
    })
  }
}
