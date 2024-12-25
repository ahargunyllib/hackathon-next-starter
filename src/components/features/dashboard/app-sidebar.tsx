"use client";

import {
	AudioWaveform,
	AudioWaveformIcon,
	BookOpen,
	BookOpenIcon,
	Bot,
	BotIcon,
	Command,
	CommandIcon,
	Frame,
	FrameIcon,
	GalleryVerticalEnd,
	GalleryVerticalEndIcon,
	MapIcon,
	PieChart,
	PieChartIcon,
	Settings2,
	Settings2Icon,
	SquareTerminal,
	SquareTerminalIcon,
} from "lucide-react";
import type * as React from "react";

import { NavMain } from "@/components/features/dashboard/nav-main";
import { NavProjects } from "@/components/features/dashboard/nav-projects";
import { NavUser } from "@/components/features/dashboard/nav-user";
import { TeamSwitcher } from "@/components/features/dashboard/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	teams: [
		{
			name: "Acme Inc",
			logo: GalleryVerticalEndIcon,
			plan: "Enterprise",
		},
		{
			name: "Acme Corp.",
			logo: AudioWaveformIcon,
			plan: "Startup",
		},
		{
			name: "Evil Corp.",
			logo: CommandIcon,
			plan: "Free",
		},
	],
	navMain: [
		{
			title: "Playground",
			url: "#",
			icon: SquareTerminalIcon,
			isActive: true,
			items: [
				{
					title: "History",
					url: "#",
				},
				{
					title: "Starred",
					url: "#",
				},
				{
					title: "Settings",
					url: "#",
				},
			],
		},
		{
			title: "Models",
			url: "#",
			icon: BotIcon,
			items: [
				{
					title: "Genesis",
					url: "#",
				},
				{
					title: "Explorer",
					url: "#",
				},
				{
					title: "Quantum",
					url: "#",
				},
			],
		},
		{
			title: "Documentation",
			url: "#",
			icon: BookOpenIcon,
			items: [
				{
					title: "Introduction",
					url: "#",
				},
				{
					title: "Get Started",
					url: "#",
				},
				{
					title: "Tutorials",
					url: "#",
				},
				{
					title: "Changelog",
					url: "#",
				},
			],
		},
		{
			title: "Settings",
			url: "#",
			icon: Settings2Icon,
			items: [
				{
					title: "General",
					url: "#",
				},
				{
					title: "Team",
					url: "#",
				},
				{
					title: "Billing",
					url: "#",
				},
				{
					title: "Limits",
					url: "#",
				},
			],
		},
	],
	projects: [
		{
			name: "Design Engineering",
			url: "#",
			icon: FrameIcon,
		},
		{
			name: "Sales & Marketing",
			url: "#",
			icon: PieChartIcon,
		},
		{
			name: "Travel",
			url: "#",
			icon: MapIcon,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
				{/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
					<GalleryHorizontalEndIcon className="size-4" />
				</div>
				<div className="grid flex-1 text-left text-sm leading-tight">
					<span className="truncate font-semibold">Acme Inc</span>
					<span className="truncate text-xs">Enterprise</span>
				</div> */}
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
