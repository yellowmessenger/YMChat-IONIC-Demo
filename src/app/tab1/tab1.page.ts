import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


const options: InAppBrowserOptions = {
  toolbar: 'no',
  location: 'no',
  zoom: 'no'
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {

  constructor() {}

  browser: any;

  startChatBot(){
    this.browser = InAppBrowser.create('https://app.yellowmessenger.com/pwa/live/x1611038137529','_blank', options);
    this.browser.show();
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
