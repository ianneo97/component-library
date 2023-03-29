import { ArrowRightOutlined } from "@ant-design/icons";
import { List as AntdList, ListProps as AntdListProps, Typography } from "antd";
import { Progress } from "../Progress";
import { Link } from "../Typography";
import "./list.css";

export interface ListProps extends AntdListProps<any> {
    title?: React.ReactNode;
    decsription?: React.ReactNode;
    withViewMore?: boolean;
    viewMoreAction: CallableFunction;
    viewMoreActionKey: string[];
    rowKeyId: string;
}

const List: React.FC<ListProps> = (props) => {
    // console.log(props.rowKeyId);
    return (
        <AntdList
            {...props}
            dataSource={props.dataSource}
            className="lfx-list"
            renderItem={(item, index) => (
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
                                        {item[props.rowKeyId]}
                                    </Typography>

                                    {props.withViewMore ? (
                                        <>
                                            <Link
                                                style={{
                                                    fontSize: 12,
                                                    color: "#972D47",
                                                }}
                                                onClick={() =>
                                                    props.viewMoreAction(
                                                        ...props.viewMoreActionKey.map(
                                                            (key) => item[key]
                                                        )
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
                        description={<Progress percent={50} />}
                    ></AntdList.Item.Meta>
                </AntdList.Item>
            )}
        ></AntdList>
    );
};

const ListItem = AntdList.Item;
const ListItemMeta = AntdList.Item.Meta;

export { ListItem, ListItemMeta, List };
