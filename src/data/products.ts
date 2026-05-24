import { docsPath, siteConfig } from '../config/site';

export interface ProductDocLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  title: string;
  slogan: string;
  subtitle: string;
  description: string;
  seoDescription: string;
  keywords: string;
  heroImage: string;
  heroImages: string[];
  buyLabel: string;
  buyHref: string;
  painPoints: string[];
  solutions: string[];
  hwFeatures: { title: string; description: string }[];
  swFeatures: { title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: string[];
  funding?: { amount: string; date: string; backers: string };
  docLinks: ProductDocLink[];
  legacyBase: string;
}

export const products: Record<string, Product> = {
  keymod: {
    slug: 'keymod',
    title: 'Openterface KeyMod Series',
    slogan: '将手机变为智能键盘',
    subtitle: '为科技爱好者、专业人士和游戏玩家设计的可编程键盘与鼠标控制方案。',
    description:
      '一款紧凑型可编程 USB + Bluetooth HID 模拟器，可将您的手机转化为便携式键盘和触控板。基于 Openterface Mini-KVM 成熟的 HID 核心打造 —— 即插即用，100% 开源。',
    seoDescription:
      'KeyMod Series 将您的手机变为便携式键盘和触控板。支持 USB + Bluetooth HID 模拟，开源设计，非常适合自助终端维护和工作流快捷键。',
    keywords: 'KeyMod, HID emulator, phone keyboard, Bluetooth keyboard, USB keyboard, open source',
    heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    heroImages: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    buyLabel: '立即支持',
    buyHref: siteConfig.links.keymodCrowdsupply,
    painPoints: [
      '为自助终端或电视设置携带全尺寸键盘非常不便',
      '移动办公中需要可编程宏来简化工作流',
      '许多 HID 工具不开源，自定义程度有限',
    ],
    solutions: [
      '将手机作为便携式键盘和触控板使用',
      '在紧凑设备中集成 USB 和 Bluetooth HID',
      '100% 开源，并由 Openterface 应用提供支持',
    ],
    hwFeatures: [
      { title: '紧凑外形', description: '方便放入口袋，适合现场工作和旅行。' },
      { title: 'USB + Bluetooth', description: '双重连接方式，确保最佳设备兼容性。' },
      { title: '开源硬件', description: '基于成熟的 Openterface HID 核心，设计透明可靠。' },
    ],
    swFeatures: [
      { title: 'KeyMod 应用', description: '通过手机配置宏、布局和手柄配置文件。' },
      { title: '跨平台', description: '通过 Openterface 应用，支持 Android、iPadOS 和桌面端主机。' },
      { title: '开源', description: '全栈代码托管于 GitHub，欢迎社区贡献。' },
    ],
    specs: [
      { label: '连接方式', value: 'USB-C + Bluetooth LE' },
      { label: 'HID 模式', value: 'Keyboard, mouse, gamepad' },
      { label: '许可协议', value: 'Open source hardware & software' },
    ],
    useCases: ['智能电视与自助终端输入', '移动工作流宏', '游戏与辅助功能设置'],
    docLinks: [
      { label: '功能特性', href: docsPath('/product/keymod/features/') },
      { label: '开箱清单', href: docsPath('/product/keymod/whats-in-the-box/') },
      { label: '连接指南', href: docsPath('/product/keymod/how-to-connect/') },
      { label: '常见问题', href: docsPath('/product/keymod/faq/') },
      { label: '下载 KeyMod 应用', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/keymod/',
  },
  'kvm-go': {
    slug: 'kvm-go',
    title: 'Openterface KVM-GO Series',
    slogan: '能挂在钥匙扣上的超紧凑 KVM',
    subtitle: '应对技术关键时刻 —— 即插即用，随心掌控。',
    description:
      '集成视频接口（HDMI、DisplayPort 或 VGA）的新一代 KVM-over-USB 解决方案。超紧凑钥匙扣大小，专为数据中心和机房的快速 IT 运维而设计。',
    seoDescription:
      '使用 Openterface KVM-Go 掌控无头计算机。内置 HDMI/DP/VGA，钥匙扣大小，专为 IT 专业人士打造的 4K KVM-over-USB。',
    keywords: 'KVM-Go, KVM over USB, ultra-compact KVM, keychain KVM, 4K KVM, headless control',
    heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    buyLabel: '立即预订',
    buyHref: siteConfig.links.kvmgoPurchase,
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    painPoints: [
      '传统 KVM 设备笨重且需要额外的视频线缆',
      '现场紧急访问服务器需要便携式工具',
      '在无网络访问的情况下，对无头设备进行故障排除效率低下',
    ],
    solutions: [
      '内置视频接口，告别繁杂线缆',
      '钥匙扣外形，随时随地触手可及',
      'KVM-over-USB —— 受控端无需网络或驱动程序',
    ],
    hwFeatures: [
      { title: '内置视频接口', description: '提供 HDMI、DisplayPort 或 VGA 型号，无需外部线缆。' },
      { title: '钥匙扣尺寸', description: 'Openterface 系列中体积最小的 KVM-over-USB 设备。' },
      { title: '4K 支持', description: '为现代显示器提供高分辨率视频采集。' },
    ],
    swFeatures: [
      { title: 'Openterface Qt 应用', description: '跨平台控制端，支持 Windows、macOS 和 Linux。' },
      { title: 'MicroSD 切换', description: '可切换存储空间，用于存放便携式系统镜像和工具。' },
      { title: '开源技术栈', description: '由社区驱动的固件和主机端应用。' },
    ],
    specs: [
      { label: '视频', value: 'HDMI / DP / VGA (model dependent)' },
      { label: '分辨率', value: 'Up to 4K' },
      { label: '连接方式', value: 'USB-C KVM-over-USB' },
    ],
    useCases: ['数据中心巡检', '无头设备设置', '现场 IT 维护与个人实验室抢修'],
    docLinks: [
      { label: '功能特性', href: docsPath('/product/kvm-go/features/') },
      { label: 'Beta 版快速入门', href: docsPath('/product/kvm-go/beta-quick-start/') },
      { label: '连接指南', href: docsPath('/product/kvm-go/how-to-connect/') },
      { label: '常见问题', href: docsPath('/product/kvm-go/faq/') },
      { label: '下载应用', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/kvm-go/',
  },
  minikvm: {
    slug: 'minikvm',
    title: 'Openterface Mini-KVM',
    slogan: '将笔记本电脑变为 KVM 控制台',
    subtitle: '简化您的科技生活。',
    description:
      '即插即用的 KVM-over-USB 解决方案。通过 USB 和 HDMI，在笔记本电脑上直接控制旁边的无头计算机 —— 无需额外的外设或网络。',
    seoDescription:
      'Openterface Mini-KVM：支持 HDMI 的即插即用 KVM-over-USB。无需网络，即可在笔记本电脑上控制无头计算机。',
    keywords: 'Mini-KVM, KVM over USB, headless control, HDMI KVM, plug and play KVM',
    heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    heroImages: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    buyLabel: '立即下单',
    buyHref: siteConfig.links.minikvmPurchase,
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    painPoints: [
      '每次维修服务器都要搬运显示器和键盘非常不便',
      '网络 KVM 需要复杂的配置和稳定的连接',
      'IT 专业人士日常需要一款可靠的便携式 KVM',
    ],
    solutions: [
      '将现有的笔记本电脑作为 KVM 控制台',
      '在紧凑设备中集成 HDMI 采集和 USB HID',
      '自 2024 年以来，已获得 5000 多名社区成员的认可',
    ],
    hwFeatures: [
      { title: 'HDMI 采集', description: '将受控端的完整视频传输至您的主机笔记本电脑。' },
      { title: 'USB 切换', description: '在主机和受控端之间切换 USB 设备。' },
      { title: '扩展引脚', description: '提供硬件 hack 和自定义集成选项。' },
    ],
    swFeatures: [
      { title: 'Qt / macOS / Android 应用', description: '适配主流平台的高性能原生应用。' },
      { title: '开源', description: '完全开放的硬件和软件生态系统。' },
      { title: '活跃社区', description: '通过 Discord 和 GitHub 提供支持，并定期更新固件。' },
    ],
    specs: [
      { label: '视频输入', value: 'HDMI' },
      { label: 'USB 接口', value: 'USB-C with switchable port' },
      { label: '状态', value: 'Shipping — Crowd Supply' },
    ],
    useCases: ['个人实验室管理', '开发工作站并排控制', 'IT 工作台故障排除'],
    docLinks: [
      { label: '功能特性', href: docsPath('/product/minikvm/features/') },
      { label: 'USB 切换', href: docsPath('/product/minikvm/usb-switch/') },
      { label: '技术支持', href: docsPath('/product/minikvm/support/') },
      { label: '常见问题', href: docsPath('/product/minikvm/faq/') },
      { label: '下载应用', href: docsPath('/app/overview/') },
    ],
    legacyBase: '/product/minikvm/',
  },
  'uconsole-kvm-extension': {
    slug: 'uconsole-kvm-extension',
    title: 'uConsole KVM Extension',
    slogan: '为您的 uConsole 注入 KVM 能量',
    subtitle: '将便携式 uConsole 转化为功能齐全的 KVM 终端。',
    description:
      '为 Clockwork uConsole 增加 KVM-over-USB 功能的硬件扩展。内置键盘 and 显示屏，是便携式 IT 工作的理想选择。',
    seoDescription:
      'uConsole KVM Extension 为 Clockwork uConsole 便携式计算机添加了 KVM-over-USB 功能。',
    keywords: 'uConsole, KVM extension, portable KVM, Clockwork uConsole',
    heroImage: 'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    heroImages: [
      'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    ],
    buyLabel: '了解更多',
    buyHref: docsPath('/product/uconsole-kvm-extension/'),
    painPoints: [
      '便携式控制台缺乏用于控制无头受控端的集成 KVM 功能',
      '现场技术人员希望一机多用',
    ],
    solutions: [
      '适配 uConsole 外形的原生扩展板',
      '在便携设备上运行完整的 Openterface KVM 技术栈',
    ],
    hwFeatures: [
      { title: 'uConsole 原生设计', description: '专为 Clockwork uConsole 量身打造。' },
      { title: '紧凑型 PCB', description: '可安装在 uConsole 机壳内部。' },
    ],
    swFeatures: [
      { title: 'Openterface 应用', description: '使用与 Mini-KVM 和 KVM-GO 相同且值得信赖的软件。' },
      { title: '安装指南', description: '提供详尽的硬件和软件安装文档。' },
    ],
    specs: [
      { label: '兼容性', value: 'Clockwork uConsole' },
      { label: '认证', value: 'OSHWA certified' },
    ],
    useCases: ['便携式数据中心工具', '移动创客与个人实验室'],
    docLinks: [
      { label: '硬件安装', href: docsPath('/product/uconsole-kvm-extension/hardware-installation/') },
      { label: '软件设置', href: docsPath('/product/uconsole-kvm-extension/software-setup/') },
      { label: '连接指南', href: docsPath('/product/uconsole-kvm-extension/connect-to-target/') },
      { label: '常见问题', href: docsPath('/product/uconsole-kvm-extension/faq/') },
    ],
    legacyBase: '/product/uconsole-kvm-extension/',
  },
  accessories: {
    slug: 'accessories',
    title: 'Openterface Accessories',
    slogan: '完善您的装备',
    subtitle: '为专业人士打造的高品质线缆、适配器和工具包。',
    description:
      '精选必备配件，包括视频适配器、高速线缆和存储解决方案。选用 TxA 商店的高品质装备，提升您的 Openterface 使用体验。',
    seoDescription: 'Openterface 配件 —— 线缆、适配器、工具包和视频接口。',
    keywords: 'KVM accessories, HDMI cable, USB-C cable, toolkit bag',
    heroImage: 'https://assets.openterface.com/images/cover.webp',
    heroImages: ['https://assets.openterface.com/images/cover.webp'],
    buyLabel: '立即购买',
    buyHref: siteConfig.links.shop,
    painPoints: ['现场缺少合适的线缆会延误每一次维修'],
    solutions: ['经过 Openterface 产品测试的精选配件'],
    hwFeatures: [
      { title: '视频适配器', description: 'HDMI、VGA 及各种特殊接口。' },
      { title: '高速线缆', description: '专为 KVM 工作负载打造的 USB-C 和 Type-A 线缆。' },
      { title: '工具包', description: '整洁收纳您的全套 Openterface 设备。' },
    ],
    swFeatures: [],
    specs: [],
    useCases: ['现场装备整理', '视频格式转换', 'IT 工具包备用线缆'],
    docLinks: [
      { label: '所有规格', href: docsPath('/product/accessories/') },
      { label: 'TxA 商店', href: siteConfig.links.shop },
    ],
    legacyBase: '/product/accessories/',
  },
};

export const productSlugs = Object.keys(products);
