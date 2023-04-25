import { Component, OnInit } from '@angular/core';
import { Dog } from '../Dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-consumidor',
  templateUrl: './consumidor.component.html',
  styleUrls: ['./consumidor.component.css']
})
export class ConsumidorComponent implements OnInit{
  dog : Dog = {} as Dog;

  constructor(private service: DogService){}

  ngOnInit(): void {
    this.loadDog();
  }

  loadDog(){
    this.service.getDog().subscribe(
      {
      next : data => this.dog = data
      }
    );
  }

  getBreed() : string []{
    
    return this.dog.message.split("/")[4].split("-");
  }

}


