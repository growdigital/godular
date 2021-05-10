module.exports = {
	plugins: {
		autoprefixer: {
			browsers: [
				"last 2 versions"
			]
		}
	},
}

// module.exports = {
//   plugins: [
//     require("autoprefixer")
//       (
//         {
//           browsers: ["last 2 versions"]
//         }
//       ),
//       ("@MadLittleMods/postcss-css-variables")
//   ]
// };
