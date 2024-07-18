import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../shared/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [],
})
export class ListviewModule {}
