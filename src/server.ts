import "dotenv/config";

import { logWithTimestamp } from "./utils/logger";
import { serve } from "@hono/node-server";

import app from "./app";

const PORT = Number(process.env.PORT) || 3000;

if (require.main === module) {
	serve({ fetch: app.fetch, port: PORT });
	logWithTimestamp(
		"info",
		`Spotify Token API (Hono) listening on http://localhost:${PORT}`,
	);
}
