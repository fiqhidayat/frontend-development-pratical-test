"use client";

import { createColumnHelper } from "@tanstack/react-table";

import { type DataTableFeatures } from "./data-table-features";

export type Address = {
    street: string;
    city: string;
    state: string;
    zip: string;
};

export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: Address;
    created_at: string;
};

// Use `accessor` for data columns and `display` for columns without one.
const columnHelper = createColumnHelper<DataTableFeatures, User>();

export const columns = columnHelper.columns([
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("email", {
        header: "Email",
    }),
    columnHelper.accessor("phone", {
        header: "Phone",
    }),
    columnHelper.accessor("address", {
        header: "Address",
        cell: (info) => {
            const { street, city, state, zip } = info.getValue();
            return `${street}, ${city}, ${state} ${zip}`;
        },
    }),
    columnHelper.accessor("created_at", {
        header: "Created At",
    }),
]);
