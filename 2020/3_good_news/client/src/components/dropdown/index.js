import React, {Component} from 'react';
import style from './index.module.sass'
import DownSvg from "../../assets/icons/down_svg";

class DropdownComponent extends Component {

    render() {
        const {selected, options, name, onChange} = this.props
        return (
            <div className={style.select}>
                <div className={style.selected}>
                    <p>Sort by: <span>{selected.name}</span></p>
                    <div>
                        <DownSvg/>
                    </div>
                </div>
                <div className={style.options}>
                    {
                        options.map(o =>
                            <div key={o.id} onClick={() => onChange(name, o)}>
                                {
                                    o.id === selected.id
                                        ?
                                        <strong>{o.name}</strong>
                                        :
                                        o.name
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default DropdownComponent;