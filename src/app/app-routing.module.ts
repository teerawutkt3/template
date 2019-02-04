import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './page/baiwa/page/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: './common/layout/layout.module#LayoutModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{ useHash: true }),
    ComponentsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
