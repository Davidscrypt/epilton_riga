# Google Sheets setup for EPIL_TON

The site keeps the current design and layout. Google Sheets is used only as an editable data source. If Google Sheets is empty, unpublished, or temporarily unavailable, the site automatically uses `src/data/fallbackContent.ts`.

## Environment

Create `.env.local` in the project root if you need to override the default sheet:

```env
NEXT_PUBLIC_GOOGLE_SHEETS_ID=1dt6-1NiNuFOPy-RZRVfrh_lYTLGpPUfkqWPFGWAMF_4
NEXT_PUBLIC_GOOGLE_SHEETS_PUBLISHED_URL=https://docs.google.com/spreadsheets/d/e/2PACX-1vTp-VY-GEDP4OLC9t3LNo1zSTYjwdwD3KwMqQVhzMPi7OaZcCHki9UWGX_1oaocL4VSOcUfiU4WO4FH/pubhtml
```

The public CSV loader uses:

```text
https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet={SHEET_NAME}
```

No API key is required.

## Publish the Sheet

1. Open Google Sheets.
2. Create these tabs exactly: `Settings`, `Services`, `PriceList`, `Specialists`, `FAQ`, `HomepageTexts`.
3. Add the columns shown below.
4. Go to `File` -> `Share` -> `Publish to web`.
5. Publish the whole document.
6. If changes do not appear immediately, wait a minute and refresh the site. Google can cache published CSV output briefly.

## Rules

- `is_active` empty or `true` means show the row.
- `is_active` values `false`, `FALSE`, `0`, `no`, `нет` hide the row.
- `order` controls sorting.
- Empty `image_url` shows the current site placeholder.
- Empty `booking_url` uses `https://dikidi.net/1941764?p=0.pi`.
- Empty text fields fall back to the current site content where possible.
- RU uses columns ending in `_ru`; LV uses columns ending in `_lv`.

## Settings

Columns:

```csv
key,value
```

Example rows:

```csv
key,value
brand,EPIL_TON
booking_url,https://dikidi.net/1941764?p=0.pi
instagram_url,https://www.instagram.com/epil_ton_riga/
whatsapp_url,https://wa.me/37120654575
facebook_url,https://www.facebook.com/share/1EuQs84EwG/?mibextid=wwXIfr
maps_url,https://www.google.com/maps/search/?api=1&query=Kurzemes%20prospekts%2015b%2C%20Riga%2C%20Latvia
address,"Kurzemes prospekts 15b, Riga, Latvia"
phone,+371 20654575
logo_image_url,
```

## Services

Columns:

```csv
id,order,is_active,title_ru,title_lv,description_ru,description_lv,price_ru,price_lv,image_url,booking_url
```

Example rows:

```csv
id,order,is_active,title_ru,title_lv,description_ru,description_lv,price_ru,price_lv,image_url,booking_url
laser,1,true,Лазерная эпиляция,Lāzerepilācija,Современное решение для гладкой кожи и комфортного удаления нежелательных волос.,Mūsdienīgs risinājums gludai ādai un komfortablai nevēlama apmatojuma noņemšanai.,от 20 €,no 20 €,https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85,
waxing,2,true,Ваксинг,Vaksācija,Быстрый и аккуратный способ удаления волос с длительным результатом.,Ātrs un precīzs matiņu noņemšanas veids ar ilgstošu rezultātu.,от 5 €,no 5 €,https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=900&q=85,
massage,3,true,Массаж,Masāža,"Классические и расслабляющие процедуры для лица, спины и всего тела.","Klasiskas un relaksējošas procedūras sejai, mugurai un visam ķermenim.",от 25 €,no 25 €,https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85,
vela,4,true,Vela Shape 5 in 1,Vela Shape 5 in 1,"Аппаратный массаж для коррекции тела, тонуса кожи и знакомства с процедурой.","Aparātiskā masāža ķermeņa korekcijai, ādas tonusam un iepazīšanai ar procedūru.",от 25 €,no 25 €,,
sets,5,true,Выгодные комплексы,Izdevīgi komplekti,Специальные наборы процедур по приятной цене и с экономией.,Īpaši procedūru komplekti par izdevīgu cenu.,Выгодно,Izdevīgi,https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85,
intro,6,true,Знакомство с мастером,Iepazīšanās ar meistari,Первый визит и ознакомительные процедуры для комфортного начала.,Pirmais apmeklējums un iepazīšanās procedūras komfortablam sākumam.,от 20 €,no 20 €,https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=85,
```

