import * as React from "react";
import Link from "next/link";
import {
    GalleryVerticalEnd,
    ChevronsUpDown,
    LogOut,
    UserRound,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarFooter,
} from "@/components/ui/sidebar";

import { NavUser } from "@/components/nav-user";

interface NavSubItem {
    title: string;
    url: string;
    isActive?: boolean;
}

interface NavItem {
    title: string;
    url: string;
    items?: NavSubItem[];
}

interface SidebarData {
    navMain: NavItem[];
}

// This is sample data.
const data: SidebarData = {
    navMain: [
        {
            title: "Dashboard",
            url: "/",
        },
        {
            title: "Users",
            url: "/users",
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <GalleryVerticalEnd className="size-4" />
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-medium">
                                    Documentation
                                </span>
                                <span className="">v1.0.0</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarMenu>
                        {data.navMain.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    render={
                                        <Link
                                            href={item.url}
                                            className="font-medium"
                                        />
                                    }
                                >
                                    {item.title}
                                </SidebarMenuButton>
                                {item.items?.length ? (
                                    <SidebarMenuSub>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuSubItem
                                                key={subItem.title}
                                            >
                                                <SidebarMenuSubButton
                                                    isActive={subItem.isActive}
                                                    render={
                                                        <Link
                                                            href={subItem.url}
                                                        />
                                                    }
                                                >
                                                    {subItem.title}
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                ) : null}
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarRail />

            <SidebarFooter>
                <NavUser
                    user={{
                        name: "Taufik Hidayat",
                        email: "taufik.hidayat@example.com",
                        avatar: "/avatars/jhon.jpg",
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    );
}
