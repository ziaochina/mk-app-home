export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className: 'mk-app-home-shortcuts',
		children: [{
			name: 'fun1',
			component: '::div',
			children: [{
				name: 'img',
				component: '::img',
				src: '{{$getFunImg()}}'
			}, {
				name: 'text',
				component: '::a',
				children: '功能1'
			}]
		}, {
			name: 'fun2',
			component: '::div',
			children: [{
				name: 'img',
				component: '::img',
				src: '{{$getFunImg()}}'
			}, {
				name: 'text',
				component: '::a',
				children: '功能1'
			}]
		}, {
			name: 'fun3',
			component: '::div',
			children: [{
				name: 'img',
				component: '::img',
				src: '{{$getFunImg()}}'
			}, {
				name: 'text',
				component: '::a',
				children: '功能3'
			}]
		}, {
			name: 'fun4',
			component: '::div',
			children: [{
				name: 'img',
				component: '::img',
				src: '{{$getFunImg()}}'
			}, {
				name: 'text',
				component: '::a',
				children: '功能5'
			}]
		}, {
			name: 'fun5',
			component: '::div',
			children: [{
				name: 'img',
				component: '::img',
				src: '{{$getFunImg()}}'
			}, {
				name: 'text',
				component: '::a',
				children: '功能5'
			}]
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