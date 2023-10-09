import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  // formBuilder una manera mas simplificada de trabajar con formulario reactivos que reemplaza a FormGroup() (aunque no está obsoleto)

  public myForm: FormGroup = this.formBuilder.group({
        name: ['', [ Validators.required, Validators.minLength(3) ]],
        price: [0, [ Validators.required, Validators.min(0) ]],
        inStorage: [0, [ Validators.required, Validators.min(0) ]]
  })

  onSave(): void {
    if(this.myForm.invalid) return;
    
    console.log(this.myForm.value)
  }

}
