import { MessagesService } from './../../services/messages.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestemunhosService } from './../../services/testemunhos.service';
import { Component, OnInit } from '@angular/core';
import { Coment } from 'src/app/models/coment.model';

@Component({
  selector: 'app-testemunhos',
  templateUrl: './testemunhos.component.html',
  styleUrls: ['./testemunhos.component.css']
})
export class TestemunhosComponent implements OnInit {

  testemunhos!: Coment[];
  form!: FormGroup;

  constructor(private messageService: MessagesService,private testemunhosService: TestemunhosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testemunhosService.get().subscribe(res => {
      this.testemunhos = res;
    })
    this.initForm();
  }
  initForm(){
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      body: [null, Validators.required],
    })
  }
  coment(){
    try {
      this.testemunhosService.create(this.form.value).subscribe(res => {
        this.testemunhos.unshift(res);
        this.messageService.addMessage("Comentário Feito com Sucesso!");
        this.resetForm();
      })
    } catch (error) {
      alert(error);
    }
  }
  resetForm(){
    this.form.reset();
  }
}
