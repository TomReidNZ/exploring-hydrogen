/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: 'app',
  ignoredRouteFiles: ['**/.*'],

  // watchPaths: ['./public'],
  // server: './server.js',
  /**
   * The following settings are required to deploy Hydrogen apps to Oxygen:
   */
  publicPath: (process.env.HYDROGEN_ASSET_BASE_URL ?? '/') + 'build/',
  serverDependenciesToBundle: 'all',
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: process.env.NODE_ENV === 'production',
  // Bulk added in future tags, only sure about the v2_meta tag is needed!
  future: {
    unstable_postcss: true,
    unstable_tailwind: true,
    v2_meta: true,
    v2_routeConvention: true,
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
  },

};

// /** @type {import('@remix-run/dev').AppConfig} */
// module.exports = {
//   ignoredRouteFiles: ['**/.*'],
//   // appDirectory: "app",
//   // assetsBuildDirectory: "public/build",
//   // serverBuildPath: "build/index.js",
//   // publicPath: "/build/",
// };
