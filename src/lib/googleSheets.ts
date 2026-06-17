import { fallbackContent } from "@/data/fallbackContent";

export type SiteContent = typeof fallbackContent;

type CsvRow = Record<string, string>;

const SHEETS = ["Settings", "Services", "PriceList", "Specialists", "FAQ", "HomepageTexts"] as const;
const DEFAULT_BOOKING_URL = "https://dikidi.net/1941764?p=0.pi";

function csvEndpoint(sheet: string) {
  const sheetId =
    process.env.NEXT_PUBLIC_GOOGLE_SHEETS_ID ||
    "1dt6-1NiNuFOPy-RZRVfrh_lYTLGpPUfkqWPFGWAMF_4";

  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(
    sheet,
  )}`;
}

function parseCsv(csv: string): CsvRow[] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (char === '"' && quoted && next === '"') {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      row.push(value);
      value = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") {
        index += 1;
      }
      row.push(value);
      rows.push(row);
      row = [];
      value = "";
      continue;
    }

    value += char;
  }

  row.push(value);
  rows.push(row);

  const [headers = [], ...data] = rows.filter((item) => item.some((cell) => cell.trim()));
  const keys = headers.map((header) => header.trim());

  return data.map((item) =>
    keys.reduce<CsvRow>((result, key, index) => {
      result[key] = (item[index] || "").trim();
      return result;
    }, {}),
  );
}

async function fetchSheet(sheet: (typeof SHEETS)[number]) {
  const response = await fetch(csvEndpoint(sheet), {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google Sheets request failed for ${sheet}`);
  }

  return parseCsv(await response.text());
}

function cloneFallback(): SiteContent {
  return JSON.parse(JSON.stringify(fallbackContent)) as SiteContent;
}

function isActive(row: CsvRow) {
  const value = (row.is_active || "").trim().toLowerCase();
  return !["false", "0", "no", "нет", "n"].includes(value);
}

function byOrder(a: CsvRow, b: CsvRow) {
  return Number(a.order || 0) - Number(b.order || 0);
}

function text(value: string | undefined, fallback: string) {
  return value && value.trim() ? value.trim() : fallback;
}

function setting(rows: CsvRow[], key: string) {
  return rows.find((row) => row.key === key)?.value?.trim();
}

function normalizeWhatsappUrl(value: string) {
  return value.replace("wa.me/20654575", "wa.me/37120654575");
}

function applySettings(content: SiteContent, rows: CsvRow[]) {
  const booking = setting(rows, "booking_url") || setting(rows, "booking") || content.links.booking;
  const instagram = setting(rows, "instagram_url") || content.links.instagram;
  const whatsapp = setting(rows, "whatsapp_url") || content.links.whatsapp;
  const facebook = setting(rows, "facebook_url") || content.links.facebook;
  const maps = setting(rows, "maps_url") || content.links.maps;
  const logo = setting(rows, "logo_image_url") || content.logo.image_url;
  const brand = setting(rows, "brand") || content.brand;
  const phone = setting(rows, "phone") || content.contacts.phone;
  const address = setting(rows, "address") || content.contacts.address;

  content.brand = brand;
  content.links.booking = booking || DEFAULT_BOOKING_URL;
  content.links.instagram = instagram;
  content.links.whatsapp = normalizeWhatsappUrl(whatsapp);
  content.links.facebook = facebook;
  content.links.maps = maps;
  content.logo.image_url = logo;
  content.logo.fallback = brand;
  content.contacts.phone = phone;
  content.contacts.address = address;
  content.hero.ru.address = address;
  content.hero.lv.address = address;
}

