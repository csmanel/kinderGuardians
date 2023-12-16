import 'the-new-css-reset/css/reset.css';

class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = '<h1>working!</h1>';
    this.ele.addEventListener('click', () => this.handleClick());
  }
  handleClick() {
    this.ele.children[0].innerText = 'slightly different working!';
  }
}
export default Example;
