# ORS Company — Elektrik & Otomasyon (Demo)

Elektrik ekipmanı satışı ve endüstriyel otomasyon yapan kurgusal bir şirket için tek sayfalık, üç dilli (AZ / TR / EN) statik tanıtım sitesi.

> **Demo:** İletişim bilgileri, sayılar, ülkeler ve sertifika ifadeleri örnek (uydurma) verilerdir.

## Özellikler

- Hero slaytı, sektörler, sayaçlar, hizmetler, yetkinlik sekmeleri, ürün kataloğu, projeler + galeri, kayan iş ortağı şeridi, markalar, ülkeler, hakkımızda, süreç, iletişim
- WhatsApp'a hazır mesaj açan iletişim formu
- Dil seçimi tarayıcıda hatırlanır
- Renk paleti: Urban Slate (`#E9E6E7` `#5E5653` `#7B7F8A` `#AB978C` `#6B7C98`)
- Fontlar: Plus Jakarta Sans (başlık) + Lato (metin)
- Build adımı yok — saf HTML / CSS / JS

## Çalıştırma

```bash
npx serve -s .
```

Ya da klasörü herhangi bir statik hostinge (GitHub Pages, Netlify, Vercel) yükleyin.

## Düzenleme

| Ne | Nerede |
|---|---|
| İletişim bilgileri, görseller, markalar, sayılar | `content.js` → `ORS_CONFIG` |
| Tüm metinler (3 dil) | `content.js` → `ORS_I18N` |
| Stiller ve renkler | `styles.css` (`:root` değişkenleri) |
| Logo | `assets/ors-logo-*.svg` |

## Görseller

Fotoğraflar CC0 / kamu malı lisanslıdır; kaynaklar [CREDITS.md](CREDITS.md) içinde.
