import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from "@angular/material";
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar,
    private zone: NgZone) { }

  public open(message, duration = 5000) {
    this.zone.run(() => {
      this.snackBar.open(message,'', { duration });
    });
  }

  
}
