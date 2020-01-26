import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControlName } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userModel = new User('latifa@pseu.edu','Latifa@Masri');
  
  constructor(private route:Router) {
 
   }
   

  ngOnInit() {
    
  }
  Login(){
    this.route.navigate(['/today']);
  }

}
