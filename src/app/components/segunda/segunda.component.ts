import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { CardapioService } from '../../service/cardapio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-segunda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './segunda.component.html',
  styleUrl: './segunda.component.scss'
})
export class SegundaComponent implements OnInit {
  entradasSegunda: { comida: string, descricao: string }[] = [];


  constructor(
    private router: Router,
    public cardapioService: CardapioService
  ) { }

  next() {
    this.router.navigate(['terca'])
  }

  ngOnInit(): void {
    this.carregarDados()
  }

  carregarDados(): void {
    this.cardapioService.atualizarEntradas().then(() => {
      this.entradasSegunda = this.cardapioService.entradasPorDia['Segunda'] || [];
    }).catch(error => {
      console.error("Erro ao carregar dados:", error);
    });
  }
}
