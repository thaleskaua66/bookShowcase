const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Metamorphosis.pdf","book.png","cat-jump.jpeg","favicon.svg"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.B4DE0jyC.js",app:"_app/immutable/entry/app.CGiI9GYN.js",imports:["_app/immutable/entry/start.B4DE0jyC.js","_app/immutable/chunks/Bdj1M4qV.js","_app/immutable/chunks/CZ4hAQ8p.js","_app/immutable/chunks/NAXEPPLx.js","_app/immutable/chunks/C9SyfTMS.js","_app/immutable/chunks/9-ry7uwQ.js","_app/immutable/entry/app.CGiI9GYN.js","_app/immutable/chunks/NAXEPPLx.js","_app/immutable/chunks/C9SyfTMS.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CZ4hAQ8p.js","_app/immutable/chunks/9-ry7uwQ.js","_app/immutable/chunks/CCI6qMzo.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B74OKIiB.js')),
			__memo(() => import('./chunks/1-G1k6je20.js')),
			__memo(() => import('./chunks/2-DgITIAVU.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
