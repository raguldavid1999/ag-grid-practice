import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[],
      providers:[
        provideHttpClient(withFetch())
      ]
    });
    service = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
