import React from "react";
import moment from "moment";
import EditCategory from "./edit";

const ListCategories = ({categories, put_category}) => {
    return (
        categories.data.map(category =>
            <tr key={category.id}>
                <td>{category.id}</td>
                <td>
                     {category.name}
                </td>
                <td>{moment(category.created_at).fromNow()}</td>
                <td>
                    <div>
                        <EditCategory category={category} put_category={put_category}/>
                    </div>
                </td>
            </tr>
        )
    )
}

export default ListCategories
