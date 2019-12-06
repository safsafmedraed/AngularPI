import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../Services/comment.service';
import {Comment} from '../../Models/Comment';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../Models/Post';
import {PostService} from '../../Services/post.service';


@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {
  Comments: Comment[] = [];
  post: Post;
  constructor(public commentService: CommentService, public postService: PostService , private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    console.log(id);
    this.commentService.getComments(id).subscribe(data => {this.Comments = data; console.log(data);
    this.postService.getPostById(id).subscribe( data => {this.post = data; console.log(data);
      } );
    } );

  }

}
