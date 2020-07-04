---
title: 'Creating a cron job with Node.js'
date: '2020-01-05'
draft: false
path: '/blog/cron-jobs'
---

The purpose is to create a script that can create a cronjob on a user's computer. There are many cron related libraries on npm, however [node-crontab](https://github.com/dachev/node-crontab) is the only one I found that can access the system cron jobs of a computer instead of relying on `setTimeout`.

## Basic Example

```js
const crontab = require('crontab');

crontab.load(function (err, cron) {
  cron.create('ls', '0 7 * * 1-5');
  cron.save();
});
```

This example shows most of what you need to now. Replace `ls` with the command to run. The second argument takes the standard cron schedule syntax (in this example the command will run Monday-Friday at 7:00).

You may want to redirect the output of a command like this: `ls > /dev/null 2>&1` so that, in the event of any errors, it doesn't prompt the user with a message upon opening a new terminal session.

## Listing Jobs

```js
const jobs = crontab.jobs();
```

You can check current jobs using the method above or by running the command `crontab -l` in a terminal.

## Summary

For me it was valuable to find this library, because it is the only one available that will actually access system cron jobs. For a real world example, reference my project [slack-location-manager](https://github.com/trybick/slack-location-manager/blob/master/src/install/createCron.js#L9).

## Further Reading

- GitHub: [node-crontab](https://github.com/dachev/node-crontab)
- Cron scheduling tool: [crontab.guru](https://crontab.guru/)
