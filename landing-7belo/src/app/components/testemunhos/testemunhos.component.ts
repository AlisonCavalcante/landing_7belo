import { MessagesService } from './../../services/messages.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TestemunhosService } from './../../services/testemunhos.service';
import { Component, OnInit } from '@angular/core';
import { Coment } from 'src/app/models/coment.model';
import { from, mergeMap } from 'rxjs';

@Component({
  selector: 'app-testemunhos',
  templateUrl: './testemunhos.component.html',
  styleUrls: ['./testemunhos.component.css'],
})
export class TestemunhosComponent implements OnInit {
  testemunhos!: Coment[];
  form!: FormGroup;
  post = {
    title: 'Sobre a 7Belo',
    body: 'Comente sobre as balas 7Belo',
  };
  idPost!: string;

  constructor(
    private messageService: MessagesService,
    private testemunhosService: TestemunhosService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initiPost();
    this.initForm();
  }
  initForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      body: [null, Validators.required],
    });
  }
  coment() {
    try {
      this.testemunhosService
        .create(this.form.value, this.idPost)
        .subscribe((res) => {
          this.testemunhos.unshift(res);
          this.messageService.addMessage('Comentário Feito com Sucesso!');
          this.resetForm();
        });
    } catch (error) {
      alert(error);
    }
  }
  resetForm() {
    this.form.reset();
  }

  initiPost() {
    this.testemunhosService.createPost(this.post).subscribe((res) => {
      this.idPost = res.id;
      from(this.testemunhosService.comentario)
        .pipe(
          mergeMap((comentario) =>
            this.testemunhosService.create(comentario, this.idPost)
          )
        )
        .subscribe(() => {
          this.testemunhosService.get(this.idPost).subscribe((res) => {
            this.testemunhos = res;
            console.log(this.testemunhos);
          });
        });
    });
  }
}
