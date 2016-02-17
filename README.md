# redux-app

Just another demo app for testing out Redux

The general purpose of this app is to implement all of the basic features that
most single-page applications need to have, such as

- Client side routing with nested views
- Displaying paged lists of things
- Filtering these lists
- Submitting forms

in order to see what Redux is like to live with.

### Getting started

In order to have a already built, real live backend, I chose the Slack Web API.
That means in order to actually use this app you'll need to [obtain an API
token] [1] and [paste it into the source] [2].

After that:

``` sh
$ npm run dev
```

and you'll be able to hit the site at `http://localhost:8080`.

[1]: https://api.slack.com/tokens
[2]: https://github.com/jakewisse/redux-app/blob/master/src/services/SlackService.js#L4
