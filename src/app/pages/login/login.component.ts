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
        '123456',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(9)
        ]
      ],
    });
  }


  submit() {
    console.log('submit');
    console.log(this.form);

    if (this.form.invalid) {
      return;
    }

    // this.router.navigate(['/']);
    const { email, password } = this.form.value;

    this.authService.login(email, password)
      .subscribe({
        next: (response) => {
          console.log(response);
          if (response) {
            this.router.navigate(['/']);
          } else {
            // MOSTRART ALERTA
          }
        },
        error: (err) => {
          console.log(err);
        }
      });

  }
}
