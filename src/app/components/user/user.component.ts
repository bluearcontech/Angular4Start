import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address
  hobbies: string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataService:DataService) {
    console.log("constructor ran...")
  }

  ngOnInit() {
    console.log("OnInit ran...")
    this.name = 'John Doe'
    this.age = 30;
    this.address = {
      street: '50 street',
      city: 'Boston',
      state: 'state'
    }

    this.hobbies = ['Write code ', 'Watch Movie', 'Listen Music'];
    this.hello = 1
    this.email="goldtime1989@gmail.com"
    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    })
  }

  ClickFunction() {
    this.name = 'Brad Traversy';
    this.hobbies.push('Writing a book')

  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit
  }
}

interface Address {
  street: string,
  city: string,
  state: string
}

interface Post {
  id: number,
  title: string,
  body: string,
  userId: number
}