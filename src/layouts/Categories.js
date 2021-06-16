import React, { useState, useEffect } from 'react'
import { Menu } from 'semantic-ui-react'
import CategoryService from '../services/categoryService'

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        let categoryService = new CategoryService();
        categoryService.getCategories()
            .then(result => setCategories(result.data.data))
            .catch();
    }, []);

    return (
        <div>
            <Menu pointing vertical>
                {
                    categories.map(category => (
                        <Menu.Item key={category.categoryId}>
                            {category.categoryName}{category.id}
                        </Menu.Item>
                    ))
                }

            </Menu>
        </div>
    )
}

export default Categories