## PriceList

Columns:

```csv
id,category_id,category_ru,category_lv,order,is_active,title_ru,title_lv,price,duration,booking_url
```

Example rows:

```csv
id,category_id,category_ru,category_lv,order,is_active,title_ru,title_lv,price,duration,booking_url
intro_vela,intro,Знакомство с мастером,Iepazīšanās ar meistari,1,true,Ознакомительная процедура Vela Shape 5 in 1,Iepazīšanās procedūra Vela Shape 5 in 1,32 EUR,1 h,
intro_bikini,intro,Знакомство с мастером,Iepazīšanās ar meistari,2,true,Первый визит глубокое бикини,Pirmās apmeklējums dziļais bikini,50 EUR,35 min,
intro_underarms,intro,Знакомство с мастером,Iepazīšanās ar meistari,3,true,Первый визит на подмышки,Pirmās apmeklējums paduses,20 EUR,20 min,
laser_set_1,laser_sets,Комплекты лазерной эпиляции,Lāzerepilācijas komplekti,10,true,Глубокое бикини + межъягодичная зона + подмышки,Dziļais bikini + sēžas intīmā zona + paduses,85 EUR,45 min,
laser_set_2,laser_sets,Комплекты лазерной эпиляции,Lāzerepilācijas komplekti,11,true,Глубокое бикини + межъягодичная зона + подмышки + голени,Dziļais bikini + sēžas intīmā zona + paduses + apakšstilbi,125 EUR,1 h 10 min,
massage_total_relax,massage_sets,Комплекты массажа,Masāžas komplekti,20,true,Total relax: массаж тела + массаж лица и декольте с маской,Total relax: ķermeņa masāža + sejas un dekoltē masāža ar masku,69 EUR,1 h 40 min,
wax_set_l,wax_sets,Комплекты ваксинга,Vaksācijas komplekti,30,true,Комплект L: подмышки + глубокое бикини + ноги полностью,Komplekts L: paduses + dziļais bikini + kājas visā garumā,55 EUR,1 h 10 min,
laser_legs,laser,Лазерная эпиляция,Lāzerepilācija,40,true,Ноги полностью,Kājas visā garumā,85 EUR,35 min,
vela_30,vela,Массаж Vela Shape 5 in 1,Masāža Vela Shape 5 in 1,50,true,Массаж Vela Shape 5 in 1,Masāža Vela Shape 5 in 1,25 EUR,30 min,
massage_back_30,massage,Массаж,Masāža,60,true,Классический массаж спины, 30 минут,Klasiskā muguras masāža, 30 min,25 EUR,30 min,
wax_underarms,waxing,Ваксинг,Vaksācija,70,true,Подмышки,Paduses,10 EUR,15 min,
```

Use the same `category_id`, `category_ru`, and `category_lv` for rows that belong to the same category.

## Specialists

Columns:

```csv
id,order,is_active,name_ru,name_lv,position_ru,position_lv,description_ru,description_lv,image_url,booking_url
```

Example rows:

```csv
id,order,is_active,name_ru,name_lv,position_ru,position_lv,description_ru,description_lv,image_url,booking_url
alina,1,true,Алина,Alīna,Руководитель,Vadītāja,Опытный специалист с внимательным подходом к каждому клиенту.,Pieredzējusi speciāliste ar uzmanīgu pieeju katram klientam.,https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85,
alona,2,true,Алёна,Aļona,Мастер,Meistare,Профессиональный мастер с глубокими знаниями в лазерной эпиляции и процедурах восстановления.,Profesionāla meistare ar padziļinātām zināšanām lāzerepilācijā un atjaunojošās procedūrās.,https://images.unsplash.com/photo-1594824388853-d0c2fef6d4e6?auto=format&fit=crop&w=900&q=85,
```

## FAQ

Columns:

```csv
id,order,is_active,question_ru,question_lv,answer_ru,answer_lv
```

Example rows:

