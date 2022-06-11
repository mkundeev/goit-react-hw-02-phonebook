import PropTypes from 'prop-types';
import s from './ContactItem.module.css'


function ContactItem({ name, number, deletContact, id }) {

    return <>
        <span className={s.name}>{name}: </span>
        <span className={s.number}>{number}</span>
        <button onClick={() => deletContact(id)} type="button" className={s.button}>X</button>
    </>
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deletContact:PropTypes.func.isRequired,
}    

export default ContactItem