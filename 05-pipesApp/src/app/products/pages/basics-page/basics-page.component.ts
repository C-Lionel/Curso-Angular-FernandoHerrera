import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'lionel'; 
  public nameUpper: string = 'LIONEL'; 
  public fullName: string = 'lIOneL caNCELliErI'; 

}
