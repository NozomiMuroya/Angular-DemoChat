import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private db: AngularFirestore
  ) { }

  createRoom(name: string): Promise<void> {
    const id = this.db.createId();
    return this.db.doc(`rooms/${id}`).set({
      id,
      name,
      createdAt: firestore.Timestamp.now()
    });
  }
}
