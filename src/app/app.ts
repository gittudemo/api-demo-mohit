import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('api-demo-mohit');
  users: any = [];

  constructor(private userService: ApiService) {}

  ngOnInit() {
    console.log('call api');
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
