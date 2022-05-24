import { TestemunhosService } from './../../services/testemunhos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testemunhos',
  templateUrl: './testemunhos.component.html',
  styleUrls: ['./testemunhos.component.css']
})
export class TestemunhosComponent implements OnInit {

  testemunhos!: any[];

  constructor(private testemunhosService: TestemunhosService) { }

  ngOnInit(): void {
    this.testemunhosService.get().subscribe(res => {
      this.testemunhos = res;
    })
  }

}
