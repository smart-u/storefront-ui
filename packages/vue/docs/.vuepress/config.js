module.exports = {
  title: 'Storefront UI',
  description: 'Customizable and performant Vue.js UI library for eCommerce',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://divante.com/open-graph/favicons_storefrontui/sfui_favicon-32x32.png"}],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'http://storybook.storefrontui.io' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' }
    ],
    sidebarDepth: 2,
    sidebar: [
      ['/introduction', 'Introduction'],
      ['/getting-started', 'Getting started'],
      ['/customization', 'Customization'],
      ['/meet-the-team', 'Meet the core team'],
      {
        title: 'Contributing Guide',
        collapsable: false,
        children: [
          ['/contributing/become-a-contributor', 'Become a contributor'],
          ['/contributing/github-guidelines', 'Working with Github'],
          ['/contributing/coding-guidelines', 'Coding guidelines'],
          ['/contributing/creating-new-component', 'Create/Edit Component'],
          ['/contributing/documentation-guidelines', 'Documetation guidelines'],
          ['/contributing/issue-report-guidelines', 'How to report an issue'],
        ],
      },
      {
        title: 'Styles & Designs',
        collapsable: false,
        children: [
          ['/design/color-palette', 'Colors'],
          ['/design/sizes', 'Sizes'],
          ['/design/working-with-designs', 'Working with Designs']
        ],
      },
      {
        title: 'Components [WIP]',
        collapsable: false,
        children: [
          // @components-docs-start (keep comment and indentation for auto-generated component docs)
          ["/components/Accordion", "Accordion"],
          ["/components/AddToCart", "Add To Cart"],
          ["/components/Alert", "Alert"],
          ["/components/Arrow", "Arrow"],
          ["/components/Badge", "Badge"],
          ["/components/Banner", "Banner"],
          ["/components/BannerGrid", "Banner Grid"],
          ["/components/Bar", "Bar"],
          ["/components/BottomNavigation", "Bottom Navigation"],
          ["/components/Breadcrumbs", "Breadcrumbs"],
          ["/components/Bullets", "Bullets"],
          ["/components/Button", "Button"],
          ["/components/CallToAction", "Call To Action"],
          ["/components/Carousel", "Carousel"],
          ["/components/Characteristic", "Characteristic"],
          ["/components/Checkbox", "Checkbox"],
          ["/components/Chevron", "Chevron"],
          ["/components/CircleIcon", "Circle Icon"],
          ["/components/CollectedProduct", "Collected Product"],
          ["/components/Color", "Color"],
          ["/components/ContentPages", "Content Pages"],
          ["/components/Counter", "Counter"],
          ["/components/Divider", "Divider"],
          ["/components/Filter", "Filter"],
          ["/components/Footer", "Footer"],
          ["/components/Gallery", "Gallery"],
          ["/components/GroupedProduct", "Grouped Product"],
          ["/components/Header", "Header"],
          ["/components/Heading", "Heading"],
          ["/components/Hero", "Hero"],
          ["/components/Icon", "Icon"],
          ["/components/Image", "Image"],
          ["/components/Input", "Input"],
          ["/components/List", "List"],
          ["/components/Loader", "Loader"],
          ["/components/MegaMenu", "Mega Menu"],
          ["/components/MenuItem", "Menu Item"],
          ["/components/Modal", "Modal"],
          ["/components/Notification", "Notification"],
          ["/components/Options", "Options"],
          ["/components/Overlay", "Overlay"],
          ["/components/Pagination", "Pagination"],
          ["/components/Price", "Price"],
          ["/components/ProductCard", "Product Card"],
          ["/components/ProductOption", "Product Option"],
          ["/components/Property", "Property"],
          ["/components/QuantitySelector", "Quantity Selector"],
          ["/components/Radio", "Radio"],
          ["/components/Rating", "Rating"],
          ["/components/Review", "Review"],
          ["/components/Scrollable", "Scrollable"],
          ["/components/SearchBar", "Search Bar"],
          ["/components/Section", "Section"],
          ["/components/Select", "Select"],
          ["/components/Sidebar", "Sidebar"],
          ["/components/SlidingSection", "Sliding Section"],
          ["/components/Steps", "Steps"],
          ["/components/Sticky", "Sticky"],
          ["/components/StoreLocator", "Store Locator"],
          ["/components/Table", "Table"],
          ["/components/Tabs", "Tabs"],
          ["/components/TopBar", "Top Bar"]
          // @components-docs-end
        ],
      },
    ]
  }
};
