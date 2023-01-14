import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchComponent } from './search.component';

@NgModule({
    declarations: [SearchComponent],
    imports: [
        CommonModule,
        SearchRoutingModule,
        SharedModule
    ]
})
export class SearchModule { }
