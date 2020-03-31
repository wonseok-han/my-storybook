import react from 'react';
import reactDom from 'react-dom';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss'
import url from 'rollup-plugin-url';
import svgr from '@svgr/rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

export default {                        
    input: "./src/index.js",                        
    plugins: [                                   
        resolve({ extensions }), // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                react: Object.keys(react),
                'react-dom': Object.keys(reactDom)
            }
        }), // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌.
        babel({
                 extensions,
                 include: ['src/**/*'],
                 exclude: "node_modules/**",
                 runtimeHelpers: true,
            }), // Babel을 사용 할 수 있게 해줌
        postcss({
            extensions: ['.css', '.scss'],
            extract: true,  /* extract : boolean => js 파일이 생성된 동일한 위치에 css 파일을 추출 */
            modules: true,  /* modules : boolean | object => CSS 모듈을 활성화 및 postcss-modules에 대한 옵션을 설정 */
        }),
        url(),  // 미디어 파일을 dataURI 형태로 불러와서 사용 할 수 있게 해줌.
        svgr(), // SVG를 컴포넌트로 사용 할 수 있게 해줌.
        peerDepsExternal()  // peerDependencies로 설치한 라이브러리들을 external 모듈로 설정. 즉, 번들링된 결과에 포함시키지 않음
    ],
    output: [
        {
            file: pkg.module, // 번들링한 파일을 저장 할 경로
            format: 'es', // ES Module 형태로 번들링함
            sourcemap: true,
        }
    ]
}