export function getMeta() {
	return {
		name: 'root',
		component: '::div',
		className: 'mk-app-home-shortcus'
		children: [{
			name: 'fun1',
			component: '::img',
			className: 'mk-app-portal-header-right-photo',
			src: '{{$getFunImg()}}'
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