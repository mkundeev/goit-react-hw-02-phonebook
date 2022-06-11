import React from "react";
import s from './ContactForm.module.css'

class ContactForm extends React.Component{
state = {
    name: '',
    number:'',
} 
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value})

    }  
    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }
    reset = () => {
        this.setState({
        name: '',
        number:'',
         })
    }
    render() {
        return (
            <form className={s.form} onSubmit={this.onSubmit}>
                <div className={s.item}>
                    <label htmlFor='name' className={s.label}>Name</label> 
                    <input
                        className={s.input}
                        type="text"
                        id="name"
                        name="name"
                        value={this.state.name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        onChange={this.handleChange}
                        required />
                </div>
                <div className={s.item}>
                    <label htmlFor='number' className={s.label}>Number</label> 
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        value={this.state.number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        onChange={this.handleChange}
                        required/>
                </div>
                <button type='submit' className={s.button} >Add contact</button>
            </form>
        )
    }
}

export default ContactForm