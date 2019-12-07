import {Component, TemplateRef , Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../Services/post.service';
import {Post} from '../../Models/Post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../Models/Student';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
Posts: Post[] = [];
post: Post;
img: string;
  modalRef: BsModalRef;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public postService: PostService, private router: Router , private modalService: BsModalService) { }

  private questionf = new FormGroup({
    name_post: new FormControl('', [Validators.required]),
    description_post: new FormControl('' ),
    categorie: new FormControl(''),
    image : new FormControl('')
  });
  ngOnInit() {
    this.postService.getPosts().subscribe(data => {this.Posts = data;
      console.log(data);
    } );

  }

  onSelect(post) {
    this.router.navigate(['postdetails/', post.id_post] );
  }
  get description_post() {
    return this.questionf.get('description_post');
  }
  get categorie() {
    return this.questionf.get('categorie');
  }
  get image() {
    return this.questionf.get('image');
  }
  get name_post() {
    return this.questionf.get('name_post');
  }
  updateimg(fakepath) {
    fakepath = this.questionf.value['image'];
    const splits = fakepath.split ('fakepath\\');
    this.img = fakepath;
  }

  ajouterpost() {
    this.img = this.questionf.value['image'];
    const s = this.img.replace("C:\\fakepath\\","\\assets\\img\\");
    this.post = new Post(this.questionf.value['name_post'], this.questionf.value['description_post'],this.questionf.value['categorie'], s);
    console.log(this.post);
    this.post.users = this.storage.get('user');
    this.postService.addPost(this.post).subscribe( );
    this.ngOnInit();
    this.questionf.reset();
  }
  onFileChanged(event) {
    const file = event.target.files[0] ;
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
