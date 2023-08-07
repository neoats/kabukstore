import { Component } from '@angular/core';
import { formData } from 'src/app/modals/commentData';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  myformData = new formData();
  file: any;
  onSubmit() {
    this.myformData.FirstName = this.myformData.FirstName;
    this.myformData.Email = this.myformData.Email;



  }
  getFirstName() {
    const firstName = this.myformData.FirstName;
    console.log(firstName);
  }
  getSurName() {
    const surName = this.myformData.SurName;
    console.log(surName);
  }
  getEmail() {
    const email = this.myformData.Email;
    console.log(email);
  }
  getComment() {
    const comment = this.myformData.Comment;
    console.log(comment);
  }
}
