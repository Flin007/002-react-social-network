
/*
    This module can take 2 parameters in props
    1 - props.iconpos can be 'left' and 'right'
    2 - props.style can be 'white' amd 'blue'
 */

import s from './Searchinput.module.css';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const SearchInput = (props) => {
    return (
        <form className={s.searchbox}>
            <input className={`${s[props.iconpos]} ${s[props.style]}`} placeholder={props.placeholder} type="text"/>
            <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    );
}
export default SearchInput;