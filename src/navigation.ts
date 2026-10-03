import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Tentang',
      href: getPermalink('/about'),
    },
    {
      text: 'Tulisan & Opini',
      links: [
        {
          text: 'Semua Artikel',
          href: getBlogPermalink(),
        },
        {
          text: 'Pajak & Kebijakan',
          href: getPermalink('pajak', 'category'),
        },
        {
          text: 'Edukasi & Literasi',
          href: getPermalink('edukasi', 'category'),
        },
        {
          text: 'Refleksi & Catatan',
          href: getPermalink('refleksi', 'category'),
        },
      ],
    },
    {
      text: 'Jejak Publik',
      href: getPermalink('/#jejak-publik'),
    },
  ],

  actions: [
    {
      text: 'Sapa / Kontak',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigasi',
      links: [
        { text: 'Beranda', href: getPermalink('/') },
        { text: 'Tentang', href: getPermalink('/about') },
        { text: 'Artikel & Opini', href: getBlogPermalink() },
        { text: 'Kontak', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Kategori',
      links: [
        { text: 'Pajak & Kebijakan', href: getPermalink('pajak', 'category') },
        { text: 'Edukasi & Literasi', href: getPermalink('edukasi', 'category') },
        { text: 'Refleksi & Catatan', href: getPermalink('refleksi', 'category') },
      ],
    },
    {
      title: 'Jejak Publik',
      links: [
        { text: 'Tax Center & Kampus', href: getPermalink('tax-center', 'tag') },
        { text: 'Podcast & Media', href: getPermalink('media', 'tag') },
        { text: 'Kemenkeu Mengajar', href: getPermalink('relawan', 'tag') },
      ],
    },
  ],

  secondaryLinks: [],

  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/idar.layla/',
    },
  ],

  footNote: `
    <div class="text-center">
      <p class="mb-2">
        For every journey leaves a story, and every story leaves a meaning.
      </p>
      <p class="text-sm opacity-70">
        すべての旅には物語があり、すべての物語には意味がある。
      </p>
      <p class="mt-6 text-xs opacity-60">
        © 2026 Ida Rosnida Laila · Aida Leyla
      </p>
    </div>
  `,
};