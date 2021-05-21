# YMChat-IONIC-Demo
This project demonstrates how Yellow Messenger chatbot can be integrated in Ionic apps

## Prerequisite
You will need ionic library installed in your system. It can be installed using
```sh
npm install -g @ionic/cli
```

## Run the demo app
1. Clone the demo app using `git clone https://github.com/yellowmessenger/YMChat-IONIC-Demo.git`
2. cd /path/to/YMChat-IONIC-Demo
3. Install the npm dependencies with `npm i`
3. Run the app with `ionic cordova run android` or `ionic cordova run ios`, depending on the platform.


## Example Code
Create a method `startChatBot()` to get the chat bot running.
```ts
  let browser: any;

  startChatBot(){
    let botID:string = "<YOUR-BOT-ID>"; // Compulsary
    let payloadData = {token: "<YOUR-DATA>"}; // can be a string as well
    let payload = JSON.stringify(payloadData);
    let urlBase:string = "https://app.yellowmessenger.com/pwa/live/";
    let url:string = encodeURI(urlBase+botID+"/ym.payload="+payload);
    let target:string = "_blank";
    let options:string = "location=no,beforeload=yes";
    this.browser = cordova.InAppBrowser.open(url, target, options);

    this.browser.addEventListener('beforeload', function(params, callback){
          // Opening links in system browser (instead of InAppBrowser)
          this.browser.open(params.url, "_system");
    });
  }

```
## Configuration
Use In App Browser plugin of ionic to open the bot-link.

```sh
ionic cordova plugin add cordova-plugin-inappbrowser
npm install @ionic-native/in-app-browser
```

### Caveats
In order to utilise `beforeload` event handler provided by the cordova plugin to intercept links and opening in system browser, please use:
```sh
ionic cordova plugin add https://github.com/apache/cordova-plugin-inappbrowser
```
This will pull the plugin from the master branch of the repository.
[see question](https://stackoverflow.com/questions/54061079/ionic-intercept-pdf-urls-with-cordova-plugin-inappbrowser/54071314#54071314)

### BotId (IMPORTANT)
``` ts 
let botID:string = "<YOUR-BOT-ID>"; // Compulsary
```
### Payload
```ts
let payloadData = {some-key: "SOME-VALUE"}; // can be a string as well. any key value pair can be passed in payloadData.
let payload = JSON.stringify(payloadData);
```
