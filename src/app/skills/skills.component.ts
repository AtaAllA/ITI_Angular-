import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skill = ['Java', 'TypeScript', 'php'];
  btnclicked() {
    console.log("downloading");
  }
}
