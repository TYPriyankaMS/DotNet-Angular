import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title="Angular concepts ";
  flag=true;
  url= 'https://cdn.pixabay.com/photo/2020/05/15/18/46/corona-5174671__480.jpg';
name;
password;
gender;
  constructor() { }

  ngOnInit() {
  }

  click(){
    alert("hey you clicked me");
  }

  products: Products[]=[
    {
      name:'priyanka',
      image:'https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_1280.jpg',
      price:80000
    },
    {
      name:'Abhishek',
      image:'https://cdn.pixabay.com/photo/2015/05/12/09/13/social-media-763731_1280.jpg',
      price:40000
    },
    {
      name:'Yashwanth',
      image:'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311__480.jpg',
      price:40000
    }
  ];
}
interface Products{
  name:string,
  image:string,
  price:number
}


