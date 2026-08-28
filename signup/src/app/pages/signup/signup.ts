import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-signup',
  styleUrl: './signup.css',
  templateUrl: './signup.html',
})
export class Signup {

  signupForm = new FormGroup({
    name : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword : new FormControl('', Validators.required),
    terms : new FormControl(false, Validators.requiredTrue),
  })

  onSubmit(){
    if(this.signupForm.invalid){
      // console.log("Invalid Form !!");
      /*
      Suppose user ne kuch bhi touch nahi kiya aur directly, clicked the create account button
      Form is invalid → it will return, but user will not see the errors, because fields are not touched.
      So, at the time of submit we can mark all the controls as touched.
      */
      this.signupForm.markAllAsTouched()

      return;
    }


    console.log(this.signupForm.value);
      
  }
}
