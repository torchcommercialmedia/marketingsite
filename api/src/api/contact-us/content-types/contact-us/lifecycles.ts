export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      await strapi.plugins["email"].services.email.send({
        to: "johnrobinllanzana@gmail.com",
        from: result.email,
        subject: "Email from ",
        text: result.message,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
