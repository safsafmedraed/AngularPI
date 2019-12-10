import { MatTableDataSource } from '@angular/material';
import { Lib } from './../../Models/Lib';
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
  lib : Lib [];
  Category : Category;
  valuesJson:any;
  ValueCategory: any ;
  new=true
  form=false
  name:string;
  thisclose:string;
  isLinear = false;
  dataSource ;
  dataSourceFilter;
  cols: any[];
  exportColumns: any[];
  showlib = false ;

  displayedColumns: string[] = ['color','name','homepage','project_count','default_language'];
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  disableSelect = new FormControl(false);
  public sheetform:FormGroup= new FormGroup({
    title:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required]),
    features:new FormControl('',[Validators.required]),
    issue:new FormControl('',[Validators.required]),
 })
 public Categoryform:FormGroup= new FormGroup({
  name_Category:new FormControl(),
  
})
  constructor(private sheetservice : SheetServiceService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
    
  }
  getLIb() {
    this.sheetservice.getLib().subscribe(data => {
      this.lib = [];
      this.lib = data;
      this.dataSource = new MatTableDataSource(this.lib);
  console.log(this.lib);
  });
  this.showlib = true;
  this.cols = [
    { field: 'color', header: 'Color' },
    { field: 'name', header: 'Name' },
    { field: 'homepage', header: 'HomePage' },
    { field: 'default_language', header: 'Default_language'},
    { field: 'project_count', header: 'Project_count' },

    
];
this.exportColumns = this.cols.map(sh => ({title: sh.header, dataKey: sh.field}));
console.log(this.exportColumns);

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

