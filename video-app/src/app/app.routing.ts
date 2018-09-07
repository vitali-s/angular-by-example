import { RouterModule, Routes } from '@angular/router';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

const routes: Routes = [
    { path: 'add', component: MediaItemFormComponent },
    { path: ':medium', component: MediaItemListComponent },
    { path: '', pathMatch: 'full', redirectTo: 'all' }
];

export const appRouting = RouterModule.forRoot(routes);
