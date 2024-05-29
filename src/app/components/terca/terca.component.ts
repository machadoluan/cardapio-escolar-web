import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { CardapioService } from '../../service/cardapio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terca',
  standalone: true,
  templateUrl: './terca.component.html',
  styleUrl: './terca.component.scss',
  imports: [HeaderComponent, FooterComponent, CommonModule]
})
export class TercaComponent implements OnInit {
  entradasTerca: { comida: string, descricao: string }[] = [];

  ngOnInit(): void {
      this.carregarDados()
  }

  constructor(
    private router: Router,
    public cardapioService: CardapioService
  ) { }

  next() {
    this.router.navigate(['quarta'])
  }
  unnext() {
    this.router.navigate(['segunda'])
  }

  carregarDados(): void {
    this.cardapioService.atualizarEntradas().then(() => {
      this.entradasTerca = this.cardapioService.entradasPorDia['Terça'] || [];
    }).catch(error => {
      console.error("Erro ao carregar dados:", error);
    });
  }
}
