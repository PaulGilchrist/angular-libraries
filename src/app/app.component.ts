import { Component, OnInit, OnDestroy } from '@angular/core';

import { ConnectivityService } from '../../projects/angular-connectivity/src/public-api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    isConnected = true;
    subscriptions: Subscription[] = [];

    constructor(private connectivityService: ConnectivityService) {}

    ngOnInit(): void {
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => this.isConnected = isConnected));
    }

    ngOnDestroy(): void {
        // Unsubscribe all subscriptions to avoid memory leak
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}
