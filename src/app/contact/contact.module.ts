import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [ContactPageComponent],
  imports: [CommonModule, ContactRoutingModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule { }
