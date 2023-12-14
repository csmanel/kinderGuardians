// const apiKey = '3fd152d590a94ab088993fcc9292e6f9';
// const URL =
//   'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/';
// fetch(URL, { headers: { 'X-API-Key': apiKey } });

// const bungie = async function () {
//   let response = await fetch(URL, { headers: { 'X-API-Key': apiKey } });

//   let data = await response.json();
//   console.log(data);
// };

// bungie();

class Example {
  constructor(ele) {
    this.ele = ele;
    this.ele.innerHTML = '<h1>working!</h1>';

    // this.handleClick = this.handleClick.bind(this);
    // this.ele.addEventListener('click', this.handleClick);
    this.ele.addEventListener('click', () => this.handleClick());
  }

  handleClick() {
    this.ele.children[0].innerText = 'slightly different working!';
  }
}

export default Example;
