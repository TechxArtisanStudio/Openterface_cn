import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: '将手机变为迷你键盘',
    description:
      '一款紧凑型 USB + Bluetooth HID 模拟器，可将您的手机转化为便携式键盘和触控板。即插即用，100% 开源。非常适合自助终端、智能电视维护和工作流快捷键。',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: '立即支持', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: '查看产品', href: '/products/keymod/' },
    progressSmall: 'KeyMod 系列',
    progressLarge: '将手机变为迷你键盘',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: '能挂在钥匙扣上的超紧凑 KVM',
    description:
      '专为挂在钥匙扣上而设计，助您在关键时刻化解难题。这款新一代 KVM-over-USB 设备专为现场快速 IT 运维而生。',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: '立即预订', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: '查看产品', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO 系列',
    progressLarge: '能挂在钥匙扣上的超紧凑 KVM',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: '专为专业人士打造的紧凑型 KVM 方案',
    description:
      '一款紧凑、功能丰富且开源的 KVM-over-USB 解决方案，助您轻松应对即时 IT 任务和故障排查，简化科技生活。',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: '立即下单', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: '查看产品', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM 系列',
    progressLarge: '专为专业人士打造的紧凑型 KVM 方案',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: '选用高品质配件，完善您的装备',
    description:
      '探索我们的必备配件系列，包括视频适配器、高速线缆和存储解决方案。选用专为专业人士设计的高品质配件，提升您的 Openterface 使用体验。',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: '立即购买', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: '查看配件', href: '/products/accessories/' },
    progressSmall: 'TxA 商店',
    progressLarge: '选用高品质配件，完善您的装备',
  },
];

export const homeSeo = {
  title: 'Openterface | 为 IT 专业人士打造的超紧凑 KVM 解决方案',
  description:
    '探索 Openterface —— 超紧凑 KVM-over-USB 解决方案，包括 KVM-GO 系列（钥匙扣大小）、Mini-KVM 系列以及 uConsole KVM Extension。',
  keywords:
    'KVM-over-USB, KVM 切换器, 便携式 KVM, USB KVM, 无头服务器管理, KVM-GO, Mini-KVM, KeyMod',
};
