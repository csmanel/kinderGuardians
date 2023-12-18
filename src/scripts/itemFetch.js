// import {
//   apexImg,
//   breakneckImg,
//   cataclysmicImg,
//   forbearanceImg,
//   gnawingImg,
//   osteoImg,
//   retrofitImg,
//   witherhoardImg,
// } from '../../assets';

// const apexImg = require('../../assets/apex.jpg');

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

          // code item displays the selected item and all of its possible props
          // inventoryData displays every possible item in the manifest db

          if (searchName) {
            const {
              displayProperties,
              flavorText,
              itemTypeAndTierDisplayName,
              itemTypeDisplayName,
              hash,
              screenshot,
            } = codeItem[0];
            // console.log(inventoryData);
            // console.log(codeItem);
            // console.log(
            //   'Code item found!!!!!!',
            //   displayProperties,
            //   flavorText,
            //   itemTypeAndTierDisplayName,
            //   itemTypeDisplayName
            // );
            displayItemProperties(
              displayProperties,
              flavorText,
              itemTypeAndTierDisplayName,
              itemTypeDisplayName,
              hash,
              screenshot
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
  itemTypeDisplayName,
  hash,
  screenshot
) {
  const properties = [
    displayProperties.name,
    itemTypeAndTierDisplayName,
    itemTypeDisplayName,
    flavorText,
    hash,
    screenshot,
  ];

  const itemUl = document.createElement('ul');

  // icon creation
  const icon = document.createElement('IMG');
  const propImg = 'https://bungie.net' + displayProperties.icon;
  icon.src = propImg;
  itemUl.appendChild(icon);

  // text creation
  function handleClick() {
    const parent = document.getElementById('text-container');
    parent.innerHTML = '';
    const textUl = document.createElement('ul');

    properties.forEach((prop) => {
      const li = document.createElement('li');
      li.textContent = prop;
      textUl.style.padding = '8px';
      textUl.style.border = '.5rem solid #ccc';
      textUl.style.marginBottom = '8px';

      textUl.appendChild(li);
    });
    const img = document.createElement('IMG');
    console.log(screenshot);
    const propImg = 'https://bungie.net' + screenshot;
    img.src = propImg;
    textUl.appendChild(img);

    parent.appendChild(textUl);
  }
  icon.addEventListener('click', handleClick);

  // right panel attach
  document.getElementById('text-container');
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
