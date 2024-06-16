module.exports = ({ env }) => {
  return ({
    admin: {
      auth: {
        secret: env("ADMIN_JWT_SECRET"),
      },
    },
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET')
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      }
    },
    navigation: {
      enabled: true,
    },
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: true
      }
    }
  });
}
