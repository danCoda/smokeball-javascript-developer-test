const { httpGet } = require("./mock-http-interface");

const getArnieQuotes = async (urls) => {
  const promises = urls.map(async (url) => {
    const response = await httpGet(url);
    const message = JSON.parse(response.body).message;

    if (response.status === 500) {
      return {
        FAILURE: message,
      };
    }
    return {
      "Arnie Quote": message,
    };
  });

  return Promise.all(promises);
};

module.exports = {
  getArnieQuotes,
};
