import React from "react";
import CategoryListPage from './categoryListPage';
import Breadcrumb from './breadcrumb';
import { useParams } from "react-router-dom";

function CategoryPage() {
    const { name } = useParams();
    return (
        <>
        <Breadcrumb name={name}/>
        <CategoryListPage name={name} />
        </>
    );
}

export default CategoryPage;