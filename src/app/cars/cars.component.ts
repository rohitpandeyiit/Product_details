import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  
  bikeData:any='';//4 process

  bikes=[
    {
      brand:'KTM',
      img:'https://cdn.pixabay.com/photo/2015/05/20/07/57/grassland-774929_960_720.jpg',
      description:'KTM RC 200 is powered by liquid cooled 4-strock'
    },
  
    {
      brand:'TIGER',
      img:'https://cdn.pixabay.com/photo/2019/08/04/13/14/tiger-4383776_960_720.jpg',
      description:'National Animal'
    },
    {
      brand:'R',
      img:'https://cdn.pixabay.com/photo/2014/09/02/12/06/messerschmitt-kr200-433577_960_720.jpg',
      description:'R  4-strock 4 wheels'
    },
    {
      brand:'RICSAW',
      img:'https://cdn.pixabay.com/photo/2019/06/30/07/21/transport-4307465_960_720.jpg',
      description:'RICSAW  is powered 3 wheels '
    },
    {
      brand:'floors-woods',
      img:'https://cdn.pixabay.com/photo/2016/03/15/02/42/floor-1256804_960_720.jpg',
      description:'KTM RC 200 is powered by liquid cooled 4-strock'
    },
    {
      brand:'TREES',
      img:'https://cdn.pixabay.com/photo/2014/12/15/16/57/tree-trunk-569275_960_720.jpg',
      description:'KTM RC 200 is powered by liquid cooled 4-strock'
    }
  ]

  constructor() { }
  sendBike(bike){
    this.bikeData=bike;
    console.log(this.bikeData);
  }

  ngOnInit() {
  }

}
