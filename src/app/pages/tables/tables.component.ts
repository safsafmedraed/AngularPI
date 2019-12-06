import {Component, Inject, OnInit} from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../Services/post.service';
import {Post} from '../../Models/Post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Student} from '../../Models/Student';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
Posts: Post[] = [];
post: Post;

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, public postService: PostService, private router: Router ) { }

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

  ajouterpost() {
    this.post = new Post(this.questionf.value['name_post'], this.questionf.value['description_post'],this.questionf.value['categorie'],this.questionf.value['image']);
    console.log(this.post);
    this.post.users = this.storage.get('user');
    this.postService.addPost(this.post).subscribe( );
    this.ngOnInit();
    this.questionf.reset();
  }
}
