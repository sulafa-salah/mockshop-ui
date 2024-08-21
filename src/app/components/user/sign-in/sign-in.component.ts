import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IUserCredentials } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  credentials : IUserCredentials =  {username :'' , password:''};
constructor(private userSvc : UserService,private router :Router){}

sigIn()
{
  this.userSvc.sigIn(this.credentials).subscribe({
      next :()=> this.router.navigate(['/cart'])
    });
}
}
