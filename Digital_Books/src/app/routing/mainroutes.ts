import { HomeComponent } from "../home/home.component";


export const Mainroutes = [
    { path: '', component: HomeComponent },
    { path: 'createbook', loadChildren: () => import('../createbook/createbook.module').then(m => m.CreatebookModule) },
    { path: 'searchbook', loadChildren: () => import('../searchbook/searchbook.module').then(m => m.SearchBookModule) },
    { path: 'home', component: HomeComponent },
];