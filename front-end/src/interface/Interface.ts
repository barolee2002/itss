export interface ingredientsProps {
    ingredient: ingredientProps;
    quantity: number;
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
    type: 'Món chính' | 'Món phụ';
}

export interface marketProps {
    id: string;
    code: string;
    createAt: string;
    userId: number;
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
