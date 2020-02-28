
import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private _userName = 'Sherlock Holmes';

  constructor() {
  
  }

  get userName() {
    // Demo: add a suffix if this service has been created more than once
   
    return this._userName ;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/