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
Prearing archive for distribution....
Go to Xcode, Window -> Organizer
Click on Distribute App -> Development (Distribute to member of your team)
App thinning: All compatible device variants
Automatically manage signing
Click on Export
Export As rnfirstapp-for-training
Go to the folder of rnfirstapp-for-training/Apps/rn-first-app.ipa
``

## How to build apk
https://www.instamobile.io/android-development/generate-react-native-release-build-android/