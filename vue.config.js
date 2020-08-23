module.exports = {

  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  // outputDir: '../../assets/web',

  publicPath: process.env.NODE_ENV === 'production'
    ? '/assets/web/'
    : '/',
}