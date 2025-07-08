import { Hono, type Context } from "hono";
import { SpotifyTokenHandler } from "./handler/spotify";
import { logWithTimestamp } from "./utils/logger";

const handler = new SpotifyTokenHandler();
const app = new Hono();

app.get("/api/spotify-token", handler.honoHandler);

app.onError((err: unknown, c: Context) => {
	logWithTimestamp("error", err);
	return c.json({ error: "Internal Server Error" }, 500);
});

export default app;
