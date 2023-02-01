// 구성옵션작성하기
// 모듈익스폴트를 통해서 하나의 객체데이터를 옵션으로 내보낸다
module.exports = {
    presets: ['@babel/preset-env'],
    plugin: [
        ['@babel/plugin-transform-runtime'] // 비동기 처리 
    ]
}
