import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PapPageComponent } from './pap-page/pap-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: 'Accueil',
    },
    {
        path: 'pret-a-porter',
        component: PapPageComponent,
        title: 'Prêt-à-porter',
    },
    {
        path: 'coiffure',
        component: PapPageComponent,
        title: 'Coiffure',
    },
    {
        path: 'esthetique',
        component: PapPageComponent,
        title: 'Esthétique',
    },
    {
        path: 'contacts',
        component: ContactsPageComponent,
        title: 'Contactez-nous',
    },
];
