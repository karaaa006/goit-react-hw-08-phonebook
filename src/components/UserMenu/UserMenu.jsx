import { Button } from "antd";
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
      <Button
        onClick={handleClick}
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        Logout <IoLogOutOutline style={{ marginLeft: "5px" }} />
      </Button>
    </div>
  );
};
