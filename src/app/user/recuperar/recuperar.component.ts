import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Recuperar } from './recuperar';


@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  
  formRecuperar: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.createFormRecuperar(new Recuperar());
  }

  createFormRecuperar(recuperar: Recuperar){
    this.formRecuperar = this.formBuilder.group({
      email: [recuperar.email],
    })
  }

  recuperar() {
    // console log, apagar depois
    console.log(this.formRecuperar.value);
    //Validação
    var form = document.getElementsByClassName('validation-recuperar')[0] as HTMLFormElement;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.classList.add('was-validated');  
  }

}
