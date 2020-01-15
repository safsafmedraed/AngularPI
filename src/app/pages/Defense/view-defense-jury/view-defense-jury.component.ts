import { Component, OnInit } from '@angular/core';
import { DefenseService } from '../../../Services/defense.service';
import { ActivatedRoute, Router } from '@angular/router';
//import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view-defense-jury',
  templateUrl: './view-defense-jury.component.html',
  styleUrls: ['./view-defense-jury.component.scss']
})
export class ViewDefenseJuryComponent implements OnInit {
  public date;
  public time;
  public NameClassRoom;
  public Location;
  public State;
  private IdDefense;
  public show=false;
  public event;
  public withQrCode=true;
  constructor(private router:Router,private defenseService:DefenseService,private http: HttpClient,private activateRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activateRouter
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.

      this.IdDefense = params['IdDefense'] || 0;

    });

    this.defenseService.getAllDefenses().subscribe(res => {


      const JSobj =JSON.parse(JSON.stringify(res));
      for(let a of JSobj){
      if(a.id_defense== this.IdDefense){
      this.date=a.dateDefense;
      this.Location=a.location;
      this.State=a.stateDefense;
      this.NameClassRoom=a.nameClassroom;
      this.time=a.timeDefense;

      }
      this.event="The event is confirmed at "+this.date+" "+this.time;


     }},
        err => console.error(err),
     () => console.log('done loading all Defenses')
   );

  /* const myfrugalmap = L.map('frugalmap').setView([36.854268, 10.207360], 12);

   L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: 'Frugal Map'
   }).addTo(myfrugalmap);

   const myIcon = L.icon({
     iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
   });

   if(this.Location=="Charguia"){
   this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
     data.records.forEach(podotactile => {
       L.marker([36.854268, 10.207360], {icon: myIcon}).addTo(myfrugalmap);
     });
   });
  }else{
    this.http.get('https://opendata.lillemetropole.fr/api/records/1.0/search/?dataset=bornes-podotactiles').subscribe((data: any) => {
      data.records.forEach(podotactile => {
        L.marker([36.898504, 10.189711], {icon: myIcon}).addTo(myfrugalmap);
      });
    });

  }*/

  }
/*  GenerateCode(){
   this.show=true;
   this.withQrCode=false;

  }
  isOpen = false;
  isOpenChange($event: boolean) {
    this.isOpen = $event;
  }
  open(){
this.isOpen=true;

  }*/
}
