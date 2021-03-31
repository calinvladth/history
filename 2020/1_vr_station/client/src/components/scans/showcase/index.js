import React from 'react'
import './index.sass'
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {get_showcase} from "../../../redux/showcase/actions";
import MatterportIframeComponent from "../matterport";
import HeaderSlot from "../../../slots/header";

class ShowcaseComponent extends React.Component {
    componentDidMount() {
        this.props.get_showcase()
    }

    render() {
        const {showcase} = this.props
        return (
            <div>
                {
                    showcase.success
                        ?
                        <div className="showcase">
                            <HeaderSlot title={`Showcase | ${showcase.data.scan.name}`}/>
                            <div className="showcase__title">
                                <h1 className="scan__title">
                                    Showcase / {showcase.data.scan.name}
                                </h1>
                            </div>
                            <MatterportIframeComponent link={showcase.data.scan.matterport}/>
                        </div>
                        :
                        <div>
                            Loading ...
                        </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showcase: state.showcase
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get_showcase: () => dispatch(get_showcase()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShowcaseComponent))
