import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';
import { CardapioService } from '../../service/cardapio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sexta',
  standalone: true,
  templateUrl: './sexta.component.html',
  styleUrl: './sexta.component.scss',
  imports: [HeaderComponent, FooterComponent , CommonModule]
})
export class SextaComponent implements OnInit {
  entradasSexta: { comida: string, descricao: string }[] = [];

  constructor(
    private router: Router,
    public cardapioService: CardapioService

  ) { }

  ngOnInit(): void {
    
  }

  next() {
    this.router.navigate(['quinta'])
  }

  carregarDados(): void {
    this.cardapioService.atualizarEntradas().then(() => {
      this.entradasSexta = this.cardapioService.entradasPorDia['Sexta'] || [];
    }).catch(error => {
      console.error("Erro ao carregar dados:", error);
    });
  }
}
