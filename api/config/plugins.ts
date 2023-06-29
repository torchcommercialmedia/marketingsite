export default ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "llanzanrobinjohn@gmail.com",
        defaultReplyTo: "llanzanarobinjohn@gmail.com",
        testAddress: "johnrobinllanzana@gmail.com",
      },
    },
  },
});