function applyHomepageTexts(content: SiteContent, rows: CsvRow[]) {
  const get = (section: string, key: string, lang: "ru" | "lv", fallback: string) =>
    text(rows.find((row) => row.section === section && row.key === key)?.[`value_${lang}`], fallback);

  content.hero.ru.eyebrow = get("hero", "eyebrow", "ru", content.hero.ru.eyebrow);
  content.hero.lv.eyebrow = get("hero", "eyebrow", "lv", content.hero.lv.eyebrow);
  content.hero.ru.title = get("hero", "title", "ru", content.hero.ru.title);
  content.hero.lv.title = get("hero", "title", "lv", content.hero.lv.title);
  content.hero.ru.subtitle = get("hero", "subtitle", "ru", content.hero.ru.subtitle);
  content.hero.lv.subtitle = get("hero", "subtitle", "lv", content.hero.lv.subtitle);
  content.hero.ru.description = get("hero", "description", "ru", content.hero.ru.description);
  content.hero.lv.description = get("hero", "description", "lv", content.hero.lv.description);
  content.hero.ru.status = get("hero", "status", "ru", content.hero.ru.status);
  content.hero.lv.status = get("hero", "status", "lv", content.hero.lv.status);
  content.hero.ru.primary = get("hero", "primary", "ru", content.hero.ru.primary);
  content.hero.lv.primary = get("hero", "primary", "lv", content.hero.lv.primary);
  content.hero.ru.secondary = get("hero", "secondary", "ru", content.hero.ru.secondary);
  content.hero.lv.secondary = get("hero", "secondary", "lv", content.hero.lv.secondary);

  const heroImage = rows.find((row) => row.section === "hero" && row.key === "image_url");
  content.hero.image_url = text(heroImage?.value_ru || heroImage?.value_lv, content.hero.image_url);

  const ruTags = rows.find((row) => row.section === "hero" && row.key === "tags")?.value_ru;
  const lvTags = rows.find((row) => row.section === "hero" && row.key === "tags")?.value_lv;
  if (ruTags) content.hero.ru.tags = ruTags.split(",").map((item) => item.trim()).filter(Boolean);
  if (lvTags) content.hero.lv.tags = lvTags.split(",").map((item) => item.trim()).filter(Boolean);

  content.about.ru.title = get("about", "title", "ru", content.about.ru.title);
  content.about.lv.title = get("about", "title", "lv", content.about.lv.title);
  content.about.ru.text[0] = get("about", "text_1", "ru", content.about.ru.text[0]);
  content.about.lv.text[0] = get("about", "text_1", "lv", content.about.lv.text[0]);
  content.about.ru.text[1] = get("about", "text_2", "ru", content.about.ru.text[1]);
  content.about.lv.text[1] = get("about", "text_2", "lv", content.about.lv.text[1]);

  const aboutImage = rows.find((row) => row.section === "about" && row.key === "image_url");
  content.about.image_url = text(aboutImage?.value_ru || aboutImage?.value_lv, content.about.image_url);

  content.contacts.ru.title = get("contacts", "title", "ru", content.contacts.ru.title);
  content.contacts.lv.title = get("contacts", "title", "lv", content.contacts.lv.title);
  content.contacts.ru.subtitle = get("contacts", "subtitle", "ru", content.contacts.ru.subtitle);
  content.contacts.lv.subtitle = get("contacts", "subtitle", "lv", content.contacts.lv.subtitle);
  content.contacts.ru.phoneLabel = get("contacts", "phone_label", "ru", content.contacts.ru.phoneLabel);
  content.contacts.lv.phoneLabel = get("contacts", "phone_label", "lv", content.contacts.lv.phoneLabel);
  content.contacts.ru.mapButton = get("contacts", "map_button", "ru", content.contacts.ru.mapButton);
  content.contacts.lv.mapButton = get("contacts", "map_button", "lv", content.contacts.lv.mapButton);
  content.contacts.ru.bookButton = get("contacts", "book_button", "ru", content.contacts.ru.bookButton);
  content.contacts.lv.bookButton = get("contacts", "book_button", "lv", content.contacts.lv.bookButton);
  content.contacts.ru.footerText = get("contacts", "footer_text", "ru", content.contacts.ru.footerText);
  content.contacts.lv.footerText = get("contacts", "footer_text", "lv", content.contacts.lv.footerText);
}

function buildServices(rows: CsvRow[], fallback: SiteContent["services"], globalBookingUrl: string) {
  const activeRows = rows.filter(isActive).sort(byOrder);
  if (!activeRows.length) return fallback;

  return activeRows.map((row, index) => {
    const fallbackItem = fallback[index] || fallback[0];
    const isLegacyVelaCard =
      fallbackItem.icon === "waves" &&
      fallbackItem.ru.title.toLowerCase().includes("лица") &&
      (row.title_ru || "").toLowerCase().includes("vela shape 5 in 1");

    return {
      icon: fallbackItem.icon,
      image_url: text(row.image_url, fallbackItem.image_url),
      booking_url: text(row.booking_url, globalBookingUrl),
      ru: {
        title: isLegacyVelaCard ? fallbackItem.ru.title : text(row.title_ru, fallbackItem.ru.title),
        description: isLegacyVelaCard ? fallbackItem.ru.description : text(row.description_ru, fallbackItem.ru.description),
        price: isLegacyVelaCard ? fallbackItem.ru.price : text(row.price_ru, fallbackItem.ru.price),
      },
      lv: {
        title: isLegacyVelaCard ? fallbackItem.lv.title : text(row.title_lv, fallbackItem.lv.title),
        description: isLegacyVelaCard ? fallbackItem.lv.description : text(row.description_lv, fallbackItem.lv.description),
        price: isLegacyVelaCard ? fallbackItem.lv.price : text(row.price_lv, fallbackItem.lv.price),
      },
    };
  }) as SiteContent["services"];
}

