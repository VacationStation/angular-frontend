import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthModule} from '../auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdInputModule,
  MdSidenavModule,
  MdToolbarModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdSnackBarModule,
  MdGridListModule,
  MdTabsModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {LoginComponent} from './_components/login/login.component';
import {DashboardComponent} from './_components/dashboard/dashboard.component';
import {RegisterComponent} from './_components/register/register.component';
import {FinanceComponent} from './_components/finance/finance.component';
import {NewGroupComponent} from './_components/new_group/new_group.component';
import {MyGroupsComponent} from './_components/my_groups/my_groups.component';
import {GroupDetailComponent} from './_components/group_detail/group_detail.component';
import {AddBookingComponent} from './_components/add_booking/add_booking.component';
import {AddUserComponent} from './_components/add_user/add_user.component';
import {JoinGroupComponent} from './_components/join_group/join_group.component';

import {AuthService} from './_services/auth.service';
import {GroupService} from './_services/group.service';
import {UserService} from './_services/user.service';
import {ImageService} from './_services/image.service';

import {AuthGuard} from './_guards/auth.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'finances', component: FinanceComponent, canActivate: [AuthGuard]},
  {path: 'new_group', component: NewGroupComponent, canActivate: [AuthGuard]},
  {path: 'my_groups', component: MyGroupsComponent, canActivate: [AuthGuard]},
  {path: 'home', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'group/join', component: JoinGroupComponent, canActivate: [AuthGuard]},
  {path: 'group/:id', component: GroupDetailComponent, canActivate: [AuthGuard]},
  {path: 'group/:id/addBooking', component: AddBookingComponent, canActivate: [AuthGuard]},
  {path: 'group/:id/addUser', component: AddUserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    FinanceComponent,
    NewGroupComponent,
    MyGroupsComponent,
    GroupDetailComponent,
    AddBookingComponent,
    AddUserComponent,
    JoinGroupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AuthModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSidenavModule,
    MdToolbarModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSnackBarModule,
    MdGridListModule,
    MdTabsModule
  ],
  providers: [
    AuthService,
    GroupService,
    UserService,
    ImageService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
