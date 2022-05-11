import { Component, Input, Output , EventEmitter } from "@angular/core";
// import { EventEmitter } from "stream";

@Component({
selector: 'app-header',
templateUrl: './header.component.html'
})
export class HeaderComponent{
    collapsed=true;
    // reteivedData :string = '';
    @Output() selectedPage =new EventEmitter<string>();

    getRecipePage(page:string){
        // this.reteivedData = page
        this.selectedPage.emit(page)
    }
    getShoppingListPage(page:string){
        // this.reteivedData = page
        this.selectedPage.emit(page)
    }
}