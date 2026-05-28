import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod Series",
  slogan: "将手机变为智能键盘",
  subtitle: "为科技爱好者、专业人士和游戏玩家设计的可编程键盘与鼠标控制方案。",
  status: 'pre-launch',
  description:
    "一款紧凑型可编程 USB + Bluetooth HID 模拟器，可将您的手机转化为便携式键盘和触控板。基于 Openterface Mini-KVM 成熟的 HID 核心打造 —— 即插即用，100% 开源。",
  seoDescription:
    "KeyMod Series 将您的手机变为便携式键盘和触控板。支持 USB + Bluetooth HID 模拟，开源设计，非常适合自助终端维护和工作流快捷键。",
  keywords:
    "KeyMod, HID emulator, phone keyboard, Bluetooth keyboard, USB keyboard, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "立即支持",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "为自助终端或电视设置携带全尺寸键盘非常不便",
    "移动办公中需要可编程宏来简化工作流",
    "许多 HID 工具不开源，自定义程度有限",
  ],
  solutions: [
    "将手机作为便携式键盘和触控板使用",
    "在紧凑设备中集成 USB 和 Bluetooth HID",
    "100% 开源，并由 Openterface 应用提供支持",
  ],
  hwFeatures: [
    { title: "紧凑外形", description: "方便放入口袋，适合现场工作和旅行。" },
    { title: "USB + Bluetooth", description: "双重连接方式，确保最佳设备兼容性。" },
    { title: "开源硬件", description: "基于成熟的 Openterface HID 核心，设计透明可靠。" },
  ],
  swFeatures: [
    { title: "KeyMod 应用", description: "通过手机配置宏、布局和手柄配置文件。" },
    { title: "跨平台", description: "通过 Openterface 应用，支持 Android、iPadOS 和桌面端主机。" },
    { title: "开源", description: "全栈代码托管于 GitHub，欢迎社区贡献。" },
  ],
  specs: [
    { label: "连接方式", value: "USB-C + Bluetooth LE" },
    { label: "HID 模式", value: "Keyboard, mouse, gamepad" },
    { label: "许可协议", value: "Open source hardware & software" },
  ],
  useCases: [
    "智能电视与自助终端输入",
    "移动工作流宏",
    "游戏与辅助功能设置",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "功能特性", href: docsPath("/product/keymod/features/") },
    { label: "开箱清单", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "连接指南", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "常见问题", href: docsPath("/product/keymod/faq/") },
    { label: "下载 KeyMod 应用", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
