import Example from './scripts/application';
import itemFetch from './scripts/itemFetch';
import text from './styles/text.scss';
import itemPage from './styles/itemPage.scss';
import modalPage from './styles/modal.scss';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  new Example(main);

  const modal = document.querySelector('.modal');
  const traveler = document.getElementsByClassName('traveler');

  traveler[0].addEventListener('click', function () {
    modal.style.display = 'none';
  });
});
