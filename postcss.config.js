module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16, // Base para a conversão: 1rem = 16px
      propList: ['*'], // Propriedades a serem convertidas (use '*' para todas)
      selectorBlackList: [], // Classes a serem ignoradas
      replace: true, // Substituir px por rem diretamente
      mediaQuery: false, // Não converter px em media queries
      minPixelValue: 0, // Converter todos os valores, incluindo 0
    },
  },
};
