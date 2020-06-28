---
title: 'How to find your current city using Bash or Node.js'
date: '2020-01-12'
draft: false
path: '/blog/ip-location'
---

We look at creating a script, using bash or Node.js, to calculate your current city using the [IPinfo](https://ipinfodb.com/) API (no sign-up required).

## Bash

```bash
city=$(curl -s https://ipinfo.io | /usr/local/bin/jq ".city")
```

All it takes is one line in bash! Notice our use of [jq](https://github.com/stedolan/jq), a lightweight command-line JSON processor, to parse the city name. You can install `jq` with homebrew: `brew install jq`.

## Node.js

```js
const rp = require('request-promise');

rp('https://ipinfo.io/json').then(res => {
  const json = JSON.parse(res);

  return json.city;
});
```

We're using [request-promise](https://github.com/request/request-promise) to make the API call using JavaScript, but any similar library or method can be used.

## Project Example

[This code snippet](https://github.com/trybick/slack-location-manager/blob/master/src/setStatus/calculateEmoji.js#L27) shows a real-world use of these scripts where the city is used to update the user's status on Slack.

## Further Reading

- [IPinfo](https://ipinfodb.com/)
- GitHub: [jq](https://github.com/stedolan/jq)
- GitHub: [request-promise](https://github.com/request/request-promise)
