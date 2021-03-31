import React, {Component} from 'react';
import PostSlot from "../post_slot";
import style from './index.module.sass'
import PostActionComponent from "../post_action";
import PostMetaComponent from "../post_meta";
import PostLoadingComponent from "../post_loading_component";

class PostPreviewComponent extends Component {

    state = {
        post: {},
        loaded: false
    }

    componentDidMount() {
        this.setState({
            post: this.props.post,
            loaded: true
        })
    }

    render() {
        const {post, loaded} = this.state
        if (loaded) {


            // eslint-disable-next-line no-useless-escape
            const preview = JSON.parse(post.preview.replace(/\'/g, "\""))
            return (
                <PostSlot>
                    <div className={style.box}>
                        <div className={style.preview}>
                            <img src={preview.resolutions[preview.resolutions.length - 1].url} alt=""/>
                        </div>

                        <div className={style.content}>
                            <div className={style.title}>
                                <h1>{post.title}</h1>
                            </div>

                            <div className={style.action}>
                                <PostActionComponent official={post.url} discussion={post.permalink}/>
                            </div>
                            <div className={style.meta}>
                                <PostMetaComponent score={post.score} created={post.created}
                                                   created_utc={post.created_utc}/>
                            </div>
                        </div>

                    </div>
                </PostSlot>
            )
        } else {
            return <PostLoadingComponent/>
        }
    }
}

export default PostPreviewComponent;