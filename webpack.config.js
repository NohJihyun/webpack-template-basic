// import
const path = require('path')
// 설치한 패키지 가져오기
const HtmlPlugin = require('html-webpack-plugin')
// static 정적파일 사용하기 위해서 패키지 설치
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    //path: path.resolve(__dirname, 'dist'),
    //filename: 'main.js',
    clean: true
  },
  // 앞전에 필요한 패키지들 설치하고 구성옵션 적용후
  // 모듈에 내용을 작성해야지 웹팩에서 해석후 번들후 변환된 파일을 내려준다
  // css 패키지 설치후 연동
  module: {
    rules: [
      {
        // 순서가 중요하다.
        //test: /\.css$/,  정규표현식으로 .css 확장자로 찾는 정규식
        test: /\.s?css$/, // ? 있을수도 있고 없을수도 있다.
        use: [      // 설치한 패키지이름 명시
          'style-loader', 
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }, // 객체데이터 추가 babel
      {
        test: /\.js$/,
        use: [            // 압전에 설치한 패키지들 
          'babel-loader'  // 웹팩이 해석하는 과정 
        ]
      }
    ]
  },

  plugins: [           // 반환된 결과가 plugins 의 첫번째 배열로 작동이 된다.
    new HtmlPlugin({   //생성자함수를 사용 이자리에 어떠한 결과가 반환이 된다.
        template: './index.html' // 최초경로가 된다 root 
    }),
    new CopyPlugin({  // plugins 2번째 아이템으로 생성자함수를 상요해서 인수로 값을 넣어서 실행한다
        patterns: [     // 배열을 상용해서 만들어둔 폴더명을 많이 적용시킬수 있다 
            { from: 'static'} // 만들어둔 폴더명을 지칭한다.
        ]
    })   
  ]
//   devServer: {
//     host: 'localhost'
//   }

}