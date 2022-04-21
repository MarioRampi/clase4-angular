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

  email = 'mario@gmail.com';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      email: [
        this.email,
        [
          Validators.email,
          Validators.required,
        ]
      ],
      password: [
        'Qwerty123',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        ]
      ],
    });
  }

  login() {
    // console.log(this.form);

    if (this.form.invalid) {
      // Informar al usuaario de que faltan datos.

      return;
    }


    const { email, password } = this.form.value;

    // console.log(email, password);

    this.authService.login(email, password)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          if (data) {
            this.router.navigate(['/']);
          } else {
            // Informar al usuario de que no se pudo loguear.
          }
        },
        error: e => {
          console.log(e);
        }
      });
  }

}
