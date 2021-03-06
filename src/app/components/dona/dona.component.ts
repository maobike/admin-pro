import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

    @Input() titulo: string = 'Sin titulo';
    @Input() labels: string[] = ['No info', 'No info', 'No info'];
    @Input() data: any = [1, 1, 1];
    @Input() charType: string = 'doughnut';
    @Input() colorsArr: string[] = ['#6857E6', '#009FEE', '#F02059'];

    //public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    // public doughnutChartData: MultiDataSet = [
    //   [350, 450, 100],
    // ];

    public colors: Color[] = [
        //{ backgroundColor: [ '#6857E6', '#009FEE', '#F02059' ]}
        { backgroundColor: this.colorsArr}
    ];

}
