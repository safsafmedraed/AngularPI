import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DefenseService} from '../../../Services/defense.service';
import {NotifierService} from 'angular-notifier';

@Component({
  selector: 'app-details-sheet',
  templateUrl: './details-sheet.component.html',
  styleUrls: ['./details-sheet.component.scss']
})
export class DetailsSheetComponent implements OnInit {
  public title;
  public stepIndex=1;
  private description;
  private features;
  private issues;
  private encadreurName;
  private encadreurprenom;
  private emailEncadreur;
  private data1;
  private testRaporteur;
  private idReporter;
  private idSheet;
  public listItems: any;
  public list = [];
  private idFramer;
  private listObject;
  private selectedValue;
  private teacher;
  private notifier: NotifierService;
  public testSoutenance;
  constructor(private activateRouter: ActivatedRoute, private defenseservice: DefenseService,notifierService: NotifierService,private router: Router) {
    this.notifier = notifierService;
  }
  

  ngOnInit() {


    this.activateRouter
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.

        this.description = params['description'] || 0;
        this.title = params['title'] || 0;
        this.features = params['Features'] || 0;
        this.issues = params['issues'] || 0;
        this.encadreurName = params['EncadreurName'] || 0;
        this.encadreurprenom = params['EncadreurPrenom'] || 0;
        this.emailEncadreur = params['EncadreurEmail'] || 0;
        this.idFramer = params['EncadreurId'] || 0;
        this.idSheet = params['IdSheet'] || 0;
      });

    console.log(this.idSheet);
    this.defenseservice.getAllSheets()
      .subscribe(
        res => {
          this.data1 = res;
          for (let a of this.data1) {
            if (a.id_sheet == this.idSheet && a.reporter == null) {

              this.testRaporteur = false;
            } else
              this.testRaporteur = true;
          }

        },
        err => console.error(err),
        () => console.log('done loading all sheets')
      );
      if(this.testRaporteur==true){
           this.testSoutenance=true;

      }else{
        this.testSoutenance=false;
      }
    this.defenseservice.getAllTeachersWithCategories(this.idSheet)
      .subscribe(
        res => {
          this.listItems = res;
          for (let a of this.listItems) {
            let fullname = a.prenom + " " + a.nom;
            if (a.id != this.idFramer)
              this.list.push(fullname);

          }

        },
        err => console.error(err),
        () => console.log('done loading all teachers')
      );
  }
  PlanifyAdefense(){
      this.router.navigate(['/AddDefense'], { queryParams: {
        idSheet:this.idSheet
        } });

  }
  AffectAReporter() {

console.log(this.selectedValue);
    this.defenseservice.getAllTeachersWithCategories(this.idSheet)
      .subscribe(
        res => {
          this.listItems = res;
          for (let a of this.listItems) {
            let fullname = a.prenom + " " + a.nom;
            if (fullname==this.selectedValue){
              console.log("idd"+a.id);
              this.defenseservice.getTheTeacherById(a.id).subscribe(
                res => {
                  console.log("aaa"+res);
                  this.teacher = res;
                  this.defenseservice.affectAReporter(this.idSheet,this.teacher).subscribe(
                    res => {    this.notifier.notify( 'success', 'The reporter was Assigned');this.ngOnInit();},
                    err => console.error(err),
                  );

                },
                err => console.error(err),
                () =>{ console.log('done loading the teacher');
                }
              );

            }


//
          }

        },
        err => console.error(err),
        () => console.log('done loading all teachers')
      );
    console.log(this.idSheet);
    console.log(this.teacher);

  }
}
