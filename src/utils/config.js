const configDev = {
  API: {
    url: "http://api.metapix.me/api/v1",
  },
};

const configMock = {
  API: {
    url: "http://localhost:3001/api/v1",
  },
};

if (process.env.REACT_APP_MODE === "dev") {
  module.exports = configDev;
} else if (process.env.REACT_APP_MODE === "mock") {
  module.exports = configMock;
}
