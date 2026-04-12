import type { Locale } from './locale'

export type ProgramItem = { title: string; body: string }

export type Messages = {
  skipToMain: string
  headerNavLabel: string
  navAbout: string
  navPrograms: string
  navReviews: string
  navContact: string
  headerCall: string
  langEnglish: string
  langZh: string
  langZhCN: string
  langEnglishShort: string
  langZhShort: string
  langZhCNShort: string
  langSwitchHint: string
  menuOpen: string
  menuClose: string
  heroEyebrow: string
  heroTitleBefore: string
  heroTitleAccent: string
  heroLead: string
  heroCtaCall: string
  heroCtaContact: string
  aboutTitle: string
  aboutCopy: string
  aboutFactsLabel: string
  aboutHours: string
  aboutHoursDetail: string
  aboutAges: string
  aboutLocation: string
  programsTitle: string
  programsIntro: string
  programsItems: ProgramItem[]
  reviewsTitle: string
  reviewsIntro: string
  reviewsEmpty: string
  reviewsBadgeGoogle: string
  reviewsGoogleCta: string
  contactTitle: string
  contactCardTitle: string
  contactNote: string
  contactMapsLink: string
  mapIframeTitle: string
  footerRights: string
  photoStripTitle: string
  photoStripIntro: string
}

const en: Messages = {
  skipToMain: 'Skip to main content',
  headerNavLabel: 'Primary',
  navAbout: 'About',
  navPrograms: 'Programs',
  navReviews: 'Reviews',
  navContact: 'Contact',
  headerCall: 'Call',
  langEnglish: 'English',
  langZh: '繁體中文',
  langZhCN: '简体中文',
  langEnglishShort: 'EN',
  langZhShort: '繁',
  langZhCNShort: '简',
  langSwitchHint: 'Language',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  heroEyebrow: 'Licensed family child care · San Leandro',
  heroTitleBefore: 'Where kids feel at',
  heroTitleAccent: 'home',
  heroLead: 'Warm, safe care where little ones learn through play.',
  heroCtaCall: 'Call',
  heroCtaContact: 'Visit & hours',
  aboutTitle: 'A cozy place to grow',
  aboutCopy:
    'At Selina Li Daycare, we welcome each child into a warm, structured environment where curiosity is celebrated and routines help everyone feel secure. We partner with families in San Leandro and nearby communities to support social, emotional, and early learning milestones—always with patience and plenty of smiles.',
  aboutFactsLabel: 'Quick facts',
  aboutHours: 'Hours:',
  aboutHoursDetail:
    'Weekdays open from 7:00 AM (full weekly schedule — closing times TBD)',
  aboutAges:
    'Ages served: TBD — please call to ask about current openings',
  aboutLocation: 'Location: 1267 Avon Ave, San Leandro, CA 94579',
  programsTitle: 'What we offer',
  programsIntro:
    'Programs are tailored to the children enrolled—ask about our current curriculum focus when you call.',
  programsItems: [
    {
      title: 'Daily rhythm',
      body: 'Predictable routines for meals, rest, and play help children feel confident and ready to explore.',
    },
    {
      title: 'Safe & nurturing',
      body: 'A home-like setting with attentive supervision so you can focus on your day with peace of mind.',
    },
    {
      title: 'Learning through play',
      body: 'Stories, songs, art, and motor activities that build language, social skills, and creativity.',
    },
  ],
  reviewsTitle: 'What families say',
  reviewsIntro:
    'Highlights from reviews parents have shared on Google. For full text and the latest ratings, use the button below.',
  reviewsEmpty:
    'Review quotes will appear here once added. Meanwhile, see live feedback on Google.',
  reviewsBadgeGoogle: 'Google',
  reviewsGoogleCta: 'Read all reviews on Google',
  contactTitle: 'Visit & contact',
  contactCardTitle: 'Get in touch',
  contactNote:
    'Call to ask about enrollment, ages, and the full weekly schedule.',
  contactMapsLink: 'Open in Google Maps',
  mapIframeTitle:
    'Map of Selina Li Daycare at 1267 Avon Ave, San Leandro',
  footerRights: 'All rights reserved.',
  photoStripTitle: 'Fun & smiles',
  photoStripIntro:
    'A peek at the kinds of play, creativity, and joy we love to nurture every day.',
}

const zhTW: Messages = {
  skipToMain: '跳至主要內容',
  headerNavLabel: '主要選單',
  navAbout: '關於我們',
  navPrograms: '課程與照顧',
  navReviews: '家長評價',
  navContact: '聯絡方式',
  headerCall: '電話',
  langEnglish: 'English',
  langZh: '繁體中文',
  langZhCN: '简体中文',
  langEnglishShort: 'EN',
  langZhShort: '繁',
  langZhCNShort: '简',
  langSwitchHint: '語言',
  menuOpen: '開啟選單',
  menuClose: '關閉選單',
  heroEyebrow: '合格家庭式托兒 · 聖利安卓',
  heroTitleBefore: '讓孩子們感受',
  heroTitleAccent: '家的溫暖',
  heroLead: '溫馨、安全的照顧，讓孩子在遊戲中學習與成長。',
  heroCtaCall: '撥打電話',
  heroCtaContact: '參觀與時間',
  aboutTitle: '安心成長的小天地',
  aboutCopy:
    '在 Selina Li Daycare，我們歡迎每位孩子來到溫暖而有規律的環境，鼓勵好奇心，也透過固定作息讓大家更有安全感。我們與聖利安卓及鄰近家庭合作，支持孩子的社交、情緒與早期學習發展——永遠帶著耐心與笑容。',
  aboutFactsLabel: '重點資訊',
  aboutHours: '時間：',
  aboutHoursDetail:
    '平日上午 7:00 起開放（完整週間作息與結束時間請來電確認）',
  aboutAges: '收托年齡：請來電洽詢目前缺額與收托對象',
  aboutLocation: '地址：1267 Avon Ave, San Leandro, CA 94579',
  programsTitle: '我們提供的照顧',
  programsIntro:
    '依目前入園孩子調整內容，歡迎來電了解近期課程與活動重點。',
  programsItems: [
    {
      title: '規律的一天',
      body: '用餐、休息與遊戲有固定節奏，幫助孩子建立自信並樂於探索。',
    },
    {
      title: '安全與陪伴',
      body: '像家一樣的環境與細心看顧，讓您能安心處理白天的大小事。',
    },
    {
      title: '玩中學習',
      body: '故事、兒歌、美勞與肢體活動，培養語言、社交與創造力。',
    },
  ],
  reviewsTitle: '家長怎麼說',
  reviewsIntro:
    '以下為家長在 Google 上分享的評價摘錄；完整內容與最新評分請點下方按鈕。',
  reviewsEmpty:
    '評價摘錄將於更新後顯示。您也可先到 Google 瀏覽最新回饋。',
  reviewsBadgeGoogle: 'Google',
  reviewsGoogleCta: '在 Google 查看所有評論',
  contactTitle: '參觀與聯絡',
  contactCardTitle: '與我們聯繫',
  contactNote:
    '歡迎來電詢問入園、收托年齡與完整一週的開放時間。',
  contactMapsLink: '在 Google 地圖開啟',
  mapIframeTitle: 'Selina Li Daycare 位置：1267 Avon Ave, San Leandro',
  footerRights: '版權所有。',
  photoStripTitle: '歡笑與玩樂',
  photoStripIntro:
    '看看孩子們在遊戲、創作與互動中，每天都充滿笑容與活力。',
}

const zhCN: Messages = {
  skipToMain: '跳至主要内容',
  headerNavLabel: '主导航',
  navAbout: '关于我们',
  navPrograms: '课程与照护',
  navReviews: '家长评价',
  navContact: '联系方式',
  headerCall: '电话',
  langEnglish: 'English',
  langZh: '繁體中文',
  langZhCN: '简体中文',
  langEnglishShort: 'EN',
  langZhShort: '繁',
  langZhCNShort: '简',
  langSwitchHint: '语言',
  menuOpen: '打开菜单',
  menuClose: '关闭菜单',
  heroEyebrow: '持证家庭式托儿 · 圣利安德罗',
  heroTitleBefore: '让孩子们感受',
  heroTitleAccent: '家的温暖',
  heroLead: '温馨、安全的照护，让孩子在游戏中学习与成长。',
  heroCtaCall: '拨打电话',
  heroCtaContact: '参观与时间',
  aboutTitle: '安心成长的小天地',
  aboutCopy:
    '在 Selina Li Daycare，我们欢迎每个孩子来到温暖而有规律的环境，鼓励好奇心，也通过固定作息让大家更有安全感。我们与圣利安德罗及邻近家庭合作，支持孩子的社交、情绪与早期学习发展——永远带着耐心与笑容。',
  aboutFactsLabel: '重点信息',
  aboutHours: '时间：',
  aboutHoursDetail:
    '平日上午 7:00 起开放（完整周间作息与结束时间请来电确认）',
  aboutAges: '收托年龄：请来电咨询目前名额与收托对象',
  aboutLocation: '地址：1267 Avon Ave, San Leandro, CA 94579',
  programsTitle: '我们提供的照护',
  programsIntro:
    '依目前在园孩子调整内容，欢迎来电了解近期课程与活动重点。',
  programsItems: [
    {
      title: '规律的一天',
      body: '用餐、休息与游戏有固定节奏，帮助孩子建立自信并乐于探索。',
    },
    {
      title: '安全与陪伴',
      body: '像家一样的环境与细心看护，让您能安心处理白天的大小事。',
    },
    {
      title: '玩中学习',
      body: '故事、儿歌、美工与肢体活动，培养语言、社交与创造力。',
    },
  ],
  reviewsTitle: '家长怎么说',
  reviewsIntro:
    '以下为家长在 Google 上分享的评价摘录；完整内容与最新评分请点击下方按钮。',
  reviewsEmpty:
    '评价摘录将于更新后显示。您也可先到 Google 浏览最新反馈。',
  reviewsBadgeGoogle: 'Google',
  reviewsGoogleCta: '在 Google 查看所有评论',
  contactTitle: '参观与联络',
  contactCardTitle: '与我们联系',
  contactNote:
    '欢迎来电咨询入园、收托年龄与完整一周的开放时间。',
  contactMapsLink: '在 Google 地图打开',
  mapIframeTitle: 'Selina Li Daycare 位置：1267 Avon Ave, San Leandro',
  footerRights: '版权所有。',
  photoStripTitle: '欢笑与玩乐',
  photoStripIntro:
    '看看孩子们在游戏、创作与互动中，每天都充满笑容与活力。',
}

export const messagesByLocale: Record<Locale, Messages> = {
  en,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
}
