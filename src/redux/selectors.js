export const getContacts = state => state.contacts.items; //повертає список контактів з стану
export const getFilter = state => state.filter; //повертає фільтр з стану




// Відфільтровані контакти
  export const getVisibleContacts = state => {
      const contacts = getContacts(state);// получає список контактів
      const filter = getFilter(state);// получає список фільтрів
    const normFilter = filter.toLowerCase();// нижній регістр

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };
