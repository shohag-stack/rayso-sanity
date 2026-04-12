type Template = {
  _id: string;
  url: string;
  name: string;
  price: string;
  purchaseLink?: string;
  liveLink?: string;
  badge: string;
  desc: string;
  bg: string;
  categories: string[];
  accent: string;
  stats: { num: string; label: string }[];
  stack?: string[];
  features: { icon: string; title: string; desc: string }[];
  featuredImage?: {
    asset?: {
      url: string;
    };
  };

  gallery?: {
    asset?: {
      url: string;
    };
  }[];

  tags?: string[];
  slug: {
    current: string;
  };
  _updatedAt: string;
  status: string;
};

export default Template;