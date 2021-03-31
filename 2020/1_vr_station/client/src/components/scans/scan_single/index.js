import React from 'react'
import './index.sass'
import {Icon} from "semantic-ui-react";
import {PrivatePath} from "../../../pages/home/route";
import {withRouter} from "react-router-dom";
import {ScanPathRQ} from "../../../pages/scan/route";
import {get_scan_by_pk} from "../../../redux/scans/actions";
import {connect} from "react-redux";
import MatterportIframeComponent from "../matterport";
import HeaderSlot from "../../../slots/header";

class ScanComponent extends React.Component {

    componentDidMount() {
        const {match: {params: {pk}}} = this.props
        this.props.get_scan_by_pk(pk)
    }

    goBack = () => {
        this.props.history.push(PrivatePath)
    }

    goToScan = (pk) => {
        this.props.get_scan_by_pk(pk)
        this.props.history.push(`${ScanPathRQ}/${pk}`)
    }

    render() {
        const {scans: {scan}} = this.props
        return (
            <div>
                {
                    scan.success
                        ?
                        <div className="scan_single">
                            <HeaderSlot title={scan.data.current.name}/>
                            <div className="scan_single__title">
                                <h1 className="scan__title">
                                    {scan.data.current.name}
                                </h1>
                                <div className="scan_single__back" onClick={() => this.goBack()}>
                                    <Icon name="left arrow" size="big" className="scan_single__back--icon"/>
                                </div>
                            </div>
                            <MatterportIframeComponent link={scan.data.current.matterport}/>
                            <div className="scan_single__control">
                                {
                                    scan.data.previous
                                        ?
                                        <div className="scan_single__control--container"
                                             onClick={() => this.goToScan(scan.data.previous.pk)}>
                                            <h1 className="scan__title">
                                                {scan.data.previous.name}
                                            </h1>
                                        </div>
                                        :
                                        null
                                }
                                {
                                    scan.data.next
                                        ?
                                        <div className="scan_single__control--container"
                                             onClick={() => this.goToScan(scan.data.next.pk)}>
                                            <h1 className="scan__title">
                                                {scan.data.next.name}
                                            </h1>
                                        </div>
                                        :
                                        null
                                }


                            </div>
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
        get_scan_by_pk: (pk) => dispatch(get_scan_by_pk(pk)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ScanComponent))
