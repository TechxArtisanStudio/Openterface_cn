import { legacyPath, newsPath } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: '首页', href: '/' },
  {
    label: '产品',
    href: '#',
    children: [
      { label: 'KeyMod 系列', href: '/products/keymod/' },
      { label: 'KVM-GO 系列', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: '配件', href: '/products/accessories/' },
    ],
  },
  { label: '视频', href: '/videos/' },
  { label: '使用案例', href: '/use-cases/' },
  { label: '常见问题', href: legacyPath('/faq/'), external: true },
  { label: '应用', href: legacyPath('/app/overview/'), external: true },
  { label: '教程', href: legacyPath('/tutorial/'), external: true },
  { label: '支持', href: legacyPath('/support/'), external: true },
  { label: '资讯', href: newsPath(), external: true },
  { label: '关于我们', href: '/about/' },
];
