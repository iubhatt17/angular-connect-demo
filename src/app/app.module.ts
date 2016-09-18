import{ NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { VRPlayer }  from './vr-player';

import { VgCore } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';

@NgModule({
    imports: [ BrowserModule, VgCore, VgControlsModule ],
    declarations: [ VRPlayer ],
    bootstrap: [ VRPlayer ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
