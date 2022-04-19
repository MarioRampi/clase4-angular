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
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [
        'mario@gmail.com',
        [
          Validators.email,
          Validators.required
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
    // console.log('login', this.form);

    if (this.form.invalid) {
      // Informar error al usuario.
      return;
    }

    // Enviar petición de login al servidor.
    const { email, password } = this.form.value;

    this.authService.login(email, password)
      .subscribe({
        next: (data: any) => {
          console.log('data', data);
          if (data) {
            this.router.navigate(['/']);
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        },
        error: (error: any) => {
          console.log('error', error);
        }
      });
  }

}
