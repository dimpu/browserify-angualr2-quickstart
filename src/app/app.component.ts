import { Component } from '@angular/core';


@Component({
    selector: 'my-app',
    template: `
       <h1>Hellow World</h1>
    `
})
export class AppComponent { 
    consturctor() {
        console.log("HI");
    }
}
