import React, {Component, Suspense} from 'react'
import layout from './layout.module.sass'
import PostsFiltersComponent from "./components/filters";
import {ClearPosts, GetPosts, SetPostsFilters} from "../../redux/posts/actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import PostLoadingComponent from "./components/post_loading_component";
import NoPostsComponent from "./components/no_posts";
import HeroComponent from "./components/hero";
import BackToTopComponent from "../../components/back_to_top";
import BuyMeACoffee from "../../components/buy_me_a_coffee";
import PostSlot from "./components/post_slot";
import {Helmet} from "react-helmet";

const PostPreviewComponent = React.lazy(() => import('../posts/components/post_preview'))
const PostThumbnailComponent = React.lazy(() => import('../posts/components/post_thumbnail'))

class PostsPage extends Component {

    state = {
        showBackToTop: false
    }

    componentDidMount() {
        this.props.GetPosts(1)
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        this.props.ClearPosts()
    }

    handleScroll = () => {
        const {showBackToTop} = this.state
        if (window.pageYOffset > 1500 && !showBackToTop) {
            this.setState({
                showBackToTop: true
            })
        } else if (window.pageYOffset < 1500 && showBackToTop) {
            this.setState({
                showBackToTop: false
            })
        }

    }

    nextPage = () => {
        const {posts: {pagination: {current_page}}} = this.props
        this.props.GetPosts(current_page + 1)
        this.setState({page: current_page + 1})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.posts.top) {
            window.scrollTo(0, 0)
        }
    }

    allPosts = (posts) => (
        posts.data.map((o, i) => {
            if (o.preview) {

                // eslint-disable-next-line no-useless-escape
                const previewJson = JSON.parse(o.preview.replace(/\'/g, "\""))

                let width
                if (previewJson.resolutions.length === 0) {
                    width = 0
                } else {
                    width = previewJson.resolutions[previewJson.resolutions.length - 1].width
                }

                return <Suspense fallback={<div className={layout.post} key={o.id}><PostLoadingComponent/></div>}
                                 key={o.id}>
                    {
                        width < 700
                            ?
                            <div className={layout.post}>
                                <PostThumbnailComponent post={o}/>
                            </div>
                            :
                            <div className={layout.post}>
                                <PostPreviewComponent post={o}/>
                            </div>
                    }

                </Suspense>
            } else {
                return <Suspense fallback={<div><PostLoadingComponent/></div>}
                                 key={o.id}>
                    <div className={layout.post}>
                        <PostThumbnailComponent post={o}/>
                    </div>
                </Suspense>
            }
        })
    )


    render() {
        const {posts} = this.props
        const {showBackToTop} = this.state

        return (
            <div className={layout.box}>
                <Helmet>
                    <title>TGW | Good News</title>
                    <meta name="description" content="The good world / Good news"/>
                </Helmet>
                <div className={layout.hero}>
                    <HeroComponent/>
                </div>

                <div className={layout.boxContent} id="top">

                    <div className={layout.content}>
                        {
                            posts.top
                                ?
                                <div className={layout.post}><PostLoadingComponent/></div>

                                :
                                <InfiniteScroll next={this.nextPage} hasMore={posts.pagination.next_page}
                                                loader={<div className={layout.post}><PostLoadingComponent/></div>}
                                                dataLength={posts.data.length}>
                                    {
                                        posts.success && posts.data.length === 0
                                            ?
                                            <NoPostsComponent/>
                                            :
                                            this.allPosts(posts)
                                    }
                                </InfiniteScroll>
                        }
                    </div>

                    <div className={layout.side}>
                        <div className={layout.filter}>
                            <PostsFiltersComponent SetPostsFilters={this.props.SetPostsFilters}/>
                        </div>

                        <div className={layout.bmac}>
                            <PostSlot>
                                <BuyMeACoffee/>
                            </PostSlot>
                        </div>

                        <div className={layout.backToTop} id="backToTop">
                            {
                                showBackToTop &&
                                <PostSlot>
                                    <BackToTopComponent onClick={this.backToTop}/>
                                </PostSlot>
                            }

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        SetPostsFilters: (filters) => dispatch(SetPostsFilters(filters)),
        GetPosts: (page) => dispatch(GetPosts(page)),
        ClearPosts: () => dispatch(ClearPosts())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostsPage))
