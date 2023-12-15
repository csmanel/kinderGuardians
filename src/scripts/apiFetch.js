// fetch(manifestUrl, {
// headers: {
// 'X-API-Key': apiKey,
// },
// })
// .then((response) => response.json())
// .then((data) => {
// const manifest = data.Response;
//
// Get Keys of the Manifest
// const manifestKeys = Object.keys(manifest);
// console.log('Manifest Keys:', manifestKeys);

// Get Keys of jsonWorldComponentContentPaths.en
// const worldComponentKeys = Object.keys(
// manifest.jsonWorldComponentContentPaths.en
// );
// console.log('jsonWorldComponentContentPaths.en Keys:', worldComponentKeys);
// console.log();
// Get Inventory URL
// const inventoryUrl =
// manifest.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition;

// Download Inventory Data
// fetch('https://www.bungie.net' + inventoryUrl, {
//   headers: {
//     'Accept-Encoding': 'gzip',
//   },
// })
//   .then((response) => response.json())
//   .then((inventoryData) => {
// Save Inventory Data to d2.json
// const blob = new Blob([JSON.stringify(inventoryData)], {
//   type: 'application/json',
// });
// const link = document.createElement('a');
// link.href = window.URL.createObjectURL(blob);
// link.download = 'd2.json';
// link.click();
// attempt to filter by specific weapon
//       const ignitionCodeItem = Object.values(inventoryData).filter(
//         (item) => item.displayProperties.name === 'Ignition Code'
//       );
//       if (ignitionCodeItem) {
//         console.log('Ignition Code item found!!!!!!', ignitionCodeItem);
//       } else {
//         console.log('Ignition Code item not found :(((((((( ');
//       }
//     })
//     .catch((error) => {
//       console.error('Error fetching inventory data:', error);
//     });
// });
// .catch((error) => {
//   console.error('Error fetching manifest:', error);
//   // Read content from d2.json file
//   fetch(jsonFilePath)
//     .then((response) => response.json())
//     .then((content) => {
//       // Do something with the content
//       console.log(content);
//       const ignitionCodeItem = content.Values.find(
//         (item) => item.displayProperties.name === 'Ignition Code'
//       );
//       if (ignitionCodeItem) {
//         console.log('Ignition Code item found:', ignitionCodeItem);
//       } else {
//         console.log('Ignition Code item not found.');
//       }
//     })
//     .catch((jsonError) => {
//       console.error('Error reading JSON file:', jsonError);
//     });
// });

// const apiKey = '3fd152d590a94ab088993fcc9292e6f9';
// const URL =
//   'https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/';
// fetch(URL, { headers: { 'X-API-Key': apiKey } });

// const getGjall = async function () {
//   let response = await fetch(URL, { headers: { 'X-API-Key': apiKey } });

//   let data = await response.json();
//   console.log(data);
// };
// getGjall();
