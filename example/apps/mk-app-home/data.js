export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className: 'mk-app-home',
		children: [{
			name: 'gridLayout',
			component: 'GridLayout.WidthProviderGridLayout',
			draggableCancel:'.ant-card-body',
			cols: 12,
			rowHeight: 50,
			layout: [
				{ i: 'shortcuts', x: 0, y: 0, w: 12, h: 2 },
				{ i: 'chart', x: 0, y: 2, w: 8, h: 6, minW: 4, minH:6 },
				{ i: 'list', x: 8, y: 2, w: 4, h: 6, minW: 4, minH:6 }
			],
			children: [{
				name: 'shortcuts',
				component: '::div',
				key: 'shortcuts',
				children: {
					name: 'card',
					component: 'Card',
					children: [{
						name: 'content',
						component: 'AppLoader',
						appName: 'mk-app-home-shortcuts'
					}]
				}

			} ,{
				name: 'chart',
				component: '::div',
				key: 'chart',
				children: {
					name: 'card',
					component: 'Card',
					title: '图表',
					children: [{
						name: 'content',
						component: 'AppLoader',
						appName: 'mk-app-home-chart'
					}]
				}

			} ,{
				name: 'list',
				component: '::div',
				key: 'list',
				
				children: {
					name: 'card',
					component: 'Card',
					title: '列表',
					children: [{
						name: 'content',
						component: 'AppLoader',
						appName: 'mk-app-home-list'
					}]
				}

			} ]
		}]
	}
}

export function getInitState() {
	return {
		data: {
			content: 'hello world'
		}
	}
}