# Never install this package :)

Just copy this lines of code and use in your react-native app.

```javascript
import { Platform, Dimensions } from "react-native";
const isIphoneX =
  Platform.OS === "ios" && Dimensions.get("window").height === 812 && Dimensions.get("window").width === 375;
```

The usage example is shown below, if you still want to install this package ))

To install run the command in terminal:
```bash
  yarn add @malik.aliyev.94/react-native-is-iphonex

  or

  npm i @malik.aliyev.94/react-native-is-iphonex
```

Then import this package in your script:

```javascript
import isIphoneX from '@malik.aliyev.94/react-native-is-iphonex';
```

**isIphoneX** is **true** is the device is iPhoneX.

You can use this package to set the height of the statusbar, for example:

```javascript
import isIphoneX from '@malik.aliyev.94/react-native-is-iphonex';
const statusBarHeight = isIphoneX ? 44 : 20;
```

## Bonus
See [React Native Starter](https://github.com/malik-aliyev-94/react-native-starter) project on GitHub.

The Demo is available on [Expo](https://expo.io/@malik-aliyev-94/expo-react-native-starter)

![Expo Demo](https://raw.githubusercontent.com/malik-aliyev-94/react-native-starter/master/assets/expo-qr.png)

Here you can find statusbar, navigation bar height an other dimensions for all iOS devices

https://ivomynttinen.com/blog/ios-design-guidelines
