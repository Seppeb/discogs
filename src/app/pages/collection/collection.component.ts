import { Component, OnInit, OnDestroy } from '@angular/core';
import {DiscogsService} from '../../services/discogs.service';
import {Observable, pipe} from 'rxjs';
import {log} from 'util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {

  constructor(private discogService: DiscogsService) { }
  ngOnDestroy(): void {
  }

  collection$: Observable<any>;

  ngOnInit(): void {
    this.mapCollectionResult();
  }

  mapCollectionResult() {
    return this.discogService.loadCollection()
    .pipe(
      map((r: any) => {
      this.collection$ = r.releases;
      console.log(this.collection$);
      return this.collection$;
      })
      ).subscribe();
  }
}
