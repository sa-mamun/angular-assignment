import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user = {
    name: 'John Doe',
    age: 25,
    email: 'shamimalmamunsamir@gmail.com',
    phone: '017303160043',
  };

  ngOnInit(): void {
    initFlowbite();
  }
}
