import {Component, Inject, OnInit} from '@angular/core';
import {CommentService} from '../../Services/comment.service';
import {Comment} from '../../Models/Comment';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../Models/Post';
import {PostService} from '../../Services/post.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LOCAL_STORAGE, WebStorageService} from 'ngx-webstorage-service';
import {Observable} from 'rxjs';
import {VoteComment} from '../../Models/VoteComment';
import {VoteService} from '../../Services/vote.service';
import {Student} from '../../Models/Student';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {
  Comments: Comment[] = [];
  Comment: Comment;
  post: Post;
  vote: VoteComment;
  Votes: VoteComment[] = [];
  student: Student ;
  private reponse = new FormGroup({
    description: new FormControl('', [Validators.required])
  });
  constructor(public commentService: CommentService, public voteService: VoteService, public postService: PostService , private route: ActivatedRoute, @Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    console.log(id);
    this.commentService.getComments(id).subscribe(data => {this.Comments = data; console.log(data);
    this.postService.getPostById(id).subscribe( data => {this.post = data; console.log(data);
      } );
    } );
    this.student = this.storage.get('user');
  }
  get description() {
    return this.reponse.get('description');
  }
  addComment() {
    this.Comment = new Comment(this.reponse.value['description']);
    console.log(this.Comment);
    this.Comment.s = this.storage.get('user');
    this.postService.addPost(this.post).subscribe( );
    this.commentService.addPComment(this.Comment, this.post.id_post).subscribe();
    this.reponse.reset();
    this.ngOnInit();

  }
  addV(i: number){
    this.vote = new VoteComment();
    this.vote.users = this.storage.get('user');
    this.voteService.addVote(this.vote, i).subscribe();


  }
  updatepost() {
    this.postService.updatePost(this.post.id_post).subscribe();
  }

}
