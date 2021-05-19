# Annotations are represented by attributes that have no direct effect on the execution of the code.
-keep class android.** { *; }
-keep class de.cyberkatze.iroot.** { *; }
-keep class io.** { *; }
-keep class uk.co.whiteoctober.cordova.** { *; }
-keepattributes *Annotation*

-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keepattributes InnerClasses
-keep class **.R
-keep class **.R$* {
    <fields>;
}

# These options let obfuscated applications or libraries produce stack traces that can still be deciphered later on 
-renamesourcefileattribute SourceFile    
-keepattributes SourceFile,LineNumberTable

# ionic
-keep class org.apache.cordova.** { *; }
-keep class org.apache.cordova.camera.** { *; }
-keep class org.apache.cordova.** { *; }
-keep public class * extends org.apache.cordova.CordovaPlugin
-keep class com.ionic.keyboard.IonicKeyboard.** { *; }
-keep class com.ionicframework.cordova.webview.** {*; }
-keep class com.ionicframework.cordova.webview.*

# MRU
-keep class com.streebo.iRecruit.** { *; }
-keep class com.streebo.iRecruit.*

# Billdesk
-keep public class com.billdesk.sdk.*
-keep public class com.billdesk.config.*
-keep public class com.billdesk.utils.URLUtilActivity
-keep public interface com.billdesk.sdk.LibraryPaymentStatusProtocol{
 public void paymentStatus(java.lang.String,android.app.Activity);
}
-keep class com.billdesk.sdk.PaymentWebView$JavaScriptInterface{
 public void gotMsg(java.lang.String);
}
-keepclassmembers class * {
 @android.webkit.JavascriptInterface <methods>;
}
-keepattributes JavascriptInterface
-keep public class com.billdesk.sdk.PaymentWebView$JavaScriptInterface
-keep public class * implements com.billdesk.sdk.PaymentWebView$JavaScriptInterface
-keepclassmembers class com.billdesk.sdk.PaymentWebView$JavaScriptInterface {
 <methods>;
}

# SQLite
-keep class org.sqlite.** { *; }
-keep class org.sqlite.*
-keep class org.sqlite.database.** { *; }
-keep class org.sqlite.database.*
-keep class net.sqlcipher.** { *; }
-dontwarn net.sqlcipher.**
-keep class net.sqlcipher.database.** { *; }
-dontwarn net.sqlcipher.database.**

# Apache HTTP
-keep class org.apache.http.** { *; }
-keep class org.apache.commons.codec.** { *; }
-keep class org.apache.commons.logging.** { *; }
-keep class android.net.compatibility.** { *; }
-keep class android.net.http.** { *; }
-dontwarn org.apache.http.**
-dontwarn android.webkit.**