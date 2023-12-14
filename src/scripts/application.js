const apiKey = '3fd152d590a94ab088993fcc9292e6f9';
const URL =
  'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/';
fetch(URL, { headers: { 'X-API-Key': apiKey } });

const getGjall = async function () {
  let response = await fetch(URL, { headers: { 'X-API-Key': apiKey } });

  let data = await response.json();
  console.log(data);
};

getGjall();

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

// possible useful fetches
// Trending.GetTrendingCategories
// Returns trending items for Bungie.net, collapsed into the first page of items per category. For pagination within a category, call GetTrendingCategory.

// Trending.GetTrendingCategory
// Returns paginated lists of trending items for a category.

// Trending.GetTrendingEntryDetail
// Returns the detailed results for a specific trending entry. Note that trending entries are uniquely identified by a combination of *both* the TrendingEntryType *and* the identifier: the identifier alone is not guaranteed to be globally unique.
