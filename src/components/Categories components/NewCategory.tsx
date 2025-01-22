import "./newCategory.css";
import { useForm, FieldError } from "react-hook-form";
import { ReactComponent as NewTransactionLogo } from "../../logo/newTransactionLogo.svg";
import { useDispatch } from "react-redux";
import { addCategory } from "../../store/categoriesSlice";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface FormValues {
  selectValue: string;
  nameValue: string;
}

export const NewCategory = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const getErrorMessage = (error: FieldError) => {
    if (!error) return null;
    return error.message as React.ReactNode;
  };

  const handleAction = async (data: any) => {
    let typeName = data.selectValue;
    let categoryName = data.nameValue;
    const newItem = {
      title: categoryName,
      type: typeName,
      remove: true,
      checked: false,
      isEditMode: false,
    };
    const docRef = await addDoc(collection(db, "categories"), newItem);
    dispatch(addCategory({ id: docRef.id, ...newItem }));

    reset();
  };

  return (
    <form className="customContainer" onSubmit={handleSubmit(handleAction)}>
      <div className="containerName">Custom Category</div>
      <div className="customPart">
        <div className="customInfo">
          <div className="customName">Type</div>
          <div className="valueContainer">
            <select
              className="customInput"
              {...register("selectValue", {
                required: true,
              })}
            >
              <option value="income">Income</option>
              <option value="outcome">Outcome</option>
            </select>
            <div>
              {errors?.selectValue && (
                <div className="errMassage">Required field!</div>
              )}
            </div>
          </div>
        </div>
        <div className="customInfo">
          <div className="customName">Name</div>
          <div className="valueContainer">
            <input
              className="customInput"
              placeholder="Category name"
              {...register("nameValue", {
                required: "Required field!",
                maxLength: {
                  value: 15,
                  message: "Max 15 characters!",
                },
              })}
            />
            <div>
              {errors?.nameValue && (
                <div className="errMassage">
                  {getErrorMessage(errors.nameValue)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button className="addBtn" type="submit" disabled={!isValid}>
        <NewTransactionLogo />
        Add
      </button>
    </form>
  );
};
