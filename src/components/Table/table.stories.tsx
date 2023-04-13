import { UploadFile } from "antd";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../Button";
import { Form, FormItem, useForm } from "../Form";
import { Input } from "../Input";
import { InputNumber } from "../InputNumber";
import { Modal } from "../Modal";
import { Select } from "../Select";
import { AddTable } from "./add-table/add-table-v2";
import { Table } from "./table";
import { UploadAddTable } from "./upload-add-table/upload-add-table";
import { AddTableV2 } from "./add-table-v2/add-table";
import { FormList } from "../Form/form";
import { Checkbox } from "../Checkbox";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Table",
    component: Table,
};

export const EmptyTable = () => {
    const [form] = useForm();

    // const data = useMemo(
    //     () => ,
    //     []
    // );
    const [data, setData] = useState<any>([
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "user",
            scopes: ["create", "update", "remove", "read"],
            update: true,
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "workspace",
            scopes: ["create", "update", "remove", "read"],
            read: true,
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "role",
            scopes: ["create", "update", "remove", "read", "assign"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "award",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "buyer",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "certification",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "access",
            scopes: ["update", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "supplier",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "task",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.workspace",
            objectCode: "ruleset",
            scopes: ["create", "update", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.products",
            objectCode: "category",
            scopes: ["update", "remove", "create", "read"],
        },
        {
            application: "io.lfx.t4s.products",
            objectCode: "product",
            scopes: ["read", "create", "remove", "update"],
        },
        {
            application: "io.lfx.t4s.inventories",
            objectCode: "bins",
            scopes: ["release", "update", "create", "read", "remove"],
        },
        {
            application: "io.lfx.t4s.purchases",
            objectCode: "flags",
            scopes: ["clear", "read"],
        },
        {
            application: "io.lfx.t4s.purchases",
            objectCode: "suppliers",
            scopes: ["read", "update", "remove"],
        },
        {
            application: "io.lfx.t4s.purchases",
            objectCode: "purchases",
            scopes: ["read", "release", "remove", "create", "update"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "sales",
            scopes: ["update", "remove", "create", "read"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "flag",
            scopes: ["read", "remove", "update", "create"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "fulfilment",
            scopes: ["update", "create", "remove", "read"],
        },
        {
            application: "io.lfx.t4s.sales",
            objectCode: "bins",
            scopes: ["read"],
        },
    ]);

    const hideFn = (item: any, hideParams: any) => {
        return !item?.scopes?.includes(hideParams);
    };

    const columns = useMemo(
        () => [
            { title: "Application", dataIndex: "application", disabled: true },
            { title: "Object Code", dataIndex: "objectCode", disabled: true },
            ...[
                // @ts-ignore
                ...new Set(data.flatMap(({ scopes }) => Array.from(scopes))),
            ].map((scope) => ({
                title: scope.charAt(0).toUpperCase() + scope.slice(1),
                dataIndex: scope.toLowerCase(),
                width: 50,
                component: Checkbox,
                hideFn: hideFn,
                hideParams: scope,
            })),
        ],
        [data]
    );

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <>
            <AddTableV2
                columns={columns}
                dataSource={data}
                setDataSource={setData}
                cardTitle=""
                addable={false}
            />
        </>
    );
};

export enum SupportDocType {
    AUDIT_REPORT = "AUDIT_REPORT",
    BILL_OF_LADING = "BILL_OF_LADING",
    CERTIFICATE_OF_ORIGIN = "CERTIFICATE_OF_ORIGIN",
    CERTIFICATION_RECORD = "CERTIFICATION_RECORD",
    COMMERCIAL_INVOICE = "COMMERCIAL_INVOICE",
    CONTRACT = "CONTRACT",
    CUSTOM_CLEARANCE = "CUSTOM_CLEARANCE",
    DELIVERY_NOTE = "DELIVERY_NOTE",
    INVOICE = "INVOICE",
    MAP_SCREENSHOT = "MAP_SCREENSHOT",
    PACKING_LIST = "PACKING_LIST",
    PAYMENT_VOUCHER = "PAYMENT_VOUCHER",
    PRODUCTION_RECORD = "PRODUCTION_RECORD",
    PRODUCT_SPECIFICATIONS = "PRODUCT_SPECIFICATIONS",
    TRANPORTATION_INVOICE = "TRANPORTATION_INVOICE",
    WAREHOUSE_RECORD = "WAREHOUSE_RECORD",
}

export enum SupplyChainNodeType {
    AGENT = "AGENT",
    ALUMINIUM_EXTRUSION = "ALUMINIUM_EXTRUSION",
    ASSEMBLY = "ASSEMBLY",
    BEAM_HOUSE = "BEAM_HOUSE",
    BRAND = "BRAND",
    BUTTON_SUPPLIER = "BUTTON_SUPPLIER",
    CARE_LABEL_SUPPLIER = "CARE_LABEL_SUPPLIER",
    CASTING = "CASTING",
    CHEMICAL_SUPPLIER_RECYCLER = "CHEMICAL_SUPPLIER_RECYCLER",
    CHEMICAL_SUPPLIER_FABRIC_PROCESSING = "CHEMICAL_SUPPLIER_FABRIC_PROCESSING",
    CHEMICAL_SUPPLIER_RAW_MATERIAL_PROCESSING = "CHEMICAL_SUPPLIER_RAW_MATERIAL_PROCESSING",
    CHEMICAL_SUPPLIER_YARN_PROCESSING = "CHEMICAL_SUPPLIER_YARN_PROCESSING",
    COMBING_MILL = "COMBING_MILL",
    CRUSTING_TANNERY = "CRUSTING_TANNERY",
    CUSHION_SUPPLIER = "CUSHION_SUPPLIER",
    CUT_MAKE_TRIM = "CUT_MAKE_TRIM",
    DISTRIBUTOR = "DISTRIBUTOR",
    ELASTIC_RIBBON_SUPPLIER = "ELASTIC_RIBBON_SUPPLIER",
    EMBROIDERER = "EMBROIDERER",
    FABRIC_COATING = "FABRIC_COATING",
    FABRIC_DYEING = "FABRIC_DYEING",
    FABRIC_FINISHING = "FABRIC_FINISHING",
    FABRIC_MILL = "FABRIC_MILL",
    FABRIC_PRINTING = "FABRIC_PRINTING",
    FABRIC_TRADING = "FABRIC_TRADING",
    FARM = "FARM",
    FINISHED_GOODS_FACTORY = "FINISHED_GOODS_FACTORY",
    FINISHED_GOODS_TRADER = "FINISHED_GOODS_TRADER",
    FOAM_SUPPLIER = "FOAM_SUPPLIER",
    FULFILLMENT_CENTER = "FULFILLMENT_CENTER",
    HANGTAG_SUPPLIER = "HANGTAG_SUPPLIER",
    GARMENT_CHEMCIAL_SUPPLIER = "GARMENT_CHEMCIAL_SUPPLIER",
    GARMENT_PRINTER = "GARMENT_PRINTER",
    GARMENT_FINISHING = "GARMENT_FINISHING",
    GINNIMG_MILL = "GINNIMG_MILL",
    INJECTION_MOLD_FACTORY = "INJECTION_MOLD_FACTORY",
    LABEL_SUPPLIER = "LABEL_SUPPLIER",
    LACES_SUPPLIER = "LACES_SUPPLIER",
    LEATHER_CHEMICAL_SUPPLIER = "LEATHER_CHEMICAL_SUPPLIER",
    LEATHER_FINISHIHG = "LEATHER_FINISHIHG",
    LEATHER_TANNER = "LEATHER_TANNER",
    LEATHER_TRADER = "LEATHER_TRADER",
    LINING_SUPPLIER = "LINING_SUPPLIER",
    KNITTING_MILL = "KNITTING_MILL",
    LASER_PROCESSING = "LASER_PROCESSING",
    LAUNDRY = "LAUNDRY",
    MINE = "MINE",
    METAL_GOODS_FACTORY = "METAL_GOODS_FACTORY",
    PACKAGING_SUPPLIER = "PACKAGING_SUPPLIER",
    PACKAGING_MATERIAL_SUPPLIER = "PACKAGING_MATERIAL_SUPPLIER",
    PATTERN_MAKING = "PATTERN_MAKING",
    PLATING = "PLATING",
    POCKET_SUPPLIER = "POCKET_SUPPLIER",
    POLISHING = "POLISHING",
    PRINTER = "PRINTER",
    QUALITY_ASSURANCE = "QUALITY_ASSURANCE",
    RANCH = "RANCH",
    RAW_MATERIAL_SUPPLIER = "RAW_MATERIAL_SUPPLIER",
    RAW_MATERIAL_TRADING = "RAW_MATERIAL_TRADING",
    RECYCLING_FACILITY = "RECYCLING_FACILITY",
    REFINERY = "REFINERY",
    RETAILER = "RETAILER",
    RIVET_SUPPLIER = "RIVET_SUPPLIER",
    SEWING = "SEWING",
    SLAUTHER_HOUSE = "SLAUTHER_HOUSE",
    SOLE_SUPPLIER = "SOLE_SUPPLIER",
    SPINNING_MILL = "SPINNING_MILL",
    THREAD_SUPPLIER = "THREAD_SUPPLIER",
    TOP_MAKING = "TOP_MAKING",
    WEAVING_MILL = "WEAVING_MILL",
    WET_BLUE_TANNERY = "WET_BLUE_TANNERY",
    WET_WHITE_TANNERY = "WET_WHITE_TANNERY",
    YARN_DYEING = "YARN_DYEING",
    YARN_SPINNER = "YARN_SPINNER",
    YARN_TRADING = "YARN_TRADING",
    ZIPPER_TRADING = "ZIPPER_TRADING",
    WHOLESALER = "WHOLESALER",
    OTHERS = "OTHERS",
}

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
            title: "Document Type",
            dataIndex: "document",
            component: Select,
            // options: Object.values(SupportDocType).map((x) => ({
            //     label: x,
            //     value: x,
            //     key: x,
            // })),
            options: [
                { label: "TEST", value: "test1" },
                { label: "TEST1", value: "test2" },
            ],
        },
        {
            title: "Applies To",
            dataIndex: "appliesTo",
            component: Select,
            options: Object.values(SupplyChainNodeType).map((x) => ({
                label: x,
                value: x,
                key: x,
            })),
            mode: "tags",
        },
    ];

    const [data, setData] = useState<any>([]);

    return (
        <>
            <Modal open>
                <AddTableV2
                    columns={columns}
                    dataSource={data}
                    setDataSource={setData}
                    cardTitle="Add New Material"
                    addable
                    deletable
                />
            </Modal>

            <Button mode="borderless" onClick={() => console.log(data)}>
                Test
            </Button>
        </>
    );
};
