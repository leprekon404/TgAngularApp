import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './services/telegram.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  template: `<router-outlet />`,
}) 
export class AppComponent {
  title = 'TgAngularBot';

  telegram = inject(TelegramService);
  constructor() {
    this.telegram.ready();
  }
}
