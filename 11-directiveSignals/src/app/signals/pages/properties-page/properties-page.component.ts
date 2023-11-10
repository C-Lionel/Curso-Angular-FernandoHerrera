import { Component, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public user = signal<User>({
    id: 1,
    email: 'Lio2014vt@gmail.com',
    first_name: 'Lionel',
    last_name: 'Cancellieri',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  //

  public counter = signal(10);

  increaseBy( value: number ) {
    this.counter.update( current => current + value )
  }

  public userChangedEffect = effect( () => {
    console.log( `${this.user().first_name} - ${this.counter()}` )
  } )

  onFieldUpdated( field: keyof User, value: string ) {

    this.user.mutate( current => {
      switch( field ) {

        case 'email':
          current.email = value;
        break;

        case 'first_name':
          current.first_name = value;
        break;

        case 'last_name':
          current.last_name = value;
        break;

        case 'id':
          current.id = Number(value);
        break;
      }
    })
  }

}
