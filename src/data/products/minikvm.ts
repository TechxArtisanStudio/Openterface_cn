import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "将笔记本电脑变为 KVM 控制台",
  subtitle: "简化您的科技生活。",
  status: 'shipping',
  description:
    "即插即用的 KVM-over-USB 解决方案。通过 USB 和 HDMI，在笔记本电脑上直接控制旁边的无头计算机 —— 无需额外的外设或网络。",
  seoDescription:
    "Openterface Mini-KVM：支持 HDMI 的即插即用 KVM-over-USB。无需网络，即可在笔记本电脑上控制无头计算机。",
  keywords:
    "Mini-KVM, KVM over USB, headless control, HDMI KVM, plug and play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "立即下单",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Funded on Jun 13, 2024", backers: "3,775" },
  painPoints: [
    "每次维修服务器都要搬运显示器和键盘非常不便",
    "网络 KVM 需要复杂的配置和稳定的连接",
    "IT 专业人士日常需要一款可靠的便携式 KVM",
  ],
  solutions: [
    "将现有的笔记本电脑作为 KVM 控制台",
    "在紧凑设备中集成 HDMI 采集和 USB HID",
    "自 2024 年以来，已获得 5000 多名社区成员的认可",
  ],
  hwFeatures: [
    { title: "HDMI 采集", description: "将受控端的完整视频传输至您的主机笔记本电脑。" },
    { title: "USB 切换", description: "在主机和受控端之间切换 USB 设备。" },
    { title: "扩展引脚", description: "提供硬件 hack 和自定义集成选项。" },
  ],
  swFeatures: [
    { title: "Qt / macOS / Android 应用", description: "适配主流平台的高性能原生应用。" },
    { title: "开源", description: "完全开放的硬件和软件生态系统。" },
    { title: "活跃社区", description: "通过 Discord 和 GitHub 提供支持，并定期更新固件。" },
  ],
  specs: [
    { label: "视频输入", value: "HDMI" },
    { label: "USB 接口", value: "USB-C with switchable port" },
    { label: "状态", value: "Shipping — Crowd Supply" },
  ],
  useCases: [
    "个人实验室管理",
    "开发工作站并排控制",
    "IT 工作台故障排除",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "功能特性", href: docsPath("/product/minikvm/features/") },
    { label: "USB 切换", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "技术支持", href: docsPath("/product/minikvm/support/") },
    { label: "常见问题", href: docsPath("/product/minikvm/faq/") },
    { label: "下载应用", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
