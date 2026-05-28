/** Flat marketing URLs from slug-map SSOT (legacy nested slugs → short paths). */
export const PRODUCT_FLAT_PATHS: Record<string, string> = {
  keymod: '/keymod/',
  'kvm-go': '/kvmgo/',
  minikvm: '/minikvm/',
  'uconsole-kvm-extension': '/kvmext/',
  accessories: '/accessories/',
};

export const productsHubOrder = [
  'keymod',
  'kvm-go',
  'minikvm',
  'uconsole-kvm-extension',
  'accessories',
] as const;

export function productFlatPath(slug: string): string {
  return PRODUCT_FLAT_PATHS[slug] ?? `/products/${slug}/`;
}

export const productsHubSeo = {
  title: '产品',
  description:
    '面向 IT 专业人士、开发者和创客的超紧凑 KVM-over-USB 硬件与开源应用。',
  keywords: 'Openterface 产品, KeyMod, KVM-GO, Mini-KVM, KVM 扩展, 配件, KVM 应用',
};
