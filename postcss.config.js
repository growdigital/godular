// module.exports = {
// 	plugins: {
// 		autoprefixer: {
// 			browsers: [
// 				"last 2 versions"
// 			]
// 		}
// 	},
// }

module.exports = {
  plugins: {
    'postcss-css-variables': { },
    autoprefixer: { browsers: ['last 2 versions', 'iOS >= 8'] }
  },
}

