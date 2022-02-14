import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private getAPI : HttpClient) {}

  popularVideoID(){
    return this.getAPI.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=ID&key=AIzaSyAk24B09Xz_hCv1NXtAemkU_yKnIaTBJrU");
  }

  popularVideoUS(){
    return this.getAPI.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=US&key=AIzaSyAk24B09Xz_hCv1NXtAemkU_yKnIaTBJrU");
  }

  mainVideo(){
    return this.getAPI.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2C%20player&chart=mostPopular&maxHeight=257&maxResults=5&regionCode=ID&key=AIzaSyAk24B09Xz_hCv1NXtAemkU_yKnIaTBJrU");
  }

  popularVideoMY(){
    return this.getAPI.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1&regionCode=MY&key=AIzaSyAk24B09Xz_hCv1NXtAemkU_yKnIaTBJrU");
  }

  popularVideoMY2(){
    return this.getAPI.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=2&regionCode=MY&key=AIzaSyAk24B09Xz_hCv1NXtAemkU_yKnIaTBJrU");
  }

}