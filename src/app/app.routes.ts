import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './Guard/auth.guard';
import { SegundaComponent } from './components/segunda/segunda.component';
import { TercaComponent } from './components/terca/terca.component';
import { QuartaComponent } from './components/quarta/quarta.component';
import { QuintaComponent } from './components/quinta/quinta.component';
import { SextaComponent } from './components/sexta/sexta.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
    { path: "segunda", component: SegundaComponent, canActivate: [AuthGuard] },
    { path: "terca", component: TercaComponent, canActivate: [AuthGuard] },
    { path: "quarta", component: QuartaComponent, canActivate: [AuthGuard] },
    { path: "quinta", component: QuintaComponent, canActivate: [AuthGuard] },
    { path: "sexta", component: SextaComponent, canActivate: [AuthGuard] },
    { path: '**', component: NotFoundComponent },
];
