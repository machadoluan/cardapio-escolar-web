import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';
import { CardapioService } from '../../service/cardapio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quinta',
  standalone: true,
  templateUrl: './quinta.component.html',
  styleUrl: './quinta.component.scss',
  imports: [FooterComponent, HeaderComponent, CommonModule]
})
export class QuintaComponent implements OnInit {
  entradasQuinta: { comida: string, descricao: string }[] = [];
  
  
  constructor(
    private router: Router,
    public cardapioService: CardapioService
    
  ) { }

  ngOnInit(): void {
    this.carregarDados()
    
  }

  next() {
    this.router.navigate(['sexta'])
  }

  unnext(){
    this.router.navigate(['quarta'])
  }


  carregarDados(): void {
    this.cardapioService.atualizarEntradas().then(() => {
      this.entradasQuinta = this.cardapioService.entradasPorDia['Quinta'] || [];
    }).catch(error => {
      console.error("Erro ao carregar dados:", error);
    });
  }
}
