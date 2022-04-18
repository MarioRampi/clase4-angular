import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['mario@gmail.com', [Validators.email, Validators.required]],
      password: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  submit() {
    console.log('submit');
    console.log(this.form);

    if (!this.form.valid) {
      console.log('Formulario invalido');
      return;
    }

    console.log('Formulario valido', this.form.value);
    const { email, password } = this.form.value;

    this.authService.login(email, password)
      .subscribe({
        next: (response) => {
          console.log('Login OK', response);
          if (!response) {
            console.log('Login NOT OK', response);
            return;
          } else {
            this.router.navigate(['/']);
          }
        },
        error: (err) => {
          console.log('Login Error', err);
        }
      })
  }
}
