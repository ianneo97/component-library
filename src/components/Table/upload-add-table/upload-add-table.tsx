import { DeleteOutlined } from "@ant-design/icons";
import {
    Table as AntdTable,
    TableProps as AntdTableProps,
    UploadFile,
} from "antd";
import { useMemo } from "react";
import { Button } from "../../Button";
import { Form, FormInstance, FormItem, FormList } from "../../Form/form";
import { Input } from "../../Input";
import { UploadBox } from "../../Upload";

export interface UploadAddTableProps extends AntdTableProps<any> {
    files: UploadFile<any>[];
    form: FormInstance;
    setFiles: (files: UploadFile<any>[]) => void;
}

export const UploadAddTable: React.FC<UploadAddTableProps> = (args) => {
    const memoizedColumns = useMemo(
        () => [
            ...(args.columns || []).map((column: any) => ({
                ...column,
                render: (text: string, record: any, index: number) => {
                    return (
                        <FormItem
                            label={record.title}
                            name={[
                                index,
                                ...(column.dataIndex instanceof Array
                                    ? column.dataIndex
                                    : [column.dataIndex]),
                            ]}
                            key={column.dataIndex}
                        >
                            {column.component ? column.component : <Input />}
                        </FormItem>
                    );
                },
            })),
            {
                title: "Action",
                dataIndex: "action",
                render: (text: string, record: any, index: number) => {
                    return (
                        <Button
                            mode="borderless"
                            onClick={() => {
                                const fields = args.form.getFieldsValue(true);
                                fields.items = fields.items ? fields.items : [];

                                // Find the object in the array and remove from state.
                                const item = fields.items[index];
                                args.setFiles(
                                    args.files.filter((x) => x.uid !== item.id)
                                );

                                // Removing the object from the form
                                fields.items.splice(index, 1);
                                args.form.setFieldsValue(fields);
                            }}
                        >
                            <DeleteOutlined />
                        </Button>
                    );
                },
            },
        ],
        [args]
    );

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "18px",
                }}
            >
                <UploadBox
                    fileList={args.files}
                    files={args.files}
                    setFiles={args.setFiles}
                    showUploadList={false}
                />

                <Form form={args.form}>
                    <FormList name="items">
                        {(fields) => (
                            <AntdTable
                                columns={memoizedColumns}
                                dataSource={fields}
                                pagination={false}
                                className="lfx-add-table"
                                rowClassName="editable-row"
                                rowKey={(record) => record.key}
                                scroll={{ x: "max-content" }}
                            />
                        )}
                    </FormList>
                </Form>
            </div>
        </>
    );
};
