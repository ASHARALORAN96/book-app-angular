import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { authComponent } from "./auth.component";

const AuthRoutes : Routes = [
    {path:'auth', component:authComponent}
]
@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)]
    ,exports: [RouterModule]
})
export class AuthRouteModule{}