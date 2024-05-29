import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ModalComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  userProfile: any;
  dropdownVisible: boolean = false;


  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // Obter as informações do perfil do serviço de usuário
    this.userProfile = this.userService.getUserProfile();

    // Se as informações do perfil não estiverem disponíveis no serviço de usuário,
    // tente buscar no Local Storage
    if (!this.userProfile) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.userProfile = JSON.parse(storedUser);
      }
    }
  }

  toggleDropdown(): void {
    this.dropdownVisible = true;
  }
  closeDropdown(): void {
    this.dropdownVisible = false;
  }
  preventClose(event: MouseEvent): void {
    event.stopPropagation(); // Impede que o clique dentro do dropdown se propague para o manipulador de evento da div .user
  }


  sair() {
    localStorage.removeItem('user');
    window.location.reload();

  }



  // Dias da semana 

  segunda() {
    this.router.navigate(['segunda'])
  }
  terca() {
    this.router.navigate(['terca'])
  }
  quarta() {
    this.router.navigate(['quarta'])
  }
  quinta() {
    this.router.navigate(['quinta'])
  }
  sexta() {
    this.router.navigate(['sexta'])
  }
}