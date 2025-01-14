import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { appFontawesomeIcons } from './shared/fontawesome-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'netflix-clone';
  faIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontawesomeIcons();
  }
  initFontawesomeIcons(): void {
    this.faIconLibrary.addIcons(...appFontawesomeIcons);
  }
}
