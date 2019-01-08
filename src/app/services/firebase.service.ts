import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Schedule} from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  items: AngularFirestoreCollection<Schedule>;

  constructor(private db: AngularFirestore) {
    this.items = db.collection<Schedule>('Items');
  }

  addItem(item: any) {
    this.items.add(item);
  }

  getData() {
    return this.items;
  }
}
