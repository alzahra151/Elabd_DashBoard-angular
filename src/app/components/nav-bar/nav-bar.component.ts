import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  currentUserId: number = 0
   user:User ={}
  constructor(private authservice: AuthService,
    private router: Router,
    private httpClient: HttpClient) {
  }
  ngOnInit() {
    
    
  }

  logout() {
    this.authservice.logout(this.getUserName._id)
   .subscribe(res => {
    this.router.navigate(['/login'])
    localStorage.removeItem('Token')
    localStorage.removeItem('user')
    })
   
  }
  get getUserName(){
    this.user= JSON.parse( localStorage.getItem('user') || '{}')
    return this.user

  }
}
