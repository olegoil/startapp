# IONIC PROJECT CREATION
## NEEDED SOFT
### ANDROID STUDIO
[AndroidStudio](https://developer.android.com/studio)
#### 1. INSTALL ADB
#### 2. INSTALL EMULATOR
#### 3. INSTALL ANDROID STUDIO ADD-ONS AND PLUGINS
### XCODE
[Xcode](https://developer.apple.com/xcode/)
#### 1. INSTALL EMULATORS
### GIT
### 1. INSTALL GIT (MAC)
[GIT](https://git-scm.com/download/mac)
### 2. CONFIGURE GIT
```
git config --global user.name `testuser` && git config --local user.email `testuser@gmail.com`
```
### 3. GENERATE SSH KEY (left empty password and passphrase)
```
ssh-keygen -t ed25519 -C `"testuser@gmail.com"`
```
### 4. COPY GENERATED SSH KEY
```
pbcopy < ~/.ssh/id_ed25519.pub
```
### 5. PASTE KEY TO GITHUB

## SET zshrc profile
### 1. OPEN TERMINAL
### 2. INSTALL NODEJS USING NVM
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```
### 3. OPEN ENVIRONMENT SETTTINGS
```
vi ~/.zshrc
```
### 4. INSERT CODE BELOW AND SAVE
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
export ANDROID_HOME="/Users/`user`/Library/Android/sdk"
export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/tools/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
```
### 5. RESTART TERMINAL
### 6. INSTALL DIFFERENT NODEJS VERSIONS USING THE CODE BELOW
```
nvm install 12 && nvm install 14 && nvm install 16 && nvm install 18 && nvm use 16
```

## IONIC INSTALLATION
```
npm i -g @ionic/cli
```

## IONIC START PROJECT
```
ionic start `testapp` tabs --capacitor --type=angular --project-id=`testapp` --package-id=`com.olegtronics.testapp` && cd `testapp`
```

## ADD GIT TO PROJECT
```
cd testapp && git init && git add * && git commit -m "first comment" && git remote add origin `git@github.com:olegoil/startapp.git` && git push -u master
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

## ADD BASE PLUGINS
### 1. INSTALL PLUGINS
```
npm install cordova-plugin-vibration && npm install @awesome-cordova-plugins/vibration && npm install cordova-plugin-splashscreen && npm install @awesome-cordova-plugins/splash-screen && npm install cordova-plugin-nativestorage && npm install @awesome-cordova-plugins/native-storage && npm install cordova-plugin-statusbar && npm install @awesome-cordova-plugins/status-bar && npm install @capacitor/splash-screen && npm install cordova-plugin-actionsheet && npm install @awesome-cordova-plugins/action-sheet && npm install cordova-plugin-android-permissions && npm install @awesome-cordova-plugins/android-permissions && npm install cordova-plugin-camera && npm install @awesome-cordova-plugins/camera && npm install cordova-plugin-device && npm install @awesome-cordova-plugins/device && npm install cordova-plugin-file && npm install @awesome-cordova-plugins/file && npm install cordova-plugin-file-transfer && npm install @awesome-cordova-plugins/file-transfer && npm install cordova-plugin-globalization && npm install @awesome-cordova-plugins/globalization && npm install cordova-plugin-insomnia && npm install @awesome-cordova-plugins/insomnia && npm install cordova-plugin-network-information && npm install @awesome-cordova-plugins/network && npm install cordova-plugin-x-socialsharing && npm install @awesome-cordova-plugins/social-sharing && npm install cordova-plugin-x-toast && npm install @awesome-cordova-plugins/toast && npm install cordova-sqlite-storage && npm install @awesome-cordova-plugins/sqlite && npm install @ngx-translate/core @ngx-translate/http-loader --save && npm install cordova-plugin-geolocation && npm install @awesome-cordova-plugins/geolocation && npm install cordova-plugin-telerik-imagepicker && npm install @awesome-cordova-plugins/image-picker && npm install @capacitor-community/http && npm install @capacitor/push-notifications && npm install cordova.plugins.diagnostic && npm install @awesome-cordova-plugins/diagnostic && npm i @fortawesome/angular-fontawesome && npm i @fortawesome/fontawesome-svg-core && npm i @fortawesome/free-solid-svg-icons && npm i @fortawesome/free-regular-svg-icons && npm i @fortawesome/free-brands-svg-icons && npx cap update && ionic cap sync && npm install jetifier && npx jetify
```
### 2. INTEGRATE PLUGINS IN PROVIDERS AND IMPORTS (INTEGRATE THAT YOU NEED) IN app.modules.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Device } from '@awesome-cordova-plugins/device/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { Toast } from '@awesome-cordova-plugins/toast/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileTransfer } from '@awesome-cordova-plugins/file-transfer/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { ActionSheet } from '@awesome-cordova-plugins/action-sheet/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { NativeAudio } from '@awesome-cordova-plugins/native-audio/ngx';
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { TouchID } from '@awesome-cordova-plugins/touch-id/ngx';
import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
import { AnalyticsFirebase } from '@awesome-cordova-plugins/analytics-firebase/ngx';
import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';
import { Admob, AdmobOptions } from '@awesome-cordova-plugins/admob/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { InAppPurchase2 } from '@awesome-cordova-plugins/in-app-purchase-2/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { PushNotifications } from '@capacitor/push-notifications';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { BackendService } from './backend.service';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { Insomnia } from '@awesome-cordova-plugins/insomnia/ngx';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Network,
    SQLite,
    Toast,
    Device,
    Camera,
    File,
    FileTransfer,
    Insomnia,
    ImagePicker,
    ActionSheet,
    AndroidPermissions,
    BackendService,
    NativeAudio,
    Media,
    GoogleAnalytics,
    TouchID,
    Globalization,
    Vibration,
    InAppPurchase2,
    Geolocation,
    SocialSharing,
    // Admob,
    // AnalyticsFirebase,
    Diagnostic
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

  constructor(library: FaIconLibrary) {
		library.addIconPacks(fas, fab, far);
	}

}

```
### 3. INTEGRATE PLUGINS AS IMPORT AND IN CONSTRUCTOR (INTEGRATE THAT YOU NEED) IN EVERY MODULE (F.E. home.page.ts)
```
import { File } from '@awesome-cordova-plugins/file/ngx';
constructor(
    private file: File,
}
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
### 1. INSTALL PLUGIN
```
npm install @ngx-translate/core @ngx-translate/http-loader --save
```
### 2. MAIN
```
// FOLDER AND FILES
src/
└── app/
   └── app.module.ts

// MODULES SETTING
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,

    # COPY START
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    # COPY END
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
### 3. SET TRANSLATION FILES
```
// FOLDER AND FILES
src/
└── assets/
    └── i18n/
        ├── ru.json
        └── en.json

// TRANSLATION FILE SETTING (json objects)
{
	"appname": "testapp",
	"pages": {
		"introvalue": "Intro {{value}}",
		"intro": "Intro",
		"login": "Login",
		"home": "Hauptseite",
		"message": "Chat",
		"messages": "Chats",
		"interesting_messages": "Interessante Chats",
		"settings": "Einstellungen",
		"payments": "Mehr interessante Nachrichten"
	}
}
```
### 4. IN EACH MODULE (F.E. TABS)
```
// FOLDER AND FILES
src/
└── app/
    └── tab1/
        ├── tab1.page.ts
        └── tabs1.module.ts

// MODULES SETTINGS IN tab1.page.ts
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { environment } from '../../environments/environment';

constructor(
    private _translate: TranslateService
) {}

// MODULES SETTINGS IN tabs1.module.ts
import { MissingTranslationHandler, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MissingTranslationService } from '../missing-translation.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    
    # COPY START
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: MissingTranslationService },
      useDefaultLang: true,
    })
    # COPY END

  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
```
### 5. ADD ADDITIONAL FILES IN ROOT
```
src/
└── app/
   ├── missing-translation.service.spec.ts
   ├── missing-translation.service.ts
   ├── translation.service.spec.ts
   └── translation.service.ts
```
### 6. MODIFY environment.prod.ts AND environment.ts
```
export const environment = {
  production: true,
  locales: ['en', 'ru', 'de'],
  defaultLocale: 'en',
};
```
### 7. Start with any language you want
```
async ngOnInit() {
  this._translate.use('en');
}
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

## IONIC (ANGULAR)
### 1. GENERATE PAGE
```
ionic generate page `pagename`
```
### 2. GENERATE SERVICE
```
ionic generate service `servicename`
```