import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {
  entradasPorDia: { [dia: string]: { comida: string, descricao: string }[] } = {};

  constructor(private http: HttpClient) { }

  atualizarEntradas(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get<any[]>('http://localhost:3000/cardapio')
        .subscribe(data => {
          // Limpa as entradas por dia
          this.entradasPorDia = {};

          // Agrupa as entradas por dia da semana
          data.forEach(entrada => {
            const dia = entrada.dia;
            if (!this.entradasPorDia[dia]) {
              this.entradasPorDia[dia] = [];
            }
            this.entradasPorDia[dia].push({
              comida: entrada.comida,
              descricao: entrada.descricao
            });
          });

          resolve(); // Resolve a Promise quando as entradas são atualizadas
        }, error => {
          reject(error); // Rejeita a Promise em caso de erro
        });
    });
  }

}