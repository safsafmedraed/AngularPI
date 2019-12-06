import {Component, OnInit} from '@angular/core';
import {Skills} from '../../Models/Skills';
import {SkillsService} from '../../Services/skills.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Food} from '../offer/popupoffre/popupoffre.component';
import {Userskills} from '../../Models/userskills';
import {getValue} from '@angular/core/src/render3/styling/class_and_style_bindings';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  userskills: Userskills = new Userskills();
  userskills1: Userskills[] = [];
  skills: Skills[] = [];
  skills1: Skills = new Skills();
  abilities: Array<Userskills>[];
  rate: number;
  index: number;
  foods: Food[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'}
  ];


  constructor(public skillservice: SkillsService) {
  }

  ngOnInit() {
    this.abilities = [];
    this.rate = 0;
    this.skillservice.getAll().subscribe(data => this.skills = data, eur => console.log('error'));
  }


  drop(event: CdkDragDrop<Skills[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.abilities[0]);
  }

  addskillsstudent(userskills, rate) {
    this.rate = rate;
    this.skillservice.affectstudentskills(userskills, rate).subscribe(data => 'created');

  }

  update(userskills, rate, id) {
    this.rate = rate;
    this.skillservice.updateskills(88, userskills, rate).subscribe(data => 'updated');

  }
}
