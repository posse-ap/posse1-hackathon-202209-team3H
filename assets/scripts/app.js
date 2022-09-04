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
}