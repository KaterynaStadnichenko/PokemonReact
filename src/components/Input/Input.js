import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Input = ({ placeholder, label, onChangeValue, onSearch}) => {

    return (
        <div className='input_wrapper container'>
            <label htmlFor="inputField" className='label'>{label}:</label>
            <div className='input_div'>
                <input id="inputField"
                    type="text"
                    placeholder={placeholder}
                    className="input"
                    onChange = {onChangeValue}>
                </input>
                <button onClick={onSearch} className='button_div'><FontAwesomeIcon icon={faMagnifyingGlass} className='button' /></button>
            </div>
        </div>
    )
}

export default Input