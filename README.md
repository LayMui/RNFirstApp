# Instructions:

Login screen for test automation

To run the app
```
On IOS: 
```
npm run ios 
```
On andriod: 
```
npm run andriod
```

Use for mobile test automation

https://codecept.io/mobile-react-native-locators.html https://reactnative.dev/docs/accessibility

https://discuss.appium.io/t/how-to-accept-allow-app-to-access-location-on-android/19568
https://devqa.io/git-cheat-sheet-for-testers/


## How to build ipa
```
1 Go to Xcode, hook up to target phone
2. Go to Target, select Signing and Capabilities, Choose team
3. Build, this will generate the app which run on iOS Simulator
/Users/laymui/Library/Developer/Xcode/DerivedData/RNFirstApp-gzqrhebpxlbeotgeweoxnafhkkqp/Build/Products/Debug-iphoneos
4. To generate the ipa (to run on real device)
```
Preparing archive for distribution....
Go to Xcode, Product -> Archive
At Organizer
Click on Distribute App -> Development (Distribute to member of your team)
App thinning: All compatible device variants
Automatically manage signing
Click on Export
Export As RNFirstApp
Go to the folder of RNFirstApp/Apps/RNFirstApp.ipa

cd ios
xcodebuild clean archive -workspace RNFirstApp.xcworkspace -scheme "RNFirstApp" -archivePath RNFirstApp.xcarchive
```

## How to build apk
https://www.instamobile.io/android-development/generate-react-native-release-build-android/


1. Go to ./android/app/build/outputs/apk/debug/app-debug.apk

or 
1. cd android
./gradlew assembleRelease
the APK creation process is done. You can find the generated APK at android/app/build/outputs/apk/app-release.apk. This is the actual app, 

## Add reactotron
https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md

# Use Reactotron
1. Start Reactotron separately
2. Run npm run ios
3. Wait for the connection
