import Form from "components/Form";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
function PhoneBookView() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <Form></Form>
      </div>

      <h2>Contacts</h2>

      <Filter />
      <ContactList />
    </>
  );
}

export default PhoneBookView;
