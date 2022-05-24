import { MessagesService } from './../../services/messages.service';
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
  user!: User;
  constructor(private formBuilder: FormBuilder, private userService: UsersService, private messageService: MessagesService) { }

  ngOnInit(): void {

    this.initForm();
  }

  initForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      gender: ['male']
    })
  }

  cadastrar(){
       this.user = {
        name: this.form.get('name')?.value,
        email: this.form.get('email')?.value,
        gender: this.form.get('gender')?.value,
        status: "active"
      }
      try {
        this.userService.create(this.user).subscribe(res => {
          this.messageService.addMessage("Parabéns, você se inscreveu com Sucesso!")
          this.resetForm();
        })
      } catch (error) {
        alert("Erro ao cadastrar" + error);
      }

  }

  resetForm(){
    this.form.reset();
  }

}
