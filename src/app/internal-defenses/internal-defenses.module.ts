import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurretComponent } from './turret/turret.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ],
  exports: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ]

})
export class InternalDefensesModule { }
