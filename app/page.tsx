import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Users,
    UserCheck,
    UserPlus,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    Clock,
} from "lucide-react";

import usersData from "@/app/users/users.json";

const stats = [
    {
        title: "Total Users",
        value: "2,543",
        change: "+12.5%",
        isPositive: true,
        description: "from last month",
        icon: Users,
    },
    {
        title: "Active Users",
        value: "1,890",
        change: "+8.2%",
        isPositive: true,
        description: "currently online",
        icon: UserCheck,
    },
    {
        title: "New Signups",
        value: "342",
        change: "-3.1%",
        isPositive: false,
        description: "in the last 30 days",
        icon: UserPlus,
    },
    {
        title: "Engagement Rate",
        value: "74.8%",
        change: "+4.6%",
        isPositive: true,
        description: "avg session activity",
        icon: Activity,
    },
];

const mockEvents = [
    {
        action: "created a new user account",
        timestamp: "5 minutes ago",
        status: "Completed",
    },
    {
        action: "updated profile permissions to Admin",
        timestamp: "24 minutes ago",
        status: "Updated",
    },
    {
        action: "invited 3 team members to Workspace",
        timestamp: "1 hour ago",
        status: "Completed",
    },
    {
        action: "reset account security credentials",
        timestamp: "3 hours ago",
        status: "Security",
    },
    {
        action: "deactivated an inactive seat",
        timestamp: "5 hours ago",
        status: "Deactivated",
    },
];

const recentActivities = usersData.slice(0, 5).map((user, index) => {
    const event = mockEvents[index % mockEvents.length];
    return {
        id: user.id,
        user: {
            name: user.name,
            email: user.email,
        },
        action: event.action,
        timestamp: event.timestamp,
        status: event.status,
    };
});

function getInitials(name: string) {
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
        return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
}

export default async function Page() {
    // Automatic simulated delay 1500ms
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b">
                <div className="flex items-center gap-2 px-3">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">
                                    Dashboard
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                {/* User Statistics Grid */}
                <div>
                    <h2 className="text-xl font-bold tracking-tight mb-4">
                        User Overview
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={stat.title}
                                    className="rounded-xl border bg-card p-5 text-card-foreground shadow-xs flex flex-col justify-between gap-4"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-medium text-muted-foreground">
                                            {stat.title}
                                        </span>
                                        <div className="rounded-md bg-muted p-2 text-muted-foreground">
                                            <Icon className="size-4" />
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <div className="text-2xl font-bold tracking-tight">
                                            {stat.value}
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                            <span
                                                className={`inline-flex items-center font-medium ${
                                                    stat.isPositive
                                                        ? "text-emerald-600 dark:text-emerald-400"
                                                        : "text-rose-600 dark:text-rose-400"
                                                }`}
                                            >
                                                {stat.isPositive ? (
                                                    <ArrowUpRight className="size-3.5" />
                                                ) : (
                                                    <ArrowDownRight className="size-3.5" />
                                                )}
                                                {stat.change}
                                            </span>
                                            <span>{stat.description}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Recent Activity Card */}
                <div className="rounded-xl border bg-card text-card-foreground shadow-xs">
                    <div className="flex items-center justify-between p-6 border-b">
                        <div>
                            <h3 className="text-lg font-semibold tracking-tight">
                                Recent Activity
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Latest user management events across the
                                workspace
                            </p>
                        </div>
                        <Badge
                            variant="outline"
                            className="flex items-center gap-1 text-xs"
                        >
                            <Clock className="size-3" />
                            Live Updates
                        </Badge>
                    </div>
                    <div className="divide-y">
                        {recentActivities.map((activity) => (
                            <div
                                key={activity.id}
                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 hover:bg-muted/50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar className="size-9 border font-semibold text-xs">
                                        <AvatarFallback>
                                            {getInitials(activity.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium leading-none">
                                            <span>{activity.user.name}</span>{" "}
                                            <span className="font-normal text-muted-foreground">
                                                {activity.action}
                                            </span>
                                        </p>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {activity.user.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 self-end sm:self-center">
                                    <Badge
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        {activity.status}
                                    </Badge>
                                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                                        {activity.timestamp}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
