import {Component, OnInit} from '@angular/core';
import {SkillsService} from '../../../Services/skills.service';
import {Useroffre} from '../../../Models/useroffre';
import {Offreentreprise} from '../../../Models/offreentreprise';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {
  index: number;
  userO: Offreentreprise[] = [];

  constructor(private matching: SkillsService) {
  }

  ngOnInit() {
    this.matching.matching(this.index).subscribe(data => this.userO = data);
  }


}
