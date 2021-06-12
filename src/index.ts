import path from 'path';
// ref:
// - https://umijs.org/plugins/api
import { IApi, BundlerConfigType } from '@umijs/types';

export default function buildRenamePlugin(api: IApi) {
  api.chainWebpack((config, { type }) => {
    const { chunks } = api.config;

    // 用户设置了 chunks
    if (chunks && chunks.length > 0) {
      const lastChunk = chunks[chunks.length - 1];
      // 客户端渲染构建扩展
      if (type === BundlerConfigType.csr) {
        // 非 umi chunk 则进行处理
        if (lastChunk !== 'umi') {
          config.entry(lastChunk).add(path.join(api.paths.absTmpPath!, 'umi.ts'));
          // 删除原有 umi chunk
          config.entryPoints.delete('umi');
        }
      }
    }

    return config;
  });
}
