import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteseversComponent } from './servers/componentesevers/componentesevers.component';
import { HomeComponent } from './home/home.component';
import { ComponentesusersComponent } from './users/componentesusers/componentesusers.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserComponent } from './users/componentesusers/user/user.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { AuthGuard } from './auth-guard.service';
import { ServerComponent } from './componenteserver/server/server.component';


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
        path: 'users/:id',
        component: UserComponent
    },
    {
        path: 'servers',component:ComponenteseversComponent, 
        canActivateChild: [AuthGuard],
        children:[{
            path: ':id/edit',
        component: EditServerComponent
        },
        {
            path: ':id',
            component: ServerComponent
        }
    ],
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