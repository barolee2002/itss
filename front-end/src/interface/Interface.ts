export interface ingredientsProps {
    ingredient: ingredientProps;
    quantity: number;
    measure: string;
}
export interface ingredientProps {
    id: number;
    name: string;
    status: number;
    image: string;
    description: string;
    createAt: string;
    updateAt: string | null;
    dueDate: number;
}

export interface dishsProps {
    createAt: string;
    updateAt: string;
    descriptions: string;
    id: number;
    image: string; //Link
    ingredients: ingredientsProps[];
    name: string;
    recipeDes: string;
    status: 1 | 0;
    type: 'Món chính' | 'Món phụ' | string;
}

export interface marketProps {
    id: number;
    code: string;
    createAt: string;
    user: userInfoProps;
    status: 1 | 0;
    attributes: null;
    dishes: null;
}

export interface userInfoProps {
    address: string;
    avatar: string;
    createAt: string;
    email: string;
    gender: 'nam' | 'nữ';
    groups: null;
    id: number;
    name: string;
    status: 1 | 0;
}

export interface attributesProps {
    id: number;
    user: userInfoProps;
    ingredients: ingredientProps;
    exprided: string;
    status: 1 | 0;
    measure: string;
    buyAt: string;
    quantity: number;
}

export interface dishesProps {
    id: number;
    dish: dishsProps;
    expride: string;
    cook_status: 1 | 0 | null;
    cookDate: string;
    quantity: number;
    createAt: string;
    updateAt: string;
}

export interface shoppingProps {
    id: number;
    code: string;
    createAt: string;
    user: userInfoProps;
    status: 1 | 0;
    attributes: attributesProps[];
    dishes: dishesProps[];
}

export interface groupsProps {
    id: number;
    groupMembers: null;
    createAt: string;
    leader: userInfoProps;
    name: string;
    shoppings: null;
    updatedAt: string;
}
