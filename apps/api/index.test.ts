// A simple Express app instance is needed for testing.
// We assume `apps/api/index.ts` is refactored to export the `app` object (per docs:contentReference[oaicite:11]{index=11}).
import request from "supertest";
import { describe, test, expect } from "vitest";
import { app } from "./index"; // Assumes index.ts does: export const app = express();

describe("Express API", () => {
  test("GET / returns success JSON", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: "Orion API get test successful" });
  });

  test("Response includes CORS header", async () => {
    const res = await request(app).get("/");
    expect(res.headers["access-control-allow-origin"]).toBe("*");
  });

  test("GET unknown route returns 404", async () => {
    const res = await request(app).get("/this-route-does-not-exist");
    expect(res.status).toBe(404);
  });
});
