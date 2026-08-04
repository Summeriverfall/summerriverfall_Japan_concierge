/**
 * clients.js — 酒店 / 民宿客户代码表
 *
 * 用法：
 *   1. 在下方 CLIENTS 数组里加一行（id 用英文小写+下划线）
 *   2. 客服链接带上 ?client=你的id
 *      例：…/booking-cs.html?client=hotel_xxx
 *   3. 打开次数会按 client 分别统计；预约文案会带「我是 xxx 的住客」
 *
 * 门店数据仍共用 stores.js，不必为每个客户复制页面。
 *
 * 字段：
 *   id      链接里的客户代码（必填，仅 a-z 0-9 _ -）
 *   zh/en/ja  三语显示名（预约文案用）
 *   lat/lon   坐标（用于距离排序；没有则客人可选手动定位）
 *   mapsUrl   可选
 *   precise   坐标是否已核对
 */
window.CLIENTS = [
  {
    "id": "higashiyama",
    "zh": "東山民宿",
    "en": "Higashiyama Guesthouse",
    "ja": "東山民宿",
    "lat": 35.01021,
    "lon": 135.77801,
    "mapsUrl": "https://maps.app.goo.gl/zJGmJPxzXJML4NTf8",
    "precise": true
  },
  {
    "id": "gion",
    "zh": "祇園別邸",
    "en": "Gion Bettei",
    "ja": "祇園別邸",
    "lat": 35.00300,
    "lon": 135.77400,
    "mapsUrl": "",
    "precise": false
  },
  {
    "id": "arashiyama",
    "zh": "嵐山山居",
    "en": "Arashiyama Sankyo",
    "ja": "嵐山山居",
    "lat": 35.01600,
    "lon": 135.67300,
    "mapsUrl": "",
    "precise": false
  },
  {
    "id": "private_residence",
    "zh": "Private Residence",
    "en": "Private Residence",
    "ja": "Private Residence",
    "lat": 35.01417,
    "lon": 135.74750,
    "mapsUrl": "https://private-residence.jp/",
    "precise": false
  }
];

/*
  新客户：在上面数组最后一项后面加逗号，再粘贴：

  {
    "id": "hotel_xxx",
    "zh": "XXX酒店",
    "en": "Hotel XXX",
    "ja": "XXXホテル",
    "lat": 35.011,
    "lon": 135.768,
    "mapsUrl": "",
    "precise": false
  }

  链接：booking-cs.html?client=hotel_xxx
*/
