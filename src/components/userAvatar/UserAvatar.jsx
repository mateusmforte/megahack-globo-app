import React, { useState, useEffect } from "react";

const UserAvatar = (props) => {
  const [isUserLogged, setisUserLogged] = useState(false);

  useEffect(() => {
    setisUserLogged(props.userLogged);
  }, [props.userLogged]);

  return (
    <img
      src={
        isUserLogged
          ? require("./utils/img/user-on.svg")
          : require("./utils/img/user-off.svg")
      }
      alt="Foto do usuário"
    />
  );
};

export default UserAvatar;
