export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Mujer',
      featured: [
        {
          name: 'Novedades',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Modelos sentadas de espaldas, usando camiseta básica en negro y beige.',
        },
        {
          name: 'Camisetas Básicas',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Primer plano del conjunto de camisetas básicas en blanco, ocre, oliva y negro.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Ropa',
          items: [
            { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
            { name: 'Vestidos', id:"women_dress", href: '#' },
            { name: 'Jeans para Mujer', id: 'women_jeans' },
            { name: 'Suéteres', id: 'sweater' },
            { name: 'Camisetas', id: 't-shirt' },
            { name: 'Chaquetas', id: 'jacket' },
            { name: 'Vestidos de Gala', id: 'gouns' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accesorios',
          items: [
            { name: 'Relojes', id: 'watch' },
            { name: 'Carteras', id: 'wallet' },
            { name: 'Bolsos', id: 'bag' },
            { name: 'Gafas de Sol', id: 'sunglasse' },
            { name: 'Sombreros', id: 'hat' },
            { name: 'Cinturones', id: 'belt' },
          ],
        },
        {
          id: 'brands',
          name: 'Marcas',
          items: [
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Significant Other', id: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Hombre',
      featured: [
        {
          name: 'Novedades',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Top con cordón y cierre elástico y acolchado interior texturizado.',
        },
        {
          name: 'Camisetas con Arte',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Tres camisetas en gris, blanco y azul organizadas en una mesa con el mismo dibujo lineal de manos y formas superpuestas en el frente.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Ropa',
          items: [
            { name: 'Ropa para Hombre', id: 'mens_camisas' },
            { name: 'Camisas', id: 'shirt' },
            { name: 'Jeans para Hombre', id: 'men_jeans' },
            { name: 'Suéteres', id: '#' },
            { name: 'Camisetas', id: 't-shirt' },
            { name: 'Chaquetas', id: '#' },
            { name: 'Ropa Deportiva', id: '#' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accesorios',
          items: [
            { name: 'Relojes', id: '#' },
            { name: 'Carteras', id: '#' },
            { name: 'Bolsos', id: '#' },
            { name: 'Gafas de Sol', id: '#' },
            { name: 'Sombreros', id: '#' },
            { name: 'Cinturones', id: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Marcas',
          items: [
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Compañía', id: '/' },
    { name: 'Tiendas', id: '/' },
  ],
}
