import React, {Component} from 'react';
import style from './index.module.sass'
import PostSlot from "../post_slot";
import SearchSvg from "../../../../assets/icons/search_svg";
import DropdownComponent from "../../../../components/dropdown";
import CancelSvg from "../../../../assets/icons/cancel_svg";

const options = [
    {id: 1, name: 'Newest', value: 1},
    {id: 2, name: 'Oldest', value: 0},
]

class PostsFiltersComponent extends Component {

    state = {
        title: '',
        selected: {},
        typingTimeout: 0,
        timeout: 700
    }

    componentDidMount() {
        this.setState({'selected': options[0]})
    }

    handleChange = (input) => (e) => {
        this.setState({[input]: e.target.value})
        this.handleSubmit()
    }

    clearChange = (input) => {
        this.setState({[input]: ''})
        this.submit({title: '', order_by: this.state.selected.value})
    }

    dropdownChange = (input, value) => {
        this.setState({[input]: value})
        this.handleSubmit()
    }

    handleSubmit = () => {
        clearTimeout(this.state.typingTimeout)
        this.setState({
            typingTimeout: setTimeout(() => {
                this.submit(this.state)
            }, this.state.timeout)
        })
    }

    submit = (data) => {
        const {title, selected} = data
        let filters = {}
        if (title !== '') {
            filters.title = title
        }
        if (selected) {
            filters.order_by = selected.value
        }
        this.props.SetPostsFilters(filters)
    }

    render() {
        const {title, selected} = this.state
        return (
            <PostSlot>
                <div className={style.box}>
                    <form className={style.form}>
                        <div className={style.search}>
                            <input type="text" placeholder="Search by title" value={title}
                                   onChange={this.handleChange('title')}/>
                            <div className={title.length !== 0 ? style.cancel : null}
                                 onClick={() => this.clearChange('title')}>
                                {
                                    title.length === 0 ? <SearchSvg/> : <CancelSvg className={style.cancel}/>
                                }
                            </div>
                        </div>
                        <div className={style.select}>
                            <DropdownComponent options={options} selected={selected} onChange={this.dropdownChange}
                                               name='selected'/>
                        </div>
                    </form>
                </div>
            </PostSlot>
        );
    }
}

export default PostsFiltersComponent;