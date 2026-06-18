# Google Sheets copy data

Ниже готовые TSV-блоки. Копируйте блок целиком и вставляйте в ячейку `A1` соответствующего листа Google Sheets.

## Settings

Скопируй этот блок в лист Settings, начиная с ячейки A1

```tsv
key	value
brand	EPIL_TON
booking_url	https://dikidi.net/1941764?p=0.pi
instagram_url	https://www.instagram.com/epil_ton_riga/
whatsapp_url	https://wa.me/37120654575
facebook_url	https://www.facebook.com/share/1EuQs84EwG/?mibextid=wwXIfr
maps_url	https://www.google.com/maps/search/?api=1&query=Kurzemes%20prospekts%2015b%2C%20Riga%2C%20Latvia
address	Kurzemes prospekts 15b, Riga, Latvia
phone	+371 20654575
logo_image_url	
```

## Services

Скопируй этот блок в лист Services, начиная с ячейки A1

```tsv
id	order	is_active	title_ru	title_lv	description_ru	description_lv	price_ru	price_lv	image_url	booking_url
laser	1	true	Лазерная эпиляция	Lāzerepilācija	Современное решение для гладкой кожи и комфортного удаления нежелательных волос.	Mūsdienīgs risinājums gludai ādai un komfortablai nevēlama apmatojuma noņemšanai.	от 20 €	no 20 €	/images/services/laser.webp
massage	2	true	Классический массаж	Klasiskā masāža	Классические процедуры для лица, спины и всего тела.	Klasiskas procedūras sejai, mugurai un visam ķermenim.	от 25 €	no 25 €	/images/services/massage.webp
vela_body	3	true	Вела шейп - тело	Vela Shape ķermenim	Аппаратная процедура для коррекции тела и тонуса кожи.	Aparātprocedūra ķermeņa korekcijai un ādas tonusam.	от 25 €	no 25 €	/images/services/vela-body.webp
waxing	4	true	Ваксация	Vaksācija	Быстрый и аккуратный способ удаления волос с длительным результатом.	Ātrs un precīzs matiņu noņemšanas veids ar ilgstošu rezultātu.	от 5 €	no 5 €	/images/services/waxing.webp
vela_face	5	true	Вела шейп - лицо	Vela Shape sejai	RF-лифтинг и вакуумная процедура для зоны лица, шеи и декольте.	RF liftings un vakuuma procedūra sejas, kakla un dekoltē zonai.	от 30 €	no 30 €	/images/services/vela-face.webp
sets	6	true	Выгодные комплекты	Izdevīgi komplekti	Специальные наборы процедур по приятной цене и с экономией.	Īpaši procedūru komplekti par izdevīgu cenu.	Выгодно	Izdevīgi	/images/services/sets.webp
```

## PriceList

Скопируй этот блок в лист PriceList, начиная с ячейки A1

```tsv
id	category_id	category_ru	category_lv	order	is_active	title_ru	title_lv	price	duration	booking_url
intro_vela	intro	Знакомство с мастером	Iepazīšanās ar meistari	1	true	Ознакомительная процедура Vela Shape 5 in 1	Iepazīšanās procedūra Vela Shape 5 in 1	32 EUR	1 h	
intro_laser_bikini_underarms	intro	Знакомство с мастером	Iepazīšanās ar meistari	2	true	Лазерная эпиляция глубокое бикини + подмышки	Lāzerepilācija dziļais bikini + paduses	69 EUR	50 min	
intro_bikini	intro	Знакомство с мастером	Iepazīšanās ar meistari	3	true	Первый визит глубокое бикини	Pirmās apmeklējums dziļais bikini	50 EUR	35 min	
intro_underarms	intro	Знакомство с мастером	Iepazīšanās ar meistari	4	true	Первый визит на подмышки	Pirmās apmeklējums paduses	20 EUR	20 min	
laser_set_1	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	10	true	Глубокое бикини + межъягодичная зона + подмышки	Dziļais bikini + sēžas intīmā zona + paduses	85 EUR	45 min	
laser_set_2	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	11	true	Глубокое бикини + межъягодичная зона + подмышки + голени	Dziļais bikini + sēžas intīmā zona + paduses + apakšstilbi	125 EUR	1 h 10 min	
laser_set_3	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	12	true	Подмышки + бикини + ноги полностью	Paduses + dziļais bikini + kājas visā garumā	145 EUR	1 h 25 min	
laser_set_4	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	13	true	Ноги полностью + подмышки	Kājas visā garumā + paduses	105 EUR	55 min	
laser_set_5	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	14	true	Голени или бедра с коленями + глубокое бикини	Apakšstilbi vai augšstilbi ar ceļgaliem + dziļais bikini	110 EUR	55 min	
laser_set_6	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	15	true	Голени или бедра с коленями + подмышки	Apakšstilbi vai augšstilbi ar ceļgaliem + paduses	85 EUR	40 min	
laser_set_7	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	16	true	Ноги полностью + глубокое бикини + межъягодичная зона	Kājas visā garumā + dziļais bikini + sēžas intīmā zona	125 EUR	1 h 5 min	
laser_set_8	laser_sets	Комплекты лазерной эпиляции	Lāzerepilācijas komplekti	17	true	Подмышки + классический бикини + ноги полностью	Paduses + klasiskais bikini + kājas visā garumā	120 EUR	1 h 30 min	
massage_set_glow_relax	massage_sets	Комплекты массажа	Masāžas komplekti	19	true	Glow & Relax: массаж спины + массаж лица и декольте с маской	Glow & Relax: muguras masāža + sejas un dekoltē masāža ar masku	55 EUR	1 h 15 min	https://dikidi.net/1941764?p=1.pi-ssm-sd&s=22164721&rl=0_0
massage_set_total_relax	massage_sets	Комплекты массажа	Masāžas komplekti	20	true	Total relax: массаж тела + массаж лица и декольте с маской	Total relax: ķermeņa masāža + sejas un dekoltē masāža ar masku	69 EUR	1 h 40 min	
wax_set_l	wax_sets	Комплекты ваксинга	Vaksācijas komplekti	30	true	Комплект L: подмышки + глубокое бикини + ноги полностью	Komplekts L: paduses + dziļais bikini + kājas visā garumā	55 EUR	1 h 10 min	
wax_set_m	wax_sets	Комплекты ваксинга	Vaksācijas komplekti	31	true	Комплект M: подмышки + глубокое бикини + голени	Komplekts M: paduses + dziļais bikini + apakšstilbi ar ceļgaliem	45 EUR	55 min	
wax_set_s	wax_sets	Комплекты ваксинга	Vaksācijas komplekti	32	true	Комплект S: подмышки + глубокое бикини	Komplekts S: paduses + dziļais bikini	35 EUR	40 min	
laser_lower_legs	laser	Лазерная эпиляция	Lāzerepilācija	40	true	Голени с коленом	Apakšstilbi ar ceļiem	65 EUR	25 min	
laser_upper_legs	laser	Лазерная эпиляция	Lāzerepilācija	41	true	Бедра с коленями	Augšstilbi ar ceļgaliem	65 EUR	25 min	
laser_bikini_classic	laser	Лазерная эпиляция	Lāzerepilācija	42	true	Бикини классика	Bikini klasika	35 EUR	15 min	
laser_buttocks	laser	Лазерная эпиляция	Lāzerepilācija	43	true	Ягодицы	Dibens	20 EUR	10 min	
laser_deep_bikini	laser	Лазерная эпиляция	Lāzerepilācija	44	true	Глубокое бикини с межъягодичной зоной	Dziļais bikini ar sēžas intīmo zonu	65 EUR	35 min	
laser_full_legs	laser	Лазерная эпиляция	Lāzerepilācija	45	true	Ноги полностью	Kājas visā garumā	85 EUR	35 min	
laser_areoli	laser	Лазерная эпиляция	Lāzerepilācija	46	true	Грудь, ареолы	Krūtis, areoli	20 EUR	20 min	
laser_back	laser	Лазерная эпиляция	Lāzerepilācija	47	true	Спина, поясница	Mugura, josta	30 EUR	15 min	
laser_underarms	laser	Лазерная эпиляция	Lāzerepilācija	48	true	Подмышки	Paduses	30 EUR	15 min	
laser_arms_half	laser	Лазерная эпиляция	Lāzerepilācija	49	true	Руки до локтя	Rokas līdz elkonim	35 EUR	15 min	
laser_arms_full	laser	Лазерная эпиляция	Lāzerepilācija	50	true	Руки полностью	Rokas visā garumā	55 EUR	30 min	
laser_face_cheeks	laser	Лазерная эпиляция	Lāzerepilācija	51	true	Лицо, щеки	Seja, vaigi	25 EUR	10 min	
laser_face_upper_lip	laser	Лазерная эпиляция	Lāzerepilācija	52	true	Лицо, усики	Seja, virslūpa	25 EUR	10 min	
laser_face_chin	laser	Лазерная эпиляция	Lāzerepilācija	53	true	Лицо, подбородок	Seja, zods	25 EUR	15 min	
laser_belly_line	laser	Лазерная эпиляция	Lāzerepilācija	54	true	Линия живота	Vēdera līnija	10 EUR	10 min	
laser_belly	laser	Лазерная эпиляция	Lāzerepilācija	55	true	Живот	Vēders	35 EUR	15 min	
vela_30	vela	Массаж Vela Shape 5 in 1	Masāža Vela Shape 5 in 1	60	true	Массаж Vela Shape 5 in 1	Masāža Vela Shape 5 in 1	25 EUR	30 min	
vela_60	vela	Массаж Vela Shape 5 in 1	Masāža Vela Shape 5 in 1	61	true	Массаж Vela Shape 5 in 1	Masāža Vela Shape 5 in 1	40 EUR	1 h	
vela_face_30	vela_face	Vela Shape лица	Vela Shape sejai	62	true	Зона лица	Sejas zona	30 EUR	30 min	
vela_face_mask_45	vela_face	Vela Shape лица	Vela Shape sejai	63	true	Зона лица с маской	Sejas zona ar masku	35 EUR	45 min	
vela_face_neck_45	vela_face	Vela Shape лица	Vela Shape sejai	64	true	Зона лица + шея с декольте	Sejas zona + kakla un dekoltē	40 EUR	45 min	
vela_face_neck_mask_60	vela_face	Vela Shape лица	Vela Shape sejai	65	true	Зона лица + шея с декольте + маска	Sejas zona + kakla un dekoltē + maska	45 EUR	60 min	
vela_face_sub_3	vela_face	Vela Shape лица	Vela Shape sejai	66	true	Абонемент: зона лица, 3 посещения	Abonements: sejas zona, 3 apmeklējumi	84 EUR	3 apmeklējumi	
vela_face_sub_6	vela_face	Vela Shape лица	Vela Shape sejai	67	true	Абонемент: зона лица, 6 посещений	Abonements: sejas zona, 6 apmeklējumi	150 EUR	6 apmeklējumi	
vela_face_mask_sub_3	vela_face	Vela Shape лица	Vela Shape sejai	68	true	Абонемент: зона лица с маской, 3 посещения	Abonements: sejas zona ar masku, 3 apmeklējumi	99 EUR	3 apmeklējumi	
vela_face_mask_sub_6	vela_face	Vela Shape лица	Vela Shape sejai	69	true	Абонемент: зона лица с маской, 6 посещений	Abonements: sejas zona ar masku, 6 apmeklējumi	180 EUR	6 apmeklējumi	
vela_face_neck_sub_3	vela_face	Vela Shape лица	Vela Shape sejai	70	true	Абонемент: зона лица + шея с декольте, 3 посещения	Abonements: sejas zona + kakla un dekoltē, 3 apmeklējumi	114 EUR	3 apmeklējumi	
vela_face_neck_sub_6	vela_face	Vela Shape лица	Vela Shape sejai	71	true	Абонемент: зона лица + шея с декольте, 6 посещений	Abonements: sejas zona + kakla un dekoltē, 6 apmeklējumi	210 EUR	6 apmeklējumi	
vela_face_neck_mask_sub_3	vela_face	Vela Shape лица	Vela Shape sejai	72	true	Абонемент: зона лица + шея с декольте + маска, 3 посещения	Abonements: sejas zona + kakla un dekoltē + maska, 3 apmeklējumi	129 EUR	3 apmeklējumi	
vela_face_neck_mask_sub_6	vela_face	Vela Shape лица	Vela Shape sejai	73	true	Абонемент: зона лица + шея с декольте + маска, 6 посещений	Abonements: sejas zona + kakla un dekoltē + maska, 6 apmeklējumi	240 EUR	6 apmeklējumi	
massage_back_30	massage	Массаж	Masāža	70	true	Классический массаж спины, 30 минут	Klasiskā muguras masāža, 30 min	25 EUR	30 min	
massage_back_60	massage	Массаж	Masāža	71	true	Классический массаж спины, 60 минут	Klasiskā muguras masāža, 60 min	35 EUR	1 h	
massage_face	massage	Массаж	Masāža	72	true	Классический массаж лица	Klasiskā sejas masāža	30 EUR	30 min	
massage_face_decollete	massage	Массаж	Masāža	73	true	Массаж лица и декольте с восстанавливающей маской	Sejas un dekoltē masāža ar atjaunojošu masku	38 EUR	45 min	
massage_body_60	massage	Массаж	Masāža	74	true	Классический массаж всего тела, 60 минут	Klasiskā visa ķermeņa masāža, 60 min	40 EUR	1 h	
massage_body_90	massage	Массаж	Masāža	75	true	Классический массаж всего тела, 90 минут	Klasiskā visa ķermeņa masāža, 90 min	55 EUR	1 h 30 min	
wax_lower_legs	waxing	Ваксинг	Vaksācija	80	true	Голени с коленом	Apakšstilbi ar ceļiem	18 EUR	20 min	
wax_upper_legs	waxing	Ваксинг	Vaksācija	81	true	Бедра с коленями	Augšstilbi ar ceļgaliem	18 EUR	20 min	
wax_bikini_classic	waxing	Ваксинг	Vaksācija	82	true	Бикини классика	Bikini klasika	18 EUR	10 min	
wax_buttocks	waxing	Ваксинг	Vaksācija	83	true	Ягодицы	Dibens	10 EUR	10 min	
wax_deep_bikini	waxing	Ваксинг	Vaksācija	84	true	Глубокое бикини с межъягодичной зоной	Dziļais bikini ar sēžas intīmo zonu	28 EUR	30 min	
wax_full_legs	waxing	Ваксинг	Vaksācija	85	true	Ноги полностью	Kājas visā garumā	28 EUR	30 min	
wax_areoli	waxing	Ваксинг	Vaksācija	86	true	Грудь, ареолы	Krūtis, areoli	5 EUR	10 min	
wax_underarms	waxing	Ваксинг	Vaksācija	87	true	Подмышки	Paduses	10 EUR	15 min	
wax_arms_half	waxing	Ваксинг	Vaksācija	88	true	Руки до локтя	Rokas līdz elkonim	from 12 EUR	10 min	
wax_arms_full	waxing	Ваксинг	Vaksācija	89	true	Руки полностью	Rokas visā garumā	22 EUR	20 min	
wax_brows	waxing	Ваксинг	Vaksācija	90	true	Лицо, брови	Seja, uzacis	5 EUR	10 min	
wax_face_cheeks	waxing	Ваксинг	Vaksācija	91	true	Лицо, щеки	Seja, vaigi	5 EUR	10 min	
wax_face_upper_lip	waxing	Ваксинг	Vaksācija	92	true	Лицо, усики	Seja, virslūpa	5 EUR	10 min	
wax_face_chin	waxing	Ваксинг	Vaksācija	93	true	Лицо, подбородок	Seja, zods	5 EUR	10 min	
wax_belly_line	waxing	Ваксинг	Vaksācija	94	true	Линия живота	Vēdera līnija	5 EUR	10 min	
wax_belly	waxing	Ваксинг	Vaksācija	95	true	Живот	Vēders	12 EUR	20 min	
```

## Specialists

Скопируй этот блок в лист Specialists, начиная с ячейки A1

```tsv
id	order	is_active	name_ru	name_lv	position_ru	position_lv	description_ru	description_lv	image_url	booking_url
alina	1	true	Алина	Alīna	Руководитель	Vadītāja	Опытный специалист с внимательным подходом к каждому клиенту.	Pieredzējusi speciāliste ar uzmanīgu pieeju katram klientam.	https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85	
alona	2	true	Алёна	Aļona	Мастер	Meistare	Профессиональный мастер с глубокими знаниями в лазерной эпиляции и процедурах восстановления.	Profesionāla meistare ar padziļinātām zināšanām lāzerepilācijā un atjaunojošās procedūrās.	https://images.unsplash.com/photo-1594824388853-d0c2fef6d4e6?auto=format&fit=crop&w=900&q=85	
```

## FAQ

Скопируй этот блок в лист FAQ, начиная с ячейки A1

```tsv
id	order	is_active	question_ru	question_lv	answer_ru	answer_lv
booking	1	true	Как записаться?	Kā pierakstīties?	Вы можете записаться онлайн через кнопку «Записаться» на сайте, написать нам в WhatsApp или Instagram.	Jūs varat pierakstīties tiešsaistē, izmantojot pogu «Pierakstīties», vai sazināties ar mums WhatsApp vai Instagram.
choice	2	true	Как выбрать подходящую процедуру?	Kā izvēlēties piemērotāko procedūru?	Если вы не уверены, какая процедура вам подходит, напишите нам — мы подскажем оптимальный вариант.	Ja neesat pārliecināti, kura procedūra jums ir piemērota, uzrakstiet mums — mēs palīdzēsim izvēlēties labāko variantu.
whatsapp	3	true	Можно ли записаться через WhatsApp?	Vai var pierakstīties caur WhatsApp?	Да, вы можете написать нам в WhatsApp, и мы поможем выбрать удобное время.	Jā, jūs varat mums uzrakstīt WhatsApp, un mēs palīdzēsim atrast ērtu laiku.
contra	4	true	Есть ли противопоказания?	Vai ir kontrindikācijas?	Некоторые процедуры имеют противопоказания. Перед процедурой сообщите мастеру об особенностях вашего здоровья.	Dažām procedūrām var būt kontrindikācijas. Pirms procedūras informējiet meistaru par veselības īpatnībām.
prepare	5	true	Как подготовиться к процедуре?	Kā sagatavoties procedūrai?	Подготовка зависит от выбранной процедуры. При записи мы подскажем, что нужно сделать заранее.	Sagatavošanās ir atkarīga no izvēlētās procedūras. Pieraksta laikā mēs pastāstīsim, kas jādara iepriekš.
```

