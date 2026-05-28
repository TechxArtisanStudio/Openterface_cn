import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "产品",
    href: '/products/',
    children: [
      { label: "全部产品", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "配件", href: '/accessories/' },
    ],
  },
  {
    label: "应用",
    href: '/app/',
    children: [
      { label: "全部应用", href: '/app/' },
      { label: "KVM 控制", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "媒体", href: '/videos/' },
  { label: "关于我们", href: '/about/' },
  { label: "文档", href: docsPath(), external: true },
  { label: "新闻", href: newsPath(), external: true },
  { label: "商店", href: siteConfig.links.shop, external: true },
];
