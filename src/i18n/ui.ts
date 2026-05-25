export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "产品指南、常见问题、教程和应用下载请访问 docs.openterface.com。",
    "homeMessage": "教程、常见问题、应用下载和产品指南请访问 docs.openterface.com。",
    "linkLabel": "打开文档 ↗",
    "productMessage": "详细规格、设置指南和常见问题请访问 docs.openterface.com。"
  },
  "homeSubscribe": {
    "kicker": "保持关注",
    "heading": "第一时间获取 KVM-GO、KeyMod 和 Mini-KVM 更新",
    "description": "产品发布、固件更新和实用 IT 技巧 — 每月最多一封，无垃圾邮件，只有 Openterface 团队的有用资讯。",
    "benefitCrowdfunding": "众筹和预购窗口的早期访问",
    "benefitGuides": "设置指南和应用发布说明",
    "benefitUnsubscribe": "随时一键取消订阅",
    "submitLabel": "订阅更新",
    "namePlaceholder": "姓名（可选）",
    "emailPlaceholder": "邮箱地址 *",
    "footnote": "每月最多一封邮件。随时可取消订阅。咨询：info@openterface.com"
  }
};
