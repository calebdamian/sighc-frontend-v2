import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginForm } from 'src/app/interfaces/login-form';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  user: LoginForm = {
    email: '',
    password: '',
  };

  login() {
    this.authService
      .login(this.user)
      .pipe(map((token) => this.router.navigate(['patients'])))
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (err) => {
          if (err.status === 401 || err.status === 409) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Por favor, ingrese correctamente sus credenciales',
            });
          }
        },
      });
  }
}
