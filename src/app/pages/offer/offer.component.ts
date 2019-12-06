import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Sheet } from 'src/app/Models/Sheet';
import { SheetServiceService } from 'src/app/Services/SheetService.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  sheet:Sheet;
  valuesJson:any;
  new=true
  form=false
  name:string;
  thisclose:string;
  public sheetform:FormGroup= new FormGroup({
    title:new FormControl(),
    description:new FormControl(),
    features:new FormControl(),
    issue:new FormControl(),
 })
  constructor(private sheetservice : SheetServiceService) { }

  ngOnInit() {
  }

  createSheet(){
    this.sheet=this.sheetform.value;
    this.valuesJson=JSON.stringify(this.sheet);
    console.log(this.valuesJson);
    this.sheetservice.addSheet(this.valuesJson).subscribe(status=> this.thisclose=JSON.stringify(status))
   
  }
  aa(){
    console.log(this.thisclose);
  }
}



