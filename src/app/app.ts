import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  userService = inject(ApiService);
  users = toSignal(this.userService.getUsers(), { initialValue: [] });

  // constructor(private userService: ApiService) {}

  // ngOnInit() {
  //   console.log('call api');
  //   this.userService.getUsers().subscribe((data: any) => {
  //     this.users = data;
  //     console.log(this.users);
  //   });
  // }
}
