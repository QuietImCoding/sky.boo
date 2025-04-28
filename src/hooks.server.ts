import type { Handle } from "@sveltejs/kit";

const securityHeaders = {
  "Access-Control-Allow-Origin": "pds.sky.boo",
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  Object.entries(securityHeaders).forEach(([header, value]) =>
    response.headers.set(header, value),
  );

  return response;
};
