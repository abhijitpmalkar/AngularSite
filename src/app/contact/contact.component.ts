import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string;
  email: string;
  message: string;
  constructor(){
       this.name='';
       this.email='';
       this.message='';
  }
  ngOnInit(): void {
    
  }
  submitForm(){
    alert('I am submitting the form');
    //const nameInput=document.querySelector('input[name=name]').value;
  }
}