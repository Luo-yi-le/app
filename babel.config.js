module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    ['import', {
      libraryName: 'postcss-pxtorem',
      rootValue: 37.5,
      propList: ['*'],
    }, 'postcss-pxtorem']
  ]
}
