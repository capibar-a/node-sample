//expressモジュールの読み込み
const express = require('express')
//expressのインスタンス化
const app = express()

// まずは public フォルダにあるファイルと一致したら、そのファイルを応答で返す
app.use(express.static("public"));

// 3000番ポートでサーバーを待ちの状態にする。
// もし環境変数 PORT が設定してあればそれを利用する。
app.listen(process.env.PORT || 3000, () => {
  console.log("サーバー起動中");
});

// GETリクエストの設定
// '/api/test' にアクセスがあれば、JSON 文字列 {"pet": "dog"}を返す
app.get('/api/test', (req, res)=> {
    res.json({ "pet": "dog"});
    console.log('GETリクエストを受け取りました')
    res.end();
});
