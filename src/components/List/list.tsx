import { ArrowRightOutlined } from "@ant-design/icons";
import { List as AntdList, ListProps as AntdListProps, Typography } from "antd";
import { Link } from "../Typography";
import "./list.css";

export interface ListProps extends AntdListProps<any> {
    title?: React.ReactNode;
    decsription?: React.ReactNode;
    withViewMore?: boolean;
    viewAction: CallableFunction;
    navigateKey?: string;
    navigatePath?: string;
    rowKeyId?: string[];
}

function getItemValue(item: any, keys: string[]) {
    return keys.reduce((obj, key) => obj?.[key], item);
}

const List: React.FC<ListProps> = (props) => {
    return (
        <AntdList
            {...props}
            dataSource={props.dataSource}
            className="lfx-list"
            renderItem={(item, index) => (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                    }}
                >
                    <AntdList.Item className="lfx-list-item" key={item.id}>
                        <AntdList.Item.Meta
                            className="lfx-list-item-meta"
                            title={
                                <>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        <Typography>
                                            {getItemValue(
                                                item,
                                                props?.rowKeyId || []
                                            )}
                                        </Typography>

                                        {props.withViewMore ? (
                                            <>
                                                <Link
                                                    style={{
                                                        fontSize: 12,
                                                        color: "#972D47",
                                                    }}
                                                    onClick={() =>
                                                        props.viewAction(
                                                            `${
                                                                props.navigatePath
                                                            }/${
                                                                item[
                                                                    props.navigateKey ||
                                                                        ""
                                                                ]
                                                            }`
                                                        )
                                                    }
                                                >
                                                    View more
                                                    <ArrowRightOutlined />
                                                </Link>
                                            </>
                                        ) : null}
                                    </div>
                                </>
                            }
                            description={props.decsription}
                        ></AntdList.Item.Meta>
                    </AntdList.Item>
                </div>
            )}
        ></AntdList>
    );
};

const ListItem = AntdList.Item;
const ListItemMeta = AntdList.Item.Meta;

export { ListItem, ListItemMeta, List };
