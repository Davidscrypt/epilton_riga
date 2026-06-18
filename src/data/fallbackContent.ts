export type Lang = "ru" | "lv";

type Localized = Record<Lang, string>;

export const fallbackContent = {
  brand: "EPIL_TON",
  links: {
    booking: "https://dikidi.net/1941764?p=0.pi",
    instagram: "https://www.instagram.com/epil_ton_riga/",
    whatsapp: "https://wa.me/37120654575",
    facebook: "https://www.facebook.com/share/1EuQs84EwG/?mibextid=wwXIfr",
    maps:
      "https://www.google.com/maps/search/?api=1&query=Kurzemes%20prospekts%2015b%2C%20Riga%2C%20Latvia",
  },
  logo: {
    image_url: "/images/brand/epil-ton-logo.png",
    fallback: "EPIL_TON",
  },
  nav: {
    ru: ["Главная", "О студии", "Услуги", "Цены", "Специалисты", "Запись", "Контакты"],
    lv: ["Sākums", "Par studiju", "Pakalpojumi", "Cenas", "Speciālisti", "Pieraksts", "Kontakti"],
  } satisfies Record<Lang, string[]>,
  seo: {
    ru: {
      title: "EPIL_TON — лазерная эпиляция, массаж и ваксинг в Риге",
      description:
        "Студия EPIL_TON предлагает лазерную эпиляцию, массаж, Vela Shape и ваксинг по адресу Kurzemes prospekts 15b, Riga.",
    },
    lv: {
      title: "EPIL_TON — lāzerepilācija, masāža un vaksācija Rīgā",
      description:
        "EPIL_TON studija piedāvā lāzerepilāciju, masāžu, Vela Shape un vaksāciju adresē Kurzemes prospekts 15b, Riga.",
    },
  },
  hero: {
    image_url:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85",
    ru: {
      eyebrow: "Премиальная студия красоты",
      title: "EPIL_TON",
      subtitle: "Студия ухода за телом и восстановлением в Риге",
      description:
        "Лазерная эпиляция, ваксинг, массаж и процедуры для тела в комфортной студии.",
      status: "Запись открыта",
      address: "Kurzemes prospekts 15b, Riga, Latvia",
      primary: "Записаться на процедуру",
      secondary: "Смотреть услуги",
      tags: ["Массаж", "Vela Shape", "Лазерная эпиляция", "Ваксинг"],
    },
    lv: {
      eyebrow: "Premium skaistuma studija",
      title: "EPIL_TON",
      subtitle: "Ķermeņa kopšanas un atjaunošanas studija Rīgā",
      description:
        "Lāzerepilācija, vaksācija, masāža un ķermeņa procedūras komfortablā studijā.",
      status: "Pieraksts ir atvērts",
      address: "Kurzemes prospekts 15b, Riga, Latvia",
      primary: "Pierakstīties procedūrai",
      secondary: "Skatīt pakalpojumus",
      tags: ["Masāža", "Vela Shape", "Lāzerepilācija", "Vaksācija"],
    },
  },
  about: {
    image_url:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=85",
    ru: {
      title: "О студии",
      text: [
        "EPIL_TON — пространство заботы о теле, красоте и восстановлении. Здесь сочетаются эстетика, комфорт и индивидуальный подход.",
        "Мы помогаем ухаживать за собой через современные процедуры, внимательный сервис и спокойную атмосферу. Каждый визит — это время для себя, красоты и уверенности.",
      ],
    },
    lv: {
      title: "Par studiju",
      text: [
        "EPIL_TON ir ķermeņa kopšanas, skaistuma un atjaunošanās telpa. Šeit apvienojas estētika, komforts un individuāla pieeja.",
        "Mēs palīdzam rūpēties par sevi ar mūsdienīgām procedūrām, uzmanīgu servisu un mierīgu atmosfēru. Katrs apmeklējums ir laiks sev, skaistumam un pārliecībai.",
      ],
    },
  },
  benefits: [
    {
      ru: ["Индивидуальный подход", "Каждая процедура адаптирована под ваши потребности."],
      lv: ["Individuāla pieeja", "Katra procedūra tiek pielāgota jūsu vajadzībām."],
    },
    {
      ru: ["Комфортная атмосфера", "Уютное пространство для полного расслабления."],
      lv: ["Komfortabla atmosfēra", "Mājīga vide pilnīgai atpūtai."],
    },
    {
      ru: ["Современные процедуры", "Новейшее оборудование и профессиональные методики."],
      lv: ["Mūsdienīgas procedūras", "Moderns aprīkojums un profesionālas metodes."],
    },
    {
      ru: ["Удобная запись", "Гибкий график и быстрое бронирование."],
      lv: ["Ērts pieraksts", "Elastīgs grafiks un ātra rezervācija."],
    },
  ],
  services: [
    {
      id: "laser",
      icon: "sparkles",
      image_url:
        "/images/services/laser.webp",
      ru: {
        title: "Лазерная эпиляция",
        description:
          "Современное решение для гладкой кожи и комфортного удаления нежелательных волос.",
        price: "от 20 €",
      },
      lv: {
        title: "Lāzerepilācija",
        description: "Mūsdienīgs risinājums gludai ādai un komfortablai nevēlama apmatojuma noņemšanai.",
        price: "no 20 €",
      },
    },
    {
      id: "massage",
      icon: "hand",
      image_url:
        "/images/services/massage.webp",
      ru: {
        title: "Классический массаж",
        description: "Классические процедуры для лица, спины и всего тела.",
        price: "от 25 €",
      },
      lv: {
        title: "Klasiskā masāža",
        description: "Klasiskas procedūras sejai, mugurai un visam ķermenim.",
        price: "no 25 €",
      },
    },
    {
      id: "vela_body",
      icon: "waves",
      image_url:
        "/images/services/vela-body.webp",
      ru: {
        title: "Вела шейп - тело",
        description: "Аппаратная процедура для коррекции тела и тонуса кожи.",
        price: "от 25 €",
      },
      lv: {
        title: "Vela Shape ķermenim",
        description: "Aparātprocedūra ķermeņa korekcijai un ādas tonusam.",
        price: "no 25 €",
      },
    },
    {
      id: "waxing",
      icon: "flower",
      image_url:
        "/images/services/waxing.webp",
      ru: {
        title: "Ваксация",
        description: "Быстрый и аккуратный способ удаления волос с длительным результатом.",
        price: "от 5 €",
      },
      lv: {
        title: "Vaksācija",
        description: "Ātrs un precīzs matiņu noņemšanas veids ar ilgstošu rezultātu.",
        price: "no 5 €",
      },
    },
    {
      id: "vela_face",
      icon: "waves",
      image_url:
        "/images/services/vela-face.webp",
      ru: {
        title: "Вела шейп - лицо",
        description: "RF-лифтинг и вакуумная процедура для зоны лица, шеи и декольте.",
        price: "от 30 €",
      },
      lv: {
        title: "Vela Shape sejai",
        description: "RF liftings un vakuuma procedūra sejas, kakla un dekoltē zonai.",
        price: "no 30 €",
      },
    },
    {
      id: "sets",
      icon: "badge",
      image_url:
        "/images/services/sets.webp",
      ru: {
        title: "Выгодные комплекты",
        description: "Специальные наборы процедур по приятной цене и с экономией.",
        price: "Выгодно",
      },
      lv: {
        title: "Izdevīgi komplekti",
        description: "Īpaši procedūru komplekti par izdevīgu cenu.",
        price: "Izdevīgi",
      },
    },
  ],
  priceCategories: [
    {
      ru: "Знакомство с мастером",
      lv: "Iepazīšanās ar meistari",
      items: [
        ["Ознакомительная процедура Vela Shape 5 in 1", "Iepazīšanās procedūra Vela Shape 5 in 1", "32 EUR", "1 h"],
        ["Лазерная эпиляция глубокое бикини + подмышки", "Lāzerepilācija dziļais bikini + paduses", "69 EUR", "50 min"],
        ["Первый визит глубокое бикини", "Pirmās apmeklējums dziļais bikini", "50 EUR", "35 min"],
        ["Первый визит на подмышки", "Pirmās apmeklējums paduses", "20 EUR", "20 min"],
      ],
    },
    {
      ru: "Комплекты лазерной эпиляции",
      lv: "Lāzerepilācijas komplekti",
      items: [
        ["Глубокое бикини + межъягодичная зона + подмышки", "Dziļais bikini + sēžas intīmā zona + paduses", "85 EUR", "45 min"],
        ["Глубокое бикини + межъягодичная зона + подмышки + голени", "Dziļais bikini + sēžas intīmā zona + paduses + apakšstilbi", "125 EUR", "1 h 10 min"],
        ["Подмышки + бикини + ноги полностью", "Paduses + dziļais bikini + kājas visā garumā", "145 EUR", "1 h 25 min"],
        ["Ноги полностью + подмышки", "Kājas visā garumā + paduses", "105 EUR", "55 min"],
        ["Голени или бедра с коленями + глубокое бикини", "Apakšstilbi vai augšstilbi ar ceļgaliem + dziļais bikini", "110 EUR", "55 min"],
        ["Голени или бедра с коленями + подмышки", "Apakšstilbi vai augšstilbi ar ceļgaliem + paduses", "85 EUR", "40 min"],
        ["Ноги полностью + глубокое бикини + межъягодичная зона", "Kājas visā garumā + dziļais bikini + sēžas intīmā zona", "125 EUR", "1 h 5 min"],
        ["Подмышки + классический бикини + ноги полностью", "Paduses + klasiskais bikini + kājas visā garumā", "120 EUR", "1 h 30 min"],
      ],
    },
    {
      ru: "Комплекты массажа",
      lv: "Masāžas komplekti",
      items: [
        ["Glow & Relax: массаж спины + массаж лица и декольте с маской", "Glow & Relax: muguras masāža + sejas un dekoltē masāža ar masku", "55 EUR", "1 h 15 min", "https://dikidi.net/1941764?p=1.pi-ssm-sd&s=22164721&rl=0_0"],
        ["Total relax: массаж тела + массаж лица и декольте с маской", "Total relax: ķermeņa masāža + sejas un dekoltē masāža ar masku", "69 EUR", "1 h 40 min"],
      ],
    },
    {
      ru: "Комплекты ваксинга",
      lv: "Vaksācijas komplekti",
      items: [
        ["Комплект L: подмышки + глубокое бикини + ноги полностью", "Komplekts L: paduses + dziļais bikini + kājas visā garumā", "55 EUR", "1 h 10 min"],
        ["Комплект M: подмышки + глубокое бикини + голени", "Komplekts M: paduses + dziļais bikini + apakšstilbi ar ceļgaliem", "45 EUR", "55 min"],
        ["Комплект S: подмышки + глубокое бикини", "Komplekts S: paduses + dziļais bikini", "35 EUR", "40 min"],
      ],
    },
    {
      ru: "Лазерная эпиляция",
      lv: "Lāzerepilācija",
      items: [
        ["Голени с коленом", "Apakšstilbi ar ceļiem", "65 EUR", "25 min"],
        ["Бедра с коленями", "Augšstilbi ar ceļgaliem", "65 EUR", "25 min"],
        ["Бикини классика", "Bikini klasika", "35 EUR", "15 min"],
        ["Ягодицы", "Dibens", "20 EUR", "10 min"],
        ["Глубокое бикини с межъягодичной зоной", "Dziļais bikini ar sēžas intīmo zonu", "65 EUR", "35 min"],
        ["Ноги полностью", "Kājas visā garumā", "85 EUR", "35 min"],
        ["Грудь, ареолы", "Krūtis, areoli", "20 EUR", "20 min"],
        ["Спина, поясница", "Mugura, josta", "30 EUR", "15 min"],
        ["Подмышки", "Paduses", "30 EUR", "15 min"],
        ["Руки до локтя", "Rokas līdz elkonim", "35 EUR", "15 min"],
        ["Руки полностью", "Rokas visā garumā", "55 EUR", "30 min"],
        ["Лицо, щеки", "Seja, vaigi", "25 EUR", "10 min"],
        ["Лицо, усики", "Seja, virslūpa", "25 EUR", "10 min"],
        ["Лицо, подбородок", "Seja, zods", "25 EUR", "15 min"],
        ["Линия живота", "Vēdera līnija", "10 EUR", "10 min"],
        ["Живот", "Vēders", "35 EUR", "15 min"],
      ],
    },
    {
      ru: "Массаж Vela Shape 5 in 1",
      lv: "Masāža Vela Shape 5 in 1",
      items: [
        ["Массаж Vela Shape 5 in 1", "Masāža Vela Shape 5 in 1", "25 EUR", "30 min"],
        ["Массаж Vela Shape 5 in 1", "Masāža Vela Shape 5 in 1", "40 EUR", "1 h"],
      ],
    },
    {
      ru: "Vela Shape лица",
      lv: "Vela Shape sejai",
      items: [
        ["Зона лица", "Sejas zona", "30 EUR", "30 min"],
        ["Зона лица с маской", "Sejas zona ar masku", "35 EUR", "45 min"],
        ["Зона лица + шея с декольте", "Sejas zona + kakla un dekoltē", "40 EUR", "45 min"],
        ["Зона лица + шея с декольте + маска", "Sejas zona + kakla un dekoltē + maska", "45 EUR", "60 min"],
        ["Абонемент: зона лица, 3 посещения", "Abonements: sejas zona, 3 apmeklējumi", "84 EUR", "3 apmeklējumi"],
        ["Абонемент: зона лица, 6 посещений", "Abonements: sejas zona, 6 apmeklējumi", "150 EUR", "6 apmeklējumi"],
        ["Абонемент: зона лица с маской, 3 посещения", "Abonements: sejas zona ar masku, 3 apmeklējumi", "99 EUR", "3 apmeklējumi"],
        ["Абонемент: зона лица с маской, 6 посещений", "Abonements: sejas zona ar masku, 6 apmeklējumi", "180 EUR", "6 apmeklējumi"],
        ["Абонемент: зона лица + шея с декольте, 3 посещения", "Abonements: sejas zona + kakla un dekoltē, 3 apmeklējumi", "114 EUR", "3 apmeklējumi"],
        ["Абонемент: зона лица + шея с декольте, 6 посещений", "Abonements: sejas zona + kakla un dekoltē, 6 apmeklējumi", "210 EUR", "6 apmeklējumi"],
        ["Абонемент: зона лица + шея с декольте + маска, 3 посещения", "Abonements: sejas zona + kakla un dekoltē + maska, 3 apmeklējumi", "129 EUR", "3 apmeklējumi"],
        ["Абонемент: зона лица + шея с декольте + маска, 6 посещений", "Abonements: sejas zona + kakla un dekoltē + maska, 6 apmeklējumi", "240 EUR", "6 apmeklējumi"],
      ],
    },
    {
      ru: "Массаж",
      lv: "Masāža",
      items: [
        ["Классический массаж спины, 30 минут", "Klasiskā muguras masāža, 30 min", "25 EUR", "30 min"],
        ["Классический массаж спины, 60 минут", "Klasiskā muguras masāža, 60 min", "35 EUR", "1 h"],
        ["Классический массаж лица", "Klasiskā sejas masāža", "30 EUR", "30 min"],
        ["Массаж лица и декольте с восстанавливающей маской", "Sejas un dekoltē masāža ar atjaunojošu masku", "38 EUR", "45 min"],
        ["Классический массаж всего тела, 60 минут", "Klasiskā visa ķermeņa masāža, 60 min", "40 EUR", "1 h"],
        ["Классический массаж всего тела, 90 минут", "Klasiskā visa ķermeņa masāža, 90 min", "55 EUR", "1 h 30 min"],
      ],
    },
    {
      ru: "Ваксинг",
      lv: "Vaksācija",
      items: [
        ["Голени с коленом", "Apakšstilbi ar ceļiem", "18 EUR", "20 min"],
        ["Бедра с коленями", "Augšstilbi ar ceļgaliem", "18 EUR", "20 min"],
        ["Бикини классика", "Bikini klasika", "18 EUR", "10 min"],
        ["Ягодицы", "Dibens", "10 EUR", "10 min"],
        ["Глубокое бикини с межъягодичной зоной", "Dziļais bikini ar sēžas intīmo zonu", "28 EUR", "30 min"],
        ["Ноги полностью", "Kājas visā garumā", "28 EUR", "30 min"],
        ["Грудь, ареолы", "Krūtis, areoli", "5 EUR", "10 min"],
        ["Подмышки", "Paduses", "10 EUR", "15 min"],
        ["Руки до локтя", "Rokas līdz elkonim", "from 12 EUR", "10 min"],
        ["Руки полностью", "Rokas visā garumā", "22 EUR", "20 min"],
        ["Лицо, брови", "Seja, uzacis", "5 EUR", "10 min"],
        ["Лицо, щеки", "Seja, vaigi", "5 EUR", "10 min"],
        ["Лицо, усики", "Seja, virslūpa", "5 EUR", "10 min"],
        ["Лицо, подбородок", "Seja, zods", "5 EUR", "10 min"],
        ["Линия живота", "Vēdera līnija", "5 EUR", "10 min"],
        ["Живот", "Vēders", "12 EUR", "20 min"],
      ],
    },
  ],
  specialists: [
    {
      image_url:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85",
      ru: {
        name: "Алина",
        position: "Руководитель",
        description: "Опытный специалист с внимательным подходом к каждому клиенту.",
      },
      lv: {
        name: "Alīna",
        position: "Vadītāja",
        description: "Pieredzējusi speciāliste ar uzmanīgu pieeju katram klientam.",
      },
    },
    {
      image_url:
        "https://images.unsplash.com/photo-1594824388853-d0c2fef6d4e6?auto=format&fit=crop&w=900&q=85",
      ru: {
        name: "Алёна",
        position: "Мастер",
        description:
          "Профессиональный мастер с глубокими знаниями в лазерной эпиляции и процедурах восстановления.",
      },
      lv: {
        name: "Aļona",
        position: "Meistare",
        description:
          "Profesionāla meistare ar padziļinātām zināšanām lāzerepilācijā un atjaunojošās procedūrās.",
      },
    },
  ],
  faq: [
    {
      ru: ["Как записаться?", "Вы можете записаться онлайн через кнопку «Записаться» на сайте, написать нам в WhatsApp или Instagram."],
      lv: ["Kā pierakstīties?", "Jūs varat pierakstīties tiešsaistē, izmantojot pogu «Pierakstīties», vai sazināties ar mums WhatsApp vai Instagram."],
    },
    {
      ru: ["Как выбрать подходящую процедуру?", "Если вы не уверены, какая процедура вам подходит, напишите нам — мы подскажем оптимальный вариант."],
      lv: ["Kā izvēlēties piemērotāko procedūru?", "Ja neesat pārliecināti, kura procedūra jums ir piemērota, uzrakstiet mums — mēs palīdzēsim izvēlēties labāko variantu."],
    },
    {
      ru: ["Можно ли записаться через WhatsApp?", "Да, вы можете написать нам в WhatsApp, и мы поможем выбрать удобное время."],
      lv: ["Vai var pierakstīties caur WhatsApp?", "Jā, jūs varat mums uzrakstīt WhatsApp, un mēs palīdzēsim atrast ērtu laiku."],
    },
    {
      ru: ["Есть ли противопоказания?", "Некоторые процедуры имеют противопоказания. Перед процедурой сообщите мастеру об особенностях вашего здоровья."],
      lv: ["Vai ir kontrindikācijas?", "Dažām procedūrām var būt kontrindikācijas. Pirms procedūras informējiet meistaru par veselības īpatnībām."],
    },
    {
      ru: ["Как подготовиться к процедуре?", "Подготовка зависит от выбранной процедуры. При записи мы подскажем, что нужно сделать заранее."],
      lv: ["Kā sagatavoties procedūrai?", "Sagatavošanās ir atkarīga no izvēlētās procedūras. Pieraksta laikā mēs pastāstīsim, kas jādara iepriekš."],
    },
  ],
  contacts: {
    ru: {
      title: "Контакты",
      subtitle: "Свяжитесь с нами для консультации и бронирования",
      phoneLabel: "Телефон / WhatsApp",
      mapButton: "Открыть в Google Maps",
      bookButton: "Записаться сейчас",
      footerText: "Премиальная студия ухода за телом, лазерной эпиляции, массажа и ваксинга в Риге.",
    },
    lv: {
      title: "Kontakti",
      subtitle: "Sazinieties ar mums konsultācijai un pierakstam",
      phoneLabel: "Tālrunis / WhatsApp",
      mapButton: "Atvērt Google Maps",
      bookButton: "Pierakstīties tagad",
      footerText: "Premium ķermeņa kopšanas, lāzerepilācijas, masāžas un vaksācijas studija Rīgā.",
    },
    address: "Kurzemes prospekts 15b, Riga, Latvia",
    phone: "+371 20654575",
    instagram: "@epil_ton_riga",
    facebook: "EPIL_TON",
  },
  labels: {
    ru: {
      services: "Наши услуги",
      benefits: "Преимущества",
      prices: "Прайс-лист",
      specialists: "Специалисты",
      faq: "FAQ",
      book: "Записаться",
      duration: "Время",
      price: "Цена",
      menu: "Меню",
      close: "Закрыть",
      follow: "Социальные сети",
    },
    lv: {
      services: "Pakalpojumi",
      benefits: "Priekšrocības",
      prices: "Cenas",
      specialists: "Speciālisti",
      faq: "FAQ",
      book: "Pierakstīties",
      duration: "Laiks",
      price: "Cena",
      menu: "Izvēlne",
      close: "Aizvērt",
      follow: "Sociālie tīkli",
    },
  } satisfies Record<Lang, Record<string, string>>,
};
