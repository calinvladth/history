import React from 'react'
import './index.sass'
import {withRouter} from "react-router-dom";
import {ScanPathRQ} from "../../../pages/scan/route";
import {connect} from "react-redux";
import {get_scans} from "../../../redux/scans/actions";
import PreviewComponent from "./preview";

class ScanMany extends React.Component {

    componentDidMount() {
        this.props.get_scans()
    }

    goToScan = (pk) => {
        this.props.history.push(`${ScanPathRQ}/${pk}`)
    }

    render() {
        const {scans} = this.props

        return (
            <div>

                {
                    scans.success && !scans.loading
                        ?
                        <div className="scans">
                            {scans.data.map(o =>
                                <PreviewComponent o={o} goToScan={this.goToScan} go/>
                            )}
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
        scans: state.scans
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get_scans: () => dispatch(get_scans()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScanMany))
