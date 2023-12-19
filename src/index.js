import Example from './scripts/application';
import itemFetch from './scripts/itemFetch';
import text from './styles/text.scss';
import itemPage from './styles/itemPage.scss';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  new Example(main);

  // const modalOpen = document.getElementById('modal-open');
  // modalOpen.addEventListener('click', function () {
  //   console.log('opening');
  //   modal.style.display = 'flex';
  // });
  const modalClose = document.getElementById('modal-close');
  const modal = document.getElementById('modal-container');
  modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
