'use strict';
{
  // ハンバーガーメニュー
  const header = document.getElementById('js-header');
  const headerHamburger = document.getElementById('js-headerHamburger');
  const main = document.getElementById('js-main');
  const footer = document.getElementById('js-footer');
  headerHamburger.addEventListener('click', () => {
    header.classList.toggle('is-open');
    main.classList.toggle('hide');
    footer.classList.toggle('is-changed');
  });

  // // トップページ　幕
  // const topHero = document.getElementById('js-topHero');
  // setTimeout(() => {topHero.classList.add('-visible')}, 2000)
}