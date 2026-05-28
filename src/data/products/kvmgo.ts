import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO Series",
  slogan: "能挂在钥匙扣上的超紧凑 KVM",
  subtitle: "应对技术关键时刻 —— 即插即用，随心掌控。",
  status: 'pre-order',
  description:
    "集成视频接口（HDMI、DisplayPort 或 VGA）的新一代 KVM-over-USB 解决方案。超紧凑钥匙扣大小，专为数据中心和机房的快速 IT 运维而设计。",
  seoDescription:
    "使用 Openterface KVM-Go 掌控无头计算机。内置 HDMI/DP/VGA，钥匙扣大小，专为 IT 专业人士打造的 4K KVM-over-USB。",
  keywords:
    "KVM-Go, KVM over USB, ultra-compact KVM, keychain KVM, 4K KVM, headless control",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "立即预订",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Funded on Dec 30, 2025", backers: "478" },
  painPoints: [
    "传统 KVM 设备笨重且需要额外的视频线缆",
    "现场紧急访问服务器需要便携式工具",
    "在无网络访问的情况下，对无头设备进行故障排除效率低下",
  ],
  solutions: [
    "内置视频接口，告别繁杂线缆",
    "钥匙扣外形，随时随地触手可及",
    "KVM-over-USB —— 受控端无需网络或驱动程序",
  ],
  hwFeatures: [
    { title: "内置视频接口", description: "提供 HDMI、DisplayPort 或 VGA 型号，无需外部线缆。" },
    { title: "钥匙扣尺寸", description: "Openterface 系列中体积最小的 KVM-over-USB 设备。" },
    { title: "4K 支持", description: "为现代显示器提供高分辨率视频采集。" },
  ],
  swFeatures: [
    { title: "Openterface Qt 应用", description: "跨平台控制端，支持 Windows、macOS 和 Linux。" },
    { title: "MicroSD 切换", description: "可切换存储空间，用于存放便携式系统镜像和工具。" },
    { title: "开源技术栈", description: "由社区驱动的固件和主机端应用。" },
  ],
  specs: [
    { label: "视频", value: "HDMI / DP / VGA (model dependent)" },
    { label: "分辨率", value: "Up to 4K" },
    { label: "连接方式", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "数据中心巡检",
    "无头设备设置",
    "现场 IT 维护与个人实验室抢修",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "功能特性", href: docsPath("/product/kvm-go/features/") },
    { label: "Beta 版快速入门", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "连接指南", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "常见问题", href: docsPath("/product/kvm-go/faq/") },
    { label: "下载应用", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
