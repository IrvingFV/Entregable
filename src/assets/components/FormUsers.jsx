import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./styles/FormUser.css";

const FormUsers = ({
  createNewUser,
  updateInfo,
  updateUserById,
  setUpdateInfo,
  setIsCloseForm
}) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(updateInfo);
  }, [updateInfo]);

  const submit = (data) => {
    if (updateInfo) {
      // Update
      updateUserById("/users", updateInfo.id, data);
      setUpdateInfo();
    } else {
      // Create
      createNewUser("/users", data);
    }
    reset({
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      birthday: "",
    });
    setIsCloseForm(true)
  };

  const handleExit = () => {
    reset({
      email: "",
      password: "",
      last_name: "",
      first_name: "",
      birthday: "",
    });
    setIsCloseForm(true)
    setUpdateInfo()
  }

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <h2 className="form_title"> Form Users</h2>
      <div onClick={handleExit} className="form_x">x</div>
      <div className="form_section">
        <label className="form_label" htmlFor="email">
          Email
        </label>
        <input
          className="form_input"
          {...register("email")}
          id="email"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="password">
          Password
        </label>
        <input
          className="form_input"
          {...register("password")}
          id="password"
          type="password"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="first_name">
          First Name
        </label>
        <input
          className="form_input"
          {...register("first_name")}
          id="first_nam"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="last_name">
          Last Name
        </label>
        <input
          className="form_input"
          {...register("last_name")}
          id="last_name"
          type="text"
        />
      </div>
      <div className="form_section">
        <label className="form_label" htmlFor="birthday">
          Birthday
        </label>
        <input
          className="form_input"
          {...register("birthday")}
          id="birthday"
          type="date"
        />
      </div>
      <button className="form_btn">{updateInfo ? "Update" : "Create"}</button>
    </form>
  );
};

export default FormUsers;
