import { Component } from '@angular/core';

declare var cordova: any;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  constructor() {}

  browser: any;

  startChatBot(){
    var url = "https://app.yellowmessenger.com/pwa/live/x1611038137529";
    var target = "_blank";
    var options = "location=yes,hidden=yes,beforeload=yes";
    console.log("Trying to open");
    

    this.browser = cordova.InAppBrowser.open(url, target, options);
    this.browser.addEventListener('beforeload', function(params, callback){
      // If the URL being loaded is a PDF
      if(params.url.match(".pdf")){
          // Open PDFs in system browser (instead of InAppBrowser)
          this.browser.open(params.url, "_system");
      }else{
          // Invoke callback to load this URL in InAppBrowser
          callback(params.url);
      }
    });
  }

}
