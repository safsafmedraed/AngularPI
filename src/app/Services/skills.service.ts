import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Skills} from '../Models/Skills';
import {Userskills} from '../Models/userskills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  public host = '/api/skills';

  constructor(private http: HttpClient) {
  }


  getAll() {
    return this.http.get<Skills[]>(this.host + '/all');
  }

  affectstudentskills(skills_id, rate) {
    return this.http.post<Userskills>(this.host, {skills_id, rate});
  }
}
