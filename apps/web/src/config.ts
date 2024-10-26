const contentBaseUrl = import.meta.env.VITE_CONTENT_BASE_URL;
const assetsBaseUrl = import.meta.env.VITE_ASSETS_BASE_URL;

export default {
  service: {
    content: { url: contentBaseUrl },
    assets: { url: assetsBaseUrl },
    i18n: { url: `${assetsBaseUrl}/i18n` }
  }
}
