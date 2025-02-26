import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../../../auth/login-form/login-form.component';

import { Credentials } from '../../interfaces/credentials';
import { AuthService } from '../../data-access/auth.service';

@Component({
  selector: 'maicf-header',
  imports: [CommonModule, LoginFormComponent],
  templateUrl: './header.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  isOpen = signal(false);
  auth = inject(AuthService);
  router = inject(Router);

  login(credentials: Credentials) {
    console.log(credentials);
  }

  toggleSidebar() {
    this.isOpen.set(!this.isOpen());
  }
}
