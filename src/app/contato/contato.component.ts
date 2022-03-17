import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    window.scroll(0,0)
  }

  enviar(){
    alert('Futuramente iremos implementar no back-end para o e-mail ser enviado')
  }
}
