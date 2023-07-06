import React from 'react';

import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Cook from '../pages/cook/Cook';
import Ingredient from '../pages/ingredient/Ingredients';
import Market from '../pages/market/Market';
import AddMarketOrder from '../pages/add-market-order/AddMarketOrder';
import Group from '../pages/group/Group';
import GroupDetail from '../components/group-detail/GroupDetail';
interface RouteConfig {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType | null;
}

// public routes
const publicRoutes: RouteConfig[] = [
    { path: '/cook', component: Cook },
    { path: '/ingredients', component: Ingredient },
    { path: '/market', component: Market },
    { path: '/market/add', component: AddMarketOrder },
    { path: '/sign-up', component: SignUp, layout: null },
    { path: '/group', component: Group },
    { path: '/group/:id', component: GroupDetail },
    { path: '/', component: SignIn, layout: null },
];

const privateRoutes: RouteConfig[] = [];

export { publicRoutes, privateRoutes };
