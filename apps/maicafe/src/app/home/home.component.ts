import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'maicf-home',
  imports: [MenuComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
