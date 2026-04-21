import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Courses } from './courses/courses';
import { Counter } from './counter/counter';

export const routes: Routes = [
    {path: '', component: Home},
     {path: 'home', component: Home},
    {path: 'courses', component: Courses},
    {path: 'counter', component: Counter}
];
