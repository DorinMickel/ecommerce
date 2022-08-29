import React from "react";
import { NotificationDiv } from "./styledComponents/notifications";

const Notification = ({children}) => {
    return(
        <NotificationDiv>{children}</NotificationDiv>
    )
}

export default Notification