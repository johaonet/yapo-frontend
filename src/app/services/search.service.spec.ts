import { TestBed } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchService } from './search.service';

const mockSearchTerm = 'asd';
const mockSearchUrl = 'http://localhost:4004/api/tracks?artist=' + mockSearchTerm;

describe('SearchService', () => {
    let httpTestingController: HttpTestingController;
    let service: SearchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [SearchService],
            imports: [HttpClientTestingModule]
        });
        // Inject the service (which imports the HttpClient) and the Test Controller
        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(SearchService);
    });

    // Verify that there are no pending HTTP requests after test
    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    // Test HTTP request errors
    it('should return an error when there is a network error', () => {
        const errorMsg = 'simulated network error';

        service.getTracksResults(mockSearchTerm).subscribe(
            data => fail('should have failed with the network error'),
            (error: HttpErrorResponse) => {
                expect(error.error.message).toEqual(errorMsg, 'message');
            }
        );

        const req = httpTestingController.expectOne(mockSearchUrl);

        // Create mock ErrorEvent, raised when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc
        const mockError = new ErrorEvent('Network error', {
            message: errorMsg,
        });

        // Respond with mock error
        req.error(mockError);
    });

    it('should return a 404 status when there is a not found error', () => {
        const emsg = 'deliberate 404 error';

        service.getTracksResults(mockSearchTerm).subscribe(
            data => fail('should have failed with the 404 error'),
            (error: HttpErrorResponse) => {
                expect(error.status).toEqual(404, 'status');
                expect(error.error).toEqual(emsg, 'message');
            }
        );

        const req = httpTestingController.expectOne(mockSearchUrl);

        // Respond with mock error
        req.flush(emsg, { status: 404, statusText: 'Not Found' });
    });
});
