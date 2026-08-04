/**
 * stores.js — 合作门店数据
 *
 * ✏️  日常维护方法：
 *   1. 只需填写 zh 中文字段 + img 图片 + fromStay 距离（只填中文）
 *   2. 用浏览器打开 admin.html，点击「自动翻译」即可生成英文和日文
 *   3. 在 admin.html 里点「导出 stores.js」，覆盖此文件即可
 *
 * 分类（cat）可选值：spa | dining | transfer | whisky | kimono
 * rec: true  → 显示「★ 推荐」标签；false → 不显示
 * img: 本地路径如 'images/52'（无后缀，页面优先加载 .webp，回退 .jpg）
 *
 * 📍 默认参考民宿（东山）
 *   地址：https://maps.app.goo.gl/zJGmJPxzXJML4NTf8
 *   fromStay.higashiyama 里的距离以此地址为出发点估算
 *   精确坐标：lat 35.01021, lon 135.77801（東山区清閑院蛤屋町 394-4）
 */
/**
 * stores.js — 合作门店数据（由 admin.html 自动生成）
 * 请勿手动直接编辑此文件，通过 admin.html 管理。
 */

/* ── 民宿点位数据（admin.html「民宿管理」维护）────────── */
window.PROPERTIES = [
  {
    "id":      "higashiyama",
    "zh":      "東山民宿",
    "en":      "Higashiyama Guesthouse",
    "ja":      "東山民宿",
    "lat":     35.01021,
    "lon":     135.77801,
    "mapsUrl": "https://maps.app.goo.gl/zJGmJPxzXJML4NTf8",
    "precise": true
  },
  {
    "id":      "gion",
    "zh":      "祇園別邸",
    "en":      "Gion Bettei",
    "ja":      "祇園別邸",
    "lat":     35.00300,
    "lon":     135.77400,
    "mapsUrl": "",
    "precise": false
  },
  {
    "id":      "arashiyama",
    "zh":      "嵐山山居",
    "en":      "Arashiyama Sankyo",
    "ja":      "嵐山山居",
    "lat":     35.01600,
    "lon":     135.67300,
    "mapsUrl": "",
    "precise": false
  }
];

window.STORES = [
  {
    "id": "s8",
    "cat": "spa",
    "orderAll": 14,
    "orderCat": 6,
    "rec": false,
    "img": "images/pola",
    "storeCoords": { "lat": 35.0042976, "lon": 135.7608543 },
    "zh": {
      "name": "POLA 1ST",
      "area": "清水五条",
      "desc": "日本高端美妆品牌 POLA 旗舰沙龙，专业护肤疗程，预约时可备注肌肤需求。",
      "tags": ["高端品牌", "预约制", "护肤疗程"],
      "hours": "10:00–20:00"
    },
    "en": {
      "name": "POLA 1ST",
      "area": "Kiyomizugojo",
      "desc": "Flagship salon of luxury Japanese beauty brand POLA. Professional skincare treatments — note any skin concerns when booking.",
      "tags": ["Luxury brand", "By appointment", "Skincare"],
      "hours": "10:00–20:00"
    },
    "ja": {
      "name": "POLA 1ST",
      "area": "清水五条",
      "desc": "高級美容ブランド POLAのフラッグシップサロン。専門的なスキンケアトリートメントを提供。事前にお肌の悩みをお知らせください。",
      "tags": ["高級ブランド", "要予約", "スキンケア"],
      "hours": "10:00–20:00"
    },
    "fromStay": {
      "higashiyama": { "zh": "步行约21分", "en": "~21 min walk", "ja": "徒歩約21分" },
      "gion":        { "zh": "步行约15分", "en": "~15 min walk", "ja": "徒歩約15分" },
      "arashiyama":  { "zh": "电车约30分", "en": "~30 min by train", "ja": "電車約30分" }
    }
  },
  {
    "id": "s9",
    "cat": "dining",
    "orderAll": 2,
    "orderCat": 6,
    "rec": false,
    "img": "images/ryuho",
    "storeCoords": { "lat": 35.0078552, "lon": 135.7701486 },
    "zh": {
      "name": "焼肉処 竜宝",
      "area": "木屋町三条",
      "desc": "位于木屋町三条、三条站步行约7分钟的烧肉店，选用A5级和牛，盐烤牛舌与横膈膜等部位人气颇高，营业至次日清晨，适合深夜用餐。建议提前预约。",
      "tags": ["和牛", "家庭友好", "预约制"],
      "hours": "17:30–8:00"
    },
    "en": {
      "name": "Ryuho Yakiniku",
      "area": "Kiyamachi Sanjo",
      "desc": "Late-night yakiniku restaurant near Sanjo Station on Kiyamachi — A5-rank wagyu, popular salted beef tongue and skirt steak, open until 8 am. Reservations recommended.",
      "tags": ["Wagyu", "Family friendly", "Reservations"],
      "hours": "17:30–8:00"
    },
    "ja": {
      "name": "焼肉処 竜宝",
      "area": "木屋町三条",
      "desc": "三条駅から徒歩7分、木屋町のビル地下にある焼肉店。A5ランクの和牛を使用し、塩タンやハラミが人気。翌朝8時まで営業しています。ご予約をおすすめします。",
      "tags": ["和牛", "ファミリー可", "要予約"],
      "hours": "17:30–8:00"
    },
    "fromStay": {
      "higashiyama": { "zh": "步行约10分", "en": "~10 min walk", "ja": "徒歩約10分" },
      "gion":        { "zh": "步行约8分",  "en": "~8 min walk",  "ja": "徒歩約8分"  },
      "arashiyama":  { "zh": "电车约30分", "en": "~30 min by train", "ja": "電車約30分" }
    }
  },
  {
    "id": "s10",
    "cat": "dining",
    "orderAll": 3,
    "orderCat": 9,
    "rec": true,
    "img": "images/toishi",
    "storeCoords": { "lat": 35.013618, "lon": 135.7655769 },
    "zh": {
      "name": "鰻・割烹 戸石",
      "area": "京都市役所前",
      "desc": "位于京都市役所前站步行约5分钟的鳗鱼割烹店，主打皮脆香浓的关西风地烤鳗鱼，配以四季旬味割烹料理与土锅炊饭，完全预约制，请务必提前预约。",
      "tags": ["预约制", "鳗鱼料理", "京都传统"],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "en": {
      "name": "Eel & Kappo Toishi",
      "area": "Kyoto City Hall",
      "desc": "Eel and kappo restaurant near Kyoto Shiyakusho-mae Station — crispy Kansai-style grilled eel with seasonal Japanese dishes, reservation-only dining. Reservations recommended.",
      "tags": ["Reservation required", "Eel cuisine", "Kappo"],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "ja": {
      "name": "鰻・割烹 戸石",
      "area": "京都市役所前",
      "desc": "京都市役所前駅から徒歩約5分の鰻割烹。香ばしい関西風の地焼き鰻と四季の食材を活かした割烹料理、土鍋ご飯が楽しめます。完全予約制のため、ご予約をおすすめします。",
      "tags": ["要予約", "鰻料理", "割烹"],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "fromStay": {
      "higashiyama": { "zh": "步行约15分", "en": "~15 min walk", "ja": "徒歩約15分" },
      "gion":        { "zh": "步行约18分", "en": "~18 min walk", "ja": "徒歩約18分" },
      "arashiyama":  { "zh": "电车约30分", "en": "~30 min by train", "ja": "電車約30分" }
    }
  },
  {
    "id": "s1",
    "cat": "spa",
    "orderAll": 1,
    "orderCat": 1,
    "rec": true,
    "img": "images/starry",
    "zh": {
      "name": "Starry Flow Spa",
      "area": "京都河原町",
      "desc": "适合游览后放松，预约制，可备注力度偏好。",
      "tags": [
        "中文可沟通",
        "2026年新开业",
        "深夜可约"
      ],
      "hours": "12:00–02:00"
    },
    "en": {
      "name": "Starry Flow Spa",
      "area": "Kawaramachi, Kyoto",
      "desc": "Suitable for relaxing after sightseeing, reservation required, please note your strength preference.",
      "tags": [
        "Can communicate in Chinese",
        "New opening in 2026",
        "Appointments available late at night"
      ],
      "hours": "12:00–02:00"
    },
    "ja": {
      "name": "スターリーフロースパ",
      "area": "京都河原町",
      "desc": "観光後のくつろぎに最適、要予約、強さの好みにご注意ください。",
      "tags": [
        "中国語でコミュニケーションが取れる",
        "2026年新規オープン",
        "深夜でもご予約可能です"
      ],
      "hours": "12:00–02:00"
    },
    "fromStay": {
      "higashiyama": {
        "zh": "步行约16分",
        "en": "About 16 minutes walk",
        "ja": "徒歩約16分"
      },
      "gion": {
        "zh": "步行约8分",
        "en": "About 8 minutes walk",
        "ja": "徒歩約8分"
      },
      "arashiyama": {
        "zh": "电车约31分",
        "en": "~31 min by train",
        "ja": "電車約31分"
      }
    },
    "storeCoords": {
      "lat": 35.00287367281393,
      "lon": 135.76692017692707
    }
  },
  {
    "id": "s3",
    "cat": "transfer",
    "orderAll": 17,
    "orderCat": 1,
    "rec": false,
    "img": "images/airport",
    "zh": {
      "name": "关西机场专车接送",
      "area": "民宿门口上车",
      "desc": "可预约机场、车站及景点间点对点专车，约50分钟到KIX。",
      "tags": [
        "中文司机",
        "儿童座椅",
        "大件行李"
      ],
      "hours": "24小时"
    },
    "en": {
      "name": "KIX Airport Transfer",
      "area": "From your door",
      "desc": "Door-to-door private car service. Approx. 50 min to Kansai Airport.",
      "tags": [
        "Mandarin driver",
        "Child seat",
        "Large luggage"
      ],
      "hours": "24 hours"
    },
    "ja": {
      "name": "関西空港 専用送迎",
      "area": "玄関前発",
      "desc": "ドア to ドアのプライベートカーサービス。KIXまで約50分。",
      "tags": [
        "中国語ドライバー",
        "チャイルドシート",
        "大型荷物"
      ],
      "hours": "24時間"
    },
    "fromStay": {
      "higashiyama": {
        "zh": "民宿门口",
        "en": "From your door",
        "ja": "玄関前発"
      },
      "gion": {
        "zh": "民宿门口",
        "en": "From your door",
        "ja": "玄関前発"
      },
      "arashiyama": {
        "zh": "民宿门口",
        "en": "From your door",
        "ja": "玄関前発"
      }
    }
  },
  {
    "id": "s11",
    "cat": "kimono",
    "orderAll": 8,
    "orderCat": 2,
    "rec": false,
    "img": "images/izayoi",
    "storeCoords": { "lat": 35.001, "lon": 135.782 },
    "zh": {
      "name": "十六夜和服租赁",
      "area": "东山",
      "desc": "东山区正统和服租赁店，款式丰富含发型服务，可在清水寺及二寧坂一带安排外景拍摄。",
      "tags": ["含发型", "外景拍摄", "款式丰富"],
      "hours": "09:00–18:00"
    },
    "en": {
      "name": "Izayoi Kimono Rental",
      "area": "Higashiyama",
      "desc": "Traditional kimono rental in Higashiyama, with hair styling included. Outdoor photo sessions available near Kiyomizudera and Ninenzaka.",
      "tags": ["Hair included", "Photo sessions", "Wide selection"],
      "hours": "09:00–18:00"
    },
    "ja": {
      "name": "十六夜着物レンタル",
      "area": "東山",
      "desc": "東山エリアの本格着物レンタル店。ヘアセット込みで清水寺・二寧坂周辺での外撮りプランも対応。",
      "tags": ["ヘアセット込", "外撮りプラン", "豊富なラインナップ"],
      "hours": "09:00–18:00"
    },
    "fromStay": {
      "higashiyama": { "zh": "步行约13分", "en": "~13 min walk", "ja": "徒歩約13分" },
      "gion":        { "zh": "步行约10分", "en": "~10 min walk", "ja": "徒歩約10分" },
      "arashiyama":  { "zh": "电车约35分", "en": "~35 min by train", "ja": "電車約35分" }
    }
  },

  { "id":"s12","cat":"spa","orderAll":12,"orderCat":2,"rec":true,
    "img":"images/oasis",
    "storeCoords":{"lat":35.00572,"lon":135.76681},
    "zh":{"name":"Massage Salon Oasis","area":"河原町","desc":"河原町商圈内专业按摩沙龙，提供油压、足疗、芳香疗程，可中文沟通预约。","tags":["中文可沟通","预约制","多种疗程"],"hours":"11:00–23:00"},
    "en":{"name":"Massage Salon Oasis","area":"Kawaramachi","desc":"Professional massage salon in Kawaramachi offering oil massage, reflexology and aroma therapy. Mandarin available.","tags":["Mandarin OK","By appointment","Multiple treatments"],"hours":"11:00–23:00"},
    "ja":{"name":"Massage Salon Oasis","area":"河原町","desc":"河原町のプロマッサージサロン。オイルマッサージ・足つぼ・アロマなど各種コース。中国語対応可。","tags":["中国語対応","要予約","各種コース"],"hours":"11:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约14分","en":"~14 min walk","ja":"徒歩約14分"},"gion":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s13","cat":"spa","orderAll":18,"orderCat":5,"rec":false,
    "img":"images/comfort",
    "storeCoords":{"lat":35.00229,"lon":135.76708},
    "zh":{"name":"COMFORT SPACE リラクゼーション","area":"河原町","desc":"提供多种放松疗程，专注于整体与精油按摩，适合游览后解乏。","tags":["预约制","整体疗程","精油按摩"],"hours":"12:00–00:00"},
    "en":{"name":"COMFORT SPACE Relaxation","area":"Kawaramachi","desc":"A relaxation space offering body treatment and oil massage. Perfect for unwinding after sightseeing.","tags":["By appointment","Body treatment","Oil massage"],"hours":"12:00–00:00"},
    "ja":{"name":"COMFORT SPACE リラクゼーション癒しの処","area":"河原町","desc":"整体やオイルマッサージ中心のリラクゼーションサロン。観光後の疲れ癒しに最適。","tags":["要予約","整体","オイルマッサージ"],"hours":"12:00–00:00"},
    "fromStay":{"higashiyama":{"zh":"步行约17分","en":"~17 min walk","ja":"徒歩約17分"},"gion":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s14","cat":"spa","orderAll":22,"orderCat":7,"rec":false,
    "img":"images/ruana",
    "storeCoords":{"lat":35.00429,"lon":135.75826},
    "zh":{"name":"Relaxation Ruana","area":"四条乌丸","desc":"专业放松沙龙，提供多种按摩护理，可提前备注个人偏好与力度。","tags":["预约制","多种疗程","可备注需求"],"hours":"11:00–23:00"},
    "en":{"name":"Relaxation Ruana","area":"Shijo-Karasuma","desc":"Relaxation salon with a variety of massage courses. Note your personal preferences when booking.","tags":["By appointment","Multiple courses","Custom requests"],"hours":"11:00–23:00"},
    "ja":{"name":"Relaxation Ruana","area":"四条烏丸","desc":"各種マッサージコースを提供するリラクゼーションサロン。ご希望を事前にお伝えください。","tags":["要予約","各種コース","希望相談可"],"hours":"11:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约24分","en":"~24 min walk","ja":"徒歩約24分"},"gion":{"zh":"步行约18分","en":"~18 min walk","ja":"徒歩約18分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s15","cat":"spa","orderAll":5,"orderCat":4,"rec":false,
    "img":"images/selene",
    "storeCoords":{"lat":35.00841,"lon":135.76690},
    "zh":{"name":"Selene Spa","area":"河原町","desc":"以舒缓氛围著称的按摩沙龙，适合情侣或个人深度放松体验。","tags":["预约制","情侣可","深度放松"],"hours":"11:00–23:00"},
    "en":{"name":"Selene Spa","area":"Kawaramachi","desc":"Massage salon known for its calm atmosphere, suitable for couples or solo deep relaxation.","tags":["By appointment","Couples OK","Deep relaxation"],"hours":"11:00–23:00"},
    "ja":{"name":"Selene Spa","area":"河原町","desc":"落ち着いた雰囲気のマッサージサロン。カップルやおひとり様の深いリラックス体験に最適。","tags":["要予約","カップル可","ディープリラックス"],"hours":"11:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约13分","en":"~13 min walk","ja":"徒歩約13分"},"gion":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s16","cat":"spa","orderAll":10,"orderCat":3,"rec":false,
    "img":"images/luna",
    "storeCoords":{"lat":35.00459,"lon":135.77362},
    "zh":{"name":"祇园·LUNA SPA","area":"祇园","desc":"位于祇园一带的精致按摩沙龙，夜间营业，适合傍晚游览后安排。","tags":["祇园","深夜可约","精致体验"],"hours":"14:00–01:00"},
    "en":{"name":"LUNA SPA Gion","area":"Gion","desc":"An elegant massage salon in the Gion area, open late evenings—perfect after dusk sightseeing.","tags":["Gion area","Late night","Refined experience"],"hours":"14:00–01:00"},
    "ja":{"name":"祇園・LUNA SPA","area":"祇園","desc":"祇園エリアの上品なマッサージサロン。夕方の観光後に立ち寄れる深夜営業。","tags":["祇園","深夜営業","上品な体験"],"hours":"14:00–01:00"},
    "fromStay":{"higashiyama":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"gion":{"zh":"步行约2分","en":"~2 min walk","ja":"徒歩約2分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s17","cat":"spa","orderAll":20,"orderCat":8,"rec":false,
    "img":"images/kako",
    "storeCoords":{"lat":35.00459,"lon":135.77362},
    "zh":{"name":"花香(KAKO) Relaxation Salon","area":"祇园","desc":"提供全身护理与头皮护理的综合沙龙，注重细节服务，可中文沟通。","tags":["全身护理","头皮护理","中文可"],"hours":"11:00–23:00"},
    "en":{"name":"KAKO Relaxation Salon","area":"Gion","desc":"A comprehensive salon offering body care and scalp treatment, with attention to detail. Mandarin available.","tags":["Body care","Scalp treatment","Mandarin OK"],"hours":"11:00–23:00"},
    "ja":{"name":"花香(KAKO) Relaxation Salon","area":"祇園","desc":"ボディケアとヘッドスパを提供する総合サロン。丁寧なサービスと中国語対応が特徴。","tags":["ボディケア","ヘッドスパ","中国語対応"],"hours":"11:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"gion":{"zh":"步行约2分","en":"~2 min walk","ja":"徒歩約2分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s18","cat":"spa","orderAll":21,"orderCat":9,"rec":false,
    "img":"images/hanayiro",
    "storeCoords":{"lat":35.00722,"lon":135.75562},
    "zh":{"name":"Hanayiro（花の色）","area":"四条烏丸","desc":"四条乌丸附近以花卉香氛为主题的放松沙龙，提供温和疗愈体验。","tags":["花香主题","预约制","温和疗愈"],"hours":"11:00–22:00"},
    "en":{"name":"Hanayiro","area":"Shijo-Karasuma","desc":"A floral-themed relaxation salon near Shijo-Karasuma offering gentle healing treatments.","tags":["Floral theme","By appointment","Gentle healing"],"hours":"11:00–22:00"},
    "ja":{"name":"Hanayiro（花の色リラクゼーション）","area":"四条烏丸","desc":"四条烏丸近くの花をテーマにしたリラクゼーションサロン。やさしい癒し体験を提供。","tags":["花テーマ","要予約","やさしい癒し"],"hours":"11:00–22:00"},
    "fromStay":{"higashiyama":{"zh":"步行约26分","en":"~26 min walk","ja":"徒歩約26分"},"gion":{"zh":"步行约22分","en":"~22 min walk","ja":"徒歩約22分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s19","cat":"kimono","orderAll":4,"orderCat":1,"rec":true,
    "img":"images/vintage",
    "storeCoords":{"lat":35.00551,"lon":135.77563},
    "zh":{"name":"Vintage Japanese Whisky Tasting","area":"祇园","desc":"专注日本稀有威士忌品鉴体验，提供专业讲解，适合爱好者与小团体夜间活动。","tags":["稀有威士忌","专业讲解","小团"],"hours":"18:00–00:00"},
    "en":{"name":"Vintage Japanese Whisky Tasting","area":"Gion","desc":"A curated tasting experience featuring rare Japanese whiskies with expert guidance. Perfect for enthusiasts.","tags":["Rare whisky","Expert guide","Small group"],"hours":"18:00–00:00"},
    "ja":{"name":"Vintage Japanese Whisky Tasting in Kyoto","area":"祇園","desc":"レアな日本ウイスキーをプロの解説付きで楽しめる体験。愛好家や少人数グループに最適。","tags":["レアウイスキー","プロ解説","少人数"],"hours":"18:00–00:00"},
    "fromStay":{"higashiyama":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"gion":{"zh":"步行约4分","en":"~4 min walk","ja":"徒歩約4分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s20","cat":"whisky","orderAll":15,"orderCat":2,"rec":false,
    "img":"images/barag",
    "storeCoords":{"lat":35.00492,"lon":135.77175},
    "zh":{"name":"Bar AG","area":"木屋町","desc":"精致酒吧，提供日本威士忌与精选鸡尾酒，夜间营业，氛围雅致。","tags":["威士忌","鸡尾酒","夜间营业"],"hours":"19:00–02:00"},
    "en":{"name":"Bar AG","area":"Kiyamachi","desc":"A refined bar serving Japanese whisky and curated cocktails. Elegant atmosphere, open late.","tags":["Whisky","Cocktails","Late night"],"hours":"19:00–02:00"},
    "ja":{"name":"Bar AG","area":"木屋町","desc":"日本ウイスキーとカクテルを提供する上品なバー。夜間営業で落ち着いた雰囲気。","tags":["ウイスキー","カクテル","深夜営業"],"hours":"19:00–02:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约4分","en":"~4 min walk","ja":"徒歩約4分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s22","cat":"whisky","orderAll":7,"orderCat":1,"rec":true,
    "img":"images/museum",
    "storeCoords":{"lat":35.003048,"lon":135.749138},
    "zh":{"name":"お酒の美術館 四条大宮店","area":"四条大宮","desc":"「不收服务费」的威士忌吧，珍藏多款稀有日本威士忌，可自由挑选品尝。","tags":["无服务费","稀有酒款","自由品选"],"hours":"17:00–01:00"},
    "en":{"name":"Osake no Bijutsukan Shijo-Omiya","area":"Shijo-Omiya","desc":"No-charge whisky bar with a wide selection of rare Japanese whiskies. Browse and taste freely.","tags":["No cover charge","Rare selection","Free tasting"],"hours":"17:00–01:00"},
    "ja":{"name":"お酒の美術館 四条大宮店","area":"四条大宮","desc":"チャージなしでレアな日本ウイスキーを自由に楽しめるバー。多彩なボトルを取り揃え。","tags":["チャージなし","レア酒","飲み比べ"],"hours":"17:00–01:00"},
    "fromStay":{"higashiyama":{"zh":"电车约15分","en":"~15 min by transit","ja":"電車約15分"},"gion":{"zh":"电车约15分","en":"~15 min by transit","ja":"電車約15分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},

  { "id":"s23","cat":"whisky","orderAll":19,"orderCat":3,"rec":false,
    "img":"images/malacanang",
    "storeCoords":{"lat":35.00301,"lon":135.77507},
    "zh":{"name":"MALACANANG UNLIMITED","area":"祇园","desc":"提供现场表演与舞台秀的娱乐酒吧，适合热闹的夜间聚会体验。","tags":["现场表演","娱乐酒吧","夜间聚会"],"hours":"20:00–03:00"},
    "en":{"name":"MALACANANG UNLIMITED","area":"Gion","desc":"An entertainment bar with live performances and dance shows. Great for a lively night out.","tags":["Live show","Dance bar","Night out"],"hours":"20:00–03:00"},
    "ja":{"name":"MALACANANG UNLIMITED","area":"祇園","desc":"ライブパフォーマンスとダンスショーを楽しめるエンターテインメントバー。にぎやかな夜に。","tags":["ライブショー","ダンスバー","夜の娯楽"],"hours":"20:00–03:00"},
    "fromStay":{"higashiyama":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"gion":{"zh":"步行约2分","en":"~2 min walk","ja":"徒歩約2分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s24","cat":"whisky","orderAll":13,"orderCat":5,"rec":false,
    "img":"images/zaza",
    "storeCoords":{"lat":35.00781,"lon":135.76788},
    "zh":{"name":"ZAZA Pub Kyoto","area":"木屋町","desc":"京都热闹的英式酒吧风格 Pub，适合轻松聚会，提供各类酒饮与休闲食物。","tags":["英式Pub","轻松聚会","多种酒饮"],"hours":"18:00–02:00"},
    "en":{"name":"ZAZA Pub Kyoto","area":"Kiyamachi","desc":"A lively British-style pub in Kyoto, great for casual gatherings with a variety of drinks and bar food.","tags":["British pub","Casual hangout","Drinks & food"],"hours":"18:00–02:00"},
    "ja":{"name":"ZAZA Pub Kyoto","area":"木屋町","desc":"気軽に立ち寄れるイギリス風パブ。各種ドリンクとおつまみでカジュアルに楽しめる。","tags":["英国風パブ","カジュアル","各種ドリンク"],"hours":"18:00–02:00"},
    "fromStay":{"higashiyama":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"gion":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s25","cat":"dining","orderAll":11,"orderCat":10,"rec":false,
    "img":"images/bbq",
    "storeCoords":{"lat":35.00320,"lon":135.76798},
    "zh":{"name":"火焱山炭火串焼 羊肉串","area":"河原町","desc":"位于京都河原町站步行约1分钟的串烧店，招牌孜然风味羊肉串以自动旋转烤炉现烤，另有延边风味料理与传统冷面。建议提前预约。","tags":["炭火烤串","羊肉串","多人聚餐"],"hours":"17:00–00:00"},
    "en":{"name":"Kayazan Charcoal Grill","area":"Kawaramachi","desc":"Skewer restaurant one minute from Kawaramachi Station — cumin-spiced lamb skewers grilled on auto-rotating roasters, plus Yanbian Chinese dishes and cold noodles. Reservations recommended.","tags":["Charcoal grill","Lamb skewers","Group dining"],"hours":"17:00–00:00"},
    "ja":{"name":"火焱山炭火串焼 羊肉串","area":"河原町","desc":"京都河原町駅から徒歩約1分の串焼き店。クミン香るラム串を自動ロースターで焼き上げるスタイルが名物。延辺料理や本格冷麺も楽しめます。ご予約をおすすめします。","tags":["炭火串焼き","羊肉","グループ向け"],"hours":"17:00–00:00"},
    "fromStay":{"higashiyama":{"zh":"步行约15分","en":"~15 min walk","ja":"徒歩約15分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s26","cat":"dining","orderAll":16,"orderCat":7,"rec":false,
    "img":"images/togiya",
    "storeCoords":{"lat":35.01162,"lon":135.76955},
    "zh":{"name":"十祇家 木屋町御池（蔬菜料理居酒屋）","area":"木屋町御池","desc":"位于京都市役所前站步行约2分钟、高濑川畔的创作料理居酒屋，蔬菜品鉴师精选时令京都蔬菜入馔，包厢齐备，最大可举办约50人宴会。建议提前预约。","tags":["蔬菜料理","隔间包厢","精致居酒屋"],"hours":"17:00–23:00"},
    "en":{"name":"Togiya Kiyamachi Oike","area":"Kiyamachi-Oike","desc":"Vegetable-sommelier izakaya near Kyoto Shiyakusho-mae Station by the Takase River — seasonal creative dishes, private rooms, banquets for up to about 50 guests. Reservations recommended.","tags":["Vegetable cuisine","Private rooms","Elegant izakaya"],"hours":"17:00–23:00"},
    "ja":{"name":"十祇家 木屋町御池個室店","area":"木屋町御池","desc":"京都市役所前駅から徒歩2分、高瀬川沿いの町家風居酒屋。野菜ソムリエによる旬野菜の創作料理が自慢。個室を完備し、最大50名の宴会にも対応。ご予約をおすすめします。","tags":["野菜料理","個室あり","上質居酒屋"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约13分","en":"~13 min walk","ja":"徒歩約13分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s27","cat":"dining","orderAll":6,"orderCat":3,"rec":true,
    "img":"images/dimsum",
    "storeCoords":{"lat":35.0306,"lon":135.7483},
    "zh":{"name":"飲茶 柏三葉 西陣店","area":"西阵","desc":"位于西陣地区的中式饮茶点心专门店，供应小笼包、虾饺等蒸点与卤肉饭、粥品，搭配中国茶，另有点心畅吃方案。建议提前预约。","tags":["正宗饮茶","点心专门店","午晚餐"],"hours":"11:30–14:00 / 17:00–20:30"},
    "en":{"name":"Kashimitsuha Nishijin (Dim Sum)","area":"Nishijin","desc":"Dim sum specialty restaurant in Nishijin — steamed dumplings, congee and braised pork rice with Chinese teas; all-you-can-eat plans available. Reservations recommended.","tags":["Authentic dim sum","Nishijin","Lunch & dinner"],"hours":"11:30–14:00 / 17:00–20:30"},
    "ja":{"name":"飲茶 柏三葉 西陣店","area":"西陣","desc":"西陣にある飲茶・点心の専門店。小籠包や海老餃子などの点心と中国茶が楽しめ、ルーロー飯やお粥も人気。食べ放題プランもあります。ご予約をおすすめします。","tags":["本格飲茶","点心専門","昼夜営業"],"hours":"11:30–14:00 / 17:00–20:30"},
    "fromStay":{"higashiyama":{"zh":"电车约20分","en":"~20 min by transit","ja":"電車約20分"},"gion":{"zh":"电车约20分","en":"~20 min by transit","ja":"電車約20分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},

  { "id":"s28","cat":"dining","orderAll":9,"orderCat":8,"rec":false,
    "img":"images/ganko",
    "storeCoords":{"lat":35.01244,"lon":135.76810},
    "zh":{"name":"がんこ 高瀬川二条苑","area":"木屋町二条","desc":"位于木屋町二条的怀石料理店，建于山县有朋旧别邸，可观赏高濑川源流庭园，包厢最多可容纳约90人，夏季另设川床。建议提前预约。","tags":["怀石料理","庭园餐厅","预约制"],"hours":"11:30–22:00"},
    "en":{"name":"Ganko Takasegawa Nijo-en","area":"Kiyamachi Nijo","desc":"Kaiseki restaurant at Kiyamachi-Nijo in a historic villa with the Takase River garden — private rooms up to 90 guests, summer riverside dining. Reservations recommended.","tags":["Kaiseki","Garden dining","Reservations"],"hours":"11:30–22:00"},
    "ja":{"name":"がんこ 高瀬川二条苑","area":"木屋町二条","desc":"木屋町二条にある懐石料理店。山縣有朋旧別邸の建物と高瀬川源流庭苑を望み、個室は最大90名まで対応。夏は川床も楽しめます。ご予約をおすすめします。","tags":["懐石料理","庭園レストラン","要予約"],"hours":"11:30–22:00"},
    "fromStay":{"higashiyama":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"gion":{"zh":"步行约15分","en":"~15 min walk","ja":"徒歩約15分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s29","cat":"dining","orderAll":23,"orderCat":11,"rec":false,
    "img":"images/shin",
    "storeCoords":{"lat":35.00551,"lon":135.76856},
    "zh":{"name":"京焼肉 新 先斗町店","area":"先斗町","desc":"位于先斗町、祇园四条站步行约3分钟的京都风烧肉店，整头采购近江牛，于翻新町家空间中享用，夏季开设鸭川纳凉床席。建议提前预约。","tags":["和牛","先斗町","预约制"],"hours":"17:00–23:00（周六日另有 11:30–15:00）"},
    "en":{"name":"Kyoyakiniku Shin Pontocho","area":"Pontocho","desc":"Kyoto-style yakiniku in a renovated machiya on Pontocho near Gion-Shijo Station — whole-purchased Omi beef, Kamogawa riverside terrace in summer. Reservations recommended.","tags":["Wagyu","Pontocho","Reservations"],"hours":"17:00–23:00 (Sat & Sun also 11:30–15:00)"},
    "ja":{"name":"京焼肉 新 先斗町店","area":"先斗町","desc":"祇園四条駅から徒歩3分、先斗町の京焼肉店。一頭買いの近江牛を町家空間で味わえ、夏は鴨川の納涼床席も開設されます。ご予約をおすすめします。","tags":["和牛","先斗町","要予約"],"hours":"17:00–23:00（土日は11:30–15:00も営業）"},
    "fromStay":{"higashiyama":{"zh":"步行约16分","en":"~16 min walk","ja":"徒歩約16分"},"gion":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s30","cat":"dining","orderAll":24,"orderCat":1,"rec":false,
    "img":"images/bamboo",
    "storeCoords":{"lat":35.00936,"lon":135.77624},
    "zh":{"name":"お料理 晩boo 本店","area":"东山三条","desc":"位于东山三条、地铁东山站2号出口旁的创作和食居酒屋，以每日进货的鲜鱼与京都本地蔬菜入馔，菜单随四季更替，日本酒丰富。建议提前预约。","tags":["创作和食","日本酒","人气店"],"hours":"17:00–23:00"},
    "en":{"name":"Bamboo Honten","area":"Higashiyama Sanjo","desc":"Creative Japanese izakaya right by Higashiyama Station — fresh seafood and local Kyoto vegetables in seasonal dishes, with a good sake selection. Reservations recommended.","tags":["Creative dishes","Sake","Popular spot"],"hours":"17:00–23:00"},
    "ja":{"name":"お料理 晩boo 本店","area":"東山三条","desc":"地下鉄東山駅2番出口すぐの創作和食居酒屋。新鮮な鮮魚と京の地野菜を使った季節の料理が自慢で、日本酒も充実しています。ご予約をおすすめします。","tags":["創作和食","日本酒","人気店"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约4分","en":"~4 min walk","ja":"徒歩約4分"},"gion":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s31","cat":"dining","orderAll":25,"orderCat":4,"rec":false,
    "img":"images/asakura",
    "storeCoords":{"lat":35.00721,"lon":135.77406},
    "zh":{"name":"祇園あさくら","area":"祇园","desc":"深藏在祇园小巷里的日式意大利餐厅，融合京都本地食材，完美的东西合璧。餐厅精致古朴，老板博学健谈，是体验最地道本地人宴会的首选。六人以上可包场。","tags":["意大利料理","东西合璧","可包场"],"hours":"17:30–21:30"},
    "en":{"name":"Gion Asakura","area":"Gion","desc":"A Japanese-Italian restaurant hidden in a Gion alley, blending local Kyoto ingredients in a perfect East-meets-West style. Refined, old-world charm with an erudite and sociable owner—the top choice for an authentic local-style dinner party. Private hire available for groups of 6+.","tags":["Italian fusion","Gion","Private hire"],"hours":"17:30–21:30"},
    "ja":{"name":"祇園あさくら","area":"祇園","desc":"祇園の路地裏にひっそりと佇む和風イタリアン。京都の地元食材を活かした、和と洋の見事な融合。趣のある上質な空間で、博識で気さくなオーナーとの会話も楽しい。地元流の宴会に最適。6名以上で貸切可。","tags":["イタリアン","和洋折衷","貸切可"],"hours":"17:30–21:30"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s32","cat":"dining","orderAll":26,"orderCat":14,"rec":false,
    "img":"images/yorozu",
    "storeCoords":{"lat":35.01465,"lon":135.75784},
    "zh":{"name":"個室焼肉 萬","area":"乌丸御池","desc":"位于乌丸御池站步行约5分钟、丸太町站步行2分钟的全包厢式烧肉店，整头采购大分县丰后牛，名物为轻炙生拌牛肉，宴会最多约30人。建议提前预约。","tags":["全包厢","和牛","私密聚餐"],"hours":"11:00–15:00 / 17:00–23:00"},
    "en":{"name":"Private Room Yakiniku Yorozu","area":"Karasuma-Oike","desc":"All-private-room yakiniku near Karasuma-Oike and Marutamachi stations — whole-purchased Bungo beef, signature seared yukke, banquets for up to 30 guests. Reservations recommended.","tags":["Private rooms","Wagyu","Intimate dining"],"hours":"11:00–15:00 / 17:00–23:00"},
    "ja":{"name":"個室焼肉 萬","area":"烏丸御池","desc":"丸太町駅徒歩2分、烏丸御池駅からも徒歩5分の個室焼肉店。大分県産豊後牛の一頭買いで、名物の炙りユッケが人気。最大30名の宴会も可能です。ご予約をおすすめします。","tags":["全席個室","和牛","プライベート"],"hours":"11:00–15:00 / 17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"电车约15分","en":"~15 min by transit","ja":"電車約15分"},"gion":{"zh":"电车约15分","en":"~15 min by transit","ja":"電車約15分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},

  { "id":"s33","cat":"dining","orderAll":27,"orderCat":5,"rec":false,
    "img":"images/torihisa",
    "storeCoords":{"lat":35.00492,"lon":135.77651},
    "zh":{"name":"鳥久","area":"祇园","desc":"位于祇园圆山公园内、八坂神社旁的京料理老铺，创业于1896年，招牌名古屋交趾鸡水炊锅传承百年，和风包厢可容纳2至80人。建议提前预约。","tags":["鸡料理","老铺","京都传统"],"hours":"11:00–22:00"},
    "en":{"name":"Torihisa","area":"Gion","desc":"Kyoto cuisine restaurant founded in 1896 inside Maruyama Park, Gion — famous Nagoya Cochin chicken hotpot and kaiseki, tatami rooms for 2 to 80. Reservations recommended.","tags":["Chicken cuisine","Long-established","Traditional"],"hours":"11:00–22:00"},
    "ja":{"name":"鳥久","area":"祇園","desc":"祇園・円山公園内に佇む明治29年創業の京料理・鍋料理の老舗。名古屋コーチンの水炊きが名物で、純和風の個室座敷は2名から80名まで対応します。ご予約をおすすめします。","tags":["鶏料理","老舗","京都伝統"],"hours":"11:00–22:00"},
    "fromStay":{"higashiyama":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s34","cat":"whisky","orderAll":28,"orderCat":4,"rec":false,
    "img":"images/macho",
    "storeCoords":{"lat":35.00740,"lon":135.76721},
    "zh":{"name":"Macho Bar 京都店","area":"木屋町","desc":"京都人气肌肉主题娱乐酒吧，猛男调酒师热情互动，气氛欢乐，适合朋友聚会打卡。","tags":["主题酒吧","互动体验","人气打卡"],"hours":"19:00–00:00"},
    "en":{"name":"Macho Bar Kyoto","area":"Kiyamachi","desc":"Kyoto's popular muscle-themed entertainment bar. Buff bartenders, lively interactions and a fun party vibe—great with friends.","tags":["Theme bar","Interactive","Trending spot"],"hours":"19:00–00:00"},
    "ja":{"name":"マッチョバー京都店","area":"木屋町","desc":"京都で人気のマッチョ系エンターテインメントバー。マッチョなバーテンダーとの楽しい交流が魅力。友人との夜にぴったり。","tags":["テーマバー","交流型","話題のスポット"],"hours":"19:00–00:00"},
    "fromStay":{"higashiyama":{"zh":"步行约16分","en":"~16 min walk","ja":"徒歩約16分"},"gion":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s35","cat":"whisky","orderAll":29,"orderCat":6,"rec":false,
    "img":"images/k36",
    "storeCoords":{"lat":34.99764,"lon":135.77713},
    "zh":{"name":"K36 The Bar & Rooftop","area":"清水高台寺","desc":"青龙酒店顶层的天台酒吧，可俯瞰八坂塔与京都夜景，黄昏时分尤其迷人，建议提前预约。","tags":["天台夜景","八坂塔景观","预约制"],"hours":"15:00–00:00"},
    "en":{"name":"K36 The Bar & Rooftop","area":"Kiyomizu / Kodaiji","desc":"Rooftop bar atop Hotel Seiryu with sweeping views of Yasaka Pagoda and the Kyoto skyline. Stunning at sunset—reservations recommended.","tags":["Rooftop view","Yasaka Pagoda","Reservations"],"hours":"15:00–00:00"},
    "ja":{"name":"K36 The Bar & Rooftop","area":"清水・高台寺","desc":"ホテル青龍屋上のルーフトップバー。八坂の塔と京都の街並みを一望。夕暮れ時は特に絶景。要予約。","tags":["ルーフトップ","八坂の塔ビュー","要予約"],"hours":"15:00–00:00"},
    "fromStay":{"higashiyama":{"zh":"步行约22分","en":"~22 min walk","ja":"徒歩約22分"},"gion":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s36","cat":"dining","orderAll":30,"orderCat":12,"rec":false,
    "img":"images/yasaka",
    "storeCoords":{"lat":34.99911,"lon":135.77855},
    "zh":{"name":"招牌餐厅「八坂」","area":"二宁坂","desc":"位于二寧坂柏悦酒店四层的铁板烧法餐厅，吧台席正对八坂塔与京都街景，主厨当面烹制套餐，适合纪念日晚宴。建议提前预约。","tags":["酒店餐厅","八坂塔景观","预约制"],"hours":"17:00–19:30 / 20:00–22:30"},
    "en":{"name":"Signature Restaurant Yasaka","area":"Ninenzaka","desc":"Teppanyaki-French signature restaurant on the 4th floor of Park Hyatt Kyoto near Ninenzaka, with counter seats facing Yasaka Pagoda. Reservations recommended.","tags":["Hotel dining","Pagoda view","Reservations"],"hours":"17:00–19:30 / 20:00–22:30"},
    "ja":{"name":"シグネチャーレストラン「八坂」","area":"二寧坂","desc":"パークハイアット京都4階のシグネチャーレストラン。八坂の塔を望むカウンターで、フレンチの技を活かした鉄板焼コースを提供。ご予約をおすすめします。","tags":["ホテルダイニング","八坂の塔ビュー","要予約"],"hours":"17:00–19:30 / 20:00–22:30"},
    "fromStay":{"higashiyama":{"zh":"步行约19分","en":"~19 min walk","ja":"徒歩約19分"},"gion":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s37","cat":"dining","orderAll":31,"orderCat":13,"rec":false,
    "img":"images/endo",
    "storeCoords":{"lat":34.99889,"lon":135.77508},
    "zh":{"name":"天ぷら圓堂 八坂本店 北邸","area":"祇园","desc":"位于祇園八坂通的天妇罗老铺，在数寄屋造老宅中逐道现炸京风天妇罗，以京野菜与时令鱼贝见长，设吧台与包厢。建议提前预约。","tags":["天妇罗","老铺名店","预约制"],"hours":"11:00–15:30 / 17:00–21:30"},
    "en":{"name":"Tempura Endo Yasaka (North)","area":"Gion","desc":"Long-established tempura house on Yasaka-dori in Gion, serving Kyoto-style tempura of seasonal vegetables and seafood in a sukiya-style townhouse. Reservations recommended.","tags":["Tempura","Famed house","Reservations"],"hours":"11:00–15:30 / 17:00–21:30"},
    "ja":{"name":"京都祇園 天ぷら圓堂 八坂本店 北邸","area":"祇園","desc":"祇園・八坂通の老舗天ぷら店。数寄屋造の屋形で、京野菜や旬の魚介を使う京風天ぷらをカウンターや個室で楽しめます。ご予約をおすすめします。","tags":["天ぷら","名店","要予約"],"hours":"11:00–15:30 / 17:00–21:30"},
    "fromStay":{"higashiyama":{"zh":"步行约20分","en":"~20 min walk","ja":"徒歩約20分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s38","cat":"dining","orderAll":32,"orderCat":2,"rec":false,
    "img":"images/juju",
    "storeCoords":{"lat":35.00900,"lon":135.78260},
    "zh":{"name":"とんかつ寿樹 三条神宮道店","area":"三条神宫道","desc":"位于東山站步行约一分钟的炸猪排专门店，选用林SPF猪等国产品牌猪低温慢炸，肉质多汁软嫩，亦供猪肉涮涮锅。建议提前预约。","tags":["炸猪排","品牌猪肉","午市套餐"],"hours":"11:30–15:00 / 17:00–20:00"},
    "en":{"name":"Tonkatsu JuJu Sanjo-Jingumichi","area":"Sanjo Jingumichi","desc":"Brand-pork tonkatsu specialist one minute from Higashiyama Station, known for juicy low-temperature fried cutlets of premium Japanese pork. Reservations recommended.","tags":["Tonkatsu","Premium pork","Lunch sets"],"hours":"11:30–15:00 / 17:00–20:00"},
    "ja":{"name":"とんかつ寿樹 三条神宮道店","area":"三条神宮道","desc":"地下鉄東山駅から徒歩約1分のとんかつ店。林SPFポークなど国産銘柄豚を低温でじっくり揚げ、豚しゃぶも提供。ご予約をおすすめします。","tags":["とんかつ","銘柄豚","ランチあり"],"hours":"11:30–15:00 / 17:00–20:00"},
    "fromStay":{"higashiyama":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"gion":{"zh":"步行约16分","en":"~16 min walk","ja":"徒歩約16分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s39","cat":"kimono","orderAll":33,"orderCat":3,"rec":false,
    "img":"images/tea",
    "storeCoords":{"lat":35.0024243,"lon":135.778395},
    "zh":{"name":"晨间茶道体验","area":"长乐寺","desc":"八坂神社步行范围内，于禅寺茶室感受晨间茶道。场次以预约确认为准。","tags":["茶道","晨间","需预约"],"hours":"08:00 起（场次需预约）"},
    "en":{"name":"Morning Tea Ceremony","area":"Chōraku-ji","desc":"Morning tea in a calm temple tearoom near Yasaka Shrine. Exact session times confirmed when booking.","tags":["Tea ceremony","Morning","Reservation"],"hours":"From 08:00 (by reservation)"},
    "ja":{"name":"朝の茶道体験","area":"長楽寺","desc":"八坂神社から徒歩圏のお寺の茶室での朝の茶道。開催時間は予約時にご確認ください。","tags":["茶道","朝の体験","要予約"],"hours":"8:00～（要予約・時間は相談）"},
    "fromStay":{"higashiyama":{"zh":"步行约13分","en":"~13 min walk","ja":"徒歩約13分"},"gion":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s40","cat":"kimono","orderAll":34,"orderCat":4,"rec":false,
    "img":"images/exp-zazen",
    "zh":{"name":"京都寺庙坐禅冥想","area":"京都寺院 · 非公开坐禅","desc":"在京都寺院体验坐禅与冥想引导，静心感受禅意空间。具体寺院、集合地点与流程于预约确认后另行通知。","tags":["坐禅","冥想","寺院","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Zen Meditation at a Kyoto Temple","area":"Private Zen temple, Kyoto","desc":"Guided zazen and meditation at a Kyoto temple. Exact temple, meeting point and flow are shared once your reservation is confirmed.","tags":["Zazen","Meditation","Temple","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"京都のお寺で座禅・瞑想","area":"京都・非公開寺院","desc":"京都の寺院で座禅と瞑想のご案内。参加寺院・集合場所・当日の流れは予約確定後にお知らせします。","tags":["座禅","瞑想","寺院","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s41","cat":"kimono","orderAll":35,"orderCat":5,"rec":false,
    "img":"images/exp-mizuhiki",
    "zh":{"name":"水引（Mizuhiki）结绳手作","area":"京町屋工作坊 · 市中心","desc":"学习日本礼仪用绳「水引」的编结与配色，完成可带走的小作品。工作坊场地于预约确认后告知。","tags":["水引","手作","礼仪文化","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Mizuhiki Cord Craft Workshop","area":"Machiya studio, central Kyoto","desc":"Learn decorative knotting and colour pairing with mizuhiki—traditional ceremonial cords—and take home a small piece. Venue shared after booking.","tags":["Mizuhiki","Handcraft","Etiquette","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"水引（みずひき）結びワークショップ","area":"京町屋スタジオ・市中心部","desc":"祝儀袋などに用いる水引の結び方や配色を学び、小さな作品をお持ち帰り。会場は予約確定後にご案内します。","tags":["水引","手作り","礼儀文化","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s42","cat":"kimono","orderAll":36,"orderCat":6,"rec":false,
    "img":"images/exp-wedding",
    "zh":{"name":"京都传统日式婚礼体验","area":"京都中心部","desc":"白无垢、色打挂与神前／人前式等流程的文化讲解与纪念拍摄安排（依套餐而定）。具体场地与时段仅向已预约客人提供。","tags":["日式婚礼","白无垢","文化体验","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Traditional Japanese Wedding Experience (Kyoto)","area":"Central Kyoto","desc":"Cultural walkthrough of shiromuku, iro-uchikake and ceremony styles, plus optional commemorative photos depending on package. Venue and times shared after booking.","tags":["Wedding","Shiromuku","Culture","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"京都 伝統的な和装ウェディング体験","area":"📍京都中心部","desc":"白無垢・色打掛や神前式・人前式などの文化紹介、プランに応じた記念撮影の手配。会場・時間は予約確定後のご案内のみ。","tags":["和婚","白無垢","文化体験","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s43","cat":"kimono","orderAll":37,"orderCat":7,"rec":false,
    "img":"images/exp-sushi",
    "zh":{"name":"寿司制作体验","area":"河原町／乌丸一带","desc":"在专业指导下体验握寿司或卷寿司的基础技法与食材处理。教室或料亭场地于预约确认后告知。","tags":["寿司","料理体验","小班","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Sushi-Making Workshop","area":"Kawaramachi / Karasuma","desc":"Hands-on nigiri or maki basics with guidance on ingredients and technique. Kitchen or venue details are sent after your reservation is confirmed.","tags":["Sushi","Cooking class","Small group","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"寿司づくり体験","area":"河原町・烏丸エリア","desc":"握り・巻き寿司など、素材の扱いと基本技法をプロの指導で体験。会場は教室または料亭など、予約確定後にお知らせします。","tags":["寿司","料理体験","少人数","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s44","cat":"kimono","orderAll":38,"orderCat":8,"rec":false,
    "img":"images/exp-samurai",
    "zh":{"name":"京都传统武士文化体验","area":"市内和式文化空间","desc":"刀礼、架势与武士道精神讲解等（依合作方课程设计）。非格斗培训，具体集合点于预约确认后提供。","tags":["武士道","文化讲解","体验","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Samurai Culture Experience (Kyoto)","area":"Japanese cultural space, Kyoto","desc":"Etiquette, stances and bushidō storytelling—content varies by partner programme. Not combat training; meeting point sent after booking.","tags":["Samurai","Bushidō","Culture","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"京都 侍・武士文化体験","area":"市内・和の文化空間","desc":"礼法や構え、武士道の精神などをテーマにした文化体験（コースにより内容異なります）。打合せの上、集合場所は予約確定後にご案内。","tags":["侍","武士道","文化体験","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s45","cat":"kimono","orderAll":39,"orderCat":9,"rec":false,
    "img":"images/exp-citywalk",
    "zh":{"name":"京都城市漫步（导览）","area":"东山 · 祇园 · 河原町一带","desc":"由在地向导带领走访东山、河原町、小巷名所等（可依兴趣定制）。集合地点与路线于预约确认后发送。","tags":["城市漫步","导览","在地","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Kyoto City Walking Tour","area":"Higashiyama, Gion & Kawaramachi","desc":"Local-led walks through Higashiyama, Kawaramachi lanes and more—themes can be tailored. Meeting point and route shared after confirmation.","tags":["Walking tour","Guide","Local","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"京都街歩き（ガイド付き）","area":"東山・祇園・河原町エリア","desc":"東山・河原町の路地など、ご希望に合わせた街歩き。集合場所とコースは予約確定後にお送りします。","tags":["街歩き","ガイド","ローカル","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s46","cat":"kimono","orderAll":40,"orderCat":10,"rec":false,
    "img":"images/exp-wellness",
    "zh":{"name":"健康养生与冥想","area":"市内安静街区","desc":"呼吸、伸展与冥想等身心放松课程（依合作方课程，可能含轻量瑜伽元素）。工作室或静修空间于预约确认后告知。","tags":["养生","冥想","Wellness","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Wellness & Meditation Session","area":"Quiet Kyoto neighborhood","desc":"Breathwork, gentle movement and meditation for relaxation (content varies by partner; may include light yoga-style elements). Studio details after booking.","tags":["Wellness","Meditation","Relaxation","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"健康・ウェルネスと瞑想","area":"静かな市内エリア","desc":"呼吸法や軽いストレッチ、瞑想など心身を整えるプログラム（提携先により内容異なります）。会場は予約確定後にご案内。","tags":["ウェルネス","瞑想","リラックス","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s47","cat":"kimono","orderAll":41,"orderCat":11,"rec":false,
    "img":"images/exp-yuzen",
    "zh":{"name":"手绘友禅染绘体验","area":"西阵／东山方向工房","desc":"在布料或小物上体验友禅风格的图案设计与手绘染色基础（依工坊课程）。材料与成品规则于预约时说明。","tags":["友禅","染色","手绘","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Hand-Painted Yūzen Dyeing Workshop","area":"Nishijin or Higashiyama atelier","desc":"Try yūzen-style pattern design and hand-painting basics on fabric or small items (varies by atelier). Materials and take-home rules explained when booking.","tags":["Yūzen","Dyeing","Handcraft","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"手描き友禅染め体験","area":"西陣または東山方面の工房","desc":"布地や小物に友禅風の意匠を描く体験（工房により内容異なります）。材料・お持ち帰り可否は予約時にご説明します。","tags":["友禅","染色","手描き","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s48","cat":"kimono","orderAll":42,"orderCat":12,"rec":false,
    "img":"images/exp-wagasa",
    "zh":{"name":"迷你和伞制作体验","area":"市内传统工艺教室","desc":"组装或装饰迷你和伞，了解日本雨具与工艺文化。适合亲子与伴手礼制作。工坊地址于预约确认后提供。","tags":["和伞","手作","亲子友好","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Mini Wagasa (Japanese Parasol) Workshop","area":"Heritage craft classroom, city","desc":"Assemble or decorate a mini wagasa and learn about Japanese parasol culture—family-friendly and great for souvenirs. Workshop address sent after booking.","tags":["Wagasa","Handcraft","Family friendly","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"ミニ和傘づくり体験","area":"市内・伝統工芸教室","desc":"ミニ和傘の組立てや飾り付けを通じて和傘の文化を学ぶ体験。お子様連れやお土産作りにも。会場は予約確定後にご案内。","tags":["和傘","工作","ファミリー可","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s49","cat":"kimono","orderAll":43,"orderCat":13,"rec":false,
    "img":"images/exp-yukata",
    "zh":{"name":"浴衣・和服租赁体验","area":"祇园 · 清水寺周边","desc":"多款浴衣／和服与配件租赁，可搭配发型与外景拍摄建议。取还地点与时段于预约确认后统一告知。","tags":["浴衣","和服","租赁","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Yukata & Kimono Rental","area":"Gion & Kiyomizu area","desc":"Wide selection of yukata/kimono with accessories; hair styling and location tips available depending on plan. Pick-up/return details sent after confirmation.","tags":["Yukata","Kimono","Rental","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"浴衣・着物レンタル体験","area":"祇園・清水エリア","desc":"豊富な浴衣・着物と小物のレンタル。プランによりヘアセットやロケ地のアドバイスも。受取・返却は予約確定後にご案内します。","tags":["浴衣","着物","レンタル","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s50","cat":"kimono","orderAll":44,"orderCat":14,"rec":false,
    "img":"images/exp-videoshoot",
    "zh":{"name":"京都视频旅拍体验","area":"京都名所外景 · 随行程","desc":"专业摄影师或摄像师陪同，记录清水寺、祇园、竹林等经典场景短片或照片（套餐可选）。拍摄动线与集合点于预约确认后提供。","tags":["旅拍","视频","摄影","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Kyoto Photo & Video Session","area":"Kyoto landmarks (route-based)","desc":"Professional photo or short video session around Kiyomizu, Gion, bamboo grove and more—packages vary. Route and meeting point shared after booking.","tags":["Photo shoot","Video","Kyoto","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"京都フォト・動画旅撮影","area":"京都名所ロケ · プランにより","desc":"プロカメラマン／ビデオグラファー同伴で清水寺・祇園・竹林などを撮影。プランにより写真・ショート動画。動線と集合は予約確定後にご案内。","tags":["旅撮","動画","撮影","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s51","cat":"kimono","orderAll":45,"orderCat":15,"rec":false,
    "img":"images/exp-crafts",
    "zh":{"name":"日本传统手工艺品体验","area":"京都市内或近郊 · 依工艺","desc":"漆器、陶绘、香包或季节性工艺等，依档期轮换多种传统手作（预约时可选主题）。工坊信息于确认后发送。","tags":["传统工艺","手作","京都","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Traditional Japanese Craft Workshop","area":"Kyoto city or suburbs (by craft)","desc":"Rotating crafts such as lacquerware touches, ceramic painting or seasonal workshops—theme confirmed when you book. Venue details sent after confirmation.","tags":["Craft","Heritage","Hands-on","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"日本の伝統工芸体験","area":"京都市内〜近郊 · 工芸により","desc":"漆・陶絵・匂い袋など、季節や枠により複数の伝統工芸からお選びいただく体験。テーマは予約時にご相談、会場は確定後にご案内。","tags":["伝統工芸","手作り","京都","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s52","cat":"kimono","orderAll":46,"orderCat":16,"rec":false,
    "img":"images/exp-machiya-yuzen",
    "zh":{"name":"町屋友禅染艺术体验","area":"京町屋 · 市中心","desc":"在京都传统町屋空间内，结合建筑氛围了解友禅染的历史与鉴赏，并体验相关手作或见学（依课程）。町屋地址仅向预约客人提供。","tags":["町屋","友禅","京都","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Yūzen Art in a Kyoto Machiya","area":"Machiya, central Kyoto","desc":"Learn yūzen history and aesthetics inside a traditional machiya townhouse, with hands-on or viewing elements depending on the course. Address shared after booking.","tags":["Machiya","Yūzen","Heritage","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"町屋での友禅染めアート体験","area":"京町屋・中心部","desc":"京町屋の空間で友禅の歴史と美しさを学び、手作りまたは見学を組み合わせたプログラム（コースにより異なります）。町屋の所在地は予約確定後のみご案内。","tags":["町屋","友禅","伝統","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s53","cat":"kimono","orderAll":47,"orderCat":17,"rec":false,
    "img":"images/exp-kinpaku",
    "zh":{"name":"金箔彩绘与和服体验","area":"金箔工房 · 着付 · 市内","desc":"在小皿或饰品上体验金箔贴饰与彩绘，并可搭配和服着装留念（依套餐）。工坊与着装场地于预约确认后分别告知。","tags":["金箔","彩绘","和服","全预约制"],"hours":"全预约制（时段和地点于预约确认时通知）"},
    "en":{"name":"Gold-Leaf Painting & Kimono Experience","area":"City studio & kimono dressing","desc":"Apply gold leaf and paint on a small plate or accessory, optionally paired with kimono dressing for photos (package dependent). Studio addresses sent after booking.","tags":["Gold leaf","Painting","Kimono","By appointment only"],"hours":"Fully by appointment (time & place confirmed when you book)"},
    "ja":{"name":"金箔彩画と着物体験","area":"市内・金箔工房／着付け","desc":"小皿やアクセサリーに金箔と彩画を施す体験。プランにより着物の着装と記念撮影も。工房・着付会場は予約確定後にそれぞれご案内します。","tags":["金箔","彩画","着物","完全予約制"],"hours":"完全予約制（時間と場所は予約確定後にご案内）"},
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}},

  { "id":"s54","cat":"kimono","orderAll":100,"orderCat":18,"rec":false,
    "img":"images/63",
    "storeCoords":{"lat":35.0022,"lon":135.7735},
    "zh":{"name":"oukakimono · 四季和菓子手作","area":"清水寺周边 · 祇园","desc":"可选点位：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇园店（東山区常盤町169）。在和室氛围中体验传统和菓子制作，由职人指导完成揉制、调色、造型与花纹雕刻。可根据四季主题制作专属和菓子，完成后还能装入礼盒带走。建议提前预约。","tags":["京都","和菓子","手作","亲子友好","预约制"],"hours":"10:00-17:00"},
    "en":{"name":"Oukakimono · Seasonal Wagashi Workshop","area":"Kiyomizu area · Gion","desc":"Locations: ① Kiyomizu studio (4-432-13 Gojōbashi Higashi, Higashiyama-ku) ② Gion studio (169 Tokiwachō, Higashiyama-ku). Make traditional wagashi with artisan guidance—kneading, colouring, shaping and seasonal motifs. Box your creations to take home. Reservations recommended.","tags":["Kyoto","Wagashi","Handcraft","Family friendly","Reservations"],"hours":"10:00-17:00"},
    "ja":{"name":"oukakimono · 四季和菓子手作","area":"清水エリア · 祇園","desc":"会場は2か所：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇園店（東山区常盤町169）。和室で職人の指導のもと、四季のテーマで和菓子づくりを体験。仕上げは箱詰めしてお持ち帰り可。ご予約をおすすめします。","tags":["京都","和菓子","手作り","ファミリー可","要予約"],"hours":"10:00-17:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约3分","en":"~3 min walk","ja":"徒歩約3分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s55","cat":"kimono","orderAll":101,"orderCat":19,"rec":false,
    "img":"images/64",
    "storeCoords":{"lat":35.0022,"lon":135.7735},
    "zh":{"name":"oukakimono · 本格茶道体验","area":"清水寺周边 · 祇园","desc":"可选点位：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇园店（東山区常盤町169）。在传统茶室中学习日本茶道礼仪，体验点抹茶、品尝季节和菓子，并了解茶道文化与精神。适合想深度感受日本传统文化的游客，建议提前预约。","tags":["京都","茶道","抹茶","和菓子","预约制"],"hours":"10:00-17:00"},
    "en":{"name":"Oukakimono · Tea Ceremony Experience","area":"Kiyomizu area · Gion","desc":"Locations: ① Kiyomizu studio (4-432-13 Gojōbashi Higashi) ② Gion studio (169 Tokiwachō). Learn tea ceremony etiquette, whisk matcha and enjoy seasonal wagashi in a traditional tearoom. Reservations recommended.","tags":["Kyoto","Tea ceremony","Matcha","Wagashi","Reservations"],"hours":"10:00-17:00"},
    "ja":{"name":"oukakimono · 本格茶道体験","area":"清水エリア · 祇園","desc":"会場は2か所：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇園店（東山区常盤町169）。茶室で茶道の作法、抹茶点て、季節の和菓子を体験。ご予約をおすすめします。","tags":["京都","茶道","抹茶","和菓子","要予約"],"hours":"10:00-17:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约3分","en":"~3 min walk","ja":"徒歩約3分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s57","cat":"kimono","orderAll":103,"orderCat":21,"rec":false,
    "img":"images/66",
    "storeCoords":{"lat":35.0022,"lon":135.7735},
    "zh":{"name":"oukakimono · 剑道体验","area":"清水寺周边 · 祇园","desc":"可选点位：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇园店（東山区常盤町169）。在老师指导下学习剑道礼仪、基本动作与竹刀使用方式，感受日本武道文化中礼仪、专注与精神修养的魅力。建议提前预约。","tags":["京都","剑道","武道体验","传统文化","预约制"],"hours":"10:00-17:00"},
    "en":{"name":"Oukakimono · Kendo Experience","area":"Kiyomizu area · Gion","desc":"Locations: ① Kiyomizu studio ② Gion studio (addresses as per booking). Learn kendo etiquette, basic stances and shinai handling under instructor guidance. Reservations recommended.","tags":["Kyoto","Kendo","Martial arts","Culture","Reservations"],"hours":"10:00-17:00"},
    "ja":{"name":"oukakimono · 剣道体験","area":"清水エリア · 祇園","desc":"会場は2か所：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇園店（東山区常盤町169）。指導者のもと、剣道の礼法・基本動作・竹刀の扱いを体験。ご予約をおすすめします。","tags":["京都","剣道","武道体験","伝統文化","要予約"],"hours":"10:00-17:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约3分","en":"~3 min walk","ja":"徒歩約3分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s58","cat":"kimono","orderAll":104,"orderCat":22,"rec":false,
    "img":"images/67",
    "storeCoords":{"lat":35.0022,"lon":135.7735},
    "zh":{"name":"oukakimono · 书法体验","area":"清水寺周边 · 祇园","desc":"可选点位：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇园店（東山区常盤町169）。使用毛笔与墨汁，在老师指导下学习基本笔法，书写喜欢的汉字或词语，完成作品可作为旅行纪念带走。建议提前预约。","tags":["京都","书法","手作","传统文化","预约制"],"hours":"10:00-17:00"},
    "en":{"name":"Oukakimono · Shodo Calligraphy Experience","area":"Kiyomizu area · Gion","desc":"Locations: ① Kiyomizu studio ② Gion studio (addresses as per booking). Practice brush and ink calligraphy with basic stroke guidance—take your finished work home as a souvenir. Reservations recommended.","tags":["Kyoto","Shodo","Handcraft","Culture","Reservations"],"hours":"10:00-17:00"},
    "ja":{"name":"oukakimono · 書道体験","area":"清水エリア · 祇園","desc":"会場は2か所：①清水店（東山区五条橋東4-432-13 對嵐坊ビル1階）②祇園店（東山区常盤町169）。筆と墨で基本の運筆を学び、お好きな文字を書いてお持ち帰り。ご予約をおすすめします。","tags":["京都","書道","手作り","伝統文化","要予約"],"hours":"10:00-17:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约3分","en":"~3 min walk","ja":"徒歩約3分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s56","cat":"kimono","orderAll":102,"orderCat":20,"rec":false,
    "img":"images/65",
    "storeCoords":{"lat":35.0038,"lon":135.7749},
    "zh":{"name":"oukakimono樱花着物レンタル-樱花和服-gion","area":"祇园","desc":"祇园常盘町合作和服体验店，提供礼服租赁与和服体验。建议提前预约。","tags":["和服体验","礼服","祇园","预约制"],"hours":"09:30-17:00"},
    "en":{"name":"Oukakimono Sakura Kimono Rental · Gion","area":"Gion","desc":"Partner kimono rental & experience in Gion (Tokiwacho). Formal kimono plans available. Reservations recommended.","tags":["Kimono experience","Formal wear","Gion","Reservations"],"hours":"09:30-17:00"},
    "ja":{"name":"oukakimono樱花着物レンタル-樱花和服-gion","area":"祇園","desc":"祇園・常盤町の提携着物体験店。礼服レンタル・着物体験。ご予約をおすすめします。","tags":["着物体験","礼服","祇園","要予約"],"hours":"09:30-17:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约3分","en":"~3 min walk","ja":"徒歩約3分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s59","cat":"dining","orderAll":105,"orderCat":15,"rec":false,
    "img":"images/68",
    "storeCoords":{"lat":35.0036,"lon":135.7715},
    "zh":{"name":"寿司酒場 宵々","area":"祇园四条","desc":"位于祇園四条站步行约五分钟的柜台寿司酒场，店主修业于熟成鮨名店，熟成握寿司配日本酒，深夜亦可单点小酌。建议提前预约。","tags":["寿司","海鲜","祇园四条","预约制"],"hours":"月〜土 12:00-14:00 / 19:00-24:00（日·祝定休）"},
    "en":{"name":"Sushi Sakaba Yoiyoi","area":"Gion-Shijo","desc":"Casual counter sushi bar five minutes from Gion-Shijo Station, serving aged sushi with sake and staying open late as a sushi bar. Reservations recommended.","tags":["Sushi","Seafood","Gion-Shijo","Reservations"],"hours":"Mon–Sat 12:00-14:00 / 19:00-24:00 (closed Sun & holidays)"},
    "ja":{"name":"寿司酒場 宵々","area":"祇園四条","desc":"祇園四条駅徒歩約5分の寿司酒場。熟成鮨の技を活かした握りと日本酒を気軽に楽しめ、遅い時間は寿司バーとしても営業。ご予約をおすすめします。","tags":["寿司","海鮮","祇園四条","要予約"],"hours":"月〜土 12:00-14:00 / 19:00-24:00（日・祝定休）"},
    "fromStay":{"higashiyama":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s60","cat":"dining","orderAll":106,"orderCat":16,"rec":false,
    "img":"images/69",
    "storeCoords":{"lat":35.0031,"lon":135.7742},
    "zh":{"name":"祇园 大季","area":"祇园四条","desc":"位于祇園四条站步行约五分钟、清本町巷内的寿司割烹，时令握寿司与季节小锅，一层吧台，二层设二至十八名包厢。建议提前预约。","tags":["日本料理","寿司","火锅","祇园四条","预约制"],"hours":"月〜土 17:00-22:00（日定休）"},
    "en":{"name":"Gion Daiki","area":"Gion-Shijo","desc":"Sushi and kappo restaurant tucked in a Gion alley near Gion-Shijo Station, offering seasonal nigiri, small hot pots, and private rooms. Reservations recommended.","tags":["Japanese cuisine","Sushi","Hotpot","Gion-Shijo","Reservations"],"hours":"Mon–Sat 17:00-22:00 (closed Sun)"},
    "ja":{"name":"祇園 大季","area":"祇園四条","desc":"祇園四条駅徒歩約5分、清本町の路地奥にある寿司と割烹の店。旬の握りや季節の小鍋が楽しめ、2階に2〜18名の個室も。ご予約をおすすめします。","tags":["日本料理","寿司","鍋料理","祇園四条","要予約"],"hours":"月〜土 17:00-22:00（日定休）"},
    "fromStay":{"higashiyama":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s61","cat":"dining","orderAll":107,"orderCat":17,"rec":false,
    "img":"images/70",
    "storeCoords":{"lat":35.0055,"lon":135.7773},
    "zh":{"name":"ぎをん 津崎","area":"东山站","desc":"位于東山站附近、八坂神社北门旁的柜台寿司店，店主修业二十余年，江户前与关西技法交融，氛围轻松亦宜佐酒。建议提前预约。","tags":["寿司","日本料理","海鲜","东山站","预约制"],"hours":"月〜土 12:00-14:00 / 18:00-23:00（日定休）"},
    "en":{"name":"Gion Tsuzaki","area":"Higashiyama Station","desc":"Counter sushi near Higashiyama Station and Yasaka Shrine, blending Edomae and Kansai techniques in a relaxed setting. Reservations recommended.","tags":["Sushi","Japanese cuisine","Seafood","Higashiyama Station","Reservations"],"hours":"Mon–Sat 12:00-14:00 / 18:00-23:00 (closed Sun)"},
    "ja":{"name":"ぎをん 津崎","area":"東山駅","desc":"東山駅近く、八坂神社北門そばの寿司店。江戸前と関西の技が融合した握りを、肩肘張らずカウンターで味わえます。ご予約をおすすめします。","tags":["寿司","日本料理","海鮮","東山駅","要予約"],"hours":"月〜土 12:00-14:00 / 18:00-23:00（日定休）"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},


      /* ── 新增合作门店（2026-07-12 Excel 导入）──────────────── */

  { "id":"s62","cat":"dining","orderAll":108,"orderCat":108,"rec":false,
    "img":"images/71",
    "storeCoords":{"lat":35.00861,"lon":135.74539},
    "zh":{"name":"海鮮屋台あみたつ","area":"中京","desc":"位于三条会商店街的鲜鱼店直营海鲜居酒屋，刺身新鲜实惠，招牌米果碎衣炸串独具风味，白天连续营业可午间小酌。建议提前预约。","tags":["海鲜","预约制"],"hours":"11:30–22:30"},
    "ja":{"name":"海鮮屋台あみたつ","area":"中京","desc":"三条会商店街にある鮮魚店直営の海鮮居酒屋。新鮮なお造りや名物の串おこげを、昼から通し営業で気軽に楽しめます。ご予約をおすすめします。","tags":["海鮮","要予約"],"hours":"11:30–22:30"},
    "en":{"name":"海鮮屋台あみたつ","area":"Nakagyo","desc":"Fish-shop-run seafood izakaya in the Sanjokai shopping arcade, serving fresh sashimi and signature okaki-crusted skewers from midday onward. Reservations recommended.","tags":["Seafood","Reservations"],"hours":"11:30–22:30"},
    "fromStay":{"higashiyama":{"zh":"电车约14分","en":"~14 min by train","ja":"電車約14分"},"gion":{"zh":"电车约13分","en":"~13 min by train","ja":"電車約13分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},

  { "id":"s63","cat":"dining","orderAll":109,"orderCat":109,"rec":false,
    "img":"images/72",
    "storeCoords":{"lat":34.99372,"lon":135.73611},
    "zh":{"name":"ホルモン酒場 あかやしろ 本店","area":"西七条","desc":"位于西七条、丹波口站步行约八分钟的烧肉居酒屋，昭和复古氛围中享用新鲜和牛内脏与厚切上等牛舌，营业至深夜。建议提前预约。","tags":["居酒屋","烧肉","预约制"],"hours":"17:30–2:00 / 17:00–2:00"},
    "ja":{"name":"ホルモン酒場 あかやしろ 本店","area":"西七条","desc":"丹波口駅徒歩約8分、西七条のホルモン焼肉店。昭和レトロな店内で新鮮な国産和牛ホルモンや上タンを深夜2時まで楽しめます。ご予約をおすすめします。","tags":["居酒屋","焼肉","要予約"],"hours":"17:30–2:00 / 17:00–2:00"},
    "en":{"name":"ホルモン酒場 あかやしろ 本店","area":"Nishishichijo","desc":"Retro Showa-style yakiniku izakaya in Nishi-Shichijo near Tambaguchi Station, grilling fresh wagyu offal and thick-cut beef tongue until late night. Reservations recommended.","tags":["Izakaya","Yakiniku","Reservations"],"hours":"17:30–2:00 / 17:00–2:00"},
    "fromStay":{"higashiyama":{"zh":"电车约18分","en":"~18 min by train","ja":"電車約18分"},"gion":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"arashiyama":{"zh":"电车约23分","en":"~23 min by train","ja":"電車約23分"}}},

  { "id":"s64","cat":"dining","orderAll":110,"orderCat":110,"rec":false,
    "img":"images/73",
    "storeCoords":{"lat":35.00336,"lon":135.77516},
    "zh":{"name":"祇をん 尚","area":"祇园","desc":"位于祇園町南侧的西班牙料理与葡萄酒餐厅，由侍酒师主理，供应巴斯克风菜肴，杯卖葡萄酒三十余种，适合佐酒晚餐。建议提前预约。","tags":["和食","预约制"],"hours":"18:00–23:30"},
    "ja":{"name":"祇をん 尚","area":"祇園","desc":"祇園町南側のレストラン・ワインバー。スペイン・バスク地方の料理と、グラス30種以上の世界のワインを楽しめます。ご予約をおすすめします。","tags":["和食","要予約"],"hours":"18:00–23:30"},
    "en":{"name":"祇をん 尚","area":"Gion","desc":"Spanish restaurant and wine bar in Gion run by an owner-sommelier, pairing Basque-style dishes with an extensive wine selection. Reservations recommended.","tags":["Japanese","Reservations"],"hours":"18:00–23:30"},
    "fromStay":{"higashiyama":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"gion":{"zh":"步行约2分","en":"~2 min walk","ja":"徒歩約2分"},"arashiyama":{"zh":"电车约33分","en":"~33 min by train","ja":"電車約33分"}}},

  { "id":"s65","cat":"dining","orderAll":111,"orderCat":111,"rec":false,
    "img":"images/74",
    "storeCoords":{"lat":34.98122,"lon":135.76500},
    "zh":{"name":"The Paddock Cafe","area":"京都","desc":"位于京都站步行约十分钟、南岩本公园内的咖啡馆，招牌现烤生司康与全天供应的下午茶，坐望公园绿意，亲子亦宜。建议提前预约。","tags":["咖啡","预约制"],"hours":"9:00–17:00"},
    "ja":{"name":"The Paddock Cafe","area":"京都","desc":"京都駅から徒歩約10分、南岩本公園内のカフェ。焼きたての生スコーンと終日楽しめるアフタヌーンティーが評判です。ご予約をおすすめします。","tags":["カフェ","要予約"],"hours":"9:00–17:00"},
    "en":{"name":"The Paddock Cafe","area":"Kyoto","desc":"Park-side cafe in Minami-Iwamoto Park, a ten-minute walk from Kyoto Station, known for fresh-baked scones and all-day afternoon tea. Reservations recommended.","tags":["Cafe","Reservations"],"hours":"9:00–17:00"},
    "fromStay":{"higashiyama":{"zh":"电车约15分","en":"~15 min by train","ja":"電車約15分"},"gion":{"zh":"电车约13分","en":"~13 min by train","ja":"電車約13分"},"arashiyama":{"zh":"电车约33分","en":"~33 min by train","ja":"電車約33分"}}},

  { "id":"s66","cat":"whisky","orderAll":112,"orderCat":112,"rec":false,
    "img":"images/75",
    "storeCoords":{"lat":35.00542,"lon":135.77659},
    "zh":{"name":"Lounge TourMaline～祇園本邸～","area":"祇园","desc":"位于祇园本邸的ラウンジ，高端 lounge 空间，适合晚间小酌与特别约会。建议提前预约。","tags":["ラウンジ","预约制"],"hours":"21:00–1:00"},
    "ja":{"name":"Lounge TourMaline～祇園本邸～","area":"祇園","desc":"祇園本邸のラウンジ。上質な空間で夜の一杯に。ご予約をおすすめします。","tags":["ラウンジ","要予約"],"hours":"21:00–1:00"},
    "en":{"name":"Lounge TourMaline～祇園本邸～","area":"Gion","desc":"Upscale lounge at Gion Hontei — perfect for a special evening drink. Reservations recommended.","tags":["Lounge","Reservations"],"hours":"21:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"arashiyama":{"zh":"电车约35分","en":"~35 min by train","ja":"電車約35分"}}},

  { "id":"s67","cat":"dining","orderAll":113,"orderCat":113,"rec":false,
    "img":"images/76",
    "storeCoords":{"lat":35.05558,"lon":135.74845},
    "zh":{"name":"幸 Go! say!","area":"京都","desc":"位于北区上賀茂御薗口橋巴士站步行约两分钟的定食居酒屋，午市供应1000日元日替定食，晚间以产地直送刺身拼盘见长。建议提前预约。","tags":["京都美食","预约制"],"hours":"11:00–14:00 / 17:00–21:00 / 11:00–14:00 / 18:00–23:00"},
    "ja":{"name":"幸 Go! say!","area":"京都","desc":"京都市北区、上賀茂御薗口橋バス停徒歩約2分の居酒屋。昼は1000円の日替わり定食、夜は産直の刺身盛り合わせが評判です。ご予約をおすすめします。","tags":["京都グルメ","要予約"],"hours":"11:00–14:00 / 17:00–21:00 / 11:00–14:00 / 18:00–23:00"},
    "en":{"name":"幸 Go! say!","area":"Kyoto","desc":"Neighborhood set-meal diner and izakaya in Kyoto Kita Ward near Kamigamo, serving 1000-yen daily lunch sets and fresh sashimi platters. Reservations recommended.","tags":["Kyoto dining","Reservations"],"hours":"11:00–14:00 / 17:00–21:00 / 11:00–14:00 / 18:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"电车约22分","en":"~22 min by train","ja":"電車約22分"},"gion":{"zh":"电车约24分","en":"~24 min by train","ja":"電車約24分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s68","cat":"dining","orderAll":114,"orderCat":114,"rec":false,
    "img":"images/77",
    "storeCoords":{"lat":35.00543,"lon":135.77619},
    "zh":{"name":"鉄板焼居酒屋 七福神","area":"东山","desc":"位于祇园的铁板烧居酒屋，御好烧、文字烧与章鱼烧等铁板料理丰富，营业至深夜，适合游览后晚餐或宵夜。建议提前预约。","tags":["居酒屋","铁板烧","预约制"],"hours":"16:00–23:00 / 19:00–7:00"},
    "ja":{"name":"鉄板焼居酒屋 七福神","area":"東山","desc":"祇園の鉄板焼き居酒屋。お好み焼きやもんじゃ焼き、たこ焼きなどの鉄板料理を深夜まで楽しめます。観光帰りの夕食にも。ご予約をおすすめします。","tags":["居酒屋","鉄板焼き","要予約"],"hours":"16:00–23:00 / 19:00–7:00"},
    "en":{"name":"鉄板焼居酒屋 七福神","area":"Higashiyama","desc":"Teppanyaki izakaya in Gion — okonomiyaki, monjayaki and takoyaki served late into the night. Reservations recommended.","tags":["Izakaya","Teppanyaki","Reservations"],"hours":"16:00–23:00 / 19:00–7:00"},
    "fromStay":{"higashiyama":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"gion":{"zh":"步行约4分","en":"~4 min walk","ja":"徒歩約4分"},"arashiyama":{"zh":"电车约33分","en":"~33 min by train","ja":"電車約33分"}}},

  { "id":"s69","cat":"dining","orderAll":115,"orderCat":115,"rec":false,
    "img":"images/78",
    "storeCoords":{"lat":34.98899,"lon":135.72873},
    "zh":{"name":"焼肉処 真 西七条店","area":"西七条","desc":"位于西七条、近JR西大路站的烧肉专门店，午市供应实惠烧肉套餐，备有座敷席，适合家庭聚餐。建议提前预约。","tags":["烧肉","预约制"],"hours":"11:00–22:00 / 11:00–14:00"},
    "ja":{"name":"焼肉処 真 西七条店","area":"西七条","desc":"西七条、JR西大路駅徒歩約8分の焼肉店。お手頃な焼肉ランチもあり、お座敷席で家族連れにも人気です。ご予約をおすすめします。","tags":["焼肉","要予約"],"hours":"11:00–22:00 / 11:00–14:00"},
    "en":{"name":"焼肉処 真 西七条店","area":"Nishishichijo","desc":"Yakiniku restaurant in Nishishichijo near JR Nishioji Station — affordable lunch sets and tatami seating for families. Reservations recommended.","tags":["Yakiniku","Reservations"],"hours":"11:00–22:00 / 11:00–14:00"},
    "fromStay":{"higashiyama":{"zh":"电车约20分","en":"~20 min by train","ja":"電車約20分"},"gion":{"zh":"电车约18分","en":"~18 min by train","ja":"電車約18分"},"arashiyama":{"zh":"电车约23分","en":"~23 min by train","ja":"電車約23分"}}},

  { "id":"s70","cat":"whisky","orderAll":116,"orderCat":116,"rec":false,
    "img":"images/79",
    "storeCoords":{"lat":35.00461,"lon":135.77481},
    "zh":{"name":"祗園フィリピン club ROYAL(クラブ ロイヤル)","area":"东山","desc":"位于祇园的夜店，夜间娱乐氛围，适合团体聚会。建议提前预约。","tags":["夜店","预约制"],"hours":"20:00–1:00"},
    "ja":{"name":"祗園フィリピン club ROYAL(クラブ ロイヤル)","area":"東山","desc":"祇園のフィリピンクラブ。ナイトエンターテインメント向け。ご予約をおすすめします。","tags":["クラブ","要予約"],"hours":"20:00–1:00"},
    "en":{"name":"祗園フィリピン club ROYAL(クラブ ロイヤル)","area":"Higashiyama","desc":"Gion nightlife spot — group-friendly entertainment venue. Reservations recommended.","tags":["Club","Reservations"],"hours":"20:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"gion":{"zh":"步行约14分","en":"~14 min walk","ja":"徒歩約14分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s71","cat":"dining","orderAll":117,"orderCat":117,"rec":false,
    "img":"images/80",
    "storeCoords":{"lat":35.00442,"lon":135.73654},
    "zh":{"name":"くれよん食堂","area":"中京","desc":"位于西院站步行五分钟的海鲜居酒屋，资深寿司职人主理，午市海鲜丼与寿司套餐实惠，晚间有鲜鱼刺身配地酒。建议提前预约。","tags":["京都美食","预约制"],"hours":"12:00–14:00 / 17:00–22:00"},
    "ja":{"name":"くれよん食堂","area":"中京","desc":"西院駅徒歩約5分の海鮮居酒屋。経験豊富な寿司職人が握る寿司や鮮魚のお造り、海鮮丼などのランチが人気です。ご予約をおすすめします。","tags":["京都グルメ","要予約"],"hours":"12:00–14:00 / 17:00–22:00"},
    "en":{"name":"くれよん食堂","area":"Nakagyo","desc":"Seafood izakaya near Saiin Station — sushi and sashimi by a veteran sushi chef, popular seafood lunch sets. Reservations recommended.","tags":["Kyoto dining","Reservations"],"hours":"12:00–14:00 / 17:00–22:00"},
    "fromStay":{"higashiyama":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"gion":{"zh":"电车约15分","en":"~15 min by train","ja":"電車約15分"},"arashiyama":{"zh":"电车约23分","en":"~23 min by train","ja":"電車約23分"}}},

  { "id":"s72","cat":"dining","orderAll":118,"orderCat":118,"rec":false,
    "img":"images/81",
    "storeCoords":{"lat":35.00417,"lon":135.77687},
    "zh":{"name":"隠れ家PATISSERIE SAKI INOUE","area":"祇园","desc":"位于祇园、八坂神社步行一分钟的隐秘甜点店，招牌祇园卷蛋糕与可露丽，深夜营业，可享甜点配酒。建议提前预约。","tags":["咖啡","甜点","预约制"],"hours":"14:00–1:00"},
    "ja":{"name":"隠れ家PATISSERIE SAKI INOUE","area":"祇園","desc":"祇園、八坂神社徒歩1分の隠れ家パティスリー。名物の祇園ロールやカヌレを深夜までお酒とともに楽しめます。ご予約をおすすめします。","tags":["カフェ","スイーツ","要予約"],"hours":"14:00–1:00"},
    "en":{"name":"隠れ家PATISSERIE SAKI INOUE","area":"Gion","desc":"Hidden patisserie and bar in Gion near Yasaka Shrine — signature roll cakes and canelés served late into the night. Reservations recommended.","tags":["Cafe","Dessert","Reservations"],"hours":"14:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约34分","en":"~34 min by train","ja":"電車約34分"}}},

  { "id":"s73","cat":"dining","orderAll":119,"orderCat":119,"rec":false,
    "img":"images/82",
    "storeCoords":{"lat":35.00857,"lon":135.74781},
    "zh":{"name":"焼肉屋ロマンポップ 二条 ホルモン","area":"中京","desc":"位于二条城前站附近三条会商店街的烧肉店，由京町家改建，主打以洗酱去除多余油脂的清爽京都流烧肉与内脏烧。建议提前预约。","tags":["烧肉","预约制"],"hours":"17:30–23:00 / 12:30–15:00 / 17:30–23:00"},
    "ja":{"name":"焼肉屋ロマンポップ 二条 ホルモン","area":"中京","desc":"二条城前駅徒歩約8分、三条会商店街の焼肉店。町屋改装の空間で、洗いダレでさっぱり味わう京都流焼肉が名物です。ご予約をおすすめします。","tags":["焼肉","要予約"],"hours":"17:30–23:00 / 12:30–15:00 / 17:30–23:00"},
    "en":{"name":"焼肉屋ロマンポップ 二条 ホルモン","area":"Nakagyo","desc":"Yakiniku restaurant near Nijojo-mae Station — light Kyoto-style grilled meat and offal in a renovated machiya townhouse. Reservations recommended.","tags":["Yakiniku","Reservations"],"hours":"17:30–23:00 / 12:30–15:00 / 17:30–23:00"},
    "fromStay":{"higashiyama":{"zh":"电车约13分","en":"~13 min by train","ja":"電車約13分"},"gion":{"zh":"电车约12分","en":"~12 min by train","ja":"電車約12分"},"arashiyama":{"zh":"电车约26分","en":"~26 min by train","ja":"電車約26分"}}},

  { "id":"s74","cat":"dining","orderAll":120,"orderCat":120,"rec":false,
    "img":"images/83",
    "storeCoords":{"lat":34.88909,"lon":135.80241},
    "zh":{"name":"炭焼き肉と京の野菜 Nico","area":"京都","desc":"位于JR宇治站步行五分钟的隐秘餐馆，炭火烤肉配宇治本地京野菜，午市有家常菜套餐，晚市供应炭烤牛排。建议提前预约。","tags":["烧肉","京野菜","预约制"],"hours":"8:00–21:00"},
    "ja":{"name":"炭焼き肉と京の野菜 Nico","area":"京都","desc":"JR宇治駅徒歩約5分の隠れ家レストラン。炭焼き肉と宇治産の京野菜が自慢で、おばんざいランチや炭焼きステーキが人気です。ご予約をおすすめします。","tags":["焼肉","京野菜","要予約"],"hours":"8:00–21:00"},
    "en":{"name":"炭焼き肉と京の野菜 Nico","area":"Kyoto","desc":"Hideaway restaurant near JR Uji Station — charcoal-grilled meats with local Kyoto vegetables, obanzai lunch sets. Reservations recommended.","tags":["Yakiniku","Kyoto veg","Reservations"],"hours":"8:00–21:00"},
    "fromStay":{"higashiyama":{"zh":"电车约46分","en":"~46 min by train","ja":"電車約46分"},"gion":{"zh":"电车约44分","en":"~44 min by train","ja":"電車約44分"},"arashiyama":{"zh":"电车约60分","en":"~60 min by train","ja":"電車約60分"}}},

  { "id":"s75","cat":"whisky","orderAll":121,"orderCat":121,"rec":false,
    "img":"images/84",
    "storeCoords":{"lat":35.00502,"lon":135.77529},
    "zh":{"name":"Nomiya Revenge","area":"东山","desc":"位于祇园附近的酒吧，深夜营业的酒吧居酒屋，适合夜游后一杯。建议提前预约。","tags":["酒吧","预约制"],"hours":"23:00–6:00"},
    "ja":{"name":"Nomiya Revenge","area":"東山","desc":"祇園のバー居酒屋。深夜営業で観光後にも便利。ご予約をおすすめします。","tags":["バー","要予約"],"hours":"23:00–6:00"},
    "en":{"name":"Nomiya Revenge","area":"Higashiyama","desc":"Late-night bar izakaya in Gion — great after exploring the city. Reservations recommended.","tags":["Bar","Reservations"],"hours":"23:00–6:00"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"arashiyama":{"zh":"电车约35分","en":"~35 min by train","ja":"電車約35分"}}},

  { "id":"s76","cat":"dining","orderAll":122,"orderCat":122,"rec":false,
    "img":"images/85",
    "storeCoords":{"lat":34.98273,"lon":135.76050},
    "zh":{"name":"ホルモン酒場 あかやしろ燈","area":"京都","desc":"位于京都站八条口步行约三分钟的内脏烧肉酒场，主打未经冷冻的新鲜生内脏与A4黑毛和牛，营业至深夜一点。建议提前预约。","tags":["居酒屋","烧肉","预约制"],"hours":"16:00–1:00"},
    "ja":{"name":"ホルモン酒場 あかやしろ燈","area":"京都","desc":"京都駅八条口徒歩約3分のホルモン酒場。冷凍しない朝引き生ホルモンとA4ランクの黒毛和牛を深夜1時まで楽しめます。ご予約をおすすめします。","tags":["居酒屋","焼肉","要予約"],"hours":"16:00–1:00"},
    "en":{"name":"ホルモン酒場 あかやしろ燈","area":"Kyoto","desc":"Offal yakiniku bar near Kyoto Station Hachijo exit — fresh never-frozen horumon and A4 wagyu, open until late. Reservations recommended.","tags":["Izakaya","Yakiniku","Reservations"],"hours":"16:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"电车约15分","en":"~15 min by train","ja":"電車約15分"},"gion":{"zh":"电车约13分","en":"~13 min by train","ja":"電車約13分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s77","cat":"dining","orderAll":123,"orderCat":123,"rec":false,
    "img":"images/86",
    "storeCoords":{"lat":35.04667,"lon":135.75477},
    "zh":{"name":"次郎","area":"京都","desc":"位于北大路站步行五分钟的和食割烹居酒屋，曾获米其林必比登推荐，招牌天然琵琶鳟料理，菜品丰富、价格亲民。建议提前预约。","tags":["居酒屋","预约制"],"hours":"依预约时段"},
    "ja":{"name":"次郎","area":"京都","desc":"北大路駅徒歩約5分の割烹居酒屋。ミシュランのビブグルマンに掲載され、名物の天然琵琶鱒料理と豊富な旬のメニューが自慢です。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"予約制"},
    "en":{"name":"次郎","area":"Kyoto","desc":"Kappo-style izakaya near Kitaoji Station — Michelin Bib Gourmand listed, famous for wild Lake Biwa trout dishes. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"By appointment"},
    "fromStay":{"higashiyama":{"zh":"电车约19分","en":"~19 min by train","ja":"電車約19分"},"gion":{"zh":"电车约20分","en":"~20 min by train","ja":"電車約20分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s78","cat":"whisky","orderAll":124,"orderCat":124,"rec":false,
    "img":"images/87",
    "storeCoords":{"lat":35.00726,"lon":135.76997},
    "zh":{"name":"HIGHEST","area":"中京","desc":"位于木屋町附近的酒吧，高层酒吧可俯瞰街景，鸡尾酒选择丰富。建议提前预约。","tags":["酒吧","预约制"],"hours":"21:00–7:00"},
    "ja":{"name":"HIGHEST","area":"中京","desc":"木屋町のバー。夜景を眺めながらカクテルを。ご予約をおすすめします。","tags":["バー","要予約"],"hours":"21:00–7:00"},
    "en":{"name":"HIGHEST","area":"Nakagyo","desc":"Rooftop-style bar near Kiyamachi with city views and cocktails. Reservations recommended.","tags":["Bar","Reservations"],"hours":"21:00–7:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约32分","en":"~32 min by train","ja":"電車約32分"}}},

  { "id":"s79","cat":"dining","orderAll":125,"orderCat":125,"rec":false,
    "img":"images/88",
    "storeCoords":{"lat":35.04647,"lon":135.75432},
    "zh":{"name":"京野菜とお肉の韓国料理居酒屋 Mansoh（まんそう）","area":"京都","desc":"位于北大路站步行五分钟的韩式居酒屋，选用上贺茂签约农家的京野菜，招牌丹波牛与京都猪肉牛排，兼有经典与创意韩国料理。建议提前预约。","tags":["居酒屋","韩餐","京野菜"],"hours":"17:30–22:30 / 17:00–22:00"},
    "ja":{"name":"京野菜とお肉の韓国料理居酒屋 Mansoh（まんそう）","area":"京都","desc":"北大路駅徒歩約5分の韓国料理居酒屋。上賀茂の契約農家から仕入れる京野菜と、丹波牛や京都ポークのステーキが自慢です。ご予約をおすすめします。","tags":["居酒屋","韓国料理","京野菜"],"hours":"17:30–22:30 / 17:00–22:00"},
    "en":{"name":"京野菜とお肉の韓国料理居酒屋 Mansoh（まんそう）","area":"Kyoto","desc":"Korean izakaya near Kitaoji Station — Kyoto vegetables from local farms with Tamba beef and Kyoto pork steaks. Reservations recommended.","tags":["Izakaya","Korean BBQ","Kyoto veg"],"hours":"17:30–22:30 / 17:00–22:00"},
    "fromStay":{"higashiyama":{"zh":"电车约19分","en":"~19 min by train","ja":"電車約19分"},"gion":{"zh":"电车约20分","en":"~20 min by train","ja":"電車約20分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s80","cat":"dining","orderAll":126,"orderCat":126,"rec":false,
    "img":"images/89",
    "storeCoords":{"lat":35.00542,"lon":135.76254},
    "zh":{"name":"楽坐青天家","area":"中京","desc":"位于四条乌丸高仓通锦小路、乌丸站步行三分钟的京町家风居酒屋，招牌昆布鲣鱼高汤关东煮与京都家常小菜，设掘炬燵包厢。建议提前预约。","tags":["居酒屋","预约制"],"hours":"17:00–23:00"},
    "ja":{"name":"楽坐青天家","area":"中京","desc":"四条烏丸、烏丸駅徒歩3分の京町家風居酒屋。名物の京風おでんと季節のおばんざいが自慢で、掘りごたつの個室もございます。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"17:00–23:00"},
    "en":{"name":"楽坐青天家","area":"Nakagyo","desc":"Kyoto machiya-style izakaya near Shijo-Karasuma — signature Kyoto-style oden and seasonal obanzai, private rooms available. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约19分","en":"~19 min walk","ja":"徒歩約19分"},"gion":{"zh":"步行约14分","en":"~14 min walk","ja":"徒歩約14分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s81","cat":"dining","orderAll":127,"orderCat":127,"rec":false,
    "img":"images/90",
    "storeCoords":{"lat":35.01520,"lon":135.76174},
    "zh":{"name":"カフェ & サロン メリーゴーランド","area":"中京","desc":"位于御所南、丸太町站步行五分钟的亲子咖啡沙龙，供应有机香草茶与荷兰松饼，附设有玩具、绘本与攀岩墙的儿童游戏区。建议提前预约。","tags":["咖啡","预约制"],"hours":"11:00–16:00"},
    "ja":{"name":"カフェ & サロン メリーゴーランド","area":"中京","desc":"御所南、丸太町駅徒歩約5分のカフェ＆サロン。オーガニックハーブティーやオランダのパンケーキが楽しめ、キッズスペース完備です。ご予約をおすすめします。","tags":["カフェ","要予約"],"hours":"11:00–16:00"},
    "en":{"name":"カフェ & サロン メリーゴーランド","area":"Nakagyo","desc":"Kids-friendly cafe and tea salon near Marutamachi Station — organic herbal teas, Dutch pancakes and a children play area. Reservations recommended.","tags":["Cafe","Reservations"],"hours":"11:00–16:00"},
    "fromStay":{"higashiyama":{"zh":"步行约21分","en":"~21 min walk","ja":"徒歩約21分"},"gion":{"zh":"电车约13分","en":"~13 min by train","ja":"電車約13分"},"arashiyama":{"zh":"电车约36分","en":"~36 min by train","ja":"電車約36分"}}},

  { "id":"s82","cat":"dining","orderAll":128,"orderCat":128,"rec":false,
    "img":"images/91",
    "storeCoords":{"lat":35.00258,"lon":135.76114},
    "zh":{"name":"創作バル en_ciel","area":"下京","desc":"位于四条乌丸、地铁四条站步行约3分钟的地下隐藏系创作酒馆，自家制烤牛肉与现做生意面配丰富酒品，设吧台与桌席，最多可30人包场。建议提前预约。","tags":["创作料理","预约制"],"hours":"18:00–0:00 / 11:30–14:00 / 18:00–0:00"},
    "ja":{"name":"創作バル en_ciel","area":"下京","desc":"阪急烏丸駅・地下鉄四条駅徒歩3分、地下に佇む隠れ家創作バル。自家製ローストビーフや生パスタが人気で、最大30名様の貸切にも対応。ご予約をおすすめします。","tags":["創作料理","要予約"],"hours":"18:00–0:00 / 11:30–14:00 / 18:00–0:00"},
    "en":{"name":"創作バル en_ciel","area":"Shimogyo","desc":"Hidden basement bar near Shijo-Karasuma serving creative plates like homemade roast beef and fresh pasta, with private-party plans for up to 30. Reservations recommended.","tags":["Creative","Reservations"],"hours":"18:00–0:00 / 11:30–14:00 / 18:00–0:00"},
    "fromStay":{"higashiyama":{"zh":"步行约22分","en":"~22 min walk","ja":"徒歩約22分"},"gion":{"zh":"步行约15分","en":"~15 min walk","ja":"徒歩約15分"},"arashiyama":{"zh":"电车约29分","en":"~29 min by train","ja":"電車約29分"}}},

  { "id":"s83","cat":"dining","orderAll":129,"orderCat":129,"rec":false,
    "img":"images/92",
    "storeCoords":{"lat":35.00512,"lon":135.75848},
    "zh":{"name":"肉料理 陽気","area":"中京","desc":"位于锦市场附近、阪急乌丸站步行数分钟的烧肉店，主打黑毛和牛，持生肉供应许可，和牛生拌肉等菜品颇具特色，备无烟烤炉与宴会套餐。建议提前预约。","tags":["和食","预约制"],"hours":"18:00–23:00"},
    "ja":{"name":"肉料理 陽気","area":"中京","desc":"錦市場近く、阪急烏丸駅徒歩約4分の焼肉店。黒毛和牛を手頃に楽しめ、生肉提供認可店ならではのユッケも評判。無煙ロースターを完備。ご予約をおすすめします。","tags":["和食","要予約"],"hours":"18:00–23:00"},
    "en":{"name":"肉料理 陽気","area":"Nakagyo","desc":"Yakiniku restaurant near Nishiki Market specializing in kuroge wagyu, licensed to serve raw beef dishes like yukhoe, with smokeless roasters and banquet courses. Reservations recommended.","tags":["Japanese","Reservations"],"hours":"18:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约23分","en":"~23 min walk","ja":"徒歩約23分"},"gion":{"zh":"步行约17分","en":"~17 min walk","ja":"徒歩約17分"},"arashiyama":{"zh":"电车约29分","en":"~29 min by train","ja":"電車約29分"}}},

  { "id":"s84","cat":"dining","orderAll":130,"orderCat":130,"rec":false,
    "img":"images/93",
    "storeCoords":{"lat":35.00578,"lon":135.77573},
    "zh":{"name":"祇をんあやか","area":"祇园","desc":"位于祇园一带的和食，京料理风格，适合纪念日晚餐。建议提前预约。","tags":["和食","预约制"],"hours":"20:00–1:00"},
    "ja":{"name":"祇をんあやか","area":"祇園","desc":"祇園の和食店。記念日ディナーにも。ご予約をおすすめします。","tags":["和食","要予約"],"hours":"20:00–1:00"},
    "en":{"name":"祇をんあやか","area":"Gion","desc":"Refined Japanese dining in Gion — suitable for special occasions. Reservations recommended.","tags":["Japanese","Reservations"],"hours":"20:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"gion":{"zh":"步行约4分","en":"~4 min walk","ja":"徒歩約4分"},"arashiyama":{"zh":"电车约33分","en":"~33 min by train","ja":"電車約33分"}}},

  { "id":"s85","cat":"dining","orderAll":131,"orderCat":131,"rec":false,
    "img":"images/94",
    "storeCoords":{"lat":35.00464,"lon":135.77720},
    "zh":{"name":"厳選和牛 しゃぶしゃぶ・すき焼き 祇園 牛禅","area":"东山","desc":"位于祇园、八坂神社斜对面祇园会馆内的涮涮锅与寿喜烧放题专门店，可选黑毛和牛、近江牛、神户牛，人气锅款可一锅同享两味，设下挖式包厢。建议提前预约。","tags":["寿喜烧","预约制"],"hours":"17:00–23:00"},
    "ja":{"name":"厳選和牛 しゃぶしゃぶ・すき焼き 祇園 牛禅","area":"東山","desc":"八坂神社前、祇園会館4階のしゃぶしゃぶ・すき焼き食べ放題店。名物すきしゃぶは両方を一度に堪能でき、黒毛和牛や神戸牛も選べます。掘りごたつの個室完備。ご予約をおすすめします。","tags":["すき焼き","要予約"],"hours":"17:00–23:00"},
    "en":{"name":"厳選和牛 しゃぶしゃぶ・すき焼き 祇園 牛禅","area":"Higashiyama","desc":"All-you-can-eat shabu-shabu and sukiyaki house facing Yasaka Shrine in Gion, offering kuroge wagyu, Omi and Kobe beef with private tatami rooms. Reservations recommended.","tags":["Sukiyaki","Reservations"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约34分","en":"~34 min by train","ja":"電車約34分"}}},

  { "id":"s86","cat":"whisky","orderAll":132,"orderCat":132,"rec":false,
    "img":"images/95",
    "storeCoords":{"lat":35.00509,"lon":135.77470},
    "zh":{"name":"祇園 巴 GION TOMOE","area":"东山","desc":"位于祇园附近的ラウンジ，夜间 lounge 酒吧，适合餐后一杯。建议提前预约。","tags":["ラウンジ","预约制"],"hours":"21:00–1:00"},
    "ja":{"name":"祇園 巴 GION TOMOE","area":"東山","desc":"祇園のラウンジバー。食後の一杯に最適。ご予約をおすすめします。","tags":["ラウンジ","要予約"],"hours":"21:00–1:00"},
    "en":{"name":"祇園 巴 GION TOMOE","area":"Higashiyama","desc":"Lounge bar in Gion for an after-dinner drink. Reservations recommended.","tags":["Lounge","Reservations"],"hours":"21:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"gion":{"zh":"步行约4分","en":"~4 min walk","ja":"徒歩約4分"},"arashiyama":{"zh":"电车约33分","en":"~33 min by train","ja":"電車約33分"}}},

  { "id":"s87","cat":"dining","orderAll":133,"orderCat":133,"rec":false,
    "img":"images/96",
    "storeCoords":{"lat":35.00993,"lon":135.77254},
    "zh":{"name":"スタミナ山","area":"京都","desc":"位于三条京阪站步行约1分钟的炭火烧肉店，主打和牛红身肉与招牌肉拼盘，新推包卷式烧肉，可自由搭配鸡蛋、芝士等配料，午市亦营业。建议提前预约。","tags":["烧肉","预约制"],"hours":"11:30–14:00 / 17:00–0:00 / 17:00–0:00"},
    "ja":{"name":"スタミナ山","area":"京都","desc":"三条京阪駅徒歩1分の炭火焼肉店。名物スタミナ盛や和牛赤身に加え、卵やチーズで包んで味わう巻き焼肉スタイルも楽しめます。ランチ営業あり。ご予約をおすすめします。","tags":["焼肉","要予約"],"hours":"11:30–14:00 / 17:00–0:00 / 17:00–0:00"},
    "en":{"name":"スタミナ山","area":"Kyoto","desc":"Charcoal yakiniku one minute from Sanjo-Keihan Station, known for lean wagyu and wrap-style grilling with egg, cheese and namul toppings; lunch served. Reservations recommended.","tags":["Yakiniku","Reservations"],"hours":"11:30–14:00 / 17:00–0:00 / 17:00–0:00"},
    "fromStay":{"higashiyama":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"gion":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"arashiyama":{"zh":"电车约32分","en":"~32 min by train","ja":"電車約32分"}}},

  { "id":"s88","cat":"dining","orderAll":134,"orderCat":134,"rec":false,
    "img":"images/97",
    "storeCoords":{"lat":35.00275,"lon":135.77265},
    "zh":{"name":"いちのはじまり","area":"东山","desc":"位于祇园大和大路通、祇园四条站步行约2分钟的和法融合创作居酒屋，由京町家改装，时令海鲜、京都家常小菜与法式手法料理颇受好评。建议提前预约。","tags":["居酒屋","预约制"],"hours":"17:00–23:00"},
    "ja":{"name":"いちのはじまり","area":"東山","desc":"祇園四条駅徒歩2分、大和大路通の京町家を改装した創作居酒屋。フレンチ出身シェフによる和と洋を掛け合わせた料理や旬の海鮮、おばんざいが楽しめます。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"17:00–23:00"},
    "en":{"name":"いちのはじまり","area":"Higashiyama","desc":"Creative izakaya in a renovated machiya near Gion-Shijo Station, blending Japanese and French cooking with seasonal seafood and obanzai plates. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"电车约17分","en":"~17 min by train","ja":"電車約17分"},"gion":{"zh":"电车约14分","en":"~14 min by train","ja":"電車約14分"},"arashiyama":{"zh":"电车约35分","en":"~35 min by train","ja":"電車約35分"}}},

  { "id":"s89","cat":"dining","orderAll":135,"orderCat":135,"rec":false,
    "img":"images/98",
    "storeCoords":{"lat":35.00920,"lon":135.76916},
    "zh":{"name":"縁満居酒屋 皓月","area":"河原町","desc":"位于河原町三条、京都市役所前站步行约4分钟的二楼隐藏系居酒屋，招牌是点单后现炊的土锅饭，配高汤蛋卷、时令小菜与日本酒，一人用餐亦自在。建议提前预约。","tags":["居酒屋","预约制"],"hours":"6:30–8:30 / 18:00–23:30 / 6:30–8:30"},
    "ja":{"name":"縁満居酒屋 皓月","area":"河原町","desc":"河原町三条の2階に佇む隠れ家居酒屋。注文後に炊き上げる土鍋ご飯が名物で、だし巻きや旬のおばんざい、日本酒も充実。お一人様も歓迎です。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"6:30–8:30 / 18:00–23:30 / 6:30–8:30"},
    "en":{"name":"縁満居酒屋 皓月","area":"Kawaramachi","desc":"Cozy second-floor izakaya at Kawaramachi-Sanjo famous for clay-pot rice cooked to order, dashimaki omelet and sake; solo diners welcome. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"6:30–8:30 / 18:00–23:30 / 6:30–8:30"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s90","cat":"dining","orderAll":136,"orderCat":136,"rec":false,
    "img":"images/99",
    "storeCoords":{"lat":35.00345,"lon":135.73479},
    "zh":{"name":"ホルモン酒場 あかやしろ 焔","area":"中京","desc":"位于西院站步行数分钟的内脏烧肉酒场，每日采购国产和牛内脏，不用冷冻货，以七轮炭火现烤，红身肉选用京都产黑毛和牛，设吧台与下挖式座席。建议提前预约。","tags":["居酒屋","烧肉","预约制"],"hours":"17:00–2:00"},
    "ja":{"name":"ホルモン酒場 あかやしろ 焔","area":"中京","desc":"西院駅すぐのホルモン酒場。毎朝仕入れる国産和牛ホルモン20種以上を七輪の炭火で炙り、赤身は京都産黒毛和牛を使用。カウンターや掘りごたつ席も。ご予約をおすすめします。","tags":["居酒屋","焼肉","要予約"],"hours":"17:00–2:00"},
    "en":{"name":"ホルモン酒場 あかやしろ 焔","area":"Nakagyo","desc":"Horumon yakiniku bar by Saiin Station grilling fresh domestic wagyu offal over shichirin charcoal, with Kyoto kuroge wagyu cuts and cozy counter seats. Reservations recommended.","tags":["Izakaya","Yakiniku","Reservations"],"hours":"17:00–2:00"},
    "fromStay":{"higashiyama":{"zh":"电车约17分","en":"~17 min by train","ja":"電車約17分"},"gion":{"zh":"电车约15分","en":"~15 min by train","ja":"電車約15分"},"arashiyama":{"zh":"电车约23分","en":"~23 min by train","ja":"電車約23分"}}},

  { "id":"s91","cat":"whisky","orderAll":137,"orderCat":137,"rec":false,"hidden":true,
    "img":"images/100",
    "storeCoords":{"lat":35.00453,"lon":135.77412},
    "zh":{"name":"CLUB Cinderella","area":"东山","desc":"京都东山的京都美食，适合游览后用餐。建议提前预约。","tags":["京都美食","预约制"],"hours":"21:00–1:00 / 20:00–1:00"},
    "ja":{"name":"CLUB Cinderella","area":"東山","desc":"東山エリアの店舗。ご予約をおすすめします。","tags":["京都グルメ","要予約"],"hours":"21:00–1:00 / 20:00–1:00"},
    "en":{"name":"CLUB Cinderella","area":"Higashiyama","desc":"Partner venue in Higashiyama. Reservations recommended.","tags":["Kyoto dining","Reservations"],"hours":"21:00–1:00 / 20:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"gion":{"zh":"电车约14分","en":"~14 min by train","ja":"電車約14分"},"arashiyama":{"zh":"电车约36分","en":"~36 min by train","ja":"電車約36分"}}},

  { "id":"s92","cat":"dining","orderAll":138,"orderCat":138,"rec":false,
    "img":"images/101",
    "storeCoords":{"lat":34.97559,"lon":135.66719},
    "zh":{"name":"中華料理 江華(こうか)","area":"西京","desc":"位于西京区桂坂、桂坂口巴士站旁的本地中华料理老店，定食、面饭、点心种类丰富，午市定食实惠，设包厢与榻榻米座，适合家庭聚餐。建议提前预约。","tags":["中华料理","预约制"],"hours":"11:00–14:30 / 17:30–22:30"},
    "ja":{"name":"中華料理 江華(こうか)","area":"西京","desc":"西京区桂坂、バス停桂坂口すぐの地元に根ざした町中華。定食や麺類、点心まで揃い、リーズナブルなランチも人気。個室や座敷があり家族連れにも好評です。ご予約をおすすめします。","tags":["中華料理","要予約"],"hours":"11:00–14:30 / 17:30–22:30"},
    "en":{"name":"中華料理 江華(こうか)","area":"Nishikyo","desc":"Long-standing neighborhood Chinese restaurant in Katsurazaka, Nishikyo Ward, serving set lunches, noodles and dim sum, with tatami rooms suited to families. Reservations recommended.","tags":["Chinese","Reservations"],"hours":"11:00–14:30 / 17:30–22:30"},
    "fromStay":{"higashiyama":{"zh":"电车约33分","en":"~33 min by train","ja":"電車約33分"},"gion":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"},"arashiyama":{"zh":"电车约20分","en":"~20 min by train","ja":"電車約20分"}}},

  { "id":"s93","cat":"whisky","orderAll":139,"orderCat":139,"rec":false,
    "img":"images/102",
    "storeCoords":{"lat":35.00435,"lon":135.77485},
    "zh":{"name":"Kyoto bar IKUKA","area":"东山","desc":"京都东山的酒吧，适合游览后用餐。建议提前预约。","tags":["酒吧","预约制"],"hours":"20:30–2:00"},
    "ja":{"name":"Kyoto bar IKUKA","area":"東山","desc":"東山エリアの店舗。ご予約をおすすめします。","tags":["バー","要予約"],"hours":"20:30–2:00"},
    "en":{"name":"Kyoto bar IKUKA","area":"Higashiyama","desc":"Partner venue in Higashiyama. Reservations recommended.","tags":["Bar","Reservations"],"hours":"20:30–2:00"},
    "fromStay":{"higashiyama":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"gion":{"zh":"电车约14分","en":"~14 min by train","ja":"電車約14分"},"arashiyama":{"zh":"电车约36分","en":"~36 min by train","ja":"電車約36分"}}},

  { "id":"s94","cat":"dining","orderAll":140,"orderCat":140,"rec":false,
    "img":"images/103",
    "storeCoords":{"lat":35.00256,"lon":135.76357},
    "zh":{"name":"おでんと鉄板焼スタンド きとま","area":"下京","desc":"位于下京区、阪急乌丸站步行约4分钟的关东煮与铁板烧小酒馆，老汤炖煮的关东煮配现煎饺子，冰柜自取饮品与约12种日本酒别有乐趣，适合下班小酌。建议提前预约。","tags":["居酒屋","铁板烧","おでん"],"hours":"17:00–23:00"},
    "ja":{"name":"おでんと鉄板焼スタンド きとま","area":"下京","desc":"阪急烏丸駅徒歩約4分のおでんと鉄板焼きのスタンド居酒屋。継ぎ足しの出汁で煮込むおでんや餃子が自慢で、ドリンクはセルフ式、日本酒も豊富です。ご予約をおすすめします。","tags":["居酒屋","鉄板焼き","おでん"],"hours":"17:00–23:00"},
    "en":{"name":"おでんと鉄板焼スタンド きとま","area":"Shimogyo","desc":"Standing-style oden and teppanyaki bar near Karasuma Station with long-simmered broth, grilled gyoza and self-serve drinks including about a dozen sake. Reservations recommended.","tags":["Izakaya","Teppanyaki","Oden"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约20分","en":"~20 min walk","ja":"徒歩約20分"},"gion":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s95","cat":"dining","orderAll":141,"orderCat":141,"rec":false,
    "img":"images/104",
    "storeCoords":{"lat":34.93252,"lon":135.76056},
    "zh":{"name":"らーめん門扇 伏水酒蔵店","area":"伏见","desc":"位于伏见·伏水酒藏小路内的鸡白汤拉面专门店，招牌酒粕拉面可从八家藏元酒粕中任选，下酒小菜也丰富，午晚皆宜。建议提前预约。","tags":["居酒屋","拉面","预约制"],"hours":"11:00–22:00"},
    "ja":{"name":"らーめん門扇 伏水酒蔵店","area":"伏見","desc":"伏見・伏水酒蔵小路内の鶏がららーめん専門店。国産鶏ガラの白湯スープが自慢で、8蔵元から選べる名物の酒粕らーめんが人気。ご予約をおすすめします。","tags":["居酒屋","ラーメン","要予約"],"hours":"11:00–22:00"},
    "en":{"name":"らーめん門扇 伏水酒蔵店","area":"Fushimi","desc":"Chicken paitan ramen shop inside Fushimi Sakagura Koji — famous for sake-lees ramen with a choice of eight local breweries. Reservations recommended.","tags":["Izakaya","Ramen","Reservations"],"hours":"11:00–22:00"},
    "fromStay":{"higashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"},"gion":{"zh":"电车约29分","en":"~29 min by train","ja":"電車約29分"},"arashiyama":{"zh":"电车约42分","en":"~42 min by train","ja":"電車約42分"}}},

  { "id":"s96","cat":"dining","orderAll":142,"orderCat":142,"rec":false,
    "img":"images/105",
    "storeCoords":{"lat":34.98955,"lon":135.81597},
    "zh":{"name":"串焼き居酒屋 青天家(ハレルヤ)","area":"京都","desc":"位于JR山科站步行约5分的昭和复古串烧居酒屋，牛杂为主的多样串烧与入味的招牌关东煮广受好评，一人小酌或小聚皆宜。建议提前预约。","tags":["居酒屋","预约制"],"hours":"17:00–0:00"},
    "ja":{"name":"串焼き居酒屋 青天家(ハレルヤ)","area":"京都","desc":"JR山科駅徒歩約5分の昭和レトロな串焼き居酒屋。牛モツを中心とした多彩な串焼きと、味の染みた名物おでんが自慢。お一人様でも気軽に楽しめます。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"17:00–0:00"},
    "en":{"name":"串焼き居酒屋 青天家(ハレルヤ)","area":"Kyoto","desc":"Retro Showa-style kushiyaki izakaya near JR Yamashina Station — beef offal skewers and signature oden. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"17:00–0:00"},
    "fromStay":{"higashiyama":{"zh":"电车约17分","en":"~17 min by train","ja":"電車約17分"},"gion":{"zh":"电车约17分","en":"~17 min by train","ja":"電車約17分"},"arashiyama":{"zh":"电车约45分","en":"~45 min by train","ja":"電車約45分"}}},

  { "id":"s97","cat":"whisky","orderAll":143,"orderCat":143,"rec":false,
    "img":"images/106",
    "storeCoords":{"lat":35.00431,"lon":135.77717},
    "zh":{"name":"OldiesLiveHouse Toconuts","area":"东山","desc":"位于东山附近的Live House，复古 live house 酒吧，音乐氛围浓厚。建议提前预约。","tags":["Live House","预约制"],"hours":"依预约时段"},
    "ja":{"name":"OldiesLiveHouse Toconuts","area":"東山","desc":"祇園のライブハウスバー。音楽とお酒を楽しむ。ご予約をおすすめします。","tags":["ライブハウス","要予約"],"hours":"予約制"},
    "en":{"name":"OldiesLiveHouse Toconuts","area":"Higashiyama","desc":"Live house bar in Gion with retro music vibes. Reservations recommended.","tags":["Live house","Reservations"],"hours":"By appointment"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约34分","en":"~34 min by train","ja":"電車約34分"}}},

  { "id":"s98","cat":"whisky","orderAll":144,"orderCat":144,"rec":false,
    "img":"images/107",
    "storeCoords":{"lat":35.00432,"lon":135.77533},
    "zh":{"name":"Lively club dixco (ライブリークラブディスコ)","area":"东山","desc":"位于祇园附近的夜店，夜店风格酒吧，适合热闹夜晚。建议提前预约。","tags":["夜店","预约制"],"hours":"20:00–1:00"},
    "ja":{"name":"Lively club dixco (ライブリークラブディスコ)","area":"東山","desc":"祇園のクラブバー。にぎやかな夜に。ご予約をおすすめします。","tags":["クラブ","要予約"],"hours":"20:00–1:00"},
    "en":{"name":"Lively club dixco (ライブリークラブディスコ)","area":"Higashiyama","desc":"Lively club bar in Gion for a high-energy night. Reservations recommended.","tags":["Club","Reservations"],"hours":"20:00–1:00"},
    "fromStay":{"higashiyama":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"gion":{"zh":"步行约5分","en":"~5 min walk","ja":"徒歩約5分"},"arashiyama":{"zh":"电车约34分","en":"~34 min by train","ja":"電車約34分"}}},

  { "id":"s99","cat":"dining","orderAll":145,"orderCat":145,"rec":false,
    "img":"images/108",
    "storeCoords":{"lat":35.01841,"lon":135.73772},
    "zh":{"name":"韓国焼肉 みゅんみゅん","area":"中京","desc":"位于円町站一带的韩式烤肉店，咖啡馆般的时尚空间，全席配无烟烤炉，参鸡汤、嫩豆腐锅等韩国料理与生马格利酒也丰富。建议提前预约。","tags":["烧肉","韩餐","预约制"],"hours":"11:30–13:30 / 17:30–21:00 / 17:30–21:00"},
    "ja":{"name":"韓国焼肉 みゅんみゅん","area":"中京","desc":"円町駅エリアのカフェのようなお洒落な韓国焼肉店。無煙ロースター完備で、サムゲタンやスンドゥブなど本格韓国料理も豊富。ご予約をおすすめします。","tags":["焼肉","韓国料理","要予約"],"hours":"11:30–13:30 / 17:30–21:00 / 17:30–21:00"},
    "en":{"name":"韓国焼肉 みゅんみゅん","area":"Nakagyo","desc":"Stylish Korean barbecue near Enmachi Station with smokeless grills, samgyetang, sundubu, and fresh makgeolli. Reservations recommended.","tags":["Yakiniku","Korean BBQ","Reservations"],"hours":"11:30–13:30 / 17:30–21:00 / 17:30–21:00"},
    "fromStay":{"higashiyama":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"gion":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"arashiyama":{"zh":"电车约23分","en":"~23 min by train","ja":"電車約23分"}}},

  { "id":"s100","cat":"dining","orderAll":146,"orderCat":146,"rec":false,
    "img":"images/109",
    "storeCoords":{"lat":34.99926,"lon":135.73611},
    "zh":{"name":"焼肉ホルモン シオミ","area":"中京","desc":"位于中京区壬生、西院站步行约10分的烧肉内脏料理店，主打新鲜牛杂与严选和牛部位，设有儿童房，适合亲子与三代同堂聚餐。建议提前预约。","tags":["烧肉","预约制"],"hours":"11:00–22:00"},
    "ja":{"name":"焼肉ホルモン シオミ","area":"中京","desc":"中京区壬生、西院駅徒歩約10分の焼肉ホルモン店。新鮮なホルモンと厳選和牛が自慢。キッズルームがあり、家族連れや三世代の集まりにも人気です。ご予約をおすすめします。","tags":["焼肉","要予約"],"hours":"11:00–22:00"},
    "en":{"name":"焼肉ホルモン シオミ","area":"Nakagyo","desc":"Yakiniku and horumon restaurant in Mibu near Saiin Station — fresh offal, select wagyu, and a kids room for families. Reservations recommended.","tags":["Yakiniku","Reservations"],"hours":"11:00–22:00"},
    "fromStay":{"higashiyama":{"zh":"电车约17分","en":"~17 min by train","ja":"電車約17分"},"gion":{"zh":"电车约16分","en":"~16 min by train","ja":"電車約16分"},"arashiyama":{"zh":"电车约23分","en":"~23 min by train","ja":"電車約23分"}}},

  { "id":"s101","cat":"dining","orderAll":147,"orderCat":147,"rec":false,
    "img":"images/110",
    "storeCoords":{"lat":35.00706,"lon":135.76993},
    "zh":{"name":"焼肉匠 覚王 木屋町亭","area":"河原町","desc":"位于木屋町的完全包间烧肉店，严选和牛配最新无烟烤炉，营业至翌日早晨7点，深夜聚餐或观光后的晚宴皆宜。建议提前预约。","tags":["烧肉","预约制"],"hours":"18:00–7:00"},
    "ja":{"name":"焼肉匠 覚王 木屋町亭","area":"河原町","desc":"木屋町の完全個室焼肉店。厳選和牛と最新の無煙ロースターを備え、18時から翌朝7時まで営業。深夜のお食事にも便利です。ご予約をおすすめします。","tags":["焼肉","要予約"],"hours":"18:00–7:00"},
    "en":{"name":"焼肉匠 覚王 木屋町亭","area":"Kawaramachi","desc":"Private-room wagyu yakiniku in Kiyamachi, open from evening until 7 a.m. with smokeless grills on every table. Reservations recommended.","tags":["Yakiniku","Reservations"],"hours":"18:00–7:00"},
    "fromStay":{"higashiyama":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"gion":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s102","cat":"dining","orderAll":148,"orderCat":148,"rec":false,
    "img":"images/111",
    "storeCoords":{"lat":35.00275,"lon":135.76482},
    "zh":{"name":"ホルモン酒場 あかやしろ榮","area":"四条","desc":"位于四条富小路的烤内脏酒场，坚持使用非冷冻的新鲜牛杂，赤身肉同样讲究，一层为吧台，二层设掘坐式暖桌座敷，宴会聚餐皆宜。建议提前预约。","tags":["居酒屋","烧肉","预约制"],"hours":"17:00–2:00"},
    "ja":{"name":"ホルモン酒場 あかやしろ榮","area":"四条","desc":"四条富小路のホルモン酒場。冷凍不使用の新鮮なホルモンと赤身肉が自慢。1階はカウンター、2階は掘りごたつ座敷で宴会にも対応。ご予約をおすすめします。","tags":["居酒屋","焼肉","要予約"],"hours":"17:00–2:00"},
    "en":{"name":"ホルモン酒場 あかやしろ榮","area":"Shijo","desc":"Horumon yakiniku bar on Tominokoji near Shijo — fresh never-frozen offal and select red meat, with tatami seating upstairs. Reservations recommended.","tags":["Izakaya","Yakiniku","Reservations"],"hours":"17:00–2:00"},
    "fromStay":{"higashiyama":{"zh":"步行约15分","en":"~15 min walk","ja":"徒歩約15分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s103","cat":"whisky","orderAll":149,"orderCat":149,"rec":false,
    "img":"images/112",
    "storeCoords":{"lat":35.00725,"lon":135.76992},
    "zh":{"name":"CAFE and BAR ALL","area":"中京","desc":"位于河原町三条的咖啡，咖啡与鸡尾酒兼具，适合晚间聚会。建议提前预约。","tags":["咖啡","酒吧","预约制"],"hours":"9:00–6:00 / 21:00–6:00"},
    "ja":{"name":"CAFE and BAR ALL","area":"中京","desc":"河原町三条のカフェ＆バー。夜の社交場として人気。ご予約をおすすめします。","tags":["カフェ","バー","要予約"],"hours":"9:00–6:00 / 21:00–6:00"},
    "en":{"name":"CAFE and BAR ALL","area":"Nakagyo","desc":"Cafe & bar at Kawaramachi-Sanjo — cocktails and night-out atmosphere. Reservations recommended.","tags":["Cafe","Bar","Reservations"],"hours":"9:00–6:00 / 21:00–6:00"},
    "fromStay":{"higashiyama":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"gion":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s104","cat":"dining","orderAll":150,"orderCat":150,"rec":false,
    "img":"images/113",
    "storeCoords":{"lat":35.00232,"lon":135.75717},
    "zh":{"name":"北風と太陽 Kitchen & Wine","area":"下京","desc":"位于下京区室町、地铁四条站步行约3分的餐酒馆，供应意法西风格料理，葡萄酒种类丰富，设有包间，午市套餐同样超值。建议提前预约。","tags":["居酒屋","预约制"],"hours":"11:30–23:30 / 15:00–23:30"},
    "ja":{"name":"北風と太陽 Kitchen & Wine","area":"下京","desc":"下京・室町、四条駅徒歩約3分のダイニングバー。イタリアンやフレンチを軸にワインが充実。個室ありでランチコースも人気です。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"11:30–23:30 / 15:00–23:30"},
    "en":{"name":"北風と太陽 Kitchen & Wine","area":"Shimogyo","desc":"Wine-focused dining bar near Shijo Station in Muromachi, serving Italian and French inspired plates with private rooms. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"11:30–23:30 / 15:00–23:30"},
    "fromStay":{"higashiyama":{"zh":"电车约11分","en":"~11 min by train","ja":"電車約11分"},"gion":{"zh":"步行约20分","en":"~20 min walk","ja":"徒歩約20分"},"arashiyama":{"zh":"电车约28分","en":"~28 min by train","ja":"電車約28分"}}},

  { "id":"s105","cat":"whisky","orderAll":151,"orderCat":151,"rec":false,
    "img":"images/114",
    "storeCoords":{"lat":35.00519,"lon":135.76213},
    "zh":{"name":"MIX karasuma","area":"四条","desc":"位于锦市场的酒吧，鸡尾酒与酒吧氛围，适合夜间聚会。建议提前预约。","tags":["酒吧","预约制"],"hours":"依预约时段"},
    "ja":{"name":"MIX karasuma","area":"四条","desc":"錦小路のバー。カクテルとナイトライフ。ご予約をおすすめします。","tags":["バー","要予約"],"hours":"予約制"},
    "en":{"name":"MIX karasuma","area":"Shijo","desc":"Cocktail bar near Nishiki — nightlife friendly. Reservations recommended.","tags":["Bar","Reservations"],"hours":"By appointment"},
    "fromStay":{"higashiyama":{"zh":"步行约22分","en":"~22 min walk","ja":"徒歩約22分"},"gion":{"zh":"步行约16分","en":"~16 min walk","ja":"徒歩約16分"},"arashiyama":{"zh":"电车约29分","en":"~29 min by train","ja":"電車約29分"}}},

  { "id":"s106","cat":"dining","orderAll":152,"orderCat":152,"rec":false,
    "img":"images/115",
    "storeCoords":{"lat":35.00452,"lon":135.76640},
    "zh":{"name":"黒毛和牛京焼肉 焼肉リン 御幸町店","area":"四条","desc":"位于四条河原町·御幸町通的京町家烧肉店，黑毛和牛整头采购、性价比出色，招牌葱盐牛舌不容错过，备有包间。建议提前预约。","tags":["烧肉","预约制"],"hours":"17:00–23:30 / 16:00–23:30"},
    "ja":{"name":"黒毛和牛京焼肉 焼肉リン 御幸町店","area":"四条","desc":"四条河原町・御幸町通の京町家を改装した焼肉店。黒毛和牛を一頭買いし、名物のネギ塩タンが人気。個室も完備しています。ご予約をおすすめします。","tags":["焼肉","要予約"],"hours":"17:00–23:30 / 16:00–23:30"},
    "en":{"name":"黒毛和牛京焼肉 焼肉リン 御幸町店","area":"Shijo","desc":"Kyoto machiya-style yakiniku on Gokomachi near Kawaramachi — whole-bought kuroge wagyu and signature negi-shio beef tongue. Reservations recommended.","tags":["Yakiniku","Reservations"],"hours":"17:00–23:30 / 16:00–23:30"},
    "fromStay":{"higashiyama":{"zh":"电车约11分","en":"~11 min by train","ja":"電車約11分"},"gion":{"zh":"步行约20分","en":"~20 min walk","ja":"徒歩約20分"},"arashiyama":{"zh":"电车约28分","en":"~28 min by train","ja":"電車約28分"}}},

  { "id":"s107","cat":"whisky","orderAll":153,"orderCat":153,"rec":false,
    "img":"images/116",
    "storeCoords":{"lat":35.00655,"lon":135.76936},
    "zh":{"name":"昭和風バー・レトロ","area":"中京","desc":"位于河原町三条的酒吧，昭和风复古酒吧，怀旧氛围十足。建议提前预约。","tags":["酒吧","预约制"],"hours":"19:00–5:00"},
    "ja":{"name":"昭和風バー・レトロ","area":"中京","desc":"昭和風レトロバー。懐かしい雰囲気でカクテルを。ご予約をおすすめします。","tags":["バー","要予約"],"hours":"19:00–5:00"},
    "en":{"name":"昭和風バー・レトロ","area":"Nakagyo","desc":"Showa-retro bar at Kawaramachi-Sanjo — nostalgic vibes and cocktails. Reservations recommended.","tags":["Bar","Reservations"],"hours":"19:00–5:00"},
    "fromStay":{"higashiyama":{"zh":"步行约11分","en":"~11 min walk","ja":"徒歩約11分"},"gion":{"zh":"步行约8分","en":"~8 min walk","ja":"徒歩約8分"},"arashiyama":{"zh":"电车约31分","en":"~31 min by train","ja":"電車約31分"}}},

  { "id":"s108","cat":"dining","orderAll":154,"orderCat":154,"rec":false,
    "img":"images/117",
    "storeCoords":{"lat":35.00724,"lon":135.76137},
    "zh":{"name":"加夢居","area":"中京","desc":"位于六角通东洞院的鲜鱼居酒屋，每日采购伊势直送鲜鱼，滋贺地酒为主的日本酒丰富，大将与女将热情招待，一人小酌亦宜。建议提前预约。","tags":["居酒屋","预约制"],"hours":"17:30–23:00"},
    "ja":{"name":"加夢居","area":"中京","desc":"六角通東洞院の鮮魚居酒屋。伊勢直送の魚介と滋賀を中心とした豊富な日本酒が自慢。気さくな大将と女将が迎えるカウンター席も人気。ご予約をおすすめします。","tags":["居酒屋","要予約"],"hours":"17:30–23:00"},
    "en":{"name":"加夢居","area":"Nakagyo","desc":"Seafood izakaya on Rokkaku-dori near Karasuma Oike — fresh fish from Ise and a rich sake selection from Shiga. Reservations recommended.","tags":["Izakaya","Reservations"],"hours":"17:30–23:00"},
    "fromStay":{"higashiyama":{"zh":"电车约11分","en":"~11 min by train","ja":"電車約11分"},"gion":{"zh":"步行约22分","en":"~22 min walk","ja":"徒歩約22分"},"arashiyama":{"zh":"电车约28分","en":"~28 min by train","ja":"電車約28分"}}},

  { "id":"s109","cat":"dining","orderAll":155,"orderCat":155,"rec":false,
    "img":"images/118",
    "storeCoords":{"lat":35.00558,"lon":135.77288},
    "zh":{"name":"らーめん門扇祇園","area":"祇园","desc":"位于祇园绳手通、祇园四条站步行约5分的拉面店，源自烧鸟店的鸡骨汤广受好评，深夜营业至凌晨5点，适合宵夜收尾。建议提前预约。","tags":["拉面","预约制"],"hours":"17:00–5:00"},
    "ja":{"name":"らーめん門扇祇園","area":"祇園","desc":"祇園・縄手通のラーメン店。焼き鳥店発祥の鶏がらスープが評判で、深夜5時まで営業しており〆の一杯にぴったり。ご予約をおすすめします。","tags":["ラーメン","要予約"],"hours":"17:00–5:00"},
    "en":{"name":"らーめん門扇祇園","area":"Gion","desc":"Late-night chicken broth ramen shop on Nawate-dori in Gion, open until 5 a.m. — perfect for a final bowl. Reservations recommended.","tags":["Ramen","Reservations"],"hours":"17:00–5:00"},
    "fromStay":{"higashiyama":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"gion":{"zh":"步行约3分","en":"~3 min walk","ja":"徒歩約3分"},"arashiyama":{"zh":"电车约32分","en":"~32 min by train","ja":"電車約32分"}}},


    /* ── 大阪合作门店（booking-cs，编号图片见 门店图片对照表.txt 1～118）── */,
  {
    "id": "o54",
    "cat": "dining",
    "orderAll": 48,
    "orderCat": 48,
    "rec": false,
    "img": "images/1",
    "storeCoords": { "lat": 34.6702614, "lon": 135.4939096 },
    "zh": {
      "name": "お好み・鉄板焼 KONOMU 南堀江店",
      "area": "南堀江",
      "desc": "位于大阪南堀江的大阪烧与铁板烧居酒屋，除经典大阪烧外还有原创KONOMU烧和炒面，设吧台与暖桌式座位，距JR难波站步行约5分钟，适合聚会与约会。建议提前预约。",
      "tags": [ "大阪", "大阪烧", "铁板烧" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "お好み・鉄板焼 KONOMU 南堀江店",
      "area": "南堀江",
      "desc": "Okonomiyaki and teppanyaki izakaya in Minamihorie, Osaka — signature KONOMU-yaki, counter and sunken-table seating, about five minutes from JR Namba. Reservations recommended.",
      "tags": [ "Osaka", "Okonomiyaki", "Teppanyaki" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "お好み・鉄板焼 KONOMU 南堀江店",
      "area": "南堀江",
      "desc": "南堀江のお好み焼き・鉄板焼き店。定番のお好み焼きや名物KONOMU焼が楽しめ、カウンターと掘りごたつ席を完備。JR難波駅から徒歩約5分。ご予約をおすすめします。",
      "tags": [ "大阪", "お好み焼き", "鉄板焼き" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约161分", "en": "~161 min by train", "ja": "電車約161分" },
      "gion": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" },
      "higashiyama": { "zh": "电车约176分", "en": "~176 min by train", "ja": "電車約176分" }
    }
  }
,
  {
    "id": "o55",
    "cat": "whisky",
    "orderAll": 49,
    "orderCat": 49,
    "rec": false,
    "img": "images/2",
    "storeCoords": { "lat": 34.6647549, "lon": 135.4987477 },
    "zh": {
      "name": "7days FRUITS CAFE by ALLY'S",
      "area": "なんば",
      "desc": "位于大阪难波的水果主题咖啡馆，新鲜水果甜品与轻食选择丰富，适合午后休憩。建议提前预约。",
      "tags": [ "大阪", "水果Cafe", "Cafe" ],
      "hours": "10:00–17:00（料理 L.O.16:00 / 饮品 L.O.16:30）"
    },
    "en": {
      "name": "7days FRUITS CAFE by ALLY'S",
      "area": "Namba",
      "desc": "Fruit-themed café in Namba with fresh fruit desserts and light meals — perfect for an afternoon break. Reservations recommended.",
      "tags": [ "Osaka", "Fruit cafe", "Cafe" ],
      "hours": "10:00–17:00 (food L.O. 16:00 / drinks L.O. 16:30)"
    },
    "ja": {
      "name": "7days FRUITS CAFE by ALLY'S",
      "area": "難波",
      "desc": "大阪・難波のフルーツカフェ。フレッシュなフルーツスイーツと軽食が楽しめる。ご予約をおすすめします。",
      "tags": [ "大阪", "フルーツカフェ", "カフェ" ],
      "hours": "10:00–17:00（料理L.O.16:00 / ドリンクL.O.16:30）"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "gion": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" },
      "higashiyama": { "zh": "电车约178分", "en": "~178 min by train", "ja": "電車約178分" }
    }
  }
,
  {
    "id": "o56",
    "cat": "dining",
    "orderAll": 50,
    "orderCat": 50,
    "rec": false,
    "img": "images/3",
    "storeCoords": { "lat": 34.6488273, "lon": 135.5095984 },
    "zh": {
      "name": "ファームビュッフェ mothers てんしば店",
      "area": "天王寺・てんしば",
      "desc": "位于大阪天王寺てんしば公园内的农场自助餐厅，签约农家直送鲜蔬与现烤佛卡夏任食，主菜可选，露台可携宠物，距天王寺站步行约5分钟，适合家庭聚会。建议提前预约。",
      "tags": [ "大阪", "自助", "自助餐" ],
      "hours": "11:00–16:00 / 17:00–22:00"
    },
    "en": {
      "name": "ファームビュッフェ mothers てんしば店",
      "area": "天王寺・てんしば",
      "desc": "Farm buffet restaurant inside Tenshiba park by Tennoji Station, Osaka — fresh farm vegetables and baked focaccia buffet, pet-friendly terrace. Reservations recommended.",
      "tags": [ "Osaka", "自助", "Buffet" ],
      "hours": "11:00–16:00 / 17:00–22:00"
    },
    "ja": {
      "name": "ファームビュッフェ mothers てんしば店",
      "area": "天王寺・てんしば",
      "desc": "てんしば公園内のファームビュッフェレストラン。契約農家直送の新鮮野菜と焼きたてフォカッチャが食べ放題。テラス席はペット同伴可。天王寺駅徒歩約5分。ご予約をおすすめします。",
      "tags": [ "大阪", "自助", "ビュッフェ" ],
      "hours": "11:00–16:00 / 17:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约168分", "en": "~168 min by train", "ja": "電車約168分" },
      "gion": { "zh": "电车约178分", "en": "~178 min by train", "ja": "電車約178分" },
      "higashiyama": { "zh": "电车约181分", "en": "~181 min by train", "ja": "電車約181分" }
    }
  }
,
  {
    "id": "o57",
    "cat": "dining",
    "orderAll": 51,
    "orderCat": 51,
    "rec": false,
    "img": "images/4",
    "storeCoords": { "lat": 34.6978193, "lon": 135.4857416 },
    "zh": {
      "name": "けとばし屋チャンピオン 福島本店",
      "area": "福島",
      "desc": "位于大阪福島的马肉料理专门店，熊本直送的马肉刺身与马肉烧肉是招牌，生马肝亦有人气，营业至深夜，距JR福島站步行约3分钟。建议提前预约。",
      "tags": [ "大阪", "马肉", "预约制" ],
      "hours": "17:00–0:00 / 16:00–0:00"
    },
    "en": {
      "name": "けとばし屋チャンピオン 福島本店",
      "area": "福島",
      "desc": "Horse meat specialist in Fukushima, Osaka — fresh Kumamoto-sourced basashi and horse yakiniku, open till midnight, three minutes from JR Fukushima Station. Reservations recommended.",
      "tags": [ "Osaka", "Horse meat", "Reservations" ],
      "hours": "17:00–0:00 / 16:00–0:00"
    },
    "ja": {
      "name": "けとばし屋チャンピオン 福島本店",
      "area": "福島",
      "desc": "福島駅徒歩約3分の馬肉料理専門店。熊本直送の新鮮な馬刺しや馬焼肉が名物で、深夜0時まで営業。ご予約をおすすめします。",
      "tags": [ "大阪", "馬肉", "要予約" ],
      "hours": "17:00–0:00 / 16:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约152分", "en": "~152 min by train", "ja": "電車約152分" },
      "gion": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" },
      "higashiyama": { "zh": "电车约169分", "en": "~169 min by train", "ja": "電車約169分" }
    }
  }
,
  {
    "id": "o58",
    "cat": "dining",
    "orderAll": 52,
    "orderCat": 52,
    "rec": false,
    "img": "images/5",
    "storeCoords": { "lat": 34.7072420, "lon": 135.5131679 },
    "zh": {
      "name": "海老炉端 orb 裏天満ちょうちん通り店",
      "area": "裏天満",
      "desc": "位于大阪裏天満ちょうちん通り的海虾炉端烧居酒屋，店内可体验活虾垂钓、现钓现烤，二楼沙发半包间可容纳4至25人，距JR天満站步行约5分钟。建议提前预约。",
      "tags": [ "大阪", "海老炉端", "海老料理" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "海老炉端 orb 裏天満ちょうちん通り店",
      "area": "裏天満",
      "desc": "Shrimp robata izakaya on Uratenma lantern street, Osaka — live shrimp fishing in-store, semi-private second floor for up to 25 guests. Reservations recommended.",
      "tags": [ "Osaka", "海老炉端", "Shrimp cuisine" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "海老炉端 orb 裏天満ちょうちん通り店",
      "area": "裏天満",
      "desc": "JR天満駅徒歩約5分、裏天満ちょうちん通りの海老炉端居酒屋。店内で活海老釣りが楽しめ、2階の半個室ソファ席は4名から25名まで利用可能。ご予約をおすすめします。",
      "tags": [ "大阪", "海老炉端", "海老料理" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约145分", "en": "~145 min by train", "ja": "電車約145分" },
      "gion": { "zh": "电车约157分", "en": "~157 min by train", "ja": "電車約157分" },
      "higashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" }
    }
  }
,
  {
    "id": "o59",
    "cat": "whisky",
    "orderAll": 53,
    "orderCat": 53,
    "rec": false,
    "img": "images/6",
    "storeCoords": { "lat": 34.6596049, "lon": 135.5025352 },
    "zh": {
      "name": "ALLY's PASTA SHOP NAMBA",
      "area": "なんば",
      "desc": "位于大阪なんば的意面专门店，手工意面与西式小食口碑良好，适合午餐或轻晚餐。建议提前预约。",
      "tags": [ "大阪", "意面", "预约制" ],
      "hours": "11:30–16:00 / 11:30–15:30"
    },
    "en": {
      "name": "ALLY's PASTA SHOP NAMBA",
      "area": "なんば",
      "desc": "Handmade pasta shop ideal for lunch or a casual dinner. Reservations recommended.",
      "tags": [ "Osaka", "Pasta", "Reservations" ],
      "hours": "11:30–16:00 / 11:30–15:30"
    },
    "ja": {
      "name": "ALLY's PASTA SHOP NAMBA",
      "area": "なんば",
      "desc": "手作りパスタが評判のイタリアン。ご予約をおすすめします。",
      "tags": [ "大阪", "パスタ", "要予約" ],
      "hours": "11:30–16:00 / 11:30–15:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约165分", "en": "~165 min by train", "ja": "電車約165分" },
      "gion": { "zh": "电车约176分", "en": "~176 min by train", "ja": "電車約176分" },
      "higashiyama": { "zh": "电车约179分", "en": "~179 min by train", "ja": "電車約179分" }
    }
  }
,
  {
    "id": "o60",
    "cat": "dining",
    "orderAll": 54,
    "orderCat": 54,
    "rec": false,
    "img": "images/7",
    "storeCoords": { "lat": 34.6989342, "lon": 135.4979539 },
    "zh": {
      "name": "元祖Mr.鶏っく",
      "area": "梅田・大阪駅前ビル",
      "desc": "位于大阪梅田大阪駅前第二大厦地下的烤鸡串居酒屋，招牌是大山鸡串烧与鸡白汤火锅套餐，多数酒水500日元以下，距北新地站步行约3分钟。建议提前预约。",
      "tags": [ "大阪", "鸡料理", "预约制" ],
      "hours": "14:00–22:30"
    },
    "en": {
      "name": "元祖Mr.鶏っく",
      "area": "梅田・大阪駅前ビル",
      "desc": "Yakitori izakaya in Osaka Ekimae Building 2 near Umeda, Osaka — Daisen chicken skewers, chicken paitan hot pot courses, budget-friendly drinks. Reservations recommended.",
      "tags": [ "Osaka", "Chicken", "Reservations" ],
      "hours": "14:00–22:30"
    },
    "ja": {
      "name": "元祖Mr.鶏っく",
      "area": "梅田・大阪駅前ビル",
      "desc": "大阪駅前第二ビル地下1階の焼鳥居酒屋。大山がいなどりの焼鳥と鶏白湯スープ鍋のコースが名物で、飲み放題付きコースもお手頃。北新地駅徒歩約3分。ご予約をおすすめします。",
      "tags": [ "大阪", "鶏料理", "要予約" ],
      "hours": "14:00–22:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "higashiyama": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" }
    }
  }
,
  {
    "id": "o61",
    "cat": "dining",
    "orderAll": 55,
    "orderCat": 55,
    "rec": false,
    "img": "images/8",
    "storeCoords": { "lat": 34.6663931, "lon": 135.5150714 },
    "zh": {
      "name": "焼肉ガッツ谷町九丁目本店",
      "area": "谷町九丁目・生玉",
      "desc": "位于大阪谷町九丁目站旁的烧肉店，主打A5级和牛菲力、上等里脊与横膈膜等高性价比烧肉，营业至深夜，出地铁站步行约30秒即达。建议提前预约。",
      "tags": [ "大阪", "烧肉", "预约制" ],
      "hours": "17:00–2:00 / 18:00–2:00"
    },
    "en": {
      "name": "焼肉ガッツ谷町九丁目本店",
      "area": "谷町九丁目・生玉",
      "desc": "Yakiniku restaurant steps from Tanimachi 9-chome Station, Osaka — A5 wagyu fillet and harami at reasonable prices, open late. Reservations recommended.",
      "tags": [ "Osaka", "Yakiniku", "Reservations" ],
      "hours": "17:00–2:00 / 18:00–2:00"
    },
    "ja": {
      "name": "焼肉ガッツ谷町九丁目本店",
      "area": "谷町九丁目・生玉",
      "desc": "谷町九丁目駅徒歩約30秒の焼肉店。A5等級の和牛ヘレやハラミなど上質な肉を手頃な価格で楽しめ、深夜まで営業。ご予約をおすすめします。",
      "tags": [ "大阪", "焼肉", "要予約" ],
      "hours": "17:00–2:00 / 18:00–2:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  }
,
  {
    "id": "o62",
    "cat": "dining",
    "orderAll": 56,
    "orderCat": 56,
    "rec": false,
    "img": "images/9",
    "storeCoords": { "lat": 34.6633790, "lon": 135.5048530 },
    "zh": {
      "name": "和牛と中華料理 けむり屋&フラワー 大阪なんば本店",
      "area": "なんば・千日前",
      "desc": "位于大阪难波千日前的和牛与正宗粤川中华餐厅，招牌有蛋黄酱虾球、担担面、香港式手工水饺与火锅，宴会最多可容纳85人，距南海难波站步行约5分钟。建议提前预约。",
      "tags": [ "大阪", "和牛", "中华料理" ],
      "hours": "15:00–23:30 / 17:00–23:30"
    },
    "en": {
      "name": "和牛と中華料理 けむり屋&フラワー 大阪なんば本店",
      "area": "なんば・千日前",
      "desc": "Wagyu and Cantonese-Sichuan Chinese dining in Namba Sennichimae, Osaka — shrimp mayo, dan dan noodles, hot pot; banquets up to 85 guests. Reservations recommended.",
      "tags": [ "Osaka", "Wagyu", "Chinese" ],
      "hours": "15:00–23:30 / 17:00–23:30"
    },
    "ja": {
      "name": "和牛と中華料理 けむり屋&フラワー 大阪なんば本店",
      "area": "なんば・千日前",
      "desc": "なんば千日前の路地裏にある和牛と本格広東・四川中華の店。名物は海老マヨや特製坦々麺、香港風手作り水餃子で、最大85名までの宴会や貸切にも対応。ご予約をおすすめします。",
      "tags": [ "大阪", "和牛", "中華料理" ],
      "hours": "15:00–23:30 / 17:00–23:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "gion": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" },
      "higashiyama": { "zh": "电车约177分", "en": "~177 min by train", "ja": "電車約177分" }
    }
  }
,
  {
    "id": "o63",
    "cat": "dining",
    "orderAll": 57,
    "orderCat": 57,
    "rec": false,
    "img": "images/10",
    "storeCoords": { "lat": 34.6960982, "lon": 135.4864275 },
    "zh": {
      "name": "一切れ(元立食)焼肉一穂 福島店/福島店個室",
      "area": "福島",
      "desc": "位于大阪福島的单片起点烧肉店，前身为立食烧肉，A5和牛与十五种内脏均可按一片起下单，设12席吧台，一人食友好，距JR福島站步行约3分钟。建议提前预约。",
      "tags": [ "大阪", "烧肉", "预约制" ],
      "hours": "17:00–0:30"
    },
    "en": {
      "name": "一切れ(元立食)焼肉一穂 福島店/福島店個室",
      "area": "福島",
      "desc": "Yakiniku bar in Fukushima, Osaka — order A5 wagyu and offal by the single slice, twelve counter seats, solo diners welcome. Reservations recommended.",
      "tags": [ "Osaka", "Yakiniku", "Reservations" ],
      "hours": "17:00–0:30"
    },
    "ja": {
      "name": "一切れ(元立食)焼肉一穂 福島店/福島店個室",
      "area": "福島",
      "desc": "福島駅徒歩約3分の焼肉店。旧立食焼肉スタイルから改装し、A5ランク和牛や15種のホルモンを一切れから注文可能。カウンター12席でお一人様も歓迎。ご予約をおすすめします。",
      "tags": [ "大阪", "焼肉", "要予約" ],
      "hours": "17:00–0:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o64",
    "cat": "dining",
    "orderAll": 58,
    "orderCat": 58,
    "rec": false,
    "img": "images/11",
    "storeCoords": { "lat": 34.6969489, "lon": 135.5034522 },
    "zh": {
      "name": "本格スパイスカレー ヤドカリー NO2西天満店",
      "area": "西天満・梅田",
      "desc": "位于大阪西天満的香料咖喱专门店，以13种香料与国产黑毛和牛牛筋、牛脂熬制的咖喱酱闻名，仅平日午市营业、售完即止，距北新地站步行约5分钟。建议趁早前往。",
      "tags": [ "大阪", "咖喱", "香辛料" ],
      "hours": "11:30–15:00"
    },
    "en": {
      "name": "本格スパイスカレー ヤドカリー NO2西天満店",
      "area": "西天満・梅田",
      "desc": "Spice curry specialist in Nishitemma, Osaka — thirteen-spice roux made with wagyu beef fat, weekday lunch only until sold out. Arrive early.",
      "tags": [ "Osaka", "Curry", "Spice izakaya" ],
      "hours": "11:30–15:00"
    },
    "ja": {
      "name": "本格スパイスカレー ヤドカリー NO2西天満店",
      "area": "西天満・梅田",
      "desc": "西天満のスパイスカレー専門店。13種のスパイスと国産黒毛和牛の牛脂を使ったルウが自慢。平日昼のみ営業で売り切れ次第終了のため、お早めのご来店をおすすめします。",
      "tags": [ "大阪", "カレー", "スパイス" ],
      "hours": "11:30–15:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "higashiyama": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" }
    }
  }
,
  {
    "id": "o65",
    "cat": "dining",
    "orderAll": 59,
    "orderCat": 59,
    "rec": false,
    "img": "images/12",
    "storeCoords": { "lat": 34.6988712, "lon": 135.5015241 },
    "zh": {
      "name": "中華ダイニング 食べ飲み放題 けむり屋＆FLOWER お初天神店",
      "area": "お初天神・梅田",
      "desc": "位于大阪梅田お初天神的中华畅吃畅饮餐厅，麻婆豆腐、小笼包等50种以上菜品任点任食，宴会最多容纳40人，全席可吸烟，未满20岁谢绝入店。建议提前预约。",
      "tags": [ "大阪", "中華", "中华料理" ],
      "hours": "12:00–14:30 / 17:30–23:30"
    },
    "en": {
      "name": "中華ダイニング 食べ飲み放題 けむり屋＆FLOWER お初天神店",
      "area": "お初天神・梅田",
      "desc": "All-you-can-eat-and-drink Chinese restaurant near Ohatsu Tenjin, Umeda, Osaka — over 50 dishes, parties up to 40, smoking allowed, adults only. Reservations recommended.",
      "tags": [ "Osaka", "中華", "Chinese" ],
      "hours": "12:00–14:30 / 17:30–23:30"
    },
    "ja": {
      "name": "中華ダイニング 食べ飲み放題 けむり屋＆FLOWER お初天神店",
      "area": "お初天神・梅田",
      "desc": "お初天神近くの中華ダイニング。小籠包や麻婆豆腐など50種以上の本格中華が食べ飲み放題で、宴会は最大40名まで対応、全席喫煙可（20歳未満入店不可）。ご予約をおすすめします。",
      "tags": [ "大阪", "中華", "中華料理" ],
      "hours": "12:00–14:30 / 17:30–23:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约162分", "en": "~162 min by train", "ja": "電車約162分" },
      "higashiyama": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" }
    }
  }
,
  {
    "id": "o66",
    "cat": "dining",
    "orderAll": 60,
    "orderCat": 60,
    "rec": false,
    "img": "images/13",
    "storeCoords": { "lat": 34.6641082, "lon": 135.5027116 },
    "zh": {
      "name": "けむり屋＆フラワー なんば２号店",
      "area": "なんば・千日前",
      "desc": "位于大阪难波千日前的中华居酒屋，主打广东、四川风味与黑毛和牛料理，虾球美乃滋、担担面人气高，设畅吃畅饮套餐，适合聚会宴请。建议提前预约。",
      "tags": [ "大阪", "中華", "中华料理" ],
      "hours": "17:00–0:00 / 15:00–0:00"
    },
    "en": {
      "name": "けむり屋＆フラワー なんば２号店",
      "area": "なんば・千日前",
      "desc": "Cantonese and Sichuan izakaya near Namba Station in Osaka — wagyu dishes, signature shrimp mayo and tantanmen, with all-you-can-eat-and-drink plans. Reservations recommended.",
      "tags": [ "Osaka", "中華", "Chinese" ],
      "hours": "17:00–0:00 / 15:00–0:00"
    },
    "ja": {
      "name": "けむり屋＆フラワー なんば２号店",
      "area": "なんば・千日前",
      "desc": "南海なんば駅近くの本格中華居酒屋。広東・四川料理と黒毛和牛を楽しめ、海老マヨや坦々麺が名物。食べ飲み放題コースもあり宴会にも好評です。ご予約をおすすめします。",
      "tags": [ "大阪", "中華", "中華料理" ],
      "hours": "17:00–0:00 / 15:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "gion": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" },
      "higashiyama": { "zh": "电车约177分", "en": "~177 min by train", "ja": "電車約177分" }
    }
  }
,
  {
    "id": "o67",
    "cat": "dining",
    "orderAll": 61,
    "orderCat": 61,
    "rec": false,
    "img": "images/14",
    "storeCoords": { "lat": 34.7206980, "lon": 135.4832443 },
    "zh": {
      "name": "魚と地酒居酒屋 かさ家 十三店",
      "area": "十三",
      "desc": "位于大阪十三的鲜鱼与日本酒居酒屋，十三站步行约2分，鲜鱼刺身与常备约20种日本酒是招牌，兼有铁板料理，二楼座敷可包场聚会。建议提前预约。",
      "tags": [ "大阪", "地酒", "鱼料理" ],
      "hours": "17:00–0:30"
    },
    "en": {
      "name": "魚と地酒居酒屋 かさ家 十三店",
      "area": "十三",
      "desc": "Izakaya near Juso Station, Osaka — fresh sashimi, teppan dishes and about 20 kinds of sake; tatami floor available for private parties. Reservations recommended.",
      "tags": [ "Osaka", "Local sake", "Seafood" ],
      "hours": "17:00–0:30"
    },
    "ja": {
      "name": "魚と地酒居酒屋 かさ家 十三店",
      "area": "十三",
      "desc": "十三駅徒歩2分の魚と日本酒の居酒屋。新鮮なお造りや鉄板料理と、常時20種ほどの日本酒が楽しめます。2階座敷は貸切も可能です。ご予約をおすすめします。",
      "tags": [ "大阪", "地酒", "魚料理" ],
      "hours": "17:00–0:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约144分", "en": "~144 min by train", "ja": "電車約144分" },
      "gion": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "higashiyama": { "zh": "电车约162分", "en": "~162 min by train", "ja": "電車約162分" }
    }
  }
,
  {
    "id": "o68",
    "cat": "dining",
    "orderAll": 62,
    "orderCat": 62,
    "rec": false,
    "img": "images/15",
    "storeCoords": { "lat": 34.6984879, "lon": 135.4979770 },
    "zh": {
      "name": "立食(一切れ)焼肉 一穂 第ニビル店",
      "area": "梅田・大阪駅前",
      "desc": "位于大阪梅田大阪駅前第2大楼的立食烧肉店，北新地站步行约1分，A4、A5级黑毛和牛与内脏烧肉可一片起点，独自用餐也轻松自在。建议提前预约。",
      "tags": [ "大阪", "立食烧肉", "烧肉" ],
      "hours": "15:00–23:30 / 11:30–23:30"
    },
    "en": {
      "name": "立食(一切れ)焼肉 一穂 第ニビル店",
      "area": "梅田・大阪駅前",
      "desc": "Standing yakiniku bar in the Osaka Ekimae Dai-2 Building near Kitashinchi Station — premium A4-A5 wagyu ordered one slice at a time. Reservations recommended.",
      "tags": [ "Osaka", "立食烧肉", "Yakiniku" ],
      "hours": "15:00–23:30 / 11:30–23:30"
    },
    "ja": {
      "name": "立食(一切れ)焼肉 一穂 第ニビル店",
      "area": "梅田・大阪駅前",
      "desc": "大阪駅前第2ビル地下1階、北新地駅すぐの立ち食い焼肉店。A4・A5の黒毛和牛やホルモンを一切れから注文でき、お一人様でも気軽に楽しめます。ご予約をおすすめします。",
      "tags": [ "大阪", "立食烧肉", "焼肉" ],
      "hours": "15:00–23:30 / 11:30–23:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "higashiyama": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" }
    }
  }
,
  {
    "id": "o69",
    "cat": "dining",
    "orderAll": 63,
    "orderCat": 63,
    "rec": false,
    "img": "images/16",
    "storeCoords": { "lat": 34.6960413, "lon": 135.4841172 },
    "zh": {
      "name": "シェフの居酒屋魚タリアン",
      "area": "福島",
      "desc": "位于大阪福島的创作居酒屋，JR福島站步行约3分，专业主厨掌勺，鲜鱼料理与配六种特制酱汁的创作串炸是招牌，和洋融合风味独特。建议提前预约。",
      "tags": [ "大阪", "鱼料理", "居酒屋" ],
      "hours": "17:00–23:00"
    },
    "en": {
      "name": "シェフの居酒屋魚タリアン",
      "area": "福島",
      "desc": "Chef-driven izakaya near JR Fukushima Station, Osaka — fresh seafood dishes and creative kushikatsu served with six original sauces. Reservations recommended.",
      "tags": [ "Osaka", "Seafood", "Izakaya" ],
      "hours": "17:00–23:00"
    },
    "ja": {
      "name": "シェフの居酒屋魚タリアン",
      "area": "福島",
      "desc": "JR福島駅徒歩3分のシェフの居酒屋。新鮮な魚料理と6種のソースで味わう創作串カツが名物で、和と洋を融合した独創的なメニューが揃います。ご予約をおすすめします。",
      "tags": [ "大阪", "魚料理", "居酒屋" ],
      "hours": "17:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o70",
    "cat": "dining",
    "orderAll": 64,
    "orderCat": 64,
    "rec": false,
    "img": "images/17",
    "storeCoords": { "lat": 34.6973707, "lon": 135.4850485 },
    "zh": {
      "name": "ビストリア魚タリアン",
      "area": "福島",
      "desc": "位于大阪福島的海鲜意式小酒馆，JR福島站步行约2分，专业主厨以新鲜鱼介烹制意式与法式菜肴，备有含畅饮的套餐，轻松享用专业水准。建议提前预约。",
      "tags": [ "大阪", "鱼料理", "预约制" ],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "en": {
      "name": "ビストリア魚タリアン",
      "area": "福島",
      "desc": "Casual seafood Italian bistro near JR Fukushima Station, Osaka — chef-made fish dishes and pasta with free-flow drink plans. Reservations recommended.",
      "tags": [ "Osaka", "Seafood", "Reservations" ],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "ja": {
      "name": "ビストリア魚タリアン",
      "area": "福島",
      "desc": "JR福島駅徒歩2分のカジュアルな魚介イタリアン。イタリアンとビストロの専門シェフによる海鮮料理を、飲み放題付きプランでも気軽に楽しめます。ご予約をおすすめします。",
      "tags": [ "大阪", "魚料理", "要予約" ],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o71",
    "cat": "dining",
    "orderAll": 65,
    "orderCat": 65,
    "rec": false,
    "img": "images/18",
    "storeCoords": { "lat": 34.6973403, "lon": 135.4851053 },
    "zh": {
      "name": "魚China Yo",
      "area": "福島",
      "desc": "位于大阪福島的海鲜广东中餐厅，JR福島站步行约2分，连续多年入选米其林必比登推介，招牌是不用肉的海鲜麻婆豆腐，鲜味十足。建议提前预约。",
      "tags": [ "大阪", "海鲜", "中华料理" ],
      "hours": "17:00–22:00"
    },
    "en": {
      "name": "魚China Yo",
      "area": "福島",
      "desc": "Seafood-focused Cantonese restaurant near JR Fukushima Station, Osaka — Michelin Bib Gourmand listed, famous for its seafood mapo tofu. Reservations recommended.",
      "tags": [ "Osaka", "海鲜", "Chinese" ],
      "hours": "17:00–22:00"
    },
    "ja": {
      "name": "魚China Yo",
      "area": "福島",
      "desc": "JR福島駅徒歩2分、魚介特化の広東中華。ミシュラン・ビブグルマンに連続掲載され、名物の魚介の麻婆豆腐など独創的な料理が揃います。ご予約をおすすめします。",
      "tags": [ "大阪", "海鲜", "中華料理" ],
      "hours": "17:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o72",
    "cat": "dining",
    "orderAll": 66,
    "orderCat": 66,
    "rec": false,
    "img": "images/19",
    "storeCoords": { "lat": 34.6979286, "lon": 135.4967557 },
    "zh": {
      "name": "ステーキハウス听 北新地店",
      "area": "北新地",
      "desc": "位于大阪北新地的熟成牛排馆，北新地站步行约1分，主打干式熟成黑毛和牛，可按部位与分量点选，午市牛排也颇具人气。建议提前预约。",
      "tags": [ "大阪", "牛排", "预约制" ],
      "hours": "11:30–14:00 / 17:30–23:00"
    },
    "en": {
      "name": "ステーキハウス听 北新地店",
      "area": "北新地",
      "desc": "Steakhouse near Kitashinchi Station, Osaka — dry-aged wagyu beef by the cut and weight, with a popular lunch service. Reservations recommended.",
      "tags": [ "Osaka", "Steak", "Reservations" ],
      "hours": "11:30–14:00 / 17:30–23:00"
    },
    "ja": {
      "name": "ステーキハウス听 北新地店",
      "area": "北新地",
      "desc": "北新地駅徒歩1分のステーキハウス。ドライエイジングの熟成黒毛和牛を部位や量り売りで楽しめ、ランチ営業もあり気軽に味わえます。ご予約をおすすめします。",
      "tags": [ "大阪", "ステーキ", "要予約" ],
      "hours": "11:30–14:00 / 17:30–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "higashiyama": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" }
    }
  }
,
  {
    "id": "o73",
    "cat": "dining",
    "orderAll": 67,
    "orderCat": 67,
    "rec": false,
    "img": "images/20",
    "storeCoords": { "lat": 34.6865842, "lon": 135.5166733 },
    "zh": {
      "name": "本格スパイスカレー ヤドカリー谷町天満橋コーラ本店",
      "area": "谷町・天満橋",
      "desc": "位于大阪谷町・天満橋的香料咖喱店，天満橋站或谷町四丁目站步行约5分，以国产黑毛和牛牛脂熬制咖喱，自家制手工可乐同样出名，午市为主。建议提前预约。",
      "tags": [ "大阪", "咖喱", "香辛料" ],
      "hours": "11:30–15:00"
    },
    "en": {
      "name": "本格スパイスカレー ヤドカリー谷町天満橋コーラ本店",
      "area": "谷町・天満橋",
      "desc": "Spice curry specialist near Temmabashi Station, Osaka — rich curry made with Japanese wagyu beef fat, plus house-made craft cola. Reservations recommended.",
      "tags": [ "Osaka", "Curry", "Spice izakaya" ],
      "hours": "11:30–15:00"
    },
    "ja": {
      "name": "本格スパイスカレー ヤドカリー谷町天満橋コーラ本店",
      "area": "谷町・天満橋",
      "desc": "天満橋駅・谷町四丁目駅から徒歩5分のスパイスカレー店。国産黒毛和牛の牛脂を使ったルウと自家製クラフトコーラが名物です。ご予約をおすすめします。",
      "tags": [ "大阪", "カレー", "スパイス" ],
      "hours": "11:30–15:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约152分", "en": "~152 min by train", "ja": "電車約152分" },
      "gion": { "zh": "电车约164分", "en": "~164 min by train", "ja": "電車約164分" },
      "higashiyama": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" }
    }
  }
,
  {
    "id": "o74",
    "cat": "whisky",
    "orderAll": 68,
    "orderCat": 68,
    "rec": false,
    "img": "images/21",
    "storeCoords": { "lat": 34.6942164, "lon": 135.4733599 },
    "zh": {
      "name": "ワイン食堂 ビストロJIN 野田店",
      "area": "野田・福島",
      "desc": "位于大阪野田・福島的葡萄酒小酒馆，法式小盘菜配葡萄酒，食材新鲜、口味地道，氛围惬意。建议提前预约。",
      "tags": [ "大阪", "Bistro", "葡萄酒" ],
      "hours": "17:00–23:30"
    },
    "en": {
      "name": "ワイン食堂 ビストロJIN 野田店",
      "area": "野田・福島",
      "desc": "Seafood-forward creative cuisine blending Japanese and Western styles. Reservations recommended.",
      "tags": [ "Osaka", "Bistro", "Wine bar" ],
      "hours": "17:00–23:30"
    },
    "ja": {
      "name": "ワイン食堂 ビストロJIN 野田店",
      "area": "野田・福島",
      "desc": "ワインとビストロ料理の組み合わせが好評。ご予約をおすすめします。",
      "tags": [ "大阪", "ビストロ", "ワイン" ],
      "hours": "17:00–23:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约156分", "en": "~156 min by train", "ja": "電車約156分" },
      "gion": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" },
      "higashiyama": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" }
    }
  }
,
  {
    "id": "o75",
    "cat": "dining",
    "orderAll": 69,
    "orderCat": 69,
    "rec": false,
    "img": "images/22",
    "storeCoords": { "lat": 34.6673418, "lon": 135.5036393 },
    "zh": {
      "name": "なんば和牛焼肉 すき焼き 霞（KASUMI）",
      "area": "なんば・千日前",
      "desc": "位于大阪难波千日前的和牛烧肉与寿喜烧店，近铁日本桥站步行约3分，精肉店直营整头采购黑毛和牛与神户牛，一楼吧台、二楼全包厢。建议提前预约。",
      "tags": [ "大阪", "黑毛和牛", "烧肉" ],
      "hours": "17:00–23:30"
    },
    "en": {
      "name": "なんば和牛焼肉 すき焼き 霞（KASUMI）",
      "area": "なんば・千日前",
      "desc": "Butcher-run wagyu yakiniku and sukiyaki restaurant in Namba Sennichimae, Osaka — Kuroge wagyu and Kobe beef, counter seats and private rooms. Reservations recommended.",
      "tags": [ "Osaka", "黑毛和牛", "Yakiniku" ],
      "hours": "17:00–23:30"
    },
    "ja": {
      "name": "なんば和牛焼肉 すき焼き 霞（KASUMI）",
      "area": "なんば・千日前",
      "desc": "なんば駅徒歩5分、千日前の精肉店直営焼肉店。一頭買いの黒毛和牛や神戸牛を焼肉やすき焼きで堪能でき、2階には完全個室もございます。ご予約をおすすめします。",
      "tags": [ "大阪", "黑毛和牛", "焼肉" ],
      "hours": "17:00–23:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约161分", "en": "~161 min by train", "ja": "電車約161分" },
      "gion": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" },
      "higashiyama": { "zh": "电车约176分", "en": "~176 min by train", "ja": "電車約176分" }
    }
  }
,
  {
    "id": "o76",
    "cat": "dining",
    "orderAll": 70,
    "orderCat": 70,
    "rec": false,
    "img": "images/23",
    "storeCoords": { "lat": 34.7059866, "lon": 135.4974266 },
    "zh": {
      "name": "サーモンベーネ 鮭寮【はなれ】",
      "area": "梅田・芝田",
      "desc": "位于大阪梅田・芝田的三文鱼料理专门居酒屋，阪急大阪梅田站茶屋町口步行约2分，三文鱼与鲑鱼子入馔，和洋折衷菜式多样，另有三文鱼尽享套餐。建议提前预约。",
      "tags": [ "大阪", "サーモン料理", "鱼料理" ],
      "hours": "17:00–22:30"
    },
    "en": {
      "name": "サーモンベーネ 鮭寮【はなれ】",
      "area": "梅田・芝田",
      "desc": "Salmon and ikura specialty izakaya near Hankyu Umeda Station, Osaka — creative Japanese-Western salmon dishes and salmon-focused courses. Reservations recommended.",
      "tags": [ "Osaka", "サーモン料理", "Seafood" ],
      "hours": "17:00–22:30"
    },
    "ja": {
      "name": "サーモンベーネ 鮭寮【はなれ】",
      "area": "梅田・芝田",
      "desc": "阪急大阪梅田駅徒歩2分、芝田のサーモンといくら専門の居酒屋。和洋折衷の多彩なサーモン料理やサーモンづくしのコースが楽しめます。ご予約をおすすめします。",
      "tags": [ "大阪", "サーモン料理", "魚料理" ],
      "hours": "17:00–22:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约148分", "en": "~148 min by train", "ja": "電車約148分" },
      "gion": { "zh": "电车约161分", "en": "~161 min by train", "ja": "電車約161分" },
      "higashiyama": { "zh": "电车约164分", "en": "~164 min by train", "ja": "電車約164分" }
    }
  }
,
  {
    "id": "o77",
    "cat": "dining",
    "orderAll": 71,
    "orderCat": 71,
    "rec": false,
    "img": "images/24",
    "storeCoords": { "lat": 34.6963760, "lon": 135.4860706 },
    "zh": {
      "name": "海老炉端 orb 福島",
      "area": "福島",
      "desc": "位于大阪福島的虾料理炉端烧居酒屋，JR福島站步行约3分，名物活车虾垂钓现钓现吃，古民家风店内，二楼最多可容纳20人包场宴会。建议提前预约。",
      "tags": [ "大阪", "海老", "海老料理" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "海老炉端 orb 福島",
      "area": "福島",
      "desc": "Shrimp robata izakaya near JR Fukushima Station, Osaka — catch live kuruma prawns in-store; second floor hosts parties up to 20. Reservations recommended.",
      "tags": [ "Osaka", "海老", "Shrimp cuisine" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "海老炉端 orb 福島",
      "area": "福島",
      "desc": "JR福島駅徒歩3分の海老料理専門の炉端居酒屋。名物の活車海老釣りと踊り食いが楽しめ、2階は最大20名まで貸切宴会が可能です。ご予約をおすすめします。",
      "tags": [ "大阪", "海老", "海老料理" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o78",
    "cat": "dining",
    "orderAll": 72,
    "orderCat": 72,
    "rec": false,
    "img": "images/25",
    "storeCoords": { "lat": 34.6962441, "lon": 135.4841098 },
    "zh": {
      "name": "大阪福島焼肉とっぷく",
      "area": "福島",
      "desc": "位于大阪福島的烧肉店，JR福島站步行约5分钟，以但马牛为主打，从午市到深夜连续营业，午间也可享用烧肉与美酒。建议提前预约。",
      "tags": [ "大阪", "烧肉", "预约制" ],
      "hours": "11:30–23:00"
    },
    "en": {
      "name": "大阪福島焼肉とっぷく",
      "area": "福島",
      "desc": "Yakiniku restaurant in Fukushima, Osaka — Tajima beef specialties, open non-stop from lunch to late night, five minutes from JR Fukushima Station. Reservations recommended.",
      "tags": [ "Osaka", "Yakiniku", "Reservations" ],
      "hours": "11:30–23:00"
    },
    "ja": {
      "name": "大阪福島焼肉とっぷく",
      "area": "福島",
      "desc": "JR福島駅徒歩5分の焼肉店。但馬牛を中心とした焼肉をランチから夜まで通し営業で楽しめます。半個室もあります。ご予約をおすすめします。",
      "tags": [ "大阪", "焼肉", "要予約" ],
      "hours": "11:30–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o79",
    "cat": "dining",
    "orderAll": 73,
    "orderCat": 73,
    "rec": false,
    "img": "images/26",
    "storeCoords": { "lat": 34.6963823, "lon": 135.4850600 },
    "zh": {
      "name": "福島 焼野菜 菜の音",
      "area": "福島",
      "desc": "位于大阪福島的烤蔬菜居酒屋，福島站步行约1分钟，主打农家直送时令蔬菜，招牌为野菜寿司与十三种烤蔬菜巴尼亚酱，也有宴会套餐。建议提前预约。",
      "tags": [ "大阪", "烤蔬菜", "创作料理" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "福島 焼野菜 菜の音",
      "area": "福島",
      "desc": "Vegetable-focused izakaya one minute from JR Fukushima Station, Osaka — farm-direct seasonal produce, signature vegetable sushi and grilled bagna cauda. Reservations recommended.",
      "tags": [ "Osaka", "烤蔬菜", "Creative cuisine" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "福島 焼野菜 菜の音",
      "area": "福島",
      "desc": "JR福島駅徒歩1分の焼野菜居酒屋。農家直送の旬野菜を使い、名物は野菜寿司と１３種の野菜の焼バーニャカウダ。宴会コースもあります。ご予約をおすすめします。",
      "tags": [ "大阪", "烤蔬菜", "創作料理" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约153分", "en": "~153 min by train", "ja": "電車約153分" },
      "gion": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o80",
    "cat": "dining",
    "orderAll": 74,
    "orderCat": 74,
    "rec": false,
    "img": "images/27",
    "storeCoords": { "lat": 34.6645737, "lon": 135.5050164 },
    "zh": {
      "name": "和牛一頭買い 焼肉ホルモン黒野 ウラなんば本店",
      "area": "なんば・千日前",
      "desc": "位于大阪难波的烧肉店，地处ウラなんば街区，近铁日本桥站步行约5分钟，整头采购大分和牛，稀有部位丰富，名物为牛尾汤，设团体专用空间。建议提前预约。",
      "tags": [ "大阪", "烧肉", "和牛" ],
      "hours": "16:00–23:00"
    },
    "en": {
      "name": "和牛一頭買い 焼肉ホルモン黒野 ウラなんば本店",
      "area": "なんば・千日前",
      "desc": "Yakiniku restaurant in Ura-Namba, Osaka — whole-purchased Oita wagyu with rare cuts, signature oxtail soup, dedicated group rooms available. Reservations recommended.",
      "tags": [ "Osaka", "Yakiniku", "Wagyu" ],
      "hours": "16:00–23:00"
    },
    "ja": {
      "name": "和牛一頭買い 焼肉ホルモン黒野 ウラなんば本店",
      "area": "なんば・千日前",
      "desc": "なんば駅徒歩5分、ウラなんばの焼肉店。おおいた和牛の一頭買いで希少部位も豊富。名物はテールスープ。団体専用ルームもあります。ご予約をおすすめします。",
      "tags": [ "大阪", "焼肉", "和牛" ],
      "hours": "16:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约162分", "en": "~162 min by train", "ja": "電車約162分" },
      "gion": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" },
      "higashiyama": { "zh": "电车约177分", "en": "~177 min by train", "ja": "電車約177分" }
    }
  }
,
  {
    "id": "o81",
    "cat": "dining",
    "orderAll": 75,
    "orderCat": 75,
    "rec": false,
    "img": "images/28",
    "storeCoords": { "lat": 34.6488650, "lon": 135.5136260 },
    "zh": {
      "name": "居酒屋鮮道こんび",
      "area": "天王寺",
      "desc": "位于大阪天王寺的和食海鲜居酒屋，JR天王寺站步行约3分钟，主打每日市场采购的鲜鱼料理与招牌高汤玉子烧，二楼设最多26人的包间。建议提前预约。",
      "tags": [ "大阪", "海鲜居酒屋", "鱼料理" ],
      "hours": "11:30–14:30 / 17:00–22:00 / 11:30–14:30 / 17:00–23:00"
    },
    "en": {
      "name": "居酒屋鮮道こんび",
      "area": "天王寺",
      "desc": "Seafood izakaya three minutes from JR Tennoji Station, Osaka — market-fresh fish dishes, signature dashimaki omelet, private rooms for up to 26 guests. Reservations recommended.",
      "tags": [ "Osaka", "海鲜居酒屋", "Seafood" ],
      "hours": "11:30–14:30 / 17:00–22:00 / 11:30–14:30 / 17:00–23:00"
    },
    "ja": {
      "name": "居酒屋鮮道こんび",
      "area": "天王寺",
      "desc": "JR天王寺駅徒歩3分の和食居酒屋。市場直送の鮮魚料理と名物だし巻き玉子が評判。2階には最大26名まで利用できる個室があります。ご予約をおすすめします。",
      "tags": [ "大阪", "海鲜居酒屋", "魚料理" ],
      "hours": "11:30–14:30 / 17:00–22:00 / 11:30–14:30 / 17:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约168分", "en": "~168 min by train", "ja": "電車約168分" },
      "gion": { "zh": "电车约177分", "en": "~177 min by train", "ja": "電車約177分" },
      "higashiyama": { "zh": "电车约181分", "en": "~181 min by train", "ja": "電車約181分" }
    }
  }
,
  {
    "id": "o82",
    "cat": "dining",
    "orderAll": 76,
    "orderCat": 76,
    "rec": false,
    "img": "images/29",
    "storeCoords": { "lat": 34.7003809, "lon": 135.5008620 },
    "zh": {
      "name": "活海老バル orb 裏参道店",
      "area": "曽根崎・梅田",
      "desc": "位于大阪梅田的活虾主题酒吧，東梅田站步行约2分钟，店内可体验钓车虾并现场品尝，虾料理逾二十种，周五周六营业至清晨5点。建议提前预约。",
      "tags": [ "大阪", "海老バル", "海老料理" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "活海老バル orb 裏参道店",
      "area": "曽根崎・梅田",
      "desc": "Live-shrimp bar in Umeda, Osaka — catch your own prawns in-store, over 20 shrimp dishes, open until 5 am on Fridays and Saturdays. Reservations recommended.",
      "tags": [ "Osaka", "海老バル", "Shrimp cuisine" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "活海老バル orb 裏参道店",
      "area": "曽根崎・梅田",
      "desc": "東梅田駅徒歩2分、お初天神裏参道の活海老バル。店内で車海老釣りが楽しめ、海老料理は20種類以上。金土は朝5時まで営業。ご予約をおすすめします。",
      "tags": [ "大阪", "海老バル", "海老料理" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约149分", "en": "~149 min by train", "ja": "電車約149分" },
      "gion": { "zh": "电车约162分", "en": "~162 min by train", "ja": "電車約162分" },
      "higashiyama": { "zh": "电车约165分", "en": "~165 min by train", "ja": "電車約165分" }
    }
  }
,
  {
    "id": "o83",
    "cat": "dining",
    "orderAll": 77,
    "orderCat": 77,
    "rec": false,
    "img": "images/30",
    "storeCoords": { "lat": 34.6975751, "lon": 135.4969450 },
    "zh": {
      "name": "博多味処水炊きすき焼きいろは 大阪北新地店",
      "area": "北新地",
      "desc": "位于大阪北新地的博多水炊锅店，北新地站步行约3分钟，源自昭和28年创业的博多老店，全包间设计，另有和牛寿喜烧与涮涮锅。建议提前预约。",
      "tags": [ "大阪", "水炊き", "预约制" ],
      "hours": "17:00–23:00"
    },
    "en": {
      "name": "博多味処水炊きすき焼きいろは 大阪北新地店",
      "area": "北新地",
      "desc": "Hakata-style mizutaki hotpot restaurant in Kitashinchi, Osaka — founded in 1953, all private rooms, wagyu sukiyaki and shabu-shabu also served. Reservations recommended.",
      "tags": [ "Osaka", "Mizutaki hotpot", "Reservations" ],
      "hours": "17:00–23:00"
    },
    "ja": {
      "name": "博多味処水炊きすき焼きいろは 大阪北新地店",
      "area": "北新地",
      "desc": "北新地駅徒歩3分の水たき専門店。昭和28年創業の博多の伝統の味を全室個室で楽しめ、和牛すき焼きやしゃぶしゃぶもあります。ご予約をおすすめします。",
      "tags": [ "大阪", "水炊き", "要予約" ],
      "hours": "17:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "higashiyama": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" }
    }
  }
,
  {
    "id": "o84",
    "cat": "dining",
    "orderAll": 78,
    "orderCat": 78,
    "rec": false,
    "img": "images/31",
    "storeCoords": { "lat": 34.7004860, "lon": 135.5007231 },
    "zh": {
      "name": "ピルピル＆生ハム専門店 LUPIN",
      "area": "曽根崎・梅田",
      "desc": "位于大阪梅田的西班牙巴斯克料理酒吧，東梅田站步行约2分钟，招牌为海鲜橄榄油炖pil-pil与长期熟成生火腿，店内氛围如西洋古堡。建议提前预约。",
      "tags": [ "大阪", "西班牙", "西班牙料理" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "ピルピル＆生ハム専門店 LUPIN",
      "area": "曽根崎・梅田",
      "desc": "Spanish Basque bar in Umeda, Osaka — signature pil-pil seafood simmered in olive oil and long-aged jamon, served in a castle-like space. Reservations recommended.",
      "tags": [ "Osaka", "西班牙", "Spanish" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "ピルピル＆生ハム専門店 LUPIN",
      "area": "曽根崎・梅田",
      "desc": "東梅田駅徒歩2分のスペインバスク料理店。名物は魚介のオリーブオイル煮ピルピルと長期熟成の生ハム。古城のような空間が魅力です。ご予約をおすすめします。",
      "tags": [ "大阪", "西班牙", "スペイン料理" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约149分", "en": "~149 min by train", "ja": "電車約149分" },
      "gion": { "zh": "电车约162分", "en": "~162 min by train", "ja": "電車約162分" },
      "higashiyama": { "zh": "电车约165分", "en": "~165 min by train", "ja": "電車約165分" }
    }
  }
,
  {
    "id": "o85",
    "cat": "dining",
    "orderAll": 79,
    "orderCat": 79,
    "rec": false,
    "img": "images/32",
    "storeCoords": { "lat": 34.6842608, "lon": 135.5118559 },
    "zh": {
      "name": "お好み・鉄板焼 KONOMU 谷町店",
      "area": "谷町・本町",
      "desc": "位于大阪谷町的大阪烧与铁板烧店，供应经典大阪烧及芝士满溢的创作烧等特色粉物料理，营业至凌晨2点，适合宵夜小酌。建议提前预约。",
      "tags": [ "大阪", "大阪烧", "铁板烧" ],
      "hours": "18:00–2:00"
    },
    "en": {
      "name": "お好み・鉄板焼 KONOMU 谷町店",
      "area": "谷町・本町",
      "desc": "Okonomiyaki and teppanyaki restaurant in the Tanimachi area, Osaka — classic and creative cheese-loaded okonomiyaki, open until 2 am. Reservations recommended.",
      "tags": [ "Osaka", "Okonomiyaki", "Teppanyaki" ],
      "hours": "18:00–2:00"
    },
    "ja": {
      "name": "お好み・鉄板焼 KONOMU 谷町店",
      "area": "谷町・本町",
      "desc": "谷町エリア、内本町のお好み焼き・鉄板焼き店。定番からチーズたっぷりの創作お好み焼きまで揃い、深夜2時まで営業しています。ご予約をおすすめします。",
      "tags": [ "大阪", "お好み焼き", "鉄板焼き" ],
      "hours": "18:00–2:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约154分", "en": "~154 min by train", "ja": "電車約154分" },
      "gion": { "zh": "电车约165分", "en": "~165 min by train", "ja": "電車約165分" },
      "higashiyama": { "zh": "电车约169分", "en": "~169 min by train", "ja": "電車約169分" }
    }
  }
,
  {
    "id": "o86",
    "cat": "dining",
    "orderAll": 80,
    "orderCat": 80,
    "rec": false,
    "img": "images/33",
    "storeCoords": { "lat": 34.6676262, "lon": 135.5037219 },
    "zh": {
      "name": "スパイス居酒屋 煙華香辛 エンゲスパイス",
      "area": "なんば・千日前",
      "desc": "位于大阪难波千日前的香料居酒屋，近铁日本桥站步行约4分钟，招牌为香辛麻婆豆腐与自制香料咖喱，亦有火锅套餐，周五周六营业至清晨。建议提前预约。",
      "tags": [ "大阪", "香辛料居酒屋", "香辛料" ],
      "hours": "17:00–0:00 / 17:00–5:00"
    },
    "en": {
      "name": "スパイス居酒屋 煙華香辛 エンゲスパイス",
      "area": "なんば・千日前",
      "desc": "Spice izakaya in Namba Sennichimae, Osaka — signature spicy mapo tofu, house spice curry and hotpot courses, open till early morning on weekends. Reservations recommended.",
      "tags": [ "Osaka", "香辛料居酒屋", "Spice izakaya" ],
      "hours": "17:00–0:00 / 17:00–5:00"
    },
    "ja": {
      "name": "スパイス居酒屋 煙華香辛 エンゲスパイス",
      "area": "なんば・千日前",
      "desc": "難波千日前のスパイス居酒屋。名物の香辛麻婆豆腐やスパイスカレー、火鍋コースが楽しめ、金土祝は朝5時まで営業しています。ご予約をおすすめします。",
      "tags": [ "大阪", "香辛料居酒屋", "スパイス" ],
      "hours": "17:00–0:00 / 17:00–5:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约161分", "en": "~161 min by train", "ja": "電車約161分" },
      "gion": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" },
      "higashiyama": { "zh": "电车约176分", "en": "~176 min by train", "ja": "電車約176分" }
    }
  }
,
  {
    "id": "o87",
    "cat": "dining",
    "orderAll": 81,
    "orderCat": 81,
    "rec": false,
    "img": "images/34",
    "storeCoords": { "lat": 34.6703997, "lon": 135.5040005 },
    "zh": {
      "name": "炭火焼寝床 心斎橋本店",
      "area": "心斎橋",
      "desc": "位于大阪心斎橋的炭火烤鳗鱼专门店，心斎橋站步行约7分钟，以关西风地烧工艺烤制鳗鱼，招牌为鳗鱼串烧、鳗重与鳗鱼饭三吃。建议提前预约。",
      "tags": [ "大阪", "炭火烧", "鳗鱼" ],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "en": {
      "name": "炭火焼寝床 心斎橋本店",
      "area": "心斎橋",
      "desc": "Charcoal-grilled eel specialist in Shinsaibashi, Osaka — Kansai-style jiyaki unagi, signature eel skewers, unaju and hitsumabushi. Reservations recommended.",
      "tags": [ "Osaka", "Charcoal grill", "Unagi" ],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "ja": {
      "name": "炭火焼寝床 心斎橋本店",
      "area": "心斎橋",
      "desc": "心斎橋駅徒歩7分の炭火焼うなぎ専門店。関西風地焼きの鰻を使った串焼きが名物で、うな重やひつまぶしも楽しめます。ご予約をおすすめします。",
      "tags": [ "大阪", "炭火焼", "うなぎ" ],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  }
,
  {
    "id": "o88",
    "cat": "whisky",
    "orderAll": 82,
    "orderCat": 82,
    "rec": false,
    "img": "images/35",
    "storeCoords": { "lat": 34.6754751, "lon": 135.5106387 },
    "zh": {
      "name": "Bistro MOUSQUETON ビストロ ムースケトン【隠れ家ビストロ 大阪・南船場 】",
      "area": "南船場",
      "desc": "位于大阪南船場的葡萄酒小酒馆，法式小盘菜配葡萄酒，食材新鲜、口味地道，氛围惬意。建议提前预约。",
      "tags": [ "大阪", "Bistro", "预约制" ],
      "hours": "17:30–22:00 / 12:00–14:30 / 17:30–22:00"
    },
    "en": {
      "name": "Bistro MOUSQUETON ビストロ ムースケトン【隠れ家ビストロ 大阪・南船場 】",
      "area": "南船場",
      "desc": "Seafood-forward creative cuisine blending Japanese and Western styles. Reservations recommended.",
      "tags": [ "Osaka", "Bistro", "Reservations" ],
      "hours": "17:30–22:00 / 12:00–14:30 / 17:30–22:00"
    },
    "ja": {
      "name": "Bistro MOUSQUETON ビストロ ムースケトン【隠れ家ビストロ 大阪・南船場 】",
      "area": "南船場",
      "desc": "ワインとビストロ料理の組み合わせが好評。ご予約をおすすめします。",
      "tags": [ "大阪", "ビストロ", "要予約" ],
      "hours": "17:30–22:00 / 12:00–14:30 / 17:30–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约157分", "en": "~157 min by train", "ja": "電車約157分" },
      "gion": { "zh": "电车约169分", "en": "~169 min by train", "ja": "電車約169分" },
      "higashiyama": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" }
    }
  }
,
  {
    "id": "o89",
    "cat": "whisky",
    "orderAll": 83,
    "orderCat": 83,
    "rec": false,
    "img": "images/36",
    "storeCoords": { "lat": 34.7131344, "lon": 135.4691691 },
    "zh": {
      "name": "ワイン酒場 ビストロ JIN塚本店",
      "area": "塚本",
      "desc": "位于大阪塚本的葡萄酒小酒馆，法式小盘菜配葡萄酒，食材新鲜、口味地道，氛围惬意。建议提前预约。",
      "tags": [ "大阪", "Bistro", "葡萄酒" ],
      "hours": "17:00–23:30"
    },
    "en": {
      "name": "ワイン酒場 ビストロ JIN塚本店",
      "area": "塚本",
      "desc": "Seafood-forward creative cuisine blending Japanese and Western styles. Reservations recommended.",
      "tags": [ "Osaka", "Bistro", "Wine bar" ],
      "hours": "17:00–23:30"
    },
    "ja": {
      "name": "ワイン酒場 ビストロ JIN塚本店",
      "area": "塚本",
      "desc": "ワインとビストロ料理の組み合わせが好評。ご予約をおすすめします。",
      "tags": [ "大阪", "ビストロ", "ワイン" ],
      "hours": "17:00–23:30"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约149分", "en": "~149 min by train", "ja": "電車約149分" },
      "gion": { "zh": "电车约165分", "en": "~165 min by train", "ja": "電車約165分" },
      "higashiyama": { "zh": "电车约168分", "en": "~168 min by train", "ja": "電車約168分" }
    }
  }
,
  {
    "id": "o90",
    "cat": "whisky",
    "orderAll": 84,
    "orderCat": 84,
    "rec": false,
    "img": "images/37",
    "storeCoords": { "lat": 34.7067461, "lon": 135.4960837 },
    "zh": {
      "name": "cafenne/カフェーヌ 【梅田パーティースペース】",
      "area": "梅田・芝田",
      "desc": "位于大阪梅田・芝田的咖啡馆，咖啡与轻食选择多，适合午后休憩。建议提前预约。",
      "tags": [ "大阪", "咖啡", "预约制" ],
      "hours": "24 時間営業"
    },
    "en": {
      "name": "cafenne/カフェーヌ 【梅田パーティースペース】",
      "area": "梅田・芝田",
      "desc": "Cafe for coffee and light meals while exploring Osaka. Reservations recommended.",
      "tags": [ "Osaka", "Cafe", "Reservations" ],
      "hours": "24 時間営業"
    },
    "ja": {
      "name": "cafenne/カフェーヌ 【梅田パーティースペース】",
      "area": "梅田・芝田",
      "desc": "カフェと軽食が楽しめる。ご予約をおすすめします。",
      "tags": [ "大阪", "カフェ", "要予約" ],
      "hours": "24 時間営業"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约147分", "en": "~147 min by train", "ja": "電車約147分" },
      "gion": { "zh": "电车约161分", "en": "~161 min by train", "ja": "電車約161分" },
      "higashiyama": { "zh": "电车约164分", "en": "~164 min by train", "ja": "電車約164分" }
    }
  }
,
  {
    "id": "o91",
    "cat": "dining",
    "orderAll": 85,
    "orderCat": 85,
    "rec": false,
    "img": "images/38",
    "storeCoords": { "lat": 34.6999853, "lon": 135.4873801 },
    "zh": {
      "name": "うまうま 福島本店",
      "area": "福島",
      "desc": "位于大阪福島的成吉思汗烤羊肉专门店，选用未经冷冻的新鲜生羊肉，亦有黑猪涮涮锅，距JR福島站步行约3分钟，适合宴会聚餐。建议提前预约。",
      "tags": [ "大阪", "居酒屋", "创作料理" ],
      "hours": "16:00–23:00"
    },
    "en": {
      "name": "うまうま 福島本店",
      "area": "福島",
      "desc": "Genghis Khan grilled lamb specialist in Fukushima, Osaka — fresh raw lamb and kurobuta pork shabu-shabu, three minutes from JR Fukushima Station. Reservations recommended.",
      "tags": [ "Osaka", "Izakaya", "Creative cuisine" ],
      "hours": "16:00–23:00"
    },
    "ja": {
      "name": "うまうま 福島本店",
      "area": "福島",
      "desc": "JR福島駅徒歩3分のジンギスカン専門店。冷凍していない新鮮な生ラム肉が自慢で、黒豚しゃぶしゃぶも人気。貸切や宴会にも対応。ご予約をおすすめします。",
      "tags": [ "大阪", "居酒屋", "創作料理" ],
      "hours": "16:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约151分", "en": "~151 min by train", "ja": "電車約151分" },
      "gion": { "zh": "电车约165分", "en": "~165 min by train", "ja": "電車約165分" },
      "higashiyama": { "zh": "电车约168分", "en": "~168 min by train", "ja": "電車約168分" }
    }
  }
,
  {
    "id": "o92",
    "cat": "dining",
    "orderAll": 86,
    "orderCat": 86,
    "rec": false,
    "img": "images/39",
    "storeCoords": { "lat": 34.6939631, "lon": 135.4864935 },
    "zh": {
      "name": "炭焼鰻寝床 福島店",
      "area": "福島",
      "desc": "位于大阪福島的关西风炭烤鳗鱼专门店，备长炭直烤皮脆肉嫩，鳗鱼串烧、鳗重与鳗鱼饭三吃俱佳，新福島站步行1分钟。建议提前预约。",
      "tags": [ "大阪", "鳗鱼", "炭火烧" ],
      "hours": "11:30–14:00 / 17:00–23:00"
    },
    "en": {
      "name": "炭焼鰻寝床 福島店",
      "area": "福島",
      "desc": "Charcoal-grilled eel specialist in Fukushima, Osaka — Kansai-style jiyaki unagi, eel skewers and unaju, one minute from Shin-Fukushima Station. Reservations recommended.",
      "tags": [ "Osaka", "Unagi", "Charcoal grill" ],
      "hours": "11:30–14:00 / 17:00–23:00"
    },
    "ja": {
      "name": "炭焼鰻寝床 福島店",
      "area": "福島",
      "desc": "新福島駅徒歩1分の関西風地焼き鰻専門店。備長炭で焼き上げる鰻の串焼きやうな重、ひつまぶしを古民家を改装した店内で楽しめます。ご予約をおすすめします。",
      "tags": [ "大阪", "うなぎ", "炭火焼" ],
      "hours": "11:30–14:00 / 17:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约154分", "en": "~154 min by train", "ja": "電車約154分" },
      "gion": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o93",
    "cat": "dining",
    "orderAll": 87,
    "orderCat": 87,
    "rec": false,
    "img": "images/40",
    "storeCoords": { "lat": 34.6818522, "lon": 135.5060951 },
    "zh": {
      "name": "旨辛麻辣専門店サカホンキッチン",
      "area": "船場",
      "desc": "位于大阪船場的麻辣中华专门店，与堺筋本町站直通，名物四川麻婆豆腐和铁锅饺子，亚洲屋台风情，最多可容纳42人宴会。建议提前预约。",
      "tags": [ "大阪", "麻辣", "中华料理" ],
      "hours": "11:00–15:00 / 17:00–22:00"
    },
    "en": {
      "name": "旨辛麻辣専門店サカホンキッチン",
      "area": "船場",
      "desc": "Sichuan-style spicy Chinese restaurant in Semba, Osaka — signature mapo tofu and iron-pan gyoza, directly connected to Sakaisuji-Hommachi Station, banquets up to 42 guests. Reservations recommended.",
      "tags": [ "Osaka", "麻辣", "Chinese" ],
      "hours": "11:00–15:00 / 17:00–22:00"
    },
    "ja": {
      "name": "旨辛麻辣専門店サカホンキッチン",
      "area": "船場",
      "desc": "堺筋本町駅直結、船場センタービル3号館地下2階の旨辛中華専門店。名物の四川麻婆豆腐と鉄鍋餃子が人気で、最大42名の宴会も可能。ご予約をおすすめします。",
      "tags": [ "大阪", "麻辣", "中華料理" ],
      "hours": "11:00–15:00 / 17:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约156分", "en": "~156 min by train", "ja": "電車約156分" },
      "gion": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }
,
  {
    "id": "o94",
    "cat": "dining",
    "orderAll": 88,
    "orderCat": 88,
    "rec": false,
    "img": "images/41",
    "storeCoords": { "lat": 34.6736187, "lon": 135.4972189 },
    "zh": {
      "name": "SHABUSHABU SUKIYAKI SHABUCYO KITAHORIE -しゃぶ長 北堀江店-",
      "area": "北堀江",
      "desc": "位于大阪北堀江的涮涮锅与寿喜烧专门店，四ツ橋站步行1分钟，A5特选黑毛和牛套餐现切现涮，仅设8席吧台，亦有午市套餐。建议提前预约。",
      "tags": [ "大阪", "涮涮锅", "预约制" ],
      "hours": "11:00–14:45 / 17:00–22:30 / 17:00–22:00"
    },
    "en": {
      "name": "SHABUSHABU SUKIYAKI SHABUCYO KITAHORIE -しゃぶ長 北堀江店-",
      "area": "北堀江",
      "desc": "Shabu-shabu and sukiyaki restaurant in Kitahorie, Osaka — A5 wagyu course menus at an eight-seat counter, one minute from Yotsubashi Station. Reservations recommended.",
      "tags": [ "Osaka", "Shabu-shabu", "Reservations" ],
      "hours": "11:00–14:45 / 17:00–22:30 / 17:00–22:00"
    },
    "ja": {
      "name": "SHABUSHABU SUKIYAKI SHABUCYO KITAHORIE -しゃぶ長 北堀江店-",
      "area": "北堀江",
      "desc": "四ツ橋駅徒歩1分のしゃぶしゃぶ・すき焼き専門店。A5特選黒毛和牛を目の前でスライスするコースをカウンター8席で提供。ランチセットも。ご予約をおすすめします。",
      "tags": [ "大阪", "しゃぶしゃぶ", "要予約" ],
      "hours": "11:00–14:45 / 17:00–22:30 / 17:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  }
,
  {
    "id": "o95",
    "cat": "dining",
    "orderAll": 89,
    "orderCat": 89,
    "rec": false,
    "img": "images/42",
    "storeCoords": { "lat": 34.6997141, "lon": 135.5115700 },
    "zh": {
      "name": "魚と釜めし居酒屋 かさ家 天神橋店",
      "area": "天神橋",
      "desc": "位于大阪天神橋筋商店街的鲜鱼与釜饭居酒屋，南森町站步行3分钟，九款京丹后米釜饭现点现炊，鱼池活鱼现捞现做，设半包间桌席。建议提前预约。",
      "tags": [ "大阪", "鱼料理", "釜饭" ],
      "hours": "11:30–14:00 / 17:00–23:00"
    },
    "en": {
      "name": "魚と釜めし居酒屋 かさ家 天神橋店",
      "area": "天神橋",
      "desc": "Seafood and kamameshi izakaya on Tenjinbashi shopping street, Osaka — nine kinds of pot rice and live fish from the in-store tank. Reservations recommended.",
      "tags": [ "Osaka", "Seafood", "Kamameshi" ],
      "hours": "11:30–14:00 / 17:00–23:00"
    },
    "ja": {
      "name": "魚と釜めし居酒屋 かさ家 天神橋店",
      "area": "天神橋",
      "desc": "天神橋筋商店街にある魚と釜めしの居酒屋。京丹後産米を使う釜めし全9種と、いけすから捌く豊後あじや車海老が自慢。半個室のテーブル席も。ご予約をおすすめします。",
      "tags": [ "大阪", "魚料理", "釜飯" ],
      "hours": "11:30–14:00 / 17:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约148分", "en": "~148 min by train", "ja": "電車約148分" },
      "gion": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "higashiyama": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" }
    }
  }
,
  {
    "id": "o96",
    "cat": "dining",
    "orderAll": 90,
    "orderCat": 90,
    "rec": false,
    "img": "images/43",
    "storeCoords": { "lat": 34.6731094, "lon": 135.4944331 },
    "zh": {
      "name": "札幌スープカレー イエロースパイス 京鴨料理 鴨ん!Come On!",
      "area": "北堀江",
      "desc": "位于大阪北堀江的特色餐厅，午间供应正宗札幌汤咖喱，辣度与汤底可选，晚间则变身京鸭料理专门店，四ツ橋站、西大橋站步行约5分钟。建议提前预约。",
      "tags": [ "大阪", "汤咖喱", "咖喱" ],
      "hours": "11:30–16:00 / 17:00–21:00"
    },
    "en": {
      "name": "札幌スープカレー イエロースパイス 京鴨料理 鴨ん!Come On!",
      "area": "北堀江",
      "desc": "Sapporo soup curry by day and Kyoto duck cuisine by night in Kitahorie, Osaka — five minutes from Yotsubashi Station. Reservations recommended.",
      "tags": [ "Osaka", "Soup curry", "Curry" ],
      "hours": "11:30–16:00 / 17:00–21:00"
    },
    "ja": {
      "name": "札幌スープカレー イエロースパイス 京鴨料理 鴨ん!Come On!",
      "area": "北堀江",
      "desc": "四ツ橋駅・西大橋駅徒歩5分。昼は札幌スープカレー、夜は京鴨料理専門店として営業する二つの顔を持つお店。辛さやスープが選べます。ご予約をおすすめします。",
      "tags": [ "大阪", "スープカレー", "カレー" ],
      "hours": "11:30–16:00 / 17:00–21:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" },
      "higashiyama": { "zh": "电车约176分", "en": "~176 min by train", "ja": "電車約176分" }
    }
  }
,
  {
    "id": "o97",
    "cat": "dining",
    "orderAll": 91,
    "orderCat": 91,
    "rec": false,
    "img": "images/44",
    "storeCoords": { "lat": 34.6794814, "lon": 135.5072781 },
    "zh": {
      "name": "天ぷら あしべ",
      "area": "南久宝寺・堺筋本町",
      "desc": "位于大阪南久宝寺町的天妇罗专门店，堺筋本町站步行4分钟，午市天丼定食实惠，晚间可体验茶釜现炸套餐，车虾与时蔬鲜美，宜商务会餐。建议提前预约。",
      "tags": [ "大阪", "天妇罗", "预约制" ],
      "hours": "11:30–14:00 / 18:00–22:00"
    },
    "en": {
      "name": "天ぷら あしべ",
      "area": "南久宝寺・堺筋本町",
      "desc": "Tempura restaurant near Sakaisuji-Hommachi Station, Osaka — lunchtime tendon sets and evening cook-it-yourself tempura courses with seasonal vegetables and prawns. Reservations recommended.",
      "tags": [ "Osaka", "Tempura", "Reservations" ],
      "hours": "11:30–14:00 / 18:00–22:00"
    },
    "ja": {
      "name": "天ぷら あしべ",
      "area": "南久宝寺・堺筋本町",
      "desc": "堺筋本町駅徒歩4分の天ぷら処。昼は天丼や定食、夜は専用茶釜で揚げながら楽しむ体験型コースを提供。接待や会食にも好適です。ご予約をおすすめします。",
      "tags": [ "大阪", "天ぷら", "要予約" ],
      "hours": "11:30–14:00 / 18:00–22:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约156分", "en": "~156 min by train", "ja": "電車約156分" },
      "gion": { "zh": "电车约168分", "en": "~168 min by train", "ja": "電車約168分" },
      "higashiyama": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" }
    }
  }
,
  {
    "id": "o98",
    "cat": "dining",
    "orderAll": 92,
    "orderCat": 92,
    "rec": false,
    "img": "images/45",
    "storeCoords": { "lat": 34.7071491, "lon": 135.5104988 },
    "zh": {
      "name": "炭火焼肉 王国屋",
      "area": "天満・浪花町",
      "desc": "位于大阪天満的炭火烧肉店，天満站步行约3分钟，招牌播州牛赤身牛排由店家代烤，炙烤生拌牛肉亦有人气，20时后作居酒屋二次会亦宜。建议提前预约。",
      "tags": [ "大阪", "烧肉", "炭火烧" ],
      "hours": "17:00–23:00"
    },
    "en": {
      "name": "炭火焼肉 王国屋",
      "area": "天満・浪花町",
      "desc": "Charcoal yakiniku restaurant in Temma, Osaka — Banshu beef steak and seared yukke, three minutes from Temma Station, izakaya-style late hours. Reservations recommended.",
      "tags": [ "Osaka", "Yakiniku", "Charcoal grill" ],
      "hours": "17:00–23:00"
    },
    "ja": {
      "name": "炭火焼肉 王国屋",
      "area": "天満・浪花町",
      "desc": "天満駅徒歩3分の炭火焼肉店。播州牛の赤身ステーキや炙りユッケが人気で、20時以降は居酒屋感覚で二軒目利用も可能。ご予約をおすすめします。",
      "tags": [ "大阪", "焼肉", "炭火焼" ],
      "hours": "17:00–23:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约145分", "en": "~145 min by train", "ja": "電車約145分" },
      "gion": { "zh": "电车约158分", "en": "~158 min by train", "ja": "電車約158分" },
      "higashiyama": { "zh": "电车约161分", "en": "~161 min by train", "ja": "電車約161分" }
    }
  }
,
  {
    "id": "o99",
    "cat": "dining",
    "orderAll": 93,
    "orderCat": 93,
    "rec": false,
    "img": "images/46",
    "storeCoords": { "lat": 34.7086597, "lon": 135.5130509 },
    "zh": {
      "name": "焼肉たかしま 天満本店",
      "area": "天満・菅栄町",
      "desc": "位于大阪天満的烧肉店，天神橋筋六丁目站步行3分钟，持生食牛肉贩售认可，生拌牛肉与肉寿司等生肉菜品出众，设4人以上完全包间。建议提前预约。",
      "tags": [ "大阪", "烧肉", "预约制" ],
      "hours": "17:00–0:00"
    },
    "en": {
      "name": "焼肉たかしま 天満本店",
      "area": "天満・菅栄町",
      "desc": "Yakiniku restaurant in Temma, Osaka — licensed to serve raw beef dishes like yukke and beef sushi, private rooms available, near Tenjimbashisuji 6-chome Station. Reservations recommended.",
      "tags": [ "Osaka", "Yakiniku", "Reservations" ],
      "hours": "17:00–0:00"
    },
    "ja": {
      "name": "焼肉たかしま 天満本店",
      "area": "天満・菅栄町",
      "desc": "天神橋筋六丁目駅徒歩3分の焼肉店。生食用牛肉取扱認可店で、ユッケや肉寿司など生肉メニューが充実。4名以上で使える完全個室も完備。ご予約をおすすめします。",
      "tags": [ "大阪", "焼肉", "要予約" ],
      "hours": "17:00–0:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约144分", "en": "~144 min by train", "ja": "電車約144分" },
      "gion": { "zh": "电车约157分", "en": "~157 min by train", "ja": "電車約157分" },
      "higashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" }
    }
  }
,
  {
    "id": "o100",
    "cat": "whisky",
    "orderAll": 94,
    "orderCat": 94,
    "rec": false,
    "img": "images/47",
    "storeCoords": { "lat": 34.6990460, "lon": 135.4966577 },
    "zh": {
      "name": "シャーロックホームズ",
      "area": "梅田・大阪駅前",
      "desc": "位于大阪梅田・大阪駅前的咖啡馆，咖啡与轻食选择多，适合午后休憩。建议提前预约。",
      "tags": [ "大阪", "Cafe", "预约制" ],
      "hours": "11:00–23:00 / 11:00–17:00"
    },
    "en": {
      "name": "シャーロックホームズ",
      "area": "梅田・大阪駅前",
      "desc": "Cafe for coffee and light meals while exploring Osaka. Reservations recommended.",
      "tags": [ "Osaka", "Cafe", "Reservations" ],
      "hours": "11:00–23:00 / 11:00–17:00"
    },
    "ja": {
      "name": "シャーロックホームズ",
      "area": "梅田・大阪駅前",
      "desc": "カフェと軽食が楽しめる。ご予約をおすすめします。",
      "tags": [ "大阪", "Cafe", "要予約" ],
      "hours": "11:00–23:00 / 11:00–17:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约150分", "en": "~150 min by train", "ja": "電車約150分" },
      "gion": { "zh": "电车约163分", "en": "~163 min by train", "ja": "電車約163分" },
      "higashiyama": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" }
    }
  }
,
  {
    "id": "o101",
    "cat": "dining",
    "orderAll": 95,
    "orderCat": 95,
    "rec": false,
    "img": "images/48",
    "storeCoords": { "lat": 34.6986198, "lon": 135.4865982 },
    "zh": {
      "name": "笑酒屋アテトサカナ",
      "area": "福島",
      "desc": "位于大阪福島的创作居酒屋，JR福島站步行3分钟，中央市场直送鲜鱼制成的刺身拼盘为招牌，日本酒丰富，营业至深夜。建议提前预约。",
      "tags": [ "大阪", "居酒屋", "鱼料理" ],
      "hours": "18:00–1:00 / 18:00–3:00"
    },
    "en": {
      "name": "笑酒屋アテトサカナ",
      "area": "福島",
      "desc": "Creative izakaya in Fukushima, Osaka — sashimi platters with fish fresh from the central market and ample sake, open late, three minutes from JR Fukushima Station. Reservations recommended.",
      "tags": [ "Osaka", "Izakaya", "Seafood" ],
      "hours": "18:00–1:00 / 18:00–3:00"
    },
    "ja": {
      "name": "笑酒屋アテトサカナ",
      "area": "福島",
      "desc": "JR福島駅徒歩3分の創作居酒屋。中央市場直送の鮮魚を使ったお造り盛り合わせが看板で、日本酒も豊富。深夜1時まで営業。ご予約をおすすめします。",
      "tags": [ "大阪", "居酒屋", "魚料理" ],
      "hours": "18:00–1:00 / 18:00–3:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约152分", "en": "~152 min by train", "ja": "電車約152分" },
      "gion": { "zh": "电车约166分", "en": "~166 min by train", "ja": "電車約166分" },
      "higashiyama": { "zh": "电车约169分", "en": "~169 min by train", "ja": "電車約169分" }
    }
  }
,
  {
    "id": "o102",
    "cat": "whisky",
    "orderAll": 96,
    "orderCat": 96,
    "rec": false,
    "img": "images/49",
    "storeCoords": { "lat": 34.6805449, "lon": 135.5033561 },
    "zh": {
      "name": "ナカセンバカフェ",
      "area": "船場",
      "desc": "位于大阪船場的咖啡馆，咖啡与轻食选择多，适合午后休憩。建议提前预约。",
      "tags": [ "大阪", "Cafe", "咖啡" ],
      "hours": "12:00–18:00"
    },
    "en": {
      "name": "ナカセンバカフェ",
      "area": "船場",
      "desc": "Cafe for coffee and light meals while exploring Osaka. Reservations recommended.",
      "tags": [ "Osaka", "Cafe", "Cafe" ],
      "hours": "12:00–18:00"
    },
    "ja": {
      "name": "ナカセンバカフェ",
      "area": "船場",
      "desc": "カフェと軽食が楽しめる。ご予約をおすすめします。",
      "tags": [ "大阪", "Cafe", "カフェ" ],
      "hours": "12:00–18:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约156分", "en": "~156 min by train", "ja": "電車約156分" },
      "gion": { "zh": "电车约167分", "en": "~167 min by train", "ja": "電車約167分" },
      "higashiyama": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" }
    }
  }


,
  {
    "id": "o103",
    "cat": "spa",
    "orderAll": 49,
    "orderCat": 1,
    "rec": false,
    "img": "images/50",
    "storeCoords": { "lat": 34.6742656, "lon": 135.5081792 },
    "zh": {
      "name": "Celestique Spa",
      "area": "岛之内（心斋桥）",
      "desc": "关西地区唯一的正宗越南式SPA。在私人影院包间边看电影边享受按摩，帝王头疗等招牌项目备受好评。建议提前预约。",
      "tags": [ "大阪", "SPA", "越南式", "预约制" ],
      "hours": "11:00–翌3:00"
    },
    "en": {
      "name": "Celestique Spa",
      "area": "Shimanouchi (Shinsaibashi)",
      "desc": "Kansai's only authentic Vietnamese spa — unwind in private cinema rooms with massage and signature royal head spa. Reservations recommended.",
      "tags": [ "Osaka", "Spa", "Vietnamese", "Reservations" ],
      "hours": "11:00–03:00"
    },
    "ja": {
      "name": "Celestique Spa",
      "area": "島之内（心斎橋）",
      "desc": "関西唯一の本格ベトナム式スパ。プライベートシネマルームでマッサージを楽しめる。ご予約をおすすめします。",
      "tags": [ "大阪", "スパ", "ベトナム式", "要予約" ],
      "hours": "11:00–翌3:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  },
  {
    "id": "o104",
    "cat": "spa",
    "orderAll": 50,
    "orderCat": 2,
    "rec": false,
    "img": "images/51",
    "storeCoords": { "lat": 34.6733741, "lon": 135.5061651 },
    "zh": {
      "name": "和乐足疗按摩",
      "area": "心斋桥",
      "desc": "大阪心斋桥合作足疗按摩店，24小时营业，提供足疗与按摩服务。建议提前预约。",
      "tags": [ "大阪", "足疗", "按摩", "24小时" ],
      "hours": "24小时"
    },
    "en": {
      "name": "HELE SPA",
      "area": "Shinsaibashi",
      "desc": "Partner foot reflexology & massage salon in Osaka (Shinsaibashi), open 24 hours. Reservations recommended.",
      "tags": [ "Osaka", "Foot massage", "Reflexology", "24 hours" ],
      "hours": "24 hours"
    },
    "ja": {
      "name": "和楽足療マッサージ",
      "area": "心斎橋",
      "desc": "大阪・心斎橋の提携足療マッサージ店。24時間営業、足つぼ・マッサージ各種。ご予約をおすすめします。",
      "tags": [ "大阪", "足つぼ", "マッサージ", "24時間" ],
      "hours": "24時間"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  },
  {
    "id": "o105",
    "cat": "kimono",
    "orderAll": 99,
    "orderCat": 1,
    "rec": false,
    "img": "images/52",
    "storeCoords": { "lat": 34.6628, "lon": 135.5068 },
    "zh": {
      "name": "oukakimono · 樱花和服体验",
      "area": "日本桥",
      "desc": "大阪日本桥合作和服体验店，提供礼服租赁与和服体验。建议提前预约。",
      "tags": [ "大阪", "和服体验", "礼服", "预约制" ],
      "hours": "10:00-17:00"
    },
    "en": {
      "name": "Oukakimono · Sakura Kimono Experience",
      "area": "Nipponbashi",
      "desc": "Partner kimono rental & experience in Osaka (Nipponbashi). Formal kimono plans available. Reservations recommended.",
      "tags": [ "Osaka", "Kimono experience", "Formal wear", "Reservations" ],
      "hours": "10:00-17:00"
    },
    "ja": {
      "name": "oukakimono · 樱花和服体験",
      "area": "日本橋",
      "desc": "大阪・日本橋の提携着物体験店。礼服レンタル・着物体験。ご予約をおすすめします。",
      "tags": [ "大阪", "着物体験", "礼服", "要予約" ],
      "hours": "10:00-17:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  },
  {
    "id": "o106",
    "cat": "kimono",
    "orderAll": 100,
    "orderCat": 2,
    "rec": false,
    "img": "images/53",
    "storeCoords": { "lat": 34.6628, "lon": 135.5068 },
    "zh": {
      "name": "oukakimono · 四季和菓子手作",
      "area": "日本桥",
      "desc": "大阪中央区日本橋1-18-14 芝ビル7階。在和室氛围中体验传统和菓子制作，由职人指导完成揉制、调色、造型与花纹雕刻。可根据四季主题制作专属和菓子，完成后还能装入礼盒带走。建议提前预约。",
      "tags": [ "大阪", "和菓子", "手作", "亲子友好", "预约制" ],
      "hours": "10:00-17:00"
    },
    "en": {
      "name": "Oukakimono · Seasonal Wagashi Workshop",
      "area": "Nipponbashi",
      "desc": "1-18-14 Nipponbashi, Chuo-ku (Shiba Bldg 7F). Make traditional wagashi with artisan guidance—seasonal themes, shaping and decorating. Box your creations to take home. Reservations recommended.",
      "tags": [ "Osaka", "Wagashi", "Handcraft", "Family friendly", "Reservations" ],
      "hours": "10:00-17:00"
    },
    "ja": {
      "name": "oukakimono · 四季和菓子手作",
      "area": "日本橋",
      "desc": "大阪市中央区日本橋1-18-14 芝ビル7階。和室で職人の指導のもと四季の和菓子づくりを体験。箱詰めしてお持ち帰り可。ご予約をおすすめします。",
      "tags": [ "大阪", "和菓子", "手作り", "ファミリー可", "要予約" ],
      "hours": "10:00-17:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  },
  {
    "id": "o113",
    "cat": "kimono",
    "orderAll": 101,
    "orderCat": 3,
    "rec": false,
    "img": "images/60",
    "storeCoords": { "lat": 34.6628, "lon": 135.5068 },
    "zh": {
      "name": "oukakimono · 本格茶道体验",
      "area": "日本桥",
      "desc": "大阪中央区日本橋1-18-14 芝ビル7階。在传统茶室中学习日本茶道礼仪，体验点抹茶、品尝季节和菓子，并了解茶道文化与精神。适合想深度感受日本传统文化的游客，建议提前预约。",
      "tags": [ "大阪", "茶道", "抹茶", "和菓子", "预约制" ],
      "hours": "10:00-17:00"
    },
    "en": {
      "name": "Oukakimono · Tea Ceremony Experience",
      "area": "Nipponbashi",
      "desc": "1-18-14 Nipponbashi, Chuo-ku (Shiba Bldg 7F). Learn tea ceremony etiquette, whisk matcha and enjoy seasonal wagashi in a traditional tearoom. Reservations recommended.",
      "tags": [ "Osaka", "Tea ceremony", "Matcha", "Wagashi", "Reservations" ],
      "hours": "10:00-17:00"
    },
    "ja": {
      "name": "oukakimono · 本格茶道体験",
      "area": "日本橋",
      "desc": "大阪市中央区日本橋1-18-14 芝ビル7階。茶室で茶道の作法、抹茶点て、季節の和菓子を体験。ご予約をおすすめします。",
      "tags": [ "大阪", "茶道", "抹茶", "和菓子", "要予約" ],
      "hours": "10:00-17:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  },
  {
    "id": "o114",
    "cat": "kimono",
    "orderAll": 102,
    "orderCat": 4,
    "rec": false,
    "img": "images/61",
    "storeCoords": { "lat": 34.6628, "lon": 135.5068 },
    "zh": {
      "name": "oukakimono · 剑道体验",
      "area": "日本桥",
      "desc": "大阪中央区日本橋1-18-14 芝ビル7階。在老师指导下学习剑道礼仪、基本动作与竹刀使用方式，感受日本武道文化。建议提前预约。",
      "tags": [ "大阪", "剑道", "武道体验", "预约制" ],
      "hours": "10:00-17:00"
    },
    "en": {
      "name": "Oukakimono · Kendo Experience",
      "area": "Nipponbashi",
      "desc": "1-18-14 Nipponbashi, Chuo-ku (Shiba Bldg 7F). Learn kendo etiquette, basic stances and shinai handling under instructor guidance. Reservations recommended.",
      "tags": [ "Osaka", "Kendo", "Martial arts", "Reservations" ],
      "hours": "10:00-17:00"
    },
    "ja": {
      "name": "oukakimono · 剣道体験",
      "area": "日本橋",
      "desc": "大阪市中央区日本橋1-18-14 芝ビル7階。指導者のもと、剣道の礼法・基本動作・竹刀の扱いを体験。ご予約をおすすめします。",
      "tags": [ "大阪", "剣道", "武道体験", "要予約" ],
      "hours": "10:00-17:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  },
  {
    "id": "o115",
    "cat": "kimono",
    "orderAll": 103,
    "orderCat": 5,
    "rec": false,
    "img": "images/62",
    "storeCoords": { "lat": 34.6628, "lon": 135.5068 },
    "zh": {
      "name": "oukakimono · 书法体验",
      "area": "日本桥",
      "desc": "大阪中央区日本橋1-18-14 芝ビル7階。使用毛笔与墨汁书写喜欢的文字，在老师指导下学习基本笔法，完成作品可作为旅行纪念带走。建议提前预约。",
      "tags": [ "大阪", "书法", "手作", "预约制" ],
      "hours": "10:00-17:00"
    },
    "en": {
      "name": "Oukakimono · Shodo Calligraphy Experience",
      "area": "Nipponbashi",
      "desc": "1-18-14 Nipponbashi, Chuo-ku (Shiba Bldg 7F). Practice brush and ink calligraphy with basic stroke guidance—take your finished work home. Reservations recommended.",
      "tags": [ "Osaka", "Shodo", "Handcraft", "Reservations" ],
      "hours": "10:00-17:00"
    },
    "ja": {
      "name": "oukakimono · 書道体験",
      "area": "日本橋",
      "desc": "大阪市中央区日本橋1-18-14 芝ビル7階。筆と墨で基本の運筆を学び、お好きな文字を書いてお持ち帰り。ご予約をおすすめします。",
      "tags": [ "大阪", "書道", "手作り", "要予約" ],
      "hours": "10:00-17:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约160分", "en": "~160 min by train", "ja": "電車約160分" },
      "gion": { "zh": "电车约172分", "en": "~172 min by train", "ja": "電車約172分" },
      "higashiyama": { "zh": "电车约175分", "en": "~175 min by train", "ja": "電車約175分" }
    }
  }
,
  {
    "id": "o107",
    "cat": "spa",
    "orderAll": 52,
    "orderCat": 3,
    "rec": false,
    "img": "images/54",
    "storeCoords": { "lat": 34.6638744, "lon": 135.500343 },
    "zh": {
      "name": "カヌン タイ リラクゼーション 南海難波店",
      "area": "难波",
      "desc": "大阪难波合作泰式按摩店，正宗泰式手法，提供全身精油按摩与足疗服务。建议提前预约。",
      "tags": [ "大阪", "泰式按摩", "精油SPA", "预约制" ],
      "hours": "11:00–翌3:00"
    },
    "en": {
      "name": "Kanun Thai Relaxation Namba",
      "area": "Namba",
      "desc": "Partner Thai massage salon in Osaka (Namba) — authentic Thai techniques, full-body oil massage and foot reflexology. Reservations recommended.",
      "tags": [ "Osaka", "Thai massage", "Oil spa", "Reservations" ],
      "hours": "11:00–03:00"
    },
    "ja": {
      "name": "カヌン タイ リラクゼーション 南海難波店",
      "area": "難波",
      "desc": "大阪・難波の提携タイマッサージ店。本格タイ式の全身オイルマッサージ・足つぼ。ご予約をおすすめします。",
      "tags": [ "大阪", "タイマッサージ", "オイルSPA", "要予約" ],
      "hours": "11:00–翌3:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约158分", "en": "~158 min by train", "ja": "電車約158分" },
      "gion": { "zh": "电车约170分", "en": "~170 min by train", "ja": "電車約170分" },
      "higashiyama": { "zh": "电车约173分", "en": "~173 min by train", "ja": "電車約173分" }
    }
  },
  {
    "id": "o108",
    "cat": "spa",
    "orderAll": 53,
    "orderCat": 4,
    "rec": false,
    "img": "images/55",
    "storeCoords": { "lat": 34.6685629, "lon": 135.5032364 },
    "zh": {
      "name": "桜リラクゼーション SAKURA",
      "area": "心斋桥",
      "desc": "大阪心斋桥合作放松按摩店，提供全身按摩与足疗服务，环境舒适安静。建议提前预约。",
      "tags": [ "大阪", "按摩", "足疗", "预约制" ],
      "hours": "10:00–翌2:00"
    },
    "en": {
      "name": "Sakura Relaxation",
      "area": "Shinsaibashi",
      "desc": "Partner relaxation salon in Osaka (Shinsaibashi) — full-body massage and foot reflexology in a calm setting. Reservations recommended.",
      "tags": [ "Osaka", "Massage", "Foot reflexology", "Reservations" ],
      "hours": "10:00–02:00"
    },
    "ja": {
      "name": "桜リラクゼーション SAKURA",
      "area": "心斎橋",
      "desc": "大阪・心斎橋の提携リラクゼーション店。全身マッサージ・足つぼ、落ち着いた空間。ご予約をおすすめします。",
      "tags": [ "大阪", "マッサージ", "足つぼ", "要予約" ],
      "hours": "10:00–翌2:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  },
  {
    "id": "o109",
    "cat": "spa",
    "orderAll": 54,
    "orderCat": 5,
    "rec": false,
    "img": "images/56",
    "storeCoords": { "lat": 34.6746426, "lon": 135.5065208 },
    "zh": {
      "name": "Lyre 心斋桥筋店",
      "area": "心斋桥筋",
      "desc": "大阪心斋桥筋合作按摩店，提供全身指压与足疗服务，适合逛街后放松。建议提前预约。",
      "tags": [ "大阪", "指压", "足疗", "预约制" ],
      "hours": "12:00–翌3:00"
    },
    "en": {
      "name": "Lyre Shinsaibashi-suji",
      "area": "Shinsaibashi-suji",
      "desc": "Partner massage salon on Shinsaibashi-suji — shiatsu and foot reflexology, ideal after shopping. Reservations recommended.",
      "tags": [ "Osaka", "Shiatsu", "Foot reflexology", "Reservations" ],
      "hours": "12:00–03:00"
    },
    "ja": {
      "name": "Lyre 心斎橋筋店",
      "area": "心斎橋筋",
      "desc": "大阪・心斎橋筋の提携マッサージ店。全身指圧・足つぼ、ショッピングの合間に。ご予約をおすすめします。",
      "tags": [ "大阪", "指圧", "足つぼ", "要予約" ],
      "hours": "12:00–翌3:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  },
  {
    "id": "o110",
    "cat": "spa",
    "orderAll": 55,
    "orderCat": 6,
    "rec": false,
    "img": "images/57",
    "storeCoords": { "lat": 34.6737693, "lon": 135.5030322 },
    "zh": {
      "name": "安和居東心斎橋店 AWAKYO HIGASI Reflexology",
      "area": "东心斋桥",
      "desc": "大阪东心斋桥合作足疗 reflexology 店，专注足底反射疗法与全身按摩。建议提前预约。",
      "tags": [ "大阪", "足疗", "反射疗法", "预约制" ],
      "hours": "11:00–翌2:00"
    },
    "en": {
      "name": "AWAKYO HIGASHI Reflexology",
      "area": "East Shinsaibashi",
      "desc": "Partner reflexology salon in East Shinsaibashi — foot reflexology and full-body massage. Reservations recommended.",
      "tags": [ "Osaka", "Foot reflexology", "Massage", "Reservations" ],
      "hours": "11:00–02:00"
    },
    "ja": {
      "name": "安和居東心斎橋店 AWAKYO HIGASI Reflexology",
      "area": "東心斎橋",
      "desc": "大阪・東心斎橋の提携リフレクソロジー店。足つぼ反射療法・全身マッサージ。ご予約をおすすめします。",
      "tags": [ "大阪", "足つぼ", "リフレクソロジー", "要予約" ],
      "hours": "11:00–翌2:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  },
  {
    "id": "o111",
    "cat": "spa",
    "orderAll": 56,
    "orderCat": 7,
    "rec": false,
    "img": "images/58",
    "storeCoords": { "lat": 34.6761912, "lon": 135.5014902 },
    "zh": {
      "name": "安和居 心斎橋 ANWAKYO Shinsaibashi",
      "area": "心斋桥",
      "desc": "大阪心斋桥合作足疗按摩店，提供足底反射疗法与全身放松按摩。建议提前预约。",
      "tags": [ "大阪", "足疗", "反射疗法", "预约制" ],
      "hours": "11:00–翌2:00"
    },
    "en": {
      "name": "ANWAKYO Shinsaibashi",
      "area": "Shinsaibashi",
      "desc": "Partner reflexology salon in Shinsaibashi — foot reflexology and relaxing full-body massage. Reservations recommended.",
      "tags": [ "Osaka", "Foot reflexology", "Massage", "Reservations" ],
      "hours": "11:00–02:00"
    },
    "ja": {
      "name": "安和居 心斎橋 ANWAKYO Shinsaibashi",
      "area": "心斎橋",
      "desc": "大阪・心斎橋の提携足療マッサージ店。足つぼ反射療法・全身リラクゼーション。ご予約をおすすめします。",
      "tags": [ "大阪", "足つぼ", "リフレクソロジー", "要予約" ],
      "hours": "11:00–翌2:00"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  },
  {
    "id": "o112",
    "cat": "kimono",
    "orderAll": 101,
    "orderCat": 3,
    "rec": false,
    "img": "images/59",
    "storeCoords": { "lat": 34.6675387, "lon": 135.5096056 },
    "zh": {
      "name": "FUTUREKART Osaka 电动卡丁车",
      "area": "心斋桥",
      "desc": "大阪心斋桥周边电动卡丁车城市巡游体验，驾驶卡丁车穿梭大阪街头，独特城市观光方式。建议提前预约。",
      "tags": [ "大阪", "卡丁车", "城市巡游", "预约制" ],
      "hours": "依预约时段"
    },
    "en": {
      "name": "FUTUREKART Osaka – Electric Go-Kart Tour",
      "area": "Shinsaibashi area",
      "desc": "Electric go-kart city tour around Osaka — drive through the streets for a unique sightseeing experience. Reservations recommended.",
      "tags": [ "Osaka", "Go-kart", "City tour", "Reservations" ],
      "hours": "By appointment"
    },
    "ja": {
      "name": "FUTUREKART Osaka 電動ゴーカート",
      "area": "心斎橋エリア",
      "desc": "大阪・心斎橋周辺の電動ゴーカートシティツアー。街を走って楽しむユニークな観光体験。ご予約をおすすめします。",
      "tags": [ "大阪", "ゴーカート", "シティツアー", "要予約" ],
      "hours": "予約制"
    },
    "fromStay": {
      "arashiyama": { "zh": "电车约159分", "en": "~159 min by train", "ja": "電車約159分" },
      "gion": { "zh": "电车约171分", "en": "~171 min by train", "ja": "電車約171分" },
      "higashiyama": { "zh": "电车约174分", "en": "~174 min by train", "ja": "電車約174分" }
    }
  }

];
