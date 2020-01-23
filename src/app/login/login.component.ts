import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  userLogin: FormGroup;
  isSubmitted  =  false;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   

  ngOnInit() {
    
  }
 loginUser (event){
   event.preventDefault()
    console.log(event);
  }
  createForm() {
    this.userLogin  =  this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

}
