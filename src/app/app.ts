import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { UserService } from './services/user-service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  //userService = inject(ApiService);
  //users = toSignal(this.userService.getUsers(), { initialValue: [] });

  // constructor(private userService: ApiService) {}

  // ngOnInit() {
  //   console.log('call api');
  //   this.userService.getUsers().subscribe((data: any) => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }
  users = signal<User[]>([]);
  name = signal<string>('');
  email = signal<string>('');

  userService = inject(UserService);

  // users = toSignal<User[]>(this.userService.getUsers());

  ngOnInit() {
    // this.userService.addUser().subscribe((data)=> {
    //   this.users.set(data);
    // });
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users.set(data);
    });
  }
  submitForm() {
    const payload: User = {
      name: this.name(),
      email: this.email(),
      isActive: true,
    };

    this.userService.addUser(payload).subscribe((data) => {
      alert('user added successfully');
      this.loadUsers();
      this.name.set('');
      this.email.set('');
    });
  }
}
