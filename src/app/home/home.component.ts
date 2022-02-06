import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../service/youtube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  postz: any;
  postx: any;

  constructor(private getAPI : YoutubeService) {
    getAPI.popularVideoID().subscribe(data=>
      this.posts = data
      );

    getAPI.popularVideoUS().subscribe(data=>
      this.postz = data
      );

    getAPI.mainVideo().subscribe(data=>
      this.postx = data
      );
  }
  ngOnInit(): void {  
  }

}


