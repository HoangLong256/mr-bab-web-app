import { CONTENTFUL_TOKEN_COOKIE_NAME } from "~/constants/index.constants";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const runtimeConfig = useRuntimeConfig(event);

    if (!runtimeConfig.contentful?.accessToken) {
      throw createError({
        statusCode: 500,
        message: "Contentful access token is not configured",
      });
    }

    setCookie(
      event,
      CONTENTFUL_TOKEN_COOKIE_NAME,
      runtimeConfig.contentful.accessToken,
      {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      }
    );

    return { success: true };
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: "Failed to set authentication cookie",
    });
  }
});
