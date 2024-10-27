const baseUrl = process.env.PAYLOAD_PUBLIC_BASE_URL ?? '';

const routes = {
    admin: `${baseUrl}/admin`,
    api: `${baseUrl}/api`,
}

export default routes;
