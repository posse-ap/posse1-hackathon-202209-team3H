'use strict';
{
  // ハンバーガーメニュー
  const header = document.getElementById('js-header');
  const headerHamburger = document.getElementById('js-headerHamburger');
  headerHamburger.addEventListener('click', () => {
    header.classList.toggle('is-open')
  })

}