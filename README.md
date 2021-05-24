# **Maharlika**

### **Tools**

- Latest XCode // For iOS Development
- Node JS
- NPM or Yarn
- React Native
- Expo CLI [https://expo.io/]
- Android Studio
- Expo App [ Search "Expo" on App Store or Google Play ]

<br/>

### **Install Expo CLI**

```
npm install -g expo-cli
```

<br/>

### **Run the Project**

To run your project, navigate to the directory and run one of the following npm or yarn commands.

```
cd maharlika-mobile
npm start // or yarn start or expo start
```

You can open iOS, Android, or web from here, or run them directly with the commands below.

```
npm start
npm run android
npm run ios
npm run web
```

<br/>

### **iOS Development**

Install XCODE from App Store.

Go to `XCODE > Preferences > Locations > Command Line Tools`

Select `Xcode 12.0.1` or any current version

<br/>

### **Android Development**

Install Android Studio

Create a virtual device in the AVD Manager (Latest version recommended, Pixel device)

Run `~/Library/Android/sdk/emulator/emulator -list-avds` in the command line to get the name of your avd

Run `~/Library/Android/sdk/emulator/emulator -avd <AVD_NAME>` in the command line to open emulator without opening Android Studio

<br/>

### **UI Framework DOCS**

```
https://akveo.github.io/react-native-ui-kitten/docs
```

<br/>

### **Project References**

```
https://github.com/chatwoot/chatwoot-mobile-app/blob/develop/package.json
```

<br/>

### **Got `RNCSafeAreaProvider` Error**

Run `expo install react-native-safe-area-context` if this error exists.

```
Invariant Violation: Tried to register two views with the same name RNCSafeAreaProvider
```

<br/>

### **App Library might be used**

```
Storage: https://react-native-async-storage.github.io/async-storage/docs/api
SQL-Lite: https://docs.expo.io/versions/v39.0.0/sdk/sqlite/
```
