import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valorprestacao: number = 0;
  taxajuros: number = 0;
  atrasoMeses: number = 0;
  valortotal: number = 0;

  pinFormatter(value: number) {
    return `${value}%`;
  }

  constructor(public router: Router) {}

  calcularPrestacao() {
    if (this.valorprestacao > 0 && this.taxajuros > 0 && this.atrasoMeses > 0) {
      this.valortotal = this.valorprestacao * Math.pow((1 + this.taxajuros / 100), this.atrasoMeses);

      // NAVIGATE ROUTER PARA TELA CONFIRMAR
      this.router.navigate(['/tela-confirmar', this.valortotal.toFixed(2), this.atrasoMeses, this.taxajuros, this.valorprestacao])
        .then(feito => {
          if (feito) {
            console.log('RESPOSTA EMITIDA.');
          } else {
            console.error('ERRO 404.');
          }
        });
    } else {
      console.error("OS VALORES NÃO BATEM.");
    }
  }
}
