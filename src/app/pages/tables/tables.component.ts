import { Component, OnInit } from '@angular/core';
import { statsService } from 'app/Services/statsService';
import { Stat } from 'app/Models/Sats';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  data: any;
  data1: any;
  data2 : any;
  
  constructor(private statsService:statsService) { }
  stats:Stat

    
  ngOnInit() {
    this.statsService.stats().subscribe(data=>{this.stats=data;
      this.data = {
        datasets: [{
            data: [
              this.stats.JAVAEE,
              this.stats.NET,
              this.stats.Symfony,
              this.stats.Ruby,
              this.stats.Angular,
              this.stats.React,
              this.stats.VueJs,
              this.stats.Swift,
              this.stats.Android,
              this.stats.Ionic,
              this.stats.Devops
         
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#E7E9ED",
                "#36A2EB",
                "#9543cf",
                "#8b4726",
                "#171a1c",
                "#494d4d",
                "#26725d",
                "#ca405b"
            ],
            label: 'My dataset'
        }],
        labels: [
            "JAVA EE",
            ".NET",
            "Symfony",
            "Ruby",
            "Angular",
            "React",
            "VueJs",
            "Swift",
            "Android",
            "Ionic",
            "Devops"
        ]
      } 
      this.data1 = {
        labels: ['Not signed for staff','Canceled their project','Who cant cancel their project','Who got help from staff'],
        datasets: [
            {
              data:[
                           this.stats.StudentsNotSignedForStaff, 
                           this.stats.StudentsWhoCanceledTheirProject, 
                          this.stats.StudentsWhoCantCancelProject,
                          this.stats.StudentsWhoGotHelpFromStaff
                          ],
                          backgroundColor: [
                             "#FF6384",
                             "#36A2EB",
                              "#FFCE56",
                              "#E7E9ED"
                          ],
                          hoverBackgroundColor: [
                               "#FF6384",
                             "#36A2EB",
                              "#FFCE56",
                             "#E7E9ED",
                           ]
                      }]    
        };

        this.data2 = {
          labels: ['Back end','Mobile', 'Front end'],
          datasets: [
              {
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,99,132,0.2)',
                  borderColor: 'rgba(255,99,132,1)',
                  pointBackgroundColor: 'rgba(255,99,132,1)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgba(255,99,132,1)',
                  data: [this.stats.Backend,
                    this.stats.Mobile,
                    this.stats.Frontend,
                    
                    ]
              },
             
          ]
      };
    }
    
    )
  }

}

