const rewireProvidePlugin = require("react-app-rewire-provide-plugin");

module.exports = (config, env) => {
  config = rewireProvidePlugin(config, env, {
    "window.Quill": ["react-quill", "Quill"]
  });

  return config;
};
