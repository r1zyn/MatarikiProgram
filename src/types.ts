export interface APIResponse {
    result: string;
};

export interface Data {
    date: string;
    sto: string;
};

export interface TableColumn {
    field: string;
    name: string;
};

export interface TableOptions {
    leftPad: number;
    columns: TableColumn[];
};

export interface TableRow {
    id: number;
    date: string;
    time: string;
    sto: string;
};