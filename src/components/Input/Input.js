import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



const Input = ({ route }) => {
    let placeholder = '';
    let label = '';
    if (route === 1) {
        placeholder = 'Enter pokemon number from 1 to 1025';
        label = 'Only numbers are accepted';
    } else if (route === 2) {
        placeholder = 'Enter pokemon name';
        label = 'Words should start from capital letter';

    }

    return (
        <div className='input_wrapper container'>
            <label htmlFor="inputField" className='label'>{label}:</label>
            <div className='input_div'>
                <input id="inputField"
                    type="text"
                    placeholder={placeholder}
                    className="input"></input>
                <button className='button_div'><FontAwesomeIcon icon={faMagnifyingGlass} className='button' /></button>
            </div>
        </div>
    )
}

export default Input