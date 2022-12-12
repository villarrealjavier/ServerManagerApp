import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteseversComponent } from './servers/componentesevers/componentesevers.component';
import { HomeComponent } from './home/home.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: ComponentesusersComponent
    },
    {
        path: 'servers',
        component: ComponenteseversComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}