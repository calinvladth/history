import React from "react";
import './index.sass'
import {get_wallet} from "../../redux/actions/wallet";
import {connect} from "react-redux";
import FullWalletEuroSvg from '../../assets/svg/full_wallet_euro.svg'
import FullWalletDollarSvg from '../../assets/svg/full_wallet_dolar.svg'
import EmptyWalletSvg from '../../assets/svg/empty_wallet.svg'
import BrokenWalletSvg from '../../assets/svg/broken_wallet.svg'
class Wallet extends React.Component {
    componentDidMount() {
        this.props.get_wallet()
    }

    wallet = () => {
        if (this.props.wallet.account >= 1000) {
            if (this.props.auth.currency.code === 'EUR') {
            return (
                <img className="wallet__icon" src={FullWalletEuroSvg} alt=""/>
            )
            } else if (this.props.auth.currency.code === 'USD') {
                return (
                    <img className="wallet__icon" src={FullWalletDollarSvg} alt=""/>
                )
            }
        } else if (this.props.wallet.account < 1000 && this.props.wallet.account >= 0) {
            return (
                <img className="wallet__icon" src={EmptyWalletSvg} alt=""/>
            )
        } else if (this.props.wallet.account < 0) {
            return (
                <img className="wallet__icon brokenWallet" src={BrokenWalletSvg} alt=""/>
            )
        }
    }

    render() {
        return (
            <div className="wallet">
                {this.wallet()}
                <h3 className="wallet__account">{(this.props.wallet.account.toFixed(2))} {this.props.auth.currency.mark}</h3>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {wallet, auth} = state
    return {
        wallet,
        auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // Wallet
        get_wallet: () => dispatch(get_wallet())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
