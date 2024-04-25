export const routes = {
	home: "/",
	activateServer: "/activate-server",
	activateUser: "/activate-user",
	login: "/login",
	survey: "/survey",
	devices: {
		verify: "/devices/verify"
	},
	models: {
		overview: "/models"
	},
	artifacts: {
		overview: "/artifacts"
	},
	pipelines: {
		overview: "/pipelines",
		namespace: (namespace: string) => `/pipelines/${namespace}`
	},
	stacks: {
		overview: "/stacks"
	},
	runs: {
		detail: (id: string) => `/runs/${id}`
	},
	settings: {
		general: "/settings/general",
		members: `/settings/members`,
		notifications: "/settings/notifications",
		repositories: { overview: "/settings/repositories" },
		profile: `/settings/profile`,
		secrets: { overview: "/settings/secrets" },
		connectors: { overview: "/settings/connectors" }
	}
};
