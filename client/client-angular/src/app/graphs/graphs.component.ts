import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators';
import { Statistic } from '../models/statistic';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartData = [];
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero: true
        }
      }]
    }
   

  };
  public barChartLegend = true;

  constructor(private stat: StatisticsService) { }

  ngOnInit(): void {
    this.load();

  }

  load() {
    this.stat.getEventsStatistic().subscribe(res => {

      var count = res.map(o => o.count);
      var cat = res.map(o => o._id);
      this.doughnutChartLabels = cat;
      this.doughnutChartData = count
      this.doughnutChartType = 'doughnut';


    });

    this.stat.getTicketsStatistic().subscribe(res => {

      var event = res.map(o => o._id);
      var count = res.map(o => o.soldTickets);
      this.barChartLabels = event;
      this.barChartData = [{ data: count, label: 'Count Sold Tickets By Event' }]

    });

  }



  public colors: any = [{
    borderColor: 'black',
    backgroundColor: ["#f9f990",
      "#90f997",
      "#9790f9",
      "#99e5e5",
      "#f7bd83",
      "#ffbb33",
      "#004d66",
      "#339966",
      "#ffbb33",
      "#ffbb35"
    ]
  }];

}
