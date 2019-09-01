import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any;
  repos:any;
  username:string;

  constructor(private pservice: ProfileService) {
    
   }
   fileProfile(){
     this.pservice.updateProfile(this.username);
     this.pservice.getInformation().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });

    this.pservice.getRepo().subscribe(repos=>{
      console.log(repos);
      this.repos = repos;
    })
   }
  ngOnInit() {
  }

}
