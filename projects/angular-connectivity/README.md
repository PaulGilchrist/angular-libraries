# angular-connectivity

This library allows you to subscribe to a behavior subject that tracks Internet connectivity.

## Usage Example

```js
    ngOnInit(): void {
        // Keep track of network connectivity and update API if anything was only saved locally
        this.subscriptions.push(this.connectivityService.isConnected$.subscribe(isConnected => {
            this.isConnected = isConnected;
            if (isConnected) {
                // Do something
            } else {
                // Do something else
            }
        }));
    }
```
