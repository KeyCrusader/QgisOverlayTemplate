const TitleItem = {
	props: {
		side: {
			type: String,
			default: "left"
		},
		title: String,
		subtitle: String
	},
	template: `
		<div :class="side" class="card top" id="titleItem">
			<div v-if="title !== ''" class="title">
				{{ title }}
			</div>
			<div v-if="subtitle !== ''" class="subtitle">
				{{ subtitle }}
			</div>
		</div>
	`
}
	
const MetadataItem = {
	props: {
		side: {
			type: String,
			default: "right"
		},
		username: String,
		datetime: String
	},
	template: `
		<div :class="side" class="card top" id="metadataItem">
			<div id="metadata">
				{{ username }}</br>
				{{ datetime }}
			</div>
		</div>

	`
}

const LegendItem = {
	props: {
		side: {
			type: String,
			default: "left"
		},
		title: {
		  type: String,
		  default: 'Legend',
		}
	},
	template: `
		<div :class="side" class="card bottom" id="legendItem">
			<table>
				<tr class="title">
					<td colspan="2">{{title}}</td>
				</tr>
				<slot></slot>
			</table>
		</div>
	`
}

const PointItem = {
	props: {
		colour: String,
		text: String,
		opacity: [Number, String]
	},
	template: `
		<tr>
			<td><span :class="colour" class="dot" :style="{ opacity: opacity}"></span></td>
			<td class="item">{{text}}</td>
		</tr>
	`
}

const LineItem = {
	props: {
		colour: String,
		text: String,
		opacity: [Number, String]
	},
	template: `
		<tr>
			<td>
				<svg height="25" version="1.0" width="25" xmlns="http://www.w3.org/2000/svg" class="line" :class="colour" :style="{ opacity: opacity}">
					<path d="M 16.814761,19.68003 C 15.109852,19.252934 14.538494,18.88912 14.09172,17.946109 13.91314,17.569184 13.61216,17.136069 13.422869,16.983634 12.877405,16.544379 11.49471,16.050623 9.3074445,15.51403 8.1934402,15.240742 7.0633007,14.934828 6.7960237,14.834222 4.3926656,13.929597 4.7794763,12.750125 7.9838918,11.212166 9.1886735,10.633926 9.484562,10.415501 9.484562,10.104369 9.484562,9.4960737 8.3843027,9.0165458 4.6400922,7.9930008 1.7630623,7.2065116 1,6.9097252 1,6.5772004 1,6.1177993 2.4229723,5.6726826 4.8671135,5.3675453 7.4866885,5.0405032 7.8415813,5.0543911 6.1057949,5.4160054 4.1137037,5.8310212 3.2244208,6.1363422 3.2750366,6.3879079 c 0.051086,0.2539038 0.6143101,0.408644 2.9029662,0.7975748 3.5325093,0.6003079 5.4192632,1.1812708 5.9556032,1.8338226 0.5922,0.7205128 0.168933,1.4916397 -1.394074,2.5398167 -0.499762,0.335146 -0.9086609,0.671813 -0.9086609,0.748145 0,0.318767 0.6665929,0.458458 4.2711359,0.895055 4.016123,0.486453 6.315414,1.009124 7.882614,1.791867 1.3322,0.665367 2.18525,1.816701 1.986784,2.681488 -0.08365,0.364504 -0.873585,1.100564 -1.517654,1.414159 -1.484137,0.722611 -4.041786,0.990304 -5.63899,0.590194 z"></path>
				</svg>
			</td>
			<td class="item">{{text}}</td>
		</tr>
	`
}

const PolygonItem = {
	props: {
		colour: String,
		text: String,
		opacity: [Number, String]
	},
	template: `
		<tr>
			<td><span class="polygon" :class="colour" :style="{ opacity: opacity}"></span></td>
			<td class="item">{{text}}</td>
		</tr>
	`
}

const LocatorItem = {
	props: {},
	template: `
		<div id="locatorItem">
			<div style="left: 0; top: 0;"></div>
			<div style="right: 0; top: 0;"></div>
			<div style="left: 0; bottom: 0;"></div>
			<div style="right: 0; bottom: 0;"></div>
		</div>
	`
}



var app = new Vue({
	el: '#app',
	components: {
		TitleItem,
		MetadataItem,
		LegendItem,
		PointItem,
		LineItem,
		PolygonItem,
		LocatorItem
	},
	data() {return {}}
})
