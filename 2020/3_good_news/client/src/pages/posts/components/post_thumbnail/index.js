import React, {Component} from 'react';
import style from './index.module.sass'
import PostSlot from "../post_slot";
import {setBackgroundImage} from "../../../../components/set_background_image";
import PostActionComponent from "../post_action";
import PostMetaComponent from "../post_meta";
import ThumbnailPlaceholder from '../../../../assets/images/thumbnail.jpg'
import PostLoadingComponent from "../post_loading_component";

class PostThumbnailComponent extends Component {
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

    preview = (o, len) => {
        // eslint-disable-next-line no-useless-escape
        const preview = JSON.parse(o.preview.replace(/\'/g, "\""))
        if (preview.resolutions.length === 0) {
            //    Thumbnail
            return o.thumbnail
        } else {
            //    Preview
            return preview.resolutions[preview.resolutions.length - 1].url
        }

    }


    render() {
        const {post, loaded} = this.state
        if (loaded) {
            let thumbnail = post.preview ? this.preview(post) : ThumbnailPlaceholder
            return (
                <PostSlot>
                    <div className={style.box}>
                        <div className={style.thumbnail}>
                            <div className={style.thumbnailImage} style={setBackgroundImage(thumbnail)}></div>
                        </div>
                        <div className={style.content}>
                            <h1 className={style.title}>
                                {post.title}
                            </h1>
                            <div className={style.desktop}>
                                <div className={style.action}>
                                    <PostActionComponent official={post.url} discussion={post.permalink}/>
                                </div>
                                <div className={style.meta}>
                                    <PostMetaComponent score={post.score} created={post.created}
                                                       created_utc={post.created_utc}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={style.phone}>
                        <div className={style.action}>
                            <PostActionComponent official={post.url} discussion={post.permalink}/>
                        </div>
                        <div className={style.meta}>
                            <PostMetaComponent score={post.score} created={post.created}
                                               created_utc={post.created_utc}/>
                        </div>
                    </div>
                </PostSlot>
            )
        } else {
            return <PostLoadingComponent/>
        }
    }
}

export default PostThumbnailComponent;