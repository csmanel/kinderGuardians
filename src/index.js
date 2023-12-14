import Example from './scripts/application';

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  new Example(main);

  console.log('hello world');
  // this is where things will actually start
});
