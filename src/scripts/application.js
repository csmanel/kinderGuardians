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
// export default Example;

const apiKey = '3fd152d590a94ab088993fcc9292e6f9';
const manifestUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/';
// const jsonFilePath = './d2.json';

export default async function weaponFetch(searchName) {
  fetch(manifestUrl, {
    headers: {
      'X-API-Key': apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const manifest = data.Response;
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
          const codeItem = Object.values(inventoryData).filter(
            (item) => item.displayProperties.name === searchName
          );
          if (searchName) {
            const {
              displayProperties,
              flavorText,
              itemTypeAndTierDisplayName,
              itemTypeDisplayName,
            } = codeItem[0];
            console.log(
              'Code item found!!!!!!',
              displayProperties,
              flavorText,
              itemTypeAndTierDisplayName,
              itemTypeDisplayName
            );
          } else {
            console.log('Ignition Code item not found :(((((((( ');
          }
        })
        .catch((error) => {
          console.error('Error fetching inventory data:', error);
        });
    });
}

const witherhoardItem = await weaponFetch('Witherhoard');
const breakneckItem = await weaponFetch('Breakneck');
const osteoStrigaItem = await weaponFetch('Osteo Striga');
const gnawingHungerItem = await weaponFetch('Gnawing Hunger');
const forbearanceItem = await weaponFetch('Forbearance');
const cataclysmicItem = await weaponFetch('Cataclysmic');
const retrofitEscapadeItem = await weaponFetch('Retrofit Escapade');
const apexPredatorItem = await weaponFetch('Apex Predator');
