const customerReportRoutes = [
	{
		path: '/customer-reports',
		component: {
			render: (h) => h('router-view'),
		},
		children: [
			{
				path: '',
				name: 'CustomerReportsShow',
				// webpackChunkName is used for route level code-splitting
				// this generates a separate chunk (customerReports.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () =>
					import(/* webpackChunkName: "customerReports" */ '@/views/customerReports/CustomerReports.vue'),
			},
			{
				path: ':id/edit',
				name: 'CustomerReportEdit',
				props: true,
				component: () =>
					import(/* webpackChunkName: "customerReports" */ '@/views/customerReports/CustomerReportEdit.vue'),
			},
			{
				path: ':id',
				name: 'CustomerReportShow',
				props: true,
				component: () =>
					import(/* webpackChunkName: "customerReports" */ '@/views/customerReports/CustomerReport.vue'),
			},
		],
	},
];

export default customerReportRoutes;
