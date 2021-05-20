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
    let botID:string = "x1587041004122";
    let payloadData = {token: "123456789"};
    let urlBase:string = "https://app.yellowmessenger.com/pwa/live/";
    let url:string = encodeURI(urlBase+botID+"/ym.payload="+JSON.stringify(payloadData));
    let target:string = "_blank";
    let options:string = "location=no,beforeload=yes";
    this.browser = cordova.InAppBrowser.open(url, target, options);

    //For opening pdf links in system browser.
    this.browser.addEventListener('beforeload', function(params, callback){
      // Add this check if you want only .pdf links to open in system browsers
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
