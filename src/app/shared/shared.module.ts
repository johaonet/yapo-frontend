import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UxHeaderComponent } from './components/ux-header/ux-header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

const UX_COMPONENTS: any[] = [
    UxHeaderComponent,
    CardComponent
];

const UX_MODULES: any[] = [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    RouterModule
];

@NgModule({
  imports: UX_MODULES,
  declarations: UX_COMPONENTS,
  exports: [...UX_COMPONENTS, ...UX_MODULES]
})
export class SharedModule {}
