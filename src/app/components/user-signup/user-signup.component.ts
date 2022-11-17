import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignupForm } from 'src/app/interfaces/signup-form';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent {
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  user: SignupForm = {
    username: '',
    password: '',
    confirm_pass: '',
  };

  signup() {
    this.userService.createUser(this.user).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        if (error.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingrese correctamente los datos solicitados.',
          });
        }
      }
    );
    this.router.navigate(['login']);
  }
}
