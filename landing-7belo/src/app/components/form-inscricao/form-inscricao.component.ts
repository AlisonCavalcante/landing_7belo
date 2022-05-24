import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-form-inscricao',
  templateUrl: './form-inscricao.component.html',
  styleUrls: ['./form-inscricao.component.css']
})
export class FormInscricaoComponent implements OnInit {

  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null, Validators.required],
    })
  }

  inscrever(){
    // console.log("entrando")
      this.userService.create(this.form.value).subscribe(res => {
        console.log(res);
      })
  }

}
