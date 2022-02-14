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
  posty: any;
  posty2: any;

  constructor(private getAPI : YoutubeService) {
    getAPI.popularVideoID().subscribe(data=>
      this.posts = data
      );
      console.log(this.posts) 

    getAPI.popularVideoUS().subscribe(data=>
      this.postz = data
      );

    getAPI.mainVideo().subscribe(data=>
      this.postx = data
      );
      console.log(this.postx) 

    getAPI.popularVideoMY().subscribe(data=>
      this.posty = data
      );
      
    getAPI.popularVideoMY2().subscribe(data=>
      this.posty2 = data
      );
  }
  ngOnInit(): void {  
  }

}


