import Example from './scripts/application';
import itemFetch from './scripts/itemFetch';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  new Example(main);

  console.log('hello world');
  // this is where things will actually start
  // console.log(weaponFetch('Witherhoard'));
});
