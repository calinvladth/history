import React from 'react'
import './index.sass'
import Table from "react-bootstrap/Table"
import {connect} from "react-redux"
import {get_category, post_category, put_category} from "../../redux/actions/category"
import TablePagination from "../pagination"
import CreateCategory from "./components/create"
import ListCategories from "./components/list"

class Categories extends React.Component {
    state = {
        create: false,
        edit: false,
        name: '',
        id: null
    }

    componentDidMount() {
        this.props.get_category()
    }

    categoryExists() {
        if (this.props.categories.full_data.length > 0) {
            return (
                <div className="fullWidth">
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#id</th>
                          <th>Name</th>
                          <th>Created</th>
                          <th>
                              Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <ListCategories categories={this.props.categories} put_category={this.props.put_category}/>
                      </tbody>
                    </Table>
                    <div className="paginationBox">
                        <TablePagination
                            action={this.props.get_category}
                            pages={this.props.categories.pages}
                            page={this.props.categories.page}
                        />
                    </div>
                </div>
            )
        }
    }

    render() {

        return (
            <div className="categories">
                <h1 className="categories__title">Categories <CreateCategory post_category={this.props.post_category}/></h1>
                {this.categoryExists()}
            </div>

        )
    }
}

const mapStateToProps = state => {
    const {categories} = state
    return {
        categories
    }
}


const mapDispatchToProps = dispatch => {
    return {
        // CATEGORIES
        get_category: (query) => dispatch(get_category(query)),
        post_category: (data) => dispatch(post_category(data)),
        put_category: (data) => dispatch(put_category(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
