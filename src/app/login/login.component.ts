import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = ""
  password = ""
  errorMsg = ""

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.email.trim().length === 0) {
      this.errorMsg = "Email is required";
      console.log("Email is required");
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
      console.log("Password is required");
    } else {
      this.errorMsg = ""
      console.log("Logged In");
      let response = this.authService.login(this.email, this.password)
      if (response === 200) {
        this.router.navigate(['home'])
      }
      if (response === 403) {
        this.errorMsg = "Invalid account!"
      }
    }
  }

}
