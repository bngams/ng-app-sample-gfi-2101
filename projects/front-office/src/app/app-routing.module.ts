import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TemplateSyntaxComponent } from './components/template-syntax/template-syntax.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'syntax', data: {redirectURL: '/home'}, canActivate: [AuthGuard], component: TemplateSyntaxComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // ex: event/  dashboard
  { path: 'event', canLoad: [AuthGuard], loadChildren: () => import('./modules/event/event.module').then(m => m.EventModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
