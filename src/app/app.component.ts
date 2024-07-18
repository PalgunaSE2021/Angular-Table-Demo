import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListviewModule } from './listview/listview.module';
import { SharedModule } from './shared/shared.module';
import { SearchComponent } from './shared/search/search.component';
import { ParentComponent } from './listview/parent/parent.component';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ListViewDemo';
}
