import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TieFighterComponent} from './tie-fighter/tie-fighter.component'
import { StarstarDestroyerComponent} from './starstar-destroyer/starstar-destroyer.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TieFighterComponent,
    StarstarDestroyerComponent
  ],
  exports:[
    TieFighterComponent,
    StarstarDestroyerComponent
  ]
})
export class ExternalDefensesModule { }
