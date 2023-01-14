import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxHeaderComponent } from './ux-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('UxHeaderComponent', () => {
    let component: UxHeaderComponent;
    let fixture: ComponentFixture<UxHeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UxHeaderComponent],
            imports: [MatToolbarModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UxHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
