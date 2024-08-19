import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  valordaprestacao: any;
  TaxaJuros: any;
  atrasoMeses: any;
  somatotal: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.somatotal = +params['somatotal'];
      this.atrasoMeses = +params['atrasoMeses'];
      this.TaxaJuros = +params['TaxaJuros'];
      this.valordaprestacao = +params['valordaprestacao'];
    });
  }

}
