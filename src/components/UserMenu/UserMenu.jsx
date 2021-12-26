import { Button } from "antd";
import s from "./UserMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogout } from "../../store/operations/userOperations";
import { IoLogOutOutline } from "react-icons/io5";
import { clearContactsState } from "../../store/reducers/contacts";

export const UserMenu = () => {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchLogout());
    dispatch(clearContactsState());
  };

  return (
    <div>
      <span>Hello, {username} </span>
      <Button onClick={handleClick} className={s.button}>
        Logout <IoLogOutOutline className={s.buttonIcon} />
      </Button>
    </div>
  );
};
