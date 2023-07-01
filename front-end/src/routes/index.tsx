import React from 'react';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Cook from '../pages/cook/Cook';
import Ingredient from '../pages/ingredient/Ingredient';
interface RouteConfig {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
}

// public routes
const publicRoutes: RouteConfig[] = [
    { path: '/cook', component: Cook },
    { path: '/ingredients', component: Ingredient },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/sign-in', component: SignIn, layout: null },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
