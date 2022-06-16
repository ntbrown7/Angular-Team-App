import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = '';
  members: string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "";
  teams: string[][] = [];
  

  onNumberOfTeamsInput(value:string){
    this.numberOfTeams = Number(value);
  }

  onInput(member: string){
    this.newMemberName = member;
    console.log("this.newMemberName 🧔")
  }
  addMember() {
    
    if (!this.newMemberName){
      this.errorMessage = "No name, ya nitwit"
      return;
    }

    this.members.push(this.newMemberName);
    this.newMemberName ="";
    this.errorMessage ="";
    console.log(this.newMemberName);
    console.log(this.members);

    }
   generateTeams(){
    console.log("🤜🤛");
    this.teams = [];
    //create x arrays
    if(!this.numberOfTeams || this.numberOfTeams <= 0){
      this.errorMessage = "Can't put zero or less you protozoic waste";
    }
    
    if(this.members.length <this.numberOfTeams){
      this.errorMessage = "Think of a higher number of members or be destroyed";
    }
    let size = Number(this.numberOfTeams) -1;
    this.errorMessage = '';


    const allMembers = [...this.members];
    while(allMembers.length){
      for (let i=0; i<= size; i++)  { 
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member) break;
        if(this.teams[i]){ //if we have an array in there
          this.teams[i].push(member) //adds member to array
        } else {//if there is no array
            this.teams[i] = [member]; //creates an array
        } 
      }
    }
    this.members = [];
    this.numberOfTeams = "";
    
    console.log(this.teams)
   }

}
