import { Checkbox, UploadFile } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import { useForm } from "../Form";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { Modal } from "../Modal";
import { Select } from "../Select";
import { AddTable } from "./add-table/add-table-v2";
import { Table } from "./table";
import { UploadAddTable } from "./upload-add-table/upload-add-table";
import { AddTableV2 } from "./add-table-v2/add-table";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Table",
    component: Table,
};

export const EmptyTable = () => (
    <Table dataSource={[]} columns={[]} rowKey="id" />
);

export const AddTableExample = () => {
    const [data, setData] = useState<any>([]);
    const columns = [
        {
            title: "Material Name",
            dataIndex: "materialName",
            width: "30%",
            editable: true,
            component: <Input />,
        },
        {
            title: "Description",
            dataIndex: "description",
            width: "20%",
            editable: true,
        },
        {
            title: "Base Materials",
            dataIndex: "baseMaterials",
            width: "20%",
            editable: true,
        },
    ];

    return (
        <Modal
            title="Add New Material"
            open
            width={"700px"}
            footerChildren={
                <>
                    <div style={{ display: "flex" }}>
                        <Button
                            mode="comment-hollow"
                            onClick={() => console.log(data)}
                        >
                            Cancel
                        </Button>
                        <Button
                            mode="comment"
                            onClick={() => console.log(data)}
                        >
                            Create
                        </Button>
                    </div>
                </>
            }
        ></Modal>
    );
};

export const AddTableVersionTwo = () => {
    const [form] = useForm();
    const [cardForm] = useForm();
    const columns = [
        {
            title: "Material Name",
            dataIndex: "materialName",
            key: "materialName",
            editable: true,
            component: Select,
            options: [
                { label: "TEST", value: "test" },
                { label: "TEST@", value: "test2" },
            ],
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description",
            editable: true,
        },
        {
            title: "Base Materials",
            dataIndex: "baseMaterials",
            key: "baseMaterials",
            editable: true,
        },
    ];

    return (
        <Modal
            title="Add New Material"
            open
            width={"700px"}
            footerChildren={
                <>
                    <div style={{ display: "flex" }}>
                        <Button
                            key="cancel-btn"
                            mode="comment-hollow"
                            onClick={() =>
                                cardForm.setFieldsValue({
                                    baseMaterials: "TEST",
                                })
                            }
                        >
                            Cancel
                        </Button>
                        <Button
                            key="add-btn"
                            mode="comment"
                            onClick={() =>
                                console.log(form.getFieldsValue(true))
                            }
                        >
                            Create
                        </Button>
                    </div>
                </>
            }
        >
            <AddTable
                form={form}
                cardForm={cardForm}
                columns={columns}
                cardTitle="Add New Material"
                addButtonText="Add Material"
            />
        </Modal>
    );
};

export const UploadAddTableIntegration = () => {
    const [form] = useForm();
    const [files, setFiles] = useState<UploadFile[]>([]);
    const columns = useMemo(
        () => [
            { title: "Document Name", dataIndex: ["file", "assetName"] },
            { title: "Comment", dataIndex: "comment" },
            {
                title: "Type",
                dataIndex: "nature",
                component: (
                    <Select
                        onDeselect={() => {}}
                        options={[
                            { label: "TEST", value: "AUDIT_REPORTS" },
                            { label: "BILL", value: "BILL_OF_LADING" },
                        ]}
                    />
                ),
            },
        ],
        []
    );

    const onUploadFile = (files: UploadFile<any>[]) => {
        setFiles(files);

        const values = form.getFieldsValue(true);
        const items = values.items ? values.items : [];

        const newItems: any[] = [];
        files.forEach((x) => {
            const item = items.find((y: any) => y.id === x.uid);
            if (item) return;

            const record = {
                id: x.uid,
                nature: "AUDIT_REPORT",
                file: {
                    assetName: x.name,
                    container: "temporary",
                    contentType: x.type || "",
                    originalName: x.name,
                    autoResign: false,
                },
                comment: "stupid comment",
            };

            newItems.push(record);
        });

        values.items = [...items, ...newItems];
    };

    return (
        <>
            <UploadAddTable
                files={files}
                setFiles={onUploadFile}
                form={form}
                columns={columns}
            />

            <Button
                mode="comment"
                onClick={() => console.log(form.getFieldsValue(true))}
            >
                Test
            </Button>
        </>
    );
};

export const AddTableVersion = () => {
    const columns = [
        {
            title: "Material Name",
            dataIndex: "materialName",
            component: Select,
            options: [
                { label: "TEST", value: "test" },
                { label: "TEST123", value: "test1" },
                { label: "TEST@", value: "test2" },
            ],
        },
        {
            title: "Description",
            dataIndex: "description",
            component: InputNumber,
        },
        {
            title: "Base Materials",
            dataIndex: "baseMaterials",
        },
    ];

    const [data, setData] = useState([
        {
            materialName: "test",
            description: "Description",
            baseMaterials: "Testing123",
        },
    ]);

    return (
        <>
            <AddTableV2
                columns={columns}
                dataSource={data}
                setDataSource={setData}
                cardTitle="Add New Material"
            />

            <Button mode="borderless" onClick={() => console.log(data)}>
                Test
            </Button>
        </>
    );
};
