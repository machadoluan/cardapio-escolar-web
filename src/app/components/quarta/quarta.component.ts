import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { CardapioService } from '../../service/cardapio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quarta',
  standalone: true,
  templateUrl: './quarta.component.html',
  styleUrl: './quarta.component.scss',
  imports: [HeaderComponent, FooterComponent, CommonModule]
})
export class QuartaComponent implements OnInit {
  entradasQuarta: { comida: string, descricao: string }[] = [];


  constructor(
    private router: Router,
    public cardapioService: CardapioService
  ) { }

  ngOnInit(): void {
    this.carregarDados()
  }

  next() {
    this.router.navigate(['quinta'])
  }
  unnext() {
    this.router.navigate(['terca'])
  }

  carregarDados(): void {
    this.cardapioService.atualizarEntradas().then(() => {
      this.entradasQuarta = this.cardapioService.entradasPorDia['Quarta'] || [];
    }).catch(error => {
      console.error("Erro ao carregar dados:", error);
    });
  }
}
