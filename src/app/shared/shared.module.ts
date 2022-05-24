import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirectiveDirective } from "./directive/dropdown-directive.directive";
import { SpinnerComponent } from "./spinner/spinner.component";

@NgModule({
    declarations: [
        DropdownDirectiveDirective,
        SpinnerComponent,
        AlertComponent,
    ]
    ,imports:[CommonModule]
    ,exports: [
        DropdownDirectiveDirective,
        SpinnerComponent,
        AlertComponent,
    ]
})
export class SharedModule{}