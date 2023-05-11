import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'body',
  //   pathMatch:'full'
  // },
  {
    path:'',
    component:ChatBodyComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
