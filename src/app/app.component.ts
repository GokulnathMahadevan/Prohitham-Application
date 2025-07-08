import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component'; // ✅ path to your navbar component
import { RouterModule } from '@angular/router'; // <-- Add this import

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterModule], // <-- Add RouterModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ungaliyer';
}
