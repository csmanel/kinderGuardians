import Example from './scripts/application';
import itemFetch from './scripts/itemFetch';
import text from './styles/text.scss';
import itemPage from './styles/itemPage.scss';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  new Example(main);

  console.log('hello world');
  // this is where things will actually start
  // console.log(weaponFetch('Witherhoard'));
});
