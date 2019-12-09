import { Category } from './../../Models/Category';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Sheet } from 'app/Models/Sheet';
import { SheetServiceService } from 'app/Services/SheetService.service';
@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  sheet:Sheet;
  Category : Category;
  valuesJson:any;
  ValueCategory: any ;
  new=true
  form=false
  name:string;
  thisclose:string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  disableSelect = new FormControl(false);
  public sheetform:FormGroup= new FormGroup({
    title:new FormControl(),
    description:new FormControl(),
    features:new FormControl(),
    issue:new FormControl(),
 })
 public Categoryform:FormGroup= new FormGroup({
  name_Category:new FormControl(),
  
})
  constructor(private sheetservice : SheetServiceService,private _formBuilder: FormBuilder) { }

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
  addCategorytosheet(){
   this.Category = this.Categoryform.value;
   this.ValueCategory= JSON.stringify(this.Category);
   console.log(this.ValueCategory);
   this.sheetservice.addCategory(this.ValueCategory,this.thisclose).subscribe();
  }
}



