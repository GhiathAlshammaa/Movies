import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { map } from 'jquery';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { List } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(public afs: AngularFirestore) {}

  SetListData(list, uid) {
    const lid = this.afs.createId();
    const listRef: AngularFirestoreDocument<any> = this.afs.doc(`lists/${lid}`);
    const listData: List = {
      userId: uid,
      listId: lid,
      name: list.name,
      description: list.description,
    };
    return listRef.set(listData, {
      merge: true,
    });
  }

  getLists(): Observable<any[]> {
    return this.afs.collection('lists').valueChanges();
  }

  deleteList(listId) {
    this.afs
      .collection('lists')
      .doc(listId)
      .delete()
      .then(() => {
        console.log(`The List ${listId} has removed`);
      });
  }
}
