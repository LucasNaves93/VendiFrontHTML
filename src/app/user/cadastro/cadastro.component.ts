import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from './cliente';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      dataNascimento: [cliente.dataNascimento],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formCliente.value);


  }

}
