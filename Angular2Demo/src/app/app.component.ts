import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
<list-employee></list-employee>` 
})
export class AppComponent {
    
    name: string = 'tom';

    ////name: <input [value] = 'name'(input) = 'name=$event.target.value' />

}