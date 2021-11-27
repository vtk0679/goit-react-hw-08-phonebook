import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteContact } from "redux/contacts";
import s from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  return (
    <>
      <li className={s.item}>
        <p className={s.message}>
          {contact.name}: {contact.number}
        </p>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={(e) => dispatch(deleteContact(e.target.id))}
          id={contact.id}
        >
          Delete
        </Button>
        {/* <button className={s.btnDelete}>Delete</button> */}
      </li>
    </>
  );
}
