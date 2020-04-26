import { Component, OnInit } from '@angular/core';
import {DiscogsService} from '../../services/discogs.service';
import {Observable, pipe} from 'rxjs';
import {log} from 'util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private discogService: DiscogsService) { }

  collection$: Observable<any>;

  ngOnInit(): void {
    this.discogService.loadCollection();
  }
}
