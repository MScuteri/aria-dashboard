import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AriaUsersComponent } from './aria-users/aria-users.component';
import { InStorePricingComponent } from './in-store-pricing/in-store-pricing.component';
import { LabelOverrideComponent } from './label-override/label-override.component';
import { OutOfStocksComponent } from './out-of-stocks/out-of-stocks.component';
import { PosUpdatesComponent } from './pos-updates/pos-updates.component';
import { ReductionLabelComponent } from './reduction-label/reduction-label.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'users', component: AriaUsersComponent},
  {path: 'instorepricing', component: InStorePricingComponent},
  {path: 'labeloverride', component: LabelOverrideComponent},
  {path: 'outofstock', component: OutOfStocksComponent},
  {path: 'pos', component: PosUpdatesComponent},
  {path: 'reductionlabel', component: ReductionLabelComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}
