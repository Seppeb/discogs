import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscogsService {

  constructor(private httpClient: HttpClient) {
  }

  loadWantList(): Observable<any> {
    return this.httpClient.get('https://api.discogs.com/users/Seppeb/wants?key=CPvPjVDVuwJBCeKkTNeeHytCxmGiaedLXaUfpBuY');
  }
  loadCollection(): Observable<any> {
    return this.httpClient.get('https://api.discogs.com/users/Seppeb/collection/folders/0/releases');
  }
}
