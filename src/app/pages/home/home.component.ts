import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  status: string = "";

  ngOnInit() {
    const token = localStorage.getItem('user');

    if(token){
      this.status = "Ir para o sistema"
    } else {
      this.status = "Login"
    }

  }

  constructor(
    private router: Router
  ) { }

  login() {
    this.router.navigate(['login'])
  }
}
