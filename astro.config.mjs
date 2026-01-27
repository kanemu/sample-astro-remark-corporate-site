// @ts-check
import { defineConfig } from 'astro/config';

import remarkGfm from 'remark-gfm';
import remarkPipeTable from 'remark-pipe-table';
import remarkDlList from 'remark-dl-list';
import { pipeTableHandlers } from 'hast-util-pipe-table';
import { dlListHandlers } from 'hast-util-dl-list';

export default defineConfig({
    markdown: {
        // 1. Remark プラグインの登録
        remarkPlugins: [
            remarkGfm,
            // Pipe Table プラグインとオプションを配列として渡します
            [remarkPipeTable, {
                autoInjectGfmInlineInCells: true // 表セル内でのgfm構文を有効に
            }],
            // DL List プラグインを追加
            remarkDlList,
        ],
        // 2. Rehype (mdast -> hast) 変換時のハンドラー設定
        remarkRehype: {
            handlers: {
                ...pipeTableHandlers(),
                ...dlListHandlers(),
            },
        },
    },
});