import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import{RouterModule} from '@angular/router';
import { createbookroute } from "../routing/createbookroute";
import { GridUIModule } from "../utilites/grid-ui/grid-ui.module";
import { CreateBookComponent } from "./createbook.component";
import{HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations:[
        CreateBookComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(createbookroute),
        GridUIModule,
        HttpClientModule
    ],
    providers:[],
    bootstrap:[CreateBookComponent]
})
export class CreatebookModule{}


















