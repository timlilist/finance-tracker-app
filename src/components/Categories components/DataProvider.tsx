import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCategories } from "../../store/categoriesSlice";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const DataProvider = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "categories"));
      const categories: {
        id: string;
        title: string;
        remove: string;
        type: string;
        checked: boolean;
        isEditMode: boolean;
      }[] = [];
      querySnapshot.forEach((doc) => {
        categories.push({
          id: doc.id,
          title: doc.data().title,
          remove: doc.data().remove,
          type: doc.data().type,
          checked: doc.data().checked,
          isEditMode: doc.data().isEditMode,
        });
      });
      dispatch(setCategories(categories));
    };

    fetchInitialCategories();
  }, [dispatch]);
  return null;
};