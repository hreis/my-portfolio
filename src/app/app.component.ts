import { Component } from '@angular/core';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent {
  title = 'my-portfolio';
  code = faCodeBranch;
}
