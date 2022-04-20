import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

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
      email: [
        'mario@gmail.com',
        [
          Validators.required,
          Validators.email,
        ]
      ],
      password: [
        'Qwerty123',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
        ]
      ],
    });
  }

  login() {
    console.log('login', this.form);

    if (this.form.invalid) {
      // Informar al usuario que el formulario está vacío.
      return;
    }

    const { email, password } = this.form.value;

    console.log(email);

    this.authService.login(email, password)
      .subscribe({
        next: (data: any) => {
          console.log(data);

          this.router.navigate(['']);
        },
        error: e => {
          console.log(e);
        }
      });
  }

}
