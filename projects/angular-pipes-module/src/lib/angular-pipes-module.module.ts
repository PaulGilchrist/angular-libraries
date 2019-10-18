import { NgModule } from '@angular/core';
import { FilterObjectsPipe } from './filter-objects.pipe';
import { SortObjectsPipe } from './sort-objects.pipe';

@NgModule({
  declarations: [FilterObjectsPipe, SortObjectsPipe],
  imports: [
  ],
  exports: [FilterObjectsPipe, SortObjectsPipe]
})
export class AngularPipesModuleModule { }
