import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string = '';
  title = 'github-finder';

  userSearchHandler(username: string) {
    this.username = username;
  }
}

