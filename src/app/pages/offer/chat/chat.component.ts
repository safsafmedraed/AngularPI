import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from '../../../variables/charts';
import {OffreService} from '../../../Services/offre.service';
import {Entreprise} from '../../../Models/entreprise';
import {EntrepriseService} from '../../../Services/entreprise.service';
import {Offreentreprise} from '../../../Models/offreentreprise';
import * as moment from 'moment';
import {Stat} from '../../../Models/stat';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  Companies: Entreprise[] = [];
  Offre: Offreentreprise = new Offreentreprise();

  stats: Stat[];

  constructor(public offre: OffreService, public CompanyService: EntrepriseService) {
  }

  ngOnInit() {
    this.CompanyService.getCompanies().subscribe(data => this.Companies = data, eur => console.log('error'));
    const chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());

    const ordersChart = new Chart(chartOrders, {
      type: 'pie',
      options: chartExample2.options,
      data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Candidature',
            data: [50, 20, 30, 22, 17, 29]
          }
        ]
      }
    });
  }

  onclick(idE, date) {
    const formattedDate = moment(date).format('YYYY/MM/DD');
    console.log(formattedDate);
    this.offre.stat(idE, formattedDate).subscribe(data => this.stats = data, eur => console.log('error'));
    
  }
}


