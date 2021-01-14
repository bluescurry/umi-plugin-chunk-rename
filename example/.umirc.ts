import { defineConfig } from 'umi';

export default defineConfig({
  // plugins: [require.resolve('../lib')],
  chunks: ['app'],
  /* chainWebpack: function(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 0,
          minChunks: 1,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource);
              },
              priority: 10,
            },
          },
        },
      },
    });
  }, */
});
