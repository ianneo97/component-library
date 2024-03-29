import { Card } from "../Card";
import { List } from "./list";

export default {
    title: "List",
    component: List,
};

export const Default = () => {
    const data = [
        {
            id: "abb209b0-2982-4bc7-82bd-044c97f03295",
            closedOn: null,
            createdOn: "2023-03-23T09:54:25.454Z",
            currency: "HKD",
            deletedOn: null,
            externalDataId: "HELPLAFUA",
            lastUpdatedOn: "2023-03-27T21:51:57.614Z",
            owner: {
                id: "922dce23-f106-4df6-8922-bc93236ec8d0",
                createdOn: "2023-01-13T19:50:11.126Z",
                deletedOn: null,
                email: "ianneo97@gmail.com",
                externalDataId: null,
                firstName: "Ian",
                lastName: "Neo",
                lastUpdatedOn: "2023-01-13T19:50:11.126Z",
                token: "google-oauth2|109805546637905467315",
            },
            releasedOn: null,
            rules: [],
            status: "DELIVERED",
            supplier: {
                id: "bfbf3a9b-e0f1-4aff-adf0-b7d63df49e51",
                activatedOn: null,
                createdOn: "2023-01-13T19:50:11.139Z",
                deletedOn: null,
                engagedOn: null,
                lastUpdatedOn: "2023-01-13T19:50:11.139Z",
                location: null,
                notes: null,
                request: "e66ec51e-77c2-4061-86a3-7468756f3479",
                tags: [],
                contact: null,
                owner: {
                    id: "41bf4acc-1146-42c8-a315-6a99afb32806",
                    companyName: null,
                    createdOn: "2023-01-13T06:24:59.988Z",
                    dbaName: null,
                    dbaRegistration: null,
                    dbaReference: null,
                    deletedOn: null,
                    lfSupplierCode: null,
                    industry: "apparel",
                    lastUpdatedDate: "2023-02-23T06:02:32.883Z",
                    name: "Allen and Cooper Co",
                    processes: [
                        "ALUMINIUM_EXTRUSION",
                        "ASSEMBLY",
                        "BEAM_HOUSE",
                    ],
                    purchaseOrderFormat: "PO-{{YEAR}}-{{SEQUENCE}}",
                },
                seller: {
                    id: "decb99e3-92a7-4dfc-a5f6-159750273fed",
                    companyName: null,
                    createdOn: "2023-01-13T19:50:11.116Z",
                    dbaName: null,
                    dbaRegistration: null,
                    dbaReference: null,
                    deletedOn: null,
                    lfSupplierCode: null,
                    industry: null,
                    lastUpdatedDate: "2023-01-13T19:50:11.116Z",
                    name: "DALIAN JIALIN GARMENTS CO., LTD-CMT",
                    processes: ["CUT_MAKE_TRIM"],
                    purchaseOrderFormat: "PO-{{YEAR}}-{{SEQUENCE}}",
                },
            },
            workspace: {
                id: "41bf4acc-1146-42c8-a315-6a99afb32806",
                companyName: null,
                createdOn: "2023-01-13T06:24:59.988Z",
                dbaName: null,
                dbaRegistration: null,
                dbaReference: null,
                deletedOn: null,
                lfSupplierCode: null,
                industry: "apparel",
                lastUpdatedDate: "2023-02-23T06:02:32.883Z",
                name: "Allen and Cooper Co",
                processes: ["ALUMINIUM_EXTRUSION", "ASSEMBLY", "BEAM_HOUSE"],
                purchaseOrderFormat: "PO-{{YEAR}}-{{SEQUENCE}}",
            },
        },
        {
            id: "abb209b0-2982-4bc7-82bd-044c97f03295",
            closedOn: null,
            createdOn: "2023-03-23T09:54:25.454Z",
            currency: "HKD",
            deletedOn: null,
            externalDataId: "HELPLAFUA",
            lastUpdatedOn: "2023-03-27T21:51:57.614Z",
            owner: {
                id: "922dce23-f106-4df6-8922-bc93236ec8d0",
                createdOn: "2023-01-13T19:50:11.126Z",
                deletedOn: null,
                email: "ianneo97@gmail.com",
                externalDataId: null,
                firstName: "Ian",
                lastName: "Neo",
                lastUpdatedOn: "2023-01-13T19:50:11.126Z",
                token: "google-oauth2|109805546637905467315",
            },
            releasedOn: null,
            rules: [],
            status: "DELIVERED",
            supplier: {
                id: "bfbf3a9b-e0f1-4aff-adf0-b7d63df49e51",
                activatedOn: null,
                createdOn: "2023-01-13T19:50:11.139Z",
                deletedOn: null,
                engagedOn: null,
                lastUpdatedOn: "2023-01-13T19:50:11.139Z",
                location: null,
                notes: null,
                request: "e66ec51e-77c2-4061-86a3-7468756f3479",
                tags: [],
                contact: null,
                owner: {
                    id: "41bf4acc-1146-42c8-a315-6a99afb32806",
                    companyName: null,
                    createdOn: "2023-01-13T06:24:59.988Z",
                    dbaName: null,
                    dbaRegistration: null,
                    dbaReference: null,
                    deletedOn: null,
                    lfSupplierCode: null,
                    industry: "apparel",
                    lastUpdatedDate: "2023-02-23T06:02:32.883Z",
                    name: "Allen and Cooper Co",
                    processes: [
                        "ALUMINIUM_EXTRUSION",
                        "ASSEMBLY",
                        "BEAM_HOUSE",
                    ],
                    purchaseOrderFormat: "PO-{{YEAR}}-{{SEQUENCE}}",
                },
                seller: {
                    id: "decb99e3-92a7-4dfc-a5f6-159750273fed",
                    companyName: null,
                    createdOn: "2023-01-13T19:50:11.116Z",
                    dbaName: null,
                    dbaRegistration: null,
                    dbaReference: null,
                    deletedOn: null,
                    lfSupplierCode: null,
                    industry: null,
                    lastUpdatedDate: "2023-01-13T19:50:11.116Z",
                    name: "DALIAN JIALIN GARMENTS CO., LTD-CMT",
                    processes: ["CUT_MAKE_TRIM"],
                    purchaseOrderFormat: "PO-{{YEAR}}-{{SEQUENCE}}",
                },
            },
            workspace: {
                id: "41bf4acc-1146-42c8-a315-6a99afb32806",
                companyName: null,
                createdOn: "2023-01-13T06:24:59.988Z",
                dbaName: null,
                dbaRegistration: null,
                dbaReference: null,
                deletedOn: null,
                lfSupplierCode: null,
                industry: "apparel",
                lastUpdatedDate: "2023-02-23T06:02:32.883Z",
                name: "Allen and Cooper Co",
                processes: ["ALUMINIUM_EXTRUSION", "ASSEMBLY", "BEAM_HOUSE"],
                purchaseOrderFormat: "PO-{{YEAR}}-{{SEQUENCE}}",
            },
        },
    ];

    return (
        <Card title="Example List">
            <List
                dataSource={data}
                viewAction={console.log}
                navigateKey={"id"}
                navigatePath="/purchase-orders"
                // withViewMore
                rowKeyId={["owner", "firstName"]}
            />
        </Card>
    );
};
