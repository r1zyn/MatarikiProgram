/**
 * Interface for the API response received from the Horizons API.
 * @property {string} result The stringified data from the API
 * @interface
 */
export interface APIResponse {
    /**
     * The result property containing the stringified data.
     * @type {string}
     */
    result: string;
};

/**
 * Interface for data objects containing the date and S-T-O.
 * @property {string} date The date
 * @property {string} sto The S-T-O
 * @interface
 */
export interface Data {
    /**
     * The date.
     * @type {string}
     */
    date: string;

    /**
     * The S-T-O.
     * @type {string}
     */
    sto: string;
};

/**
 * Interface for creating table columns.
 * @property {string} field The field property
 * @property {string} name The name property
 */
export interface TableColumn {
    /**
     * The field property.
     * @type {string}
     */
    field: string;

    /**
     * The name property.
     * @type {string}
     */
    name: string;
};

/**
 * Options for the table.
 */
export interface TableOptions {
    /**
     * How many spaces to the right to shift the table.
     * @type {number}
     */
    leftPad: number;

    /**
     * The columns for the table.
     * @type {TableColumn[]}
     */
    columns: TableColumn[];
};

/**
 * Inteface creating table rows.
 * @property {number} id The id property
 * @property {string} date The date property
 * @property {string} time The time property
 * @property {string} sto The S-T-O property
 */
export interface TableRow {
    /**
     * The id property.
     * @type {number}
     */
    id: number;

    /**
     * The date property.
     * @type {string}
     */
    date: string;

    /**
     * The time property.
     * @type {string}
     */
    time: string;

    /**
     * The S-T-O property.
     * @type {string}
     */
    sto: string;
};