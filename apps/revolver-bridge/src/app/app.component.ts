import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'revolver-bridge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public readonly auth: AngularFireAuth,
    private readonly router: Router
  ) {}

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['login']);
  }
}
