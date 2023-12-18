const APIKEY = '3fd152d590a94ab088993fcc9292e6f9';
const MANIFESTURL = 'https://www.bungie.net/Platform/Destiny2/Manifest/';
const KINID = 1498876634;
const SECID = 2465295065;
const HEVID = 953998645;

export default async function itemFetchAndDisplay(searchName) {
  fetch(MANIFESTURL, {
    headers: {
      'X-API-Key': APIKEY,
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
            // checking for which version of the object has the collectible hash
            let collectibleItem;
            codeItem.forEach((el) => {
              if ('collectibleHash' in el) {
                collectibleItem = el;
              }
            });
            const {
              displayProperties,
              flavorText,
              itemTypeAndTierDisplayName,
              itemTypeDisplayName,
              hash,
              screenshot,
              equippingBlock,
            } = collectibleItem;
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
              screenshot,
              equippingBlock
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
  screenshot,
  equippingBlock
) {
  const properties = [
    displayProperties.name,
    itemTypeAndTierDisplayName,
    itemTypeDisplayName,
    flavorText,
  ];
  // icon creation
  const icon = document.createElement('IMG');
  const propImg = 'https://bungie.net' + displayProperties.icon;
  icon.src = propImg;
  // const itemDiv = document.createElement('div');
  // itemDiv.appendChild(icon);

  if (equippingBlock.equipmentSlotTypeHash === KINID) {
    const kineticDiv = document.querySelector('#kinetic');
    kineticDiv.appendChild(document.createElement('div')).appendChild(icon);
  } else if (equippingBlock.equipmentSlotTypeHash === SECID) {
    const secondaryDiv = document.querySelector('#secondary');
    secondaryDiv.appendChild(document.createElement('div')).appendChild(icon);
  } else if (equippingBlock.equipmentSlotTypeHash === HEVID) {
    const heavyDiv = document.querySelector('#heavy');
    heavyDiv.appendChild(document.createElement('div')).appendChild(icon);
  }
  // iterate over props, if prop === h1 id, append icon to that h1

  // text creation
  function handleClick() {
    const parent = document.getElementById('text-container');
    parent.innerHTML = '';
    const textUl = document.createElement('ul');

    properties.forEach((prop) => {
      // creating text li to attach to the text ul
      const li = document.createElement('li');
      li.textContent = prop;
      textUl.style.padding = '8px';
      textUl.style.border = '.5rem solid #ccc';
      textUl.style.marginBottom = '8px';

      textUl.appendChild(li);

      //find prop that has an equippingblock id that matches h1 id and if so, append that itemul to the matching h1
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
  document.getElementById('item-container');
}

const witherhoardItem = await itemFetchAndDisplay('Witherhoard');
const breakneckItem = await itemFetchAndDisplay('Breakneck');
const osteoStrigaItem = await itemFetchAndDisplay('Osteo Striga');
const gnawingHungerItem = await itemFetchAndDisplay('Gnawing Hunger');
const forbearanceItem = await itemFetchAndDisplay('Forbearance');
const cataclysmicItem = await itemFetchAndDisplay('Cataclysmic');
const retrofitEscapadeItem = await itemFetchAndDisplay('Retrofit Escapade');
const apexPredatorItem = await itemFetchAndDisplay('Apex Predator');
