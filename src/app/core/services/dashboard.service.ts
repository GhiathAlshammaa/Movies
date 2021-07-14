import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError, tap } from 'rxjs/operators';
import { List } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(public afs: AngularFirestore) {}

  updateListShowValue(showValue, lid) {
    const listData: List = {
      show: showValue,
    };
    this.afs
      .collection('lists')
      .doc(lid)
      .update(listData)
      .then(() => console.log(`The List ${lid} has updated!`))
      .catch((error) => console.log(`Error: ${error}`));
  }
  updateListData(list, lid) {
    const listData: List = {
      name: list.name,
      description: list.description,
    };
    this.afs
      .collection('lists')
      .doc(lid)
      .update(listData)
      .then(() => console.log(`The List ${list.name} has updated!`))
      .catch((error) => console.log(`Error: ${error}`));
  }
  setListData(list, uid) {
    const lid = this.afs.createId();
    const listRef: AngularFirestoreDocument<any> = this.afs.doc(`lists/${lid}`);
    const listData: List = {
      userId: uid,
      listId: lid,
      name: list.name,
      description: list.description,
      show: false,
    };
    return listRef.set(listData, {
      merge: true,
    });
  }

  getLists(): Observable<any[]> {
    return this.afs.collection('lists').valueChanges();
  }

  getListById(id): any {
    const list = this.afs.collection('lists').doc(id).get();

    list
      .toPromise()
      .then((snapshot) => {
        // console.log(snapshot.id + ' => ' + JSON.stringify(snapshot.data()));
        return snapshot.data() as List;
      })
      .catch((err) => alert(err));

    return list;
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
