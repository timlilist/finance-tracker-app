import "./listItem.css";
import React, { useRef } from "react";
import { ReactComponent as DeleteLogo } from "../../logo/deleteLogo.svg";
import { useDispatch } from "react-redux";
import {
  deleteCategory,
  handleToggle,
  handleUpdateText,
  turnOnEditMode,
  closeEditMode,
} from "../../store/categoriesSlice";
import { db } from "../../firebase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { ReactComponent as LogoEdit } from "../../logo/edit.svg";
import { ReactComponent as LogoClose } from "../../logo/close.svg";

interface ListItemProps {
  picture: React.ReactNode;
  name: string;
  remove: boolean;
  id: string;
  checked: boolean;
  isEditMode: boolean;
}

export const ListItem = ({
  picture,
  name,
  remove,
  id,
  checked,
  isEditMode,
}: ListItemProps) => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const deleteItem = async (itemId: string) => {
    await deleteDoc(doc(db, "categories", itemId));
  };

  const updateItem = async (itemId: string, field: string, value: any) => {
    const itemRef = doc(db, "categories", itemId);
    await updateDoc(itemRef, { [field]: value });
  };

  const handleDelete = (itemId: string) => {
    deleteItem(itemId);
    dispatch(deleteCategory({ id }));
  };

  const toggle = (itemId: string, checked: boolean) => {
    updateItem(itemId, "checked", !checked);
    dispatch(handleToggle({ id }));
  };

  const offEditMode = (e: any) => {
    e.preventDefault();
    dispatch(closeEditMode({ id }));
  };

  const onEditMode = (e: any) => {
    if (remove) {
      e.preventDefault();
      if (inputRef.current) {
        inputRef.current.focus();
      }
      dispatch(turnOnEditMode({ id }));
    }
  };

  const updateText = (itemId: string, event: any) => {
    let name = event.target.value;
    updateItem(itemId, "title", name);
    dispatch(handleUpdateText({ name, id }));
  };
  return (
    <li className="listItem">
      <div className="listInfo">
        <input
          className="itemCheck"
          type="checkbox"
          checked={checked}
          onChange={() => toggle(id, checked)}
        />
        {picture}
        <input
          className="categoryInput"
          onBlur={offEditMode}
          ref={inputRef}
          readOnly={!isEditMode}
          onClick={onEditMode}
          value={name}
          onChange={(e) => updateText(id, e)}
        />
      </div>
      <div className="editMod">
        {remove && !isEditMode && <LogoEdit onClick={onEditMode} />}
        {isEditMode && <LogoClose onClick={offEditMode} />}
      </div>
      {remove && (
        <button className="deleteBtn" onClick={() => handleDelete(id)}>
          <DeleteLogo />
        </button>
      )}
    </li>
  );
};