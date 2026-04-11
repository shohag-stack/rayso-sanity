type Template = {
  name: string;
  price: string;
  badge: string;
  desc: string;
  bg: string;
  accent: string;
  stats: { num: string; label: string }[];
  stack?: string[];
  features: { icon: string; title: string; desc: string }[];
  featuredImage?: {
    asset?: {
      url: string;
    };
  };
};

export default Template;