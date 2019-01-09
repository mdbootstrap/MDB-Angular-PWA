import {Injectable} from '@angular/core';
import idb from 'idb';
import {Observable, Subject} from 'rxjs';
import {Schedule} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class IdbService {
  private _dataChange: Subject<Schedule> = new Subject<Schedule>();
  private _dbPromise;

  constructor() {
  }

  connectToIDB() {
    this._dbPromise = idb.open('pwa-database', 1, UpgradeDB => {
      if (!UpgradeDB.objectStoreNames.contains('Items')) {
        UpgradeDB.createObjectStore('Items', {keyPath: 'id', autoIncrement: true});
      }
      if (!UpgradeDB.objectStoreNames.contains('Sync-Items')) {
        UpgradeDB.createObjectStore('Sync-Items', {keyPath: 'id', autoIncrement: true});
      }
    });
  }

  addItems(target: string, value: Schedule) {
    this._dbPromise.then((db: any) => {
      const tx = db.transaction(target, 'readwrite');
      tx.objectStore(target).put({
        time: value.time,
        subject: value.subject,
        location: value.location,
        description: value.description
      });
      this.getAllData('Items').then((items: Schedule) => {
        this._dataChange.next(items);
      });
      return tx.complete;
    });
  }

  deleteItems(target: string, value: Schedule) {
    this._dbPromise.then((db: any) => {
      const tx = db.transaction(target, 'readwrite');
      const store = tx.objectStore(target);
      store.delete(value);
      this.getAllData(target).then((items: Schedule) => {
        this._dataChange.next(items);
      });
      return tx.complete;
    });
  }

  getAllData(target: string) {
    return this._dbPromise.then((db: any) => {
      const tx = db.transaction(target, 'readonly');
      const store = tx.objectStore(target);
      return store.getAll();
    });
  }

  dataChanged(): Observable<Schedule> {
    return this._dataChange;
  }
}
