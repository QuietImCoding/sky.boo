import {
  BrowserOAuthClient,
  OAuthSession,
} from "@atproto/oauth-client-browser";
import { Agent } from "@atproto/api";
import { browser } from "$app/environment";

export async function initializeAuth() {
  let client;
  let agent;

  if (browser) {
    client = new BrowserOAuthClient({
      clientMetadata: {
        // Must be the same URL as the one used to obtain this JSON object
        client_id: "https://sky.boo/client-metadata.json",
        client_name: "BOO SKY",
        client_uri: "https://sky.boo",
        logo_uri: "https://sky.boo/logo.png",
        tos_uri: "https://sky.boo/tos",
        policy_uri: "https://sky.boo/policy",
        redirect_uris: ["https://sky.boo/callback"],
        scope: "atproto",
        grant_types: ["authorization_code", "refresh_token"],
        response_types: ["code"],
        token_endpoint_auth_method: "none",
        application_type: "web",
        dpop_bound_access_tokens: true,
      },
      handleResolver: "https://sky.boo",
    });

    agent = new Agent({ service: "https://sky.boo" });

    interface AuthResult {
      session: OAuthSession;
      state?: string;
    }

    const result = (await client.init()) as AuthResult;

    if (result) {
      const { session, state } = result;
      if (state != null) {
        console.log(
          `${session.sub} was successfully authenticated (state: ${state})`,
        );
      } else {
        console.log(`${session.sub} was restored (last active session)`);
      }
    } else {
      console.log("Unable to restore a session");
    }
    return client;
  }
}

export async function handleLogin(client: BrowserOAuthClient | undefined) {
  if (client) {
    try {
      await client.signIn("sky.boo", {
        state: "some value needed later",
        prompt: "none", // Attempt to sign in without user interaction (SSO)
        ui_locales: "en", // Only supported by some OAuth servers (requires OpenID Connect support + i18n support)
        signal: new AbortController().signal, // Optional, allows to cancel the sign in (and destroy the pending authorization, for better security)
      });

      console.log("Never executed");
    } catch (err) {
      console.log(
        'The user aborted the authorization process by navigating "back"',
      );
    }
  }
}
