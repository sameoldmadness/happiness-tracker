# Happiness tracker

## Setup

```
npm install -g firebase-tools
firebase login
```

## Development

Set secrets.

```
firebase functions:config:set happiness_tracker.welcome_message="Hello world"0D
```

Get secrets.

```
❯ firebase functions:config:get
{
  "happiness_tracker": {
    "slack_endpoint": "secret",
    "welcome_message": "Hello world"
  }
}
```

## Deploy

```
firebase deploy --only functions
```

## Links

- [Get started: write and deploy your first functions](https://firebase.google.com/docs/functions/get-started)
