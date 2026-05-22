export const siteConfig = {
  name: 'Openterface',
  locale: 'zh',
  url: 'https://zh.openterface.com',
  legacyUrl: 'https://openterface.com',
  description:
    '专为 IT 专业人士打造的超紧凑 KVM-over-USB 解决方案 —— KVM-GO、Mini-KVM、KeyMod 和 uConsole KVM Extension。',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  accent: '#ff6e42',
  links: {
    minikvmPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
    kvmgoPurchase: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
    keymodCrowdsupply: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
    shop: 'https://shop.techxartisan.com/',
    appOverview: 'https://openterface.com/app/overview/',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      provider: 'google' as const,
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'openterface.com',
        'en.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'ko.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
        'zh.openterface.com',
      ],
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
      title: 'Cookie 同意',
      description:
        '我们使用 Cookie 来提升文档内容质量、分析网站效果与需求。您的同意将帮助我们改进网站。感谢！',
      acceptLabel: '同意',
      rejectLabel: '拒绝',
      cookieLabel: 'Cookie',
    },
  },
} as const;

/** Build a legacy openterface.com URL for doc-heavy pages not yet migrated. */
export function legacyPath(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.legacyUrl}${normalized}`;
}
