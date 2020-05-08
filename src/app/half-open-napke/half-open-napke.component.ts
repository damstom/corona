import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-open-napke',
  templateUrl: './half-open-napke.component.html',
  styleUrls: ['./half-open-napke.component.css']
})
export class HalfOpenNapkeComponent implements OnInit {
  dicht: number[] = [];
  open: number[] = [];
  keuningen = 0;
  vorige;

  constructor() {
  }
  

  ngOnInit(): void {
      if (this.dicht.length == 0){
        for (var _i = 1; _i <= 52; _i++) {
        this.dicht.push(_i)
      }
      this.shuffle(this.dicht);
      for (var _i = 1; _i <= 26; _i++) {
        this.open.push(this.dicht.pop())
      }
    }
    console.log(this.open)
  }


  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  nextOpen(){
    if(this.open[0] >= 49){
      this.keuningen++;
    }
    this.vorige = this.open[0];
    this.open.shift();
  }

  nextDicht(){
    if(this.dicht[0] >= 49){
      this.keuningen++;
    }
    this.vorige = this.dicht[0];
    this.dicht.shift();
  }
}
