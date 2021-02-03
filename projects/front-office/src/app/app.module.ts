import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { HeaderComponent } from './components/layout/header.component';
import { VATPipePipe } from './pipes/vatpipe.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UIModule } from './ui.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // fonctionnalités liées au HTML
  // (components - balises; pipe, directives, etc...)
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    HeaderComponent,
    VATPipePipe,
    HomeComponent,
    NotFoundComponent,
  ],
  // fonctionnalités qui proviennent d'autres modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    UIModule,
    HttpClientModule
  ],
  // Gestionnaires de la DI <=> ContextContainers
  providers: [
  ],
  // mis à disposition au démarrage
  bootstrap: [AppComponent]
})
export class AppModule {
}
