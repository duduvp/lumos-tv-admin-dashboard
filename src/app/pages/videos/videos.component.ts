import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos: any;
  constructor(private authService: AuthService, db: AngularFireDatabase) {
    this.videos = db.list('videos').valueChanges();
  }

  ngOnInit() {
    console.log(this.videos);
  }

  getUsername() {
    return JSON.parse(localStorage.getItem('user')).email;
  }

}
