import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, SearchComponent, TableComponent],
  exports: [SearchComponent, TableComponent],
})
export class SharedModule {}
