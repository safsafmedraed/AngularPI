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

  getAll1() {
    return this.http.get<Userskills[]>(this.host + '/alluserskills');
  }
  getAll() {
    return this.http.get<Skills[]>(this.host + '/all');
  }

  affectstudentskills(skills_id, rate) {
    return this.http.post<Userskills>(this.host, {skills_id, rate});
  }

  updateskills(id, skills_id, rate) {
    return this.http.put<Userskills>(this.host, {id, skills_id, rate});
  }
}
