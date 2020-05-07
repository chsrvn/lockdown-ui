import { Component, ViewEncapsulation, ElementRef } from '@angular/core';

@Component({
    selector: "button[ld-button]",
    templateUrl: "./ld-button.component.html",
    styleUrls: ["./ld-button.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class LdButtonComponent {
    constructor(elementRef: ElementRef) {
        // debugger;
        elementRef.nativeElement.classList.add("ld-button");
    }
}