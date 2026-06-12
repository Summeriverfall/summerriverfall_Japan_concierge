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
 * img: 本地路径如 'images/spa1.jpg'，或 https 参考图（上线建议换自有／授权图）
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
      "area": "東山七条",
      "desc": "精选和牛烧肉专门店，食材新鲜，适合家庭或团体聚餐，建议提前预约。",
      "tags": ["和牛", "家庭友好", "预约制"],
      "hours": "17:00–23:00"
    },
    "en": {
      "name": "Ryuho Yakiniku",
      "area": "Higashiyama Shichijo",
      "desc": "Yakiniku restaurant featuring premium Japanese wagyu beef. Great for family dinners or group gatherings. Reservations recommended.",
      "tags": ["Wagyu", "Family friendly", "Reservations"],
      "hours": "17:00–23:00"
    },
    "ja": {
      "name": "焼肉処 竜宝",
      "area": "東山七条",
      "desc": "厳選された和牛を使った焼肉専門店。ファミリーや団体のお食事に最適。予約をお勧めします。",
      "tags": ["和牛", "ファミリー可", "要予約"],
      "hours": "17:00–23:00"
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
      "area": "東山",
      "desc": "以鳗鱼料理与割烹著称的老铺，传统京都风味，午餐与晚餐均需提前预约。",
      "tags": ["预约制", "鳗鱼料理", "京都传统"],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "en": {
      "name": "Eel & Kappo Toishi",
      "area": "Higashiyama",
      "desc": "Renowned for eel cuisine and kappo-style Japanese cooking, this traditional Kyoto restaurant requires advance reservations for both lunch and dinner.",
      "tags": ["Reservation required", "Eel cuisine", "Kappo"],
      "hours": "11:30–14:00 / 17:00–22:00"
    },
    "ja": {
      "name": "鰻・割烹 戸石",
      "area": "東山",
      "desc": "鰻料理と割烹で知られる老舗。伝統的な京都の味わいを昼・夜ともにお楽しみいただけます。要予約。",
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
    "zh":{"name":"火焱山炭火串焼 羊肉串","area":"祇园","desc":"正宗炭火羊肉串烧烤店，热闹的中国风格聚餐体验，适合多人用餐。","tags":["炭火烤串","羊肉串","多人聚餐"],"hours":"17:00–00:00"},
    "en":{"name":"Kayazan Charcoal Grill","area":"Gion","desc":"Authentic charcoal-grilled lamb skewers in a lively Chinese BBQ-style setting, ideal for group dining.","tags":["Charcoal grill","Lamb skewers","Group dining"],"hours":"17:00–00:00"},
    "ja":{"name":"火焱山炭火串焼 羊肉串","area":"祇園","desc":"本格炭火串焼き店。にぎやかな中国式BBQスタイルでグループでの食事に最適。","tags":["炭火串焼き","羊肉","グループ向け"],"hours":"17:00–00:00"},
    "fromStay":{"higashiyama":{"zh":"步行约15分","en":"~15 min walk","ja":"徒歩約15分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s26","cat":"dining","orderAll":16,"orderCat":7,"rec":false,
    "img":"images/togiya",
    "storeCoords":{"lat":35.01162,"lon":135.76955},
    "zh":{"name":"十祇家 木屋町御池（蔬菜料理居酒屋）","area":"木屋町御池","desc":"以蔬菜料理为特色的精致居酒屋，设有隔间包厢，适合小团体安静用餐。","tags":["蔬菜料理","隔间包厢","精致居酒屋"],"hours":"17:00–23:00"},
    "en":{"name":"Togiya Kiyamachi Oike","area":"Kiyamachi-Oike","desc":"An elegant izakaya specializing in vegetable-forward dishes, with private rooms for small groups.","tags":["Vegetable cuisine","Private rooms","Elegant izakaya"],"hours":"17:00–23:00"},
    "ja":{"name":"十祇家 木屋町御池個室店","area":"木屋町御池","desc":"野菜ソムリエ監修の野菜料理が楽しめる上質な居酒屋。個室あり、少人数向け。","tags":["野菜料理","個室あり","上質居酒屋"],"hours":"17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"步行约10分","en":"~10 min walk","ja":"徒歩約10分"},"gion":{"zh":"步行约13分","en":"~13 min walk","ja":"徒歩約13分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s27","cat":"dining","orderAll":6,"orderCat":3,"rec":true,
    "img":"images/dimsum",
    "storeCoords":{"lat":35.0306,"lon":135.7483},
    "zh":{"name":"飲茶 柏三葉 西陣店","area":"西阵","desc":"西阵地区的正宗中式饮茶点心专门店，提供各类蒸点，午餐与晚餐均可预约。","tags":["正宗饮茶","点心专门店","午晚餐"],"hours":"11:30–14:00 / 17:00–20:30"},
    "en":{"name":"Kashimitsuha Nishijin (Dim Sum)","area":"Nishijin","desc":"Authentic Chinese dim sum restaurant in the Nishijin area. Lunch and dinner available; reservations recommended.","tags":["Authentic dim sum","Nishijin","Lunch & dinner"],"hours":"11:30–14:00 / 17:00–20:30"},
    "ja":{"name":"飲茶 柏三葉 西陣店","area":"西陣","desc":"西陣の本格中国式飲茶点心専門店。各種点心を昼・夜ともにお楽しみいただけます。","tags":["本格飲茶","点心専門","昼夜営業"],"hours":"11:30–14:00 / 17:00–20:30"},
    "fromStay":{"higashiyama":{"zh":"电车约20分","en":"~20 min by transit","ja":"電車約20分"},"gion":{"zh":"电车约20分","en":"~20 min by transit","ja":"電車約20分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},

  { "id":"s28","cat":"dining","orderAll":9,"orderCat":8,"rec":false,
    "img":"images/ganko",
    "storeCoords":{"lat":35.01244,"lon":135.76810},
    "zh":{"name":"がんこ 高瀬川二条苑","area":"木屋町二条","desc":"高瀬川二条苑内的传统日式怀石餐厅，历史庭园与京都料理完美融合，适合重要聚餐与商务宴请。","tags":["怀石料理","庭园餐厅","预约制"],"hours":"11:30–22:00"},
    "en":{"name":"Ganko Takasegawa Nijo-en","area":"Kiyamachi Nijo","desc":"Kaiseki restaurant set in a historic garden along the Takase River. A perfect venue for special occasions and business dining.","tags":["Kaiseki","Garden dining","Reservations"],"hours":"11:30–22:00"},
    "ja":{"name":"がんこ 高瀬川二条苑","area":"木屋町二条","desc":"高瀬川沿いの歴史的庭園に佇む本格和食・懐石料理店。特別なお席やおもてなしに最適。","tags":["懐石料理","庭園レストラン","要予約"],"hours":"11:30–22:00"},
    "fromStay":{"higashiyama":{"zh":"步行约12分","en":"~12 min walk","ja":"徒歩約12分"},"gion":{"zh":"步行约15分","en":"~15 min walk","ja":"徒歩約15分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s29","cat":"dining","orderAll":23,"orderCat":11,"rec":false,
    "img":"images/shin",
    "storeCoords":{"lat":35.00551,"lon":135.76856},
    "zh":{"name":"京焼肉 新 先斗町店","area":"先斗町","desc":"先斗町的京都风格烧肉名店，严选和牛配以雅致町家氛围，适合晚餐小酌。","tags":["和牛","先斗町","预约制"],"hours":"17:00–23:00（周六日另有 11:30–15:00）"},
    "en":{"name":"Kyoyakiniku Shin Pontocho","area":"Pontocho","desc":"Kyoto-style yakiniku restaurant in Pontocho, serving select wagyu in an elegant machiya setting. Perfect for dinner.","tags":["Wagyu","Pontocho","Reservations"],"hours":"17:00–23:00 (Sat & Sun also 11:30–15:00)"},
    "ja":{"name":"京焼肉 新 先斗町店","area":"先斗町","desc":"先斗町の京風焼肉店。厳選和牛を町家の風情ある空間で楽しめる。ディナーにおすすめ。","tags":["和牛","先斗町","要予約"],"hours":"17:00–23:00（土日は11:30–15:00も営業）"},
    "fromStay":{"higashiyama":{"zh":"步行约16分","en":"~16 min walk","ja":"徒歩約16分"},"gion":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s30","cat":"dining","orderAll":24,"orderCat":1,"rec":false,
    "img":"images/bamboo",
    "storeCoords":{"lat":35.00936,"lon":135.77624},
    "zh":{"name":"お料理 晩boo 本店","area":"东山三条","desc":"东山三条的人气创作和食居酒屋，时令食材搭配日本酒，氛围轻松热闹。","tags":["创作和食","日本酒","人气店"],"hours":"17:00–23:00"},
    "en":{"name":"Bamboo Honten","area":"Higashiyama Sanjo","desc":"Popular creative izakaya in Higashiyama Sanjo, pairing seasonal dishes with sake in a lively, casual atmosphere.","tags":["Creative dishes","Sake","Popular spot"],"hours":"17:00–23:00"},
    "ja":{"name":"お料理 晩boo 本店","area":"東山三条","desc":"東山三条の人気創作和食居酒屋。旬の食材と日本酒をカジュアルな雰囲気で楽しめる。","tags":["創作和食","日本酒","人気店"],"hours":"17:00–23:00"},
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
    "zh":{"name":"個室焼肉 萬","area":"乌丸御池","desc":"全包厢式烧肉店，私密性好，严选和牛适合家庭聚餐或朋友小聚。","tags":["全包厢","和牛","私密聚餐"],"hours":"11:00–15:00 / 17:00–23:00"},
    "en":{"name":"Private Room Yakiniku Yorozu","area":"Karasuma-Oike","desc":"Yakiniku restaurant with all-private rooms. Select wagyu in an intimate setting, great for families or small groups.","tags":["Private rooms","Wagyu","Intimate dining"],"hours":"11:00–15:00 / 17:00–23:00"},
    "ja":{"name":"個室焼肉 萬","area":"烏丸御池","desc":"全席個室の焼肉店。厳選和牛をプライベートな空間で。家族や友人との集まりに最適。","tags":["全席個室","和牛","プライベート"],"hours":"11:00–15:00 / 17:00–23:00"},
    "fromStay":{"higashiyama":{"zh":"电车约15分","en":"~15 min by transit","ja":"電車約15分"},"gion":{"zh":"电车约15分","en":"~15 min by transit","ja":"電車約15分"},"arashiyama":{"zh":"电车约25分","en":"~25 min by train","ja":"電車約25分"}}},

  { "id":"s33","cat":"dining","orderAll":27,"orderCat":5,"rec":false,
    "img":"images/torihisa",
    "storeCoords":{"lat":35.00492,"lon":135.77651},
    "zh":{"name":"鳥久","area":"祇园","desc":"传统日式鸡料理老铺，招牌烤鸡与鸡肉锅风味地道，京都老店氛围浓厚。","tags":["鸡料理","老铺","京都传统"],"hours":"11:00–22:00"},
    "en":{"name":"Torihisa","area":"Gion","desc":"Traditional Japanese chicken restaurant. Signature grilled chicken and chicken hot pot in a classic old-Kyoto atmosphere.","tags":["Chicken cuisine","Long-established","Traditional"],"hours":"11:00–22:00"},
    "ja":{"name":"鳥久","area":"祇園","desc":"伝統的な鶏料理の老舗。名物の焼き鳥と鶏鍋を京都らしい趣のある空間で味わえる。","tags":["鶏料理","老舗","京都伝統"],"hours":"11:00–22:00"},
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
    "zh":{"name":"招牌餐厅「八坂」","area":"二宁坂","desc":"柏悦酒店内的招牌日本料理餐厅，吧台席可近眺八坂塔，提供精致会席套餐，分两轮入座。","tags":["酒店餐厅","八坂塔景观","预约制"],"hours":"17:00–19:30 / 20:00–22:30"},
    "en":{"name":"Signature Restaurant Yasaka","area":"Ninenzaka","desc":"Signature Japanese restaurant at Park Hyatt Kyoto. Counter seats overlook Yasaka Pagoda; refined kaiseki courses served in two seatings.","tags":["Hotel dining","Pagoda view","Reservations"],"hours":"17:00–19:30 / 20:00–22:30"},
    "ja":{"name":"シグネチャーレストラン「八坂」","area":"二寧坂","desc":"パークハイアット京都のシグネチャーレストラン。カウンターから八坂の塔を望み、上質な会席コースを二部制で提供。","tags":["ホテルダイニング","八坂の塔ビュー","要予約"],"hours":"17:00–19:30 / 20:00–22:30"},
    "fromStay":{"higashiyama":{"zh":"步行约19分","en":"~19 min walk","ja":"徒歩約19分"},"gion":{"zh":"步行约9分","en":"~9 min walk","ja":"徒歩約9分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s37","cat":"dining","orderAll":31,"orderCat":13,"rec":false,
    "img":"images/endo",
    "storeCoords":{"lat":34.99889,"lon":135.77508},
    "zh":{"name":"天ぷら圓堂 八坂本店 北邸","area":"祇园","desc":"祇园著名天妇罗老铺，主厨现场逐道酥炸时令食材，午晚均有套餐，建议提前预约。","tags":["天妇罗","老铺名店","预约制"],"hours":"11:00–15:30 / 17:00–21:30"},
    "en":{"name":"Tempura Endo Yasaka (North)","area":"Gion","desc":"Renowned tempura house in Gion. Seasonal ingredients fried course-by-course before your eyes. Lunch and dinner sets; book ahead.","tags":["Tempura","Famed house","Reservations"],"hours":"11:00–15:30 / 17:00–21:30"},
    "ja":{"name":"京都祇園 天ぷら圓堂 八坂本店 北邸","area":"祇園","desc":"祇園の名門天ぷら店。旬の食材を目の前で一品ずつ揚げるコーススタイル。昼夜ともに要予約。","tags":["天ぷら","名店","要予約"],"hours":"11:00–15:30 / 17:00–21:30"},
    "fromStay":{"higashiyama":{"zh":"步行约20分","en":"~20 min walk","ja":"徒歩約20分"},"gion":{"zh":"步行约7分","en":"~7 min walk","ja":"徒歩約7分"},"arashiyama":{"zh":"电车约30分","en":"~30 min by train","ja":"電車約30分"}}},

  { "id":"s38","cat":"dining","orderAll":32,"orderCat":2,"rec":false,
    "img":"images/juju",
    "storeCoords":{"lat":35.00900,"lon":135.78260},
    "zh":{"name":"とんかつ寿樹 三条神宮道店","area":"三条神宫道","desc":"高级炸猪排专门店，严选品牌猪肉低温酥炸，外脆内嫩，午市套餐性价比高。","tags":["炸猪排","品牌猪肉","午市套餐"],"hours":"11:30–15:00 / 17:00–20:00"},
    "en":{"name":"Tonkatsu JuJu Sanjo-Jingumichi","area":"Sanjo Jingumichi","desc":"Premium pork cutlet specialist. Select brand pork fried to a crisp outside and tender inside. Great-value lunch sets.","tags":["Tonkatsu","Premium pork","Lunch sets"],"hours":"11:30–15:00 / 17:00–20:00"},
    "ja":{"name":"とんかつ寿樹 三条神宮道店","area":"三条神宮道","desc":"プレミアムとんかつ専門店。厳選銘柄豚を低温でサクッと揚げ、中はジューシー。ランチセットもお得。","tags":["とんかつ","銘柄豚","ランチあり"],"hours":"11:30–15:00 / 17:00–20:00"},
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
    "fromStay":{"higashiyama":{"zh":"","en":"","ja":""},"gion":{"zh":"","en":"","ja":""},"arashiyama":{"zh":"","en":"","ja":""}}}
];