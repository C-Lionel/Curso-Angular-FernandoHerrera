import { Component } from '@angular/core';

@Component({
    selector: 'app-uncommon-page',
    templateUrl: './uncommon-page.component.html',
    styleUrls: ['./uncommon-page.component.css']
})


export class UncommonPageComponent {



    // i18n Select
    public name: string = 'Lionel';
    public gender: 'male' | 'female' = 'male';
    
    public invitationMap = {
        male: 'invitarlo',
        female: 'invitarla'
    }

     changeClient(): void {
        this.name = 'Fátima';
        this.gender = 'female';
     }

}