## HomepageTexts

Скопируй этот блок в лист HomepageTexts, начиная с ячейки A1

```tsv
section	key	value_ru	value_lv
hero	eyebrow	Премиальная студия красоты	Premium skaistuma studija
hero	title	EPIL_TON	EPIL_TON
hero	subtitle	Студия ухода за телом и восстановлением в Риге	Ķermeņa kopšanas un atjaunošanas studija Rīgā
hero	description	Лазерная эпиляция, ваксинг, массаж и процедуры для тела в комфортной студии.	Lāzerepilācija, vaksācija, masāža un ķermeņa procedūras komfortablā studijā.
hero	status	Запись открыта	Pieraksts ir atvērts
hero	primary	Записаться на процедуру	Pierakstīties procedūrai
hero	secondary	Смотреть услуги	Skatīt pakalpojumus
hero	tags	Массаж, Vela Shape, Лазерная эпиляция, Ваксинг	Masāža, Vela Shape, Lāzerepilācija, Vaksācija
hero	image_url	https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85	
about	title	О студии	Par studiju
about	text_1	EPIL_TON — пространство заботы о теле, красоте и восстановлении. Здесь сочетаются эстетика, комфорт и индивидуальный подход.	EPIL_TON ir ķermeņa kopšanas, skaistuma un atjaunošanās telpa. Šeit apvienojas estētika, komforts un individuāla pieeja.
about	text_2	Мы помогаем ухаживать за собой через современные процедуры, внимательный сервис и спокойную атмосферу. Каждый визит — это время для себя, красоты и уверенности.	Mēs palīdzam rūpēties par sevi ar mūsdienīgām procedūrām, uzmanīgu servisu un mierīgu atmosfēru. Katrs apmeklējums ir laiks sev, skaistumam un pārliecībai.
about	image_url	https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1100&q=85	
contacts	title	Контакты	Kontakti
contacts	subtitle	Свяжитесь с нами для консультации и бронирования	Sazinieties ar mums konsultācijai un pierakstam
contacts	phone_label	Телефон / WhatsApp	Tālrunis / WhatsApp
contacts	map_button	Открыть в Google Maps	Atvērt Google Maps
contacts	book_button	Записаться сейчас	Pierakstīties tagad
contacts	footer_text	Премиальная студия ухода за телом, лазерной эпиляции, массажа и ваксинга в Риге.	Premium ķermeņa kopšanas, lāzerepilācijas, masāžas un vaksācijas studija Rīgā.
```
