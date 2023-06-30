export interface ingredientsProps {
    id: number;
    name: string;
    image: string;
    description: string;
    createAt: string;
    updateAt: string;
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

export interface dishProps {}
