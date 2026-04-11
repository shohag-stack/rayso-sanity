type Template = {
  _id: string;
  url: string;
  name: string;
  price: string;
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
  tags?: string[];
  slug: {
    current: string;
  };
};

export default Template;