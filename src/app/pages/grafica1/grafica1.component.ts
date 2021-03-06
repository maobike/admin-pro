import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{

    public labels1: string[] = ['Ventas', 'Pedidos', 'Devoluciones'];

    public data1 = [
        [350, 450, 200],
    ] 

    public colors1: string[] = [ '#6857E6', '#009FEE', '#F02059' ];
    public colors2: string[] = [ '#ff57E6', '#12CCDD', '#FFA012' ];

}
