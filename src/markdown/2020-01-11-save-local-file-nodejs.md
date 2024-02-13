---
title: 'Saving a local file with Node.js'
date: '2020-01-05'
draft: false
path: '/articles/save-files'
---

Find out how to store a JSON file on a user's machine and retrieve it later using Node.js.

## Creating the File

```javascript
const storage = require('node-persist');

await storage.init({ dir: '/Applications/my-app' });
await storage.setItem('name', 'myName');
```

Running these commands creates a file that looks like this:

```json
{
  "key": "name",
  "value": "myName"
}
```

## Retrieving the Data

```javascript
await storage.init({ dir: '/Applications/my-app' });
const item = await storage.getItem('name');
```

To access the data, the same init command is called followed my the `getItem` method, while providing the key used while saving.

## Real World Example

```javascript
async function saveToDisk(dataToSave) {
  await storage.init({ dir: '/Applications/my-app' }).catch(err => console.error(err));
  await storage.setItem('myData', dataToSave);
}
```

Here is an example of one way you might create a function using these features. For a similar process used to store a token, view [this code snippet](https://github.com/trybick/slack-location-manager/blob/master/src/install/saveToDisk.js#L12) for my project [slack-location-manager](https://github.com/trybick/slack-location-manager).

## Further Reading

- Github: [node-persist](https://github.com/simonlast/node-persist)
