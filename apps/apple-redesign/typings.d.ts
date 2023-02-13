type Categorys = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'category';
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
};

type Products = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'product';
  title: string;
  price: number;
  slug: {
    _type: 'slug';
    current: string;
  };
  description: string;
  category: {
    _type: 'reference';
    _ref: string;
  };
  image: Image[];
};
