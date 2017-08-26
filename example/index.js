import { config, start, componentFactory } from 'mk-meta-engine'
import * as mkComponents from 'mk-component'
import myConfig  from './config'

import mk_app_home_chart from './apps/mk-app-home/apps/mk-app-home-chart/index.js'

import mk_app_home_list from './apps/mk-app-home/apps/mk-app-home-list/index.js'

import mk_app_home_shortcuts from './apps/mk-app-home/apps/mk-app-home-shortcuts/index.js'

import mk_app_home from './apps/mk-app-home/index.js'

const apps = {
	
	[mk_app_home_chart.name]: mk_app_home_chart,
	
	[mk_app_home_list.name]: mk_app_home_list,
	
	[mk_app_home_shortcuts.name]: mk_app_home_shortcuts,
	
	[mk_app_home.name]: mk_app_home,

}

apps.config = (options) => {
	Object.keys(options).forEach(key => {
		const reg = new RegExp(`^${key == '*' ? '.*' : key}$`)
		Object.keys(apps).forEach(appName => {
			if (appName != 'config') {
				if (reg.test(appName)) {
					apps[appName].config(options[key])
				}
			}
		})
	})
}

apps.config({ '*': { apps } })

config(myConfig({ apps }))

Object.keys(mkComponents).forEach(key=>{
	componentFactory.registerComponent(key, mkComponents[key])
})
	
start()