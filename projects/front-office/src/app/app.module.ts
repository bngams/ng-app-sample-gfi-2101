import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { HeaderComponent } from './components/layout/header.component';
import { VATPipePipe } from './pipes/vatpipe.pipe';

@NgModule({
  // fonctionnalités liées au HTML
  // (components - balises; pipe, directives, etc...)
  declarations: [
    AppComponent,
    TemplateSyntaxComponent,
    HeaderComponent,
    VATPipePipe,
  ],
  // fonctionnalités qui proviennent d'autres modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Gestionnaires de la DI <=> ContextContainers
  providers: [],
  // mis à disposition au démarrage
  bootstrap: [AppComponent]
})
export class AppModule { }
