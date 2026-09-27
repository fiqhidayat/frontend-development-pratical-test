import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Mail,
    Phone,
    MapPin,
    Building2,
    Calendar,
    Shield,
    Globe,
} from "lucide-react";

const profileData = {
    name: "Taufik Hidayat",
    role: "Senior Frontend Engineer",
    department: "Product & Engineering",
    email: "taufik.hidayat@example.com",
    phone: "+62 812-3456-7890",
    location: "Jakarta, Indonesia",
    joinedDate: "January 2023",
    status: "Active",
    bio: "Passionate software engineer with focus on React, Next.js, and modern web architectures. Loves building performant, accessible, and delightful user interfaces.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop",
    skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Table",
        "Node.js",
        "GraphQL",
        "REST API",
        "Git",
    ],
    socials: [
        { name: "GitHub", href: "https://github.com" },
        { name: "LinkedIn", href: "https://linkedin.com" },
        { name: "Twitter", href: "https://twitter.com" },
        { name: "Website", href: "https://example.com" },
    ],
};

export default function ProfilePage() {
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
                            <BreadcrumbSeparator className="hidden md:block" />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Profile</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>

            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
                {/* Header Card */}
                <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-xs">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                            <Avatar className="size-24 border">
                                <AvatarImage
                                    src={profileData.avatar}
                                    alt={profileData.name}
                                />
                                <AvatarFallback className="text-xl">
                                    TH
                                </AvatarFallback>
                            </Avatar>
                            <div className="space-y-1.5">
                                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                                    <h1 className="text-2xl font-bold tracking-tight">
                                        {profileData.name}
                                    </h1>
                                    <Badge variant="secondary">
                                        {profileData.status}
                                    </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {profileData.role} •{" "}
                                    {profileData.department}
                                </p>
                                <p className="text-xs text-muted-foreground flex items-center justify-center sm:justify-start gap-1">
                                    <MapPin className="size-3.5" />
                                    {profileData.location}
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center gap-2">
                            <Button variant="outline">Edit Profile</Button>
                        </div>
                    </div>
                </div>

                {/* Details Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {/* Left Column: About & Skills */}
                    <div className="flex flex-col gap-6 md:col-span-2">
                        {/* About */}
                        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-xs">
                            <h2 className="text-lg font-semibold mb-3">
                                About
                            </h2>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {profileData.bio}
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-xs">
                            <h2 className="text-lg font-semibold mb-3">
                                Skills & Expertise
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {profileData.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="outline"
                                        className="px-3 py-1"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact & Socials */}
                    <div className="flex flex-col gap-6">
                        {/* Contact Info */}
                        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-xs space-y-4">
                            <h2 className="text-lg font-semibold">
                                Information
                            </h2>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Mail className="size-4 shrink-0" />
                                    <span className="truncate text-foreground">
                                        {profileData.email}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Phone className="size-4 shrink-0" />
                                    <span className="text-foreground">
                                        {profileData.phone}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Building2 className="size-4 shrink-0" />
                                    <span className="text-foreground">
                                        {profileData.department}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Shield className="size-4 shrink-0" />
                                    <span className="text-foreground">
                                        {profileData.role}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-muted-foreground">
                                    <Calendar className="size-4 shrink-0" />
                                    <span className="text-foreground">
                                        Joined {profileData.joinedDate}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-xs space-y-4">
                            <h2 className="text-lg font-semibold">
                                Social Links
                            </h2>
                            <div className="space-y-2">
                                {profileData.socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center justify-between rounded-lg p-2 text-sm hover:bg-muted transition-colors"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Globe className="size-4 text-muted-foreground" />
                                            <span>{social.name}</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">
                                            Visit
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
