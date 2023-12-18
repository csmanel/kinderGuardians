const apiKey = '3fd152d590a94ab088993fcc9292e6f9';
const manifestUrl = 'https://www.bungie.net/Platform/Destiny2/Manifest/';

export default async function itemFetchAndDisplay(searchName) {
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

            displayItemProperties(
              displayProperties,
              flavorText,
              itemTypeAndTierDisplayName,
              itemTypeDisplayName
            );
          } else {
            console.log('item not found :(((((((( ');
          }
        })
        .catch((error) => {
          console.error('Error fetching inventory data:', error);
        });
    });
}

function displayItemProperties(
  displayProperties,
  flavorText,
  itemTypeAndTierDisplayName,
  itemTypeDisplayName
) {
  const itemUl = document.createElement('ul');
  const textUl = document.createElement('ul');

  const properties = [
    displayProperties.name,
    itemTypeAndTierDisplayName,
    itemTypeDisplayName,
    flavorText,
  ];

  const icon = document.createElement('IMG');
  const propImg = 'https://bungie.net' + displayProperties.icon;
  icon.src = propImg;
  itemUl.appendChild(icon);

  // i only want to do this IF an icon is clicked on
  function handleClick() {
    properties.forEach((prop) => {
      const li = document.createElement('li');
      li.textContent = prop;

      textUl.style.padding = '8px';
      textUl.style.border = '.5rem solid #ccc';
      textUl.style.marginBottom = '8px';

      textUl.appendChild(li);
    });
    // textUl.removeChild(textUl.firstChild);
    //remove the first ul if there is one THEN add new ul
  }
  icon.addEventListener('click', handleClick);

  // right panel attach
  document.getElementById('text-container').appendChild(textUl);
  // left panel attach
  document.getElementById('item-container').appendChild(itemUl);
}

const witherhoardItem = await itemFetchAndDisplay('Witherhoard');
const breakneckItem = await itemFetchAndDisplay('Breakneck');
const osteoStrigaItem = await itemFetchAndDisplay('Osteo Striga');
const gnawingHungerItem = await itemFetchAndDisplay('Gnawing Hunger');
const forbearanceItem = await itemFetchAndDisplay('Forbearance');
const cataclysmicItem = await itemFetchAndDisplay('Cataclysmic');
const retrofitEscapadeItem = await itemFetchAndDisplay('Retrofit Escapade');
const apexPredatorItem = await itemFetchAndDisplay('Apex Predator');