function buildPriceList(rows: CsvRow[], fallback: SiteContent["priceCategories"], globalBookingUrl: string) {
  const activeRows = rows.filter(isActive).sort(byOrder);
  if (!activeRows.length) return fallback;

  const categories = new Map<
    string,
    {
      order: number;
      ru: string;
      lv: string;
      items: Array<[string, string, string, string, string]>;
    }
  >();

  activeRows.forEach((row, index) => {
    const id = row.category_id || row.category_ru || row.category_lv || `category-${index}`;
    const category = categories.get(id) || {
      order: Number(row.order || index),
      ru: text(row.category_ru, fallback[0]?.ru || ""),
      lv: text(row.category_lv, fallback[0]?.lv || ""),
      items: [],
    };

    category.items.push([
      text(row.title_ru, ""),
      text(row.title_lv, row.title_ru || ""),
      text(row.price, ""),
      text(row.duration, ""),
      text(row.booking_url, globalBookingUrl),
    ]);
    categories.set(id, category);
  });

  const sheetCategories = Array.from(categories.values())
    .sort((a, b) => a.order - b.order)
    .map(({ ru, lv, items }) => ({
      ru,
      lv,
      items,
    })) as SiteContent["priceCategories"];

  const categoryKey = (category: SiteContent["priceCategories"][number]) =>
    `${category.ru.trim().toLowerCase()}|${category.lv.trim().toLowerCase()}`;
  const itemKey = (item: SiteContent["priceCategories"][number]["items"][number]) =>
    `${item[0].trim().toLowerCase()}|${item[1].trim().toLowerCase()}`;
  const sheetByKey = new Map(sheetCategories.map((category) => [categoryKey(category), category]));
  const mergedCategories = fallback.map((fallbackCategory) => {
    const sheetCategory = sheetByKey.get(categoryKey(fallbackCategory));
    if (!sheetCategory) return fallbackCategory;

    const sheetItemKeys = new Set(sheetCategory.items.map(itemKey));
    fallbackCategory.items.forEach((fallbackItem) => {
      if (!sheetItemKeys.has(itemKey(fallbackItem))) {
        sheetCategory.items.push(fallbackItem);
      }
    });

    return sheetCategory;
  });
  const fallbackKeys = new Set(fallback.map(categoryKey));

  sheetCategories.forEach((category) => {
    if (!fallbackKeys.has(categoryKey(category))) {
      mergedCategories.push(category);
    }
  });

  return mergedCategories as SiteContent["priceCategories"];
}

function buildSpecialists(rows: CsvRow[], fallback: SiteContent["specialists"], globalBookingUrl: string) {
  const activeRows = rows.filter(isActive).sort(byOrder);
  if (!activeRows.length) return fallback;

  return activeRows.map((row, index) => {
    const fallbackItem = fallback[index] || fallback[0];

    return {
      image_url: text(row.image_url, fallbackItem.image_url),
      booking_url: text(row.booking_url, globalBookingUrl),
      ru: {
        name: text(row.name_ru, fallbackItem.ru.name),
        position: text(row.position_ru, fallbackItem.ru.position),
        description: text(row.description_ru, fallbackItem.ru.description),
      },
      lv: {
        name: text(row.name_lv, fallbackItem.lv.name),
        position: text(row.position_lv, fallbackItem.lv.position),
        description: text(row.description_lv, fallbackItem.lv.description),
      },
    };
  }) as SiteContent["specialists"];
}

function buildFaq(rows: CsvRow[], fallback: SiteContent["faq"]) {
  const activeRows = rows.filter(isActive).sort(byOrder);
  if (!activeRows.length) return fallback;

  return activeRows.map((row, index) => {
    const fallbackItem = fallback[index] || fallback[0];

    return {
      ru: [text(row.question_ru, fallbackItem.ru[0]), text(row.answer_ru, fallbackItem.ru[1])],
      lv: [text(row.question_lv, fallbackItem.lv[0]), text(row.answer_lv, fallbackItem.lv[1])],
    };
  }) as SiteContent["faq"];
}

export async function loadGoogleSheetsContent(): Promise<SiteContent> {
  try {
    const [settings, services, priceList, specialists, faq, homepageTexts] = await Promise.all(
      SHEETS.map((sheet) => fetchSheet(sheet)),
    );

    const content = cloneFallback();

    applySettings(content, settings);
    applyHomepageTexts(content, homepageTexts);
    content.services = buildServices(services, content.services, content.links.booking);
    content.priceCategories = buildPriceList(priceList, content.priceCategories, content.links.booking);
    content.specialists = buildSpecialists(specialists, content.specialists, content.links.booking);
    content.faq = buildFaq(faq, content.faq);

    return content;
  } catch (error) {
    console.warn("Google Sheets content is unavailable. Using fallbackContent.", error);
    return fallbackContent;
  }
}
