const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35',
      color: 'Black',
      rating: 4.5,
      discountPercentage: 10,
    },
    {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35',
      color: 'Black',
      rating: 4.0,
      discountPercentage: 15,
    },
    {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35',
      color: 'Black',
      rating: 4.2,
      discountPercentage: 20,
    },
    {
      id: 4,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '35',
      color: 'Black',
      rating: 3.8,
      discountPercentage: 5,
    },
    // More products...
  ]



  const Categories = [...new Set ([...products.map(p=>p.category)])]

  const categoryObjects = Categories.map(c => ({
    value: c,
    label: c.split('-').join(' '),
    checked: false
  }));