import { Component, ChangeDetectionStrategy, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'; 
import { Song } from 'src/app/interfaces/songs.interface';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
    /**
     * Form group for search field
     */
    public searchControl: FormControl;
    public songs: Array<Song> = [];
    public woeid: string;
    private unsubscribe: Subject<any> = new Subject<any>();

    constructor(
        private searchService: SearchService,
        private cdRef: ChangeDetectorRef
    ) { }

    public ngOnInit() {
        this.searchControl = new FormControl('', Validators.required);
    }

    public Search(term: string) {
        this.searchService.getTracksResults(term).pipe(
            takeUntil(this.unsubscribe)
        ).subscribe(res => {
            this.songs = res.songs;
            this.cdRef.detectChanges();
        });
    }

    /**
     * Destroy component and subscriptions.
     */
    public ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}
