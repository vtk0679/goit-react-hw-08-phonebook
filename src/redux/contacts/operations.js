import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  apiGetContacts,
} from "services/apiService";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => await apiGetContacts()
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => apiAddContact(contact)
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => apiDeleteContact(id)
);
