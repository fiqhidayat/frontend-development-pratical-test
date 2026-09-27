"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function UsersError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Users page error:", error);
    }, [error]);

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
            <div className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                <div className="max-w-md space-y-4 rounded-xl border bg-card p-6 shadow-xs">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                        <AlertCircle className="size-6" />
                    </div>
                    <div className="space-y-1">
                        <h2 className="text-xl font-bold tracking-tight">
                            Failed to Load Users
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {error.message ||
                                "An unexpected error occurred while fetching user data."}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
                        <Button
                            variant="default"
                            onClick={() => reset()}
                            className="w-full sm:w-auto"
                        >
                            <RotateCcw className="mr-2 size-4" />
                            Try Again
                        </Button>
                        <Button
                            variant="outline"
                            render={<Link href="/users" />}
                            className="w-full sm:w-auto"
                        >
                            Reset Filters
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
