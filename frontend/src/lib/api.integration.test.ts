import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { fetchVersion } from "./api";

describe("API Integration", () => {
  beforeAll(() => {
    // Use Docker internal URL when running in container
    process.env.NEXT_PUBLIC_API_URL = "http://tempest:8080";
  });

  afterAll(() => {
    delete process.env.NEXT_PUBLIC_API_URL;
  });

  it("fetches version from the real API", async () => {
    const result = await fetchVersion();

    expect(result).toHaveProperty("version");
    expect(typeof result.version).toBe("string");
    expect(result.version.length).toBeGreaterThan(0);
  });
});
