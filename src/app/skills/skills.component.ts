import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {


Arr : any[]
constructor(){
  this.Arr =[
    {
      skill: "html" ,
      value:50
    },

    {
      skill: "css",
      value:20
    },
    {
      skill: "js",
      value:70
    },
    {
      skill: "bootstrap",
      value:40
    }

  ]

}

}