import { lazy } from "react";
import { RouteConfig } from "./types";

/**  function to lazy-load routes */
const loadModules = (link: string) =>
	lazy(() => import(`../../../modules/${link}`));

export const routes: RouteConfig[] = [
	{
		path: "/auth/login",
		Component: loadModules("auth/pages/Login"),
		access: "guest-only",
		exact: true,
	},
	{
		path: "/admin/staff/:id",
		Component: loadModules("admin/Staff/pages/StaffDetailsPage"),
		access: "logged-in-user",
		exact: true,
	},
	{
		path: "/admin/staff",
		Component: loadModules("admin/Staff/pages/StaffPage"),
		access: "logged-in-user",
		exact: true,
	},
	{
		path: "/admin/vendors/:id",
		Component: loadModules("admin/Vendors/pages/VendorDetails"),
		access: "logged-in-user",
		exact: true,
	},
	{
		path: "/admin/vendors",
		Component: loadModules("admin/Vendors/pages/VendorsPage"),
		access: "logged-in-user",
		exact: true,
	},
	{
		path: "/admin/chargebacks",
		Component: loadModules("admin/Chargeback/pages/ChargebackPage"),
		access: "logged-in-user",
		exact: true,
	},
	{
		path: "/admin/settlements",
		Component: loadModules(
			"admin/SettlementTransactions/pages/SettlementTransactionsPage"
		),
		access: "logged-in-user",
		exact: true,
	},
];