```csv
id,order,is_active,question_ru,question_lv,answer_ru,answer_lv
booking,1,true,Как записаться?,Kā pierakstīties?,Вы можете записаться онлайн через кнопку «Записаться» на сайте или написать нам в WhatsApp/Instagram.,Jūs varat pierakstīties tiešsaistē ar pogu «Pierakstīties» vai sazināties WhatsApp/Instagram.
choice,2,true,Как выбрать подходящую процедуру?,Kā izvēlēties piemērotāko procedūru?,Если вы не уверены, напишите нам — мы подскажем оптимальный вариант.,Ja neesat pārliecināti, uzrakstiet mums — mēs palīdzēsim izvēlēties labāko variantu.
whatsapp,3,true,Можно ли записаться через WhatsApp?,Vai var pierakstīties caur WhatsApp?,Да, вы можете написать нам в WhatsApp, и мы поможем выбрать удобное время.,Jā, jūs varat mums uzrakstīt WhatsApp, un mēs palīdzēsim atrast ērtu laiku.
contra,4,true,Есть ли противопоказания?,Vai ir kontrindikācijas?,Некоторые процедуры имеют противопоказания. Перед процедурой сообщите мастеру об особенностях здоровья.,Dažām procedūrām var būt kontrindikācijas. Pirms procedūras informējiet meistaru par veselības īpatnībām.
prepare,5,true,Как подготовиться к процедуре?,Kā sagatavoties procedūrai?,Подготовка зависит от выбранной процедуры. При записи мы подскажем детали.,Sagatavošanās ir atkarīga no procedūras. Pieraksta laikā mēs pastāstīsim detaļas.
```

## HomepageTexts

Columns:

```csv
section,key,value_ru,value_lv
```

Supported `section` and `key` examples:

```csv
section,key,value_ru,value_lv
hero,eyebrow,Премиальная студия красоты,Premium skaistuma studija
hero,title,EPIL_TON,EPIL_TON
hero,subtitle,Студия ухода за телом и восстановлением в Риге,Ķermeņa kopšanas un atjaunošanas studija Rīgā
hero,description,"Лазерная эпиляция, ваксинг, массаж и процедуры для тела в комфортной студии.","Lāzerepilācija, vaksācija, masāža un ķermeņa procedūras komfortablā studijā."
hero,status,Запись открыта,Pieraksts ir atvērts
hero,primary,Записаться на процедуру,Pierakstīties procedūrai
hero,secondary,Смотреть услуги,Skatīt pakalpojumus
hero,tags,"Массаж, Vela Shape, Лазерная эпиляция, Ваксинг","Masāža, Vela Shape, Lāzerepilācija, Vaksācija"
hero,image_url,https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85,
about,title,О студии,Par studiju
about,text_1,"EPIL_TON — пространство заботы о теле, красоте и восстановлении.","EPIL_TON ir ķermeņa kopšanas, skaistuma un atjaunošanās telpa."
about,text_2,"Мы помогаем ухаживать за собой через современные процедуры, внимательный сервис и спокойную атмосферу.","Mēs palīdzam rūpēties par sevi ar mūsdienīgām procedūrām, uzmanīgu servisu un mierīgu atmosfēru."
about,image_url,https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=85,
contacts,title,Контакты,Kontakti
contacts,subtitle,Свяжитесь с нами для консультации и бронирования,Sazinieties ar mums konsultācijai un pierakstam
contacts,phone_label,Телефон / WhatsApp,Tālrunis / WhatsApp
contacts,map_button,Открыть в Google Maps,Atvērt Google Maps
contacts,book_button,Записаться сейчас,Pierakstīties tagad
contacts,footer_text,"Премиальная студия ухода за телом, лазерной эпиляции, массажа и ваксинга в Риге.","Premium ķermeņa kopšanas, lāzerepilācijas, masāžas un vaksācijas studija Rīgā."
```

## How to edit content

- Change text: edit the matching `_ru` or `_lv` column.
- Change price: edit `price`, `price_ru`, or `price_lv`.
- Change photo: paste a direct image URL into `image_url`.
- Hide a service, price row, specialist, or FAQ: set `is_active` to `false`.
- Reorder rows: change the `order` number.
- Add a new price row: add a row in `PriceList` with the same category fields.

After editing, publish the sheet again if Google asks. Then refresh the site. If the data does not update immediately, wait a short time because Google can cache CSV output.
