import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { columns, User } from "./columns";
import { DataTable } from "./data-table";
import dataUsers from "./users.json";

interface PageProps {
    searchParams: Promise<{
        delay?: string;
        error?: string;
    }>;
}

async function getData(params?: {
    delay?: string;
    error?: string;
}): Promise<User[]> {
    // Automatic delay (default 1500ms or custom delay query param)
    const delayMs = params?.delay ? Math.max(100, Number(params.delay)) : 1500;
    await new Promise((resolve) => setTimeout(resolve, delayMs));

    if (params?.error === "true") {
        throw new Error(
            "Simulated database connection failure. Please try again.",
        );
    }

    return dataUsers as User[];
}

export default async function Page({ searchParams }: PageProps) {
    const params = await searchParams;
    const data = await getData(params);

    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                <div className="flex items-center gap-2 px-3">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">Users</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4">
                <DataTable columns={columns} data={data} />
            </div>
        </>
    );
}
