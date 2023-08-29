import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-side',
  templateUrl: './second-side.component.html',
  styleUrls: ['./second-side.component.scss']
})
export class SecondSideComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


  accordionItems = [
    { title: 'Favoritos', firstFav:'Contestação', secondFav:'Vendas', thirdFav:'Outros', open: true },
  ];

  toggleAccordion(index: number) {
    this.accordionItems[index].open = !this.accordionItems[index].open;
  }

}
