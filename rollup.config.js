import  babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import tailwindcss  from 'tailwindcss';
import autoprefixer from 'autoprefixer';

import postcss from 'rollup-plugin-postcss';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs'
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports : 'named'
            }
        ],
        plugins : [
            postcss({
                plugins:[
                    tailwindcss(),
                    autoprefixer()
                ],
                minimize:true,
            }),
            babel({
                exclude : 'node_modules/**',
                presets : ['@babel/preset-react']
            }),
            external(),
            resolve()
        ]
    }
]