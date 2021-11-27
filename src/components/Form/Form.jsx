import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, getContacts } from "redux/contacts";

import s from "./Form.module.css";

function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const onSubmit = (event) => {
    event.preventDefault();
    if (items.find((contact) => name === contact.name)) {
      return alert(`${name} is already in the contacts`);
    }
    dispatch(addContact({ name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <p className={s.title}>Name</p>
      <input
        type="text"
        name="name"
        className={s.input}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={(e) => setName(e.target.value)}
        value={name}
        required
      />
      <p className={s.title}> Tel</p>
      <input
        type="tel"
        name="number"
        className={s.input}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        required
      />
      <button className={s.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default Form;
