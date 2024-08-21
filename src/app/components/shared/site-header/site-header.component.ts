import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive ,Router} from '@angular/router';
import { IUser } from '../../../models/user.model';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.css'
})
export class SiteHeaderComponent implements OnInit{
user: IUser | null = null;

constructor(private userSvc: UserService,private router :Router){}

  ngOnInit(){
  this.userSvc.getUser().subscribe({
    next: (user) => {this.user =user}
  });
  }


  signOut(){
    this.userSvc.signOut();
    this.router.navigate(['/home'])
  }

}
