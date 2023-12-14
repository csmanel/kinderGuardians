# kinderGuardians

this app is built as a helper for the game Destiny 2.
for those with no background, the game fuctions on multiple types of content that all require different gear or items. Often what is recommended is obscured by the sheer volume of things going on in the game, this guide hopes to simplify that.

users will be able to select the type of content they are intersted in, which will direct them to items that are being used for that content given the current season.

items will have brief descriptions as well as methods for obtaining the item.

## Functionality

- Allow users to select content they want to filter by
  - possibly only list one type of content to begin with
- Display list of items/gear recommended for selected content
- Highlight whatever item/information user is interested and store that information locally so they can come back to it
- Have hoverability for each item/quest so user can see a preview of information before actually clicking

### Additional Inclusions

- A production README
- Maybe a file providing for some context that seems like too much to display in the actual app?
  - along similar lines, perhaps a tutorial of some sort providing a way a user could traverse through the app given that they truly have no idea what they are looking for (a starting guide ex: if brand new you should start with strikes as your content, and begin with obtaining x items...)

## Wireframes

![concept for app]("assets\Homepage.png")

- Content Type will display available content types a user can choose from, even if limited to one

  - each content will have a hover effect that displays a banner/small amount of information on the content

- Items displayed will be the items gotten from the api that are most popular for that current content

  - each item will feature a similar hover effect to the content type, providing some enlarged image of the item with a brief blurb of information

- Info area would change depending on what is clicked. If an item is clicked it will display info on that item as well how to best obtain that item

## APIs

- Bungie API for all information related to the game
- Webpack
- npm to manage project dependencies

## Implementation Timeline

- **Thursday:** Setup initial project, webpack/npm. Look into Bungie API for information that needs to actually be taken. How to access the popular items of the season, what that actually looks like when fetched, how to get graphics of items.

- **Friday & Weekend:** Dedicate to implenting actual logic. Make sure information associated with items are correct, and are correct for current season, as well as local storage to keep track of where user left off.Implement basic css.

- **Monday:** Begin working on more permanent styling. Add hover elements, get images/banners from API.

- **Tuesday:** Continue styling. Fix any existing bugs.

- **Wednesday:** Deploy to Github pages, adjust README as necessary.
