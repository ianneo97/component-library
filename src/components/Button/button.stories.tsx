import {
    DeleteOutlined,
    EditOutlined,
    MessageOutlined,
    UserAddOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
import { Button } from "./button";

export default {
    title: "Button",
    component: Button,
};

export const DefaultButton = () => {
    return (
        <>
            <Button mode="create">
                <UserAddOutlined />
                <Typography>Invite User</Typography>
            </Button>

            <br />

            <Button mode="delete">
                <DeleteOutlined />
                <Typography>Delete User</Typography>
            </Button>

            <br />

            <Button mode="edit">
                <EditOutlined />
                <Typography>Edit User</Typography>
            </Button>

            <br />

            <Button mode="comment">
                <MessageOutlined />
                <Typography>Add Comment</Typography>
            </Button>

            <br />

            <Button mode="comment-hollow">
                <MessageOutlined />
                <Typography>Add Comment</Typography>
            </Button>
        </>
    );
};
