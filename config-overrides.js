const {
  override, addBabelPlugins, fixBabelImports, addPostcssPlugins
} = require( 'customize-cra' );

if ( process.env.NODE_ENV === "production" )
{
  module.exports = override(
    fixBabelImports( 'import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    } ),
    addPostcssPlugins( [
      require( "tailwindcss" ), require( "autoprefixer" )
    ] ),
    ...addBabelPlugins( "transform-remove-console" )
  );
} else
{
  module.exports = override(
    fixBabelImports( 'import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css',
    } ),
    addPostcssPlugins( [
      require( "tailwindcss" ), require( "autoprefixer" )
    ] )
  );
}
