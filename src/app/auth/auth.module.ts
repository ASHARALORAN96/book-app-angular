import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { authComponent } from "./auth.component";

@NgModule({
    declarations: [authComponent],
    imports: [FormsModule,CommonModule,SharedModule, RouterModule.forChild([{path:'', component:authComponent}])],

})
export class AuthModule{}