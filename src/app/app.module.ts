import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbserviceService } from './services/dbservice.service';

const firebaseConfig = {
  apiKey: "AIzaSyCdOCxziVTxj6VwK6RRx8NCIJDdxaO_QsY",
  authDomain: "sample-project-18c67.firebaseapp.com",
  projectId: "sample-project-18c67",
  storageBucket: "sample-project-18c67.appspot.com",
  messagingSenderId: "131552516950",
  appId: "1:131552516950:web:2d7580ae6ebc6b682f54f7"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DbserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
