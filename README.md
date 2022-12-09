# IONIC PROJECT CREATION

## SET zshrc profile
### vi ~/.zshrc
```
export ANDROID_HOME="/Users/`user`/Library/Android/sdk"
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
```

## IONIC INSTALLATION
```
npm i -g @ionic/cli
```

## IONIC START INSTALLATION
```
ionic start `startapp` tabs --capacitor --type=ionic-angular --project-id=`startapp` --package-id=`com.olegtronics.startapp` && cd `startapp`
```

## IONIC START APP IN BROWSER
```
ionic serve
```

## ADD PLATFORMS
```
ionic cap add android && ionic cap add ios
```

## ADD GOOGLE-SERVICES.JSON (GEBERATED IN FIREBASE) TO ANDROID
```
android/
└── app/
    └── google-services.json
```

## ADD PLUGINS
```
npm install cordova-plugin-vibration && npm install @awesome-cordova-plugins/vibration && npm install cordova-plugin-splashscreen && npm install @awesome-cordova-plugins/splash-screen && npm install cordova-plugin-nativestorage && npm install @awesome-cordova-plugins/native-storage && npm install cordova-plugin-statusbar && npm install @awesome-cordova-plugins/status-bar && npm install @capacitor/splash-screen && npm install cordova-plugin-actionsheet && npm install @awesome-cordova-plugins/action-sheet && npm install cordova-plugin-android-permissions && npm install @awesome-cordova-plugins/android-permissions && npm install cordova-plugin-camera && npm install @awesome-cordova-plugins/camera && npm install cordova-plugin-device && npm install @awesome-cordova-plugins/device && npm install cordova-plugin-file && npm install @awesome-cordova-plugins/file && npm install cordova-plugin-file-transfer && npm install @awesome-cordova-plugins/file-transfer && npm install cordova-plugin-globalization && npm install @awesome-cordova-plugins/globalization && npm install cordova-plugin-insomnia && npm install @awesome-cordova-plugins/insomnia && npm install cordova-plugin-network-information && npm install @awesome-cordova-plugins/network && npm install cordova-plugin-x-socialsharing && npm install @awesome-cordova-plugins/social-sharing && npm install cordova-plugin-x-toast && npm install @awesome-cordova-plugins/toast && npm install cordova-sqlite-storage && npm install @awesome-cordova-plugins/sqlite && npm install @ngx-translate/core @ngx-translate/http-loader --save && npm install cordova-plugin-geolocation && npm install @awesome-cordova-plugins/geolocation && npm install cordova-plugin-telerik-imagepicker && npm install @awesome-cordova-plugins/image-picker && npm install @capacitor-community/http && npm install @capacitor/push-notifications && npm install cordova.plugins.diagnostic && npm install @awesome-cordova-plugins/diagnostic && npm i @fontawesome/angular-fontawesome && npm i @fortawesome/fontawesome-svg-core && npm i @fortawesome/free-solid-svg-icons && npm i @fortawesome/free-regular-svg-icons && npm i @fortawesome/free-brands-svg-icons && npx cap update && ionic cap sync && npm install jetifier && npx jetify
```

## ICON AND SPLASHSCREEN
### 1. CREATE IMAGES
```
icon.png - 1024x1024px
splash.png - 2732x2732px
```
### 2. INSTALL RESOURCE GENERATOR
```
npm install -g cordova-res
```
### 3. CREATE STRUCTURE IN ROOT && PUT IMAGES IN RIGHT PLACES
```
resources/
├── android/
│   ├── icon-background.png
│   └── icon-foreground.png
├── icon.png
└── splash.png
```
### 4. RUN GENERATOR
```
cordova-res ios --skip-config --copy && cordova-res android --skip-config --copy
```

## FIX FILE TRANSFER
### 1. Remove lines 107-110 from CDVFileTransfer.m:
```
NSString* userAgent = [self.commandDelegate userAgent];
if (userAgent) {
    [req setValue:userAgent forHTTPHeaderField:@"User-Agent"];
}
```
### 2. Change in Filetransfer.java:
```
import org.apache.cordova.Whitelist;
```
#### Replace the above with the code below
```
import org.apache.cordova.AllowList;
```

### 3. Replace in Filetransfer.java:
```
/* This code exists for compatibility between 3.x and 4.x versions of Cordova.
    * Previously the CordovaWebView class had a method, getWhitelist, which would
    * return a Whitelist object. Since the fixed whitelist is removed in Cordova 4.x,
    * the correct call now is to shouldAllowRequest from the plugin manager.
*/
Boolean shouldAllowRequest = null;
if (isLocalTransfer) {
    shouldAllowRequest = true;
}
if (shouldAllowRequest == null) {
    try {
        Method gwl = webView.getClass().getMethod("getWhitelist");
        AllowList whitelist = (AllowList)gwl.invoke(webView);
        shouldAllowRequest = whitelist.isUrlAllowListed(source);
    } catch (NoSuchMethodException e) {
    } catch (IllegalAccessException e) {
    } catch (InvocationTargetException e) {
    }
}
```
#### Replace above code with below code
```
/* This code exists for compatibility between 3.x and 4.x versions of Cordova.
    * Previously the CordovaWebView class had a method, getWhitelist, which would
    * return a Whitelist object. Since the fixed whitelist is removed in Cordova 4.x,
    * the correct call now is to shouldAllowRequest from the plugin manager.
*/
Boolean shouldAllowRequest = null;
if (isLocalTransfer) {
    shouldAllowRequest = true;
}
if (shouldAllowRequest == null) {
    try {
        Method gwl = webView.getClass().getMethod("getWhitelist");
        AllowList whitelist = (AllowList)gwl.invoke(webView);
        shouldAllowRequest = whitelist.isUrlAllowListed(source);
    } catch (NoSuchMethodException e) {
    } catch (IllegalAccessException e) {
    } catch (InvocationTargetException e) {
    }
}
```

## TRANSLATION ngx-translate need changes in
### 1. MAIN
```
src/
└── app/
   └── app.module.ts
```
### 2. IN EACH MODULE (F.E. TABS)
```
src/
└── assets/
    └── i18n/
        ├── ru.json
        └── en.json
```
### 3. SET TRANSLATION FILES
```
src/
└── app/
    └── tab1/
        ├── tab1.page.ts
        └── tabs1.module.ts
```
------- assets/i18n/de.json (en.json, ru.json, etc.)
### 4. ADD ADDITIONAL FILES IN ROOT
```
src/
└── app/
   ├── missing-translation.service.spec.ts
   ├── missing-translation.service.ts
   ├── translation.service.spec.ts
   └── translation.service.ts
```
### 5. MODIFY environment.prod.ts AND environment.ts
```
export const environment = {
  production: true,
  locales: ['en', 'ru', 'de'],
  defaultLocale: 'en',
};
```

## MODIFY tsconfig.json
```
"target": "es2015",
"module": "es2020",
"lib": [
    "es2018", 
    "dom"
],
```

## GENERATE KEY FOR ANDROID
```
keytool -genkey -v -keystore my-release-key.keystore -alias `com.olegtronics.startapp` -keyalg RSA -keysize 2048 -validity 10000 -dname "CN=Oleg Konowalow, OU=LLC, O=Echo, L=Minsk, ST=Minsk, C=BY" -storepass Toshiba2! -keypass Toshiba2!
```
## BUILD DEBUG
```
ionic cordova build ios --prod --optimizejs --minifycss --minifyjs --verbose
```
#### OR
```
ionic cordova build android --prod --optimizejs --minifycss --minifyjs --verbose
```
## BUILD RELEASE
```
ionic cordova build ios --prod --release --optimizejs --minifycss --minifyjs --verbose
```
#### OR
```
ionic cordova build android --prod --release --optimizejs --minifycss --minifyjs --verbose
```