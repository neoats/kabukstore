import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactRoutingModule } from './contact-routing.module';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ContactPageComponent,CommentComponent],
  imports: [CommonModule, ContactRoutingModule,FormsModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [CommentComponent]
})
export class ContactModule {

}
