# angular-app-loaded

Solves the issue with angular crap ({{}}'s etc) showing up before it loads.

## Setup

1. Add `angular-app-loaded.js` file to the project and add it as dependency to your app:

```js
angular.module('some-app', ['cloudless.app-loaded']);
```

2. Add or paste contents of `angular-app-loaded.css` to the project.

## Usage

Add `.app-show` class to any element that you want to show up only after the angular application loads (angular crap mentioned above).

Aadd `.app-hide` class to any element that you want to hide once the angular application loads (fancy loading spinner/placeholder etc).
