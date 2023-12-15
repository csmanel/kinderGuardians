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

const apiKey = '3fd152d590a94ab088993fcc9292e6f9';
const manifestUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/';
// const jsonFilePath = './d2.json';

const weaponFetch = async function () {
  let response = await fetch(manifestUrl, {
    headers: {
      'X-API-Key': apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const manifest = data.Response;

      // const manifestKeys = Object.keys(manifest);
      // // console.log('Manifest Keys:', manifestKeys);

      // const worldComponentKeys = Object.keys(
      //   manifest.jsonWorldComponentContentPaths.en
      // );
      // console.log(
      //   'jsonWorldComponentContentPaths.en Keys:',
      //   worldComponentKeys
      // );
      const inventoryUrl =
        manifest.jsonWorldComponentContentPaths.en
          .DestinyInventoryItemDefinition;

      fetch('https://www.bungie.net' + inventoryUrl, {
        headers: {
          'Accept-Encoding': 'gzip',
        },
      })
        .then((response) => response.json())
        .then((inventoryData) => {
          const ignitionCodeItem = Object.values(inventoryData).filter(
            (item) => item.displayProperties.name === 'Ignition Code'
          );
          if (ignitionCodeItem) {
            console.log('Ignition Code item found!!!!!!', ignitionCodeItem);
          } else {
            console.log('Ignition Code item not found :(((((((( ');
          }
        })
        .catch((error) => {
          console.error('Error fetching inventory data:', error);
        });
    });
};
weaponFetch();
