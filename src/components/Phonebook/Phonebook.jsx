import s from "./Phonebook.module.scss";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { Filter } from "../Filter/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../store/operations/contactOperations";

export function Phonebook() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.contacts.isLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <section className={s.phonebook}>
      <h1>{isLoading ? "Loading..." : "Contacts"}</h1>
      <Filter />
      <ContactList />
    </section>
  );
}
