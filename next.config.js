const withVideos = require("next-videos");

module.exports = withVideos();
module.exports = {
  images: {
    // limit of 25 deviceSizes values
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // limit of 25 imageSizes values
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // limit of 50 domains values
    domains: [
      "sutrashop.com.hr",
      "secure.gravatar.com",
      "marence53.files.wordpress.com",
      "basketball.hr",
    ],
    // path prefix for Image Optimization API, useful with `loader`
    path: "/_next/image",
    // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    loader: "default",
    // disable static imports for image files
    disableStaticImages: false,
    // minimumCacheTTL is in seconds, must be integer 0 or more
    minimumCacheTTL: 60,
    // ordered list of acceptable optimized image formats (mime types)
    formats: ["image/webp"],
  },
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        // svgoConfig: {
        //   plugins: [
        //     {
        //       name: "preset-default",
        //       params: {
        //         overrides: { removeViewBox: false },
        //       },
        //     },
        //   ],
        // },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  i18n: {
    locales: ["en", "hr", "it"],
    defaultLocale: "hr",
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: "/en/about-us",
        destination: "/en/o-nama",
        locale: false, // Use `locale: false` so that the prefix matches the desired locale correctly
      },
      {
        source: "/it/e-nostri",
        destination: "/it/o-nama",
        locale: false,
      },
    ];
  },
};

// module.exports = withTranslateRoutes({
//   // Next i18n config (mandatory): https://nextjs.org/docs/advanced-features/i18n-routing
//   i18n: {
//     locales: ["en", "fr", "es", "pl"],
//     defaultLocale: "pl",
//   },

//   // ...Remaining next config
// });
