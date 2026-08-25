// 【パスワード認証設定】
const LINE_PASSWORD_CONFIG = {
    question: "現在LINEグループの準備中です！",
    answer: "", 
    lineUrl: "#"
};

// 【今週のイチオシ情報】
const RECOMMEND_INFO = {
    title: "防災備蓄のポイント！正しいのはどれ？",
    summary: "水や食料品の備蓄、正しい知識を確認しておきましょう。詳しく見てみる！",
    targetId: 1 // 紐づく初期コンテンツのID
};

// 【初期コンテンツデータ】
const CONTENTS_DATA = [
    {
        id: 1,
        title: "防災備蓄の豆知識",
        category: "防災雑学",
        subCategory: "",
        type: "知識",
        summary: "豆知識をクイズも交えながら知ることもできます。",
        time: 5,
        source: "三井住友海上",
        url: "https://www.ms-ins.com/special/bousai/taisaku/tips_09/"
    },
    {
        id: 2,
        title: "豆知識を見てみよう１",
        category: "防災雑学",
        subCategory: "",
        type: "知識",
        summary: "ペットボトルとスマホのライトでつくる即席ランタンなど、役立つ豆知識を教えてくれます。",
        time: 10,
        source: "京都市中京区役所",
        url: "https://www.city.kyoto.lg.jp/nakagyo/page/0000331198.html"
    },
    {
        id: 3,
        title: "クイズで楽しく防災知識を学ぼう",
        category: "防災雑学",
        subCategory: "",
        type: "知識",
        summary: "目指せ！防災チャンピオン！クイズ形式で知識を学べます。",
        time: 8,
        source: "日本赤十字社",
        url: "https://www.jrc.or.jp/lp/save365/introduction/seminarquiz/"
    },
    {
        id: 4,
        title: "非常用持出袋や備蓄に必要なアイテムをチェックしてみよう",
        category: "防災用品",
        subCategory: "",
        type: "知識",
        summary: "災害の備えをチェックしてみよう。非常用持出袋の中身や備蓄に必要なアイテムを確認できます。",
        time: 2,
        source: "首相官邸",
        url: "https://www.kantei.go.jp/jp/content/000182715.pdf"
    },
    {
        id: 5,
        title: "防災アイテムに関して、詳しく知ってみよう。",
        category: "防災用品",
        subCategory: "防災バッグ",
        type: "知識",
        summary: "防災バッグに入れる飲料水には野菜ジュース・スポーツドリンクもいいぞ。防災グッズについての説明です。",
        time: 3,
        source: "広島県防災サイト",
        url: "https://www.gensai.pref.hiroshima.jp/prepare/goods.html"
    },
    {
        id: 6,
        title: "防災グッズについて詳しく",
        category: "防災用品",
        subCategory: "防災バッグ",
        type: "知識",
        summary: "3日間を乗り切るための必須防災グッズリストなどを知れます。",
        time: 15,
        source: "ジャパネット",
        url: "https://www.japanet.co.jp/shopping/prevention/bousai_goods.html"
    },
    {
        id: 7,
        title: "おいしい(らしい)非常食紹介２",
        category: "食べる・暮らす防災",
        subCategory: "",
        type: "紹介",
        summary: "おいしいようかんはいかが？口コミなどをもとに選んだ非常食紹介です。",
        time: 1,
        source: "Amazonベストセラー",
        url: "https://www.amazon.co.jp/%E4%BA%95%E6%9D%91%E5%B1%8B-200139-%E3%81%88%E3%81%84%E3%82%88%E3%81%86%E3%81%8B%E3%82%93/dp/B07ZJRK1MM/"
    },
    {
        id: 8,
        title: "おいしい(らしい)非常食紹介１",
        category: "食べる・暮らす防災",
        subCategory: "",
        type: "紹介",
        summary: "おいしいドライカレーはいかが？口コミなどをもとに選んだ非常食紹介です。",
        time: 1,
        source: "Amazonベストセラー",
        url: "https://www.amazon.co.jp/%E5%B0%BE%E8%A5%FB%E9%A3%9F%E5%93%81-%E3%82%A2%E3%83%AB%E3%83%95%E3%82%A1%E7%B1%B312%E7%A8%AE%E9%A1%9E%E5%85%A8%E9%83%A8%E3%82%BB%E3%83%83%E3%83%88-%E9%9D%9E%E5%B8%B8%E9%A3%9F-5%E5%B9%B4%E4%BF%9D%E5%AD%98-%E5%90%84%E5%91%B31%E9%A3%9F%C3%9712%E7%A8%AE%E9%A1%9E/dp/B06XZM1RGH/"
    },
    {
        id: 9,
        title: "非常食について知ろう。",
        category: "食べる・暮らす防災",
        subCategory: "非常食について",
        type: "知識",
        summary: "非常食を選ぶ基準や特徴などを知れます。",
        time: 5,
        source: "アイリスオーヤマ",
        url: "https://www.irisohyama.co.jp/plusoneday/lifestyle/549"
    },
    {
        id: 10,
        title: "災害時のガスの扱いを知ろう！",
        category: "家の中の防災",
        subCategory: "ガス",
        type: "知識",
        summary: "ガスのにおいがしたら、換気扇や電気のスイッチにさわらないで！災害時のガス関係の情報を知れます。",
        time: 2,
        source: "東京ガス",
        url: "https://www.tokyo-gas.co.jp/network/emergencies/jishin/index.html"
    },
    {
        id: 11,
        title: "家具固定について知ろう！",
        category: "家の中の防災",
        subCategory: "家具固定",
        type: "知識",
        summary: "家具固定の基本！自宅での家具類の転倒・落下・移動防止対策が知れます。",
        time: 3,
        source: "東京都防災ホームページ",
        url: "https://www.bousai.metro.tokyo.lg.jp/bousai/1000027/1005737.html"
    },
    {
        id: 12,
        title: "大雨・台風について知ろう！",
        category: "災害を知る",
        subCategory: "大雨・台風",
        type: "知識",
        summary: "キキクルとは？大雨・台風時の行動について知れます。",
        time: 10,
        source: "首相官邸",
        url: "https://www.kantei.go.jp/jp/headline/bousai/taifu_ooame.html"
    },
    {
        id: 13,
        title: "地震について知ろう！",
        category: "災害を知る",
        subCategory: "地震",
        type: "知識",
        summary: "エレベーターに乗っているときに地震が起こったら？南海トラフ地震や緊急地震速報などについて知れます。",
        time: 15,
        source: "首相官邸",
        url: "https://www.kantei.go.jp/jp/headline/bousai/jishin.html#c1"
    },
    {
        id: 14,
        title: "【動画】在宅避難について",
        category: "家の中の防災",
        subCategory: "在宅避難",
        type: "知識",
        summary: "在宅避難の注意点。在宅避難に関する知識を動画で説明してくれます。",
        time: 5,
        source: "横浜市公式WEB",
        url: "https://www.youtube.com/watch?v=8zhS4YODE_I&t=135s"
    },
    {
        id: 15,
        title: "【動画】防災よこはま",
        category: "災害を知る",
        subCategory: "",
        type: "知識",
        summary: "避難の際にするべきこと。横浜市における自然災害への備えや「自助・共助」に関しての知識を動画で見ることができます。",
        time: 24,
        source: "横浜市公式WEB",
        url: "https://www.youtube.com/watch?v=X599p2sPEn0"
    }
];