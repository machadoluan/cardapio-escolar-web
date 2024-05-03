import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  userProfile: any;
  dropdownVisible: boolean = false;

  constructor(private userService: UserService) { }

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
}