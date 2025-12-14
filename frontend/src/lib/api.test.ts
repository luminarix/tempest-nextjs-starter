import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { fetchVersion } from "./api";

describe("fetchVersion", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    vi.stubEnv("NEXT_PUBLIC_API_URL", "http://localhost");
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    mockFetch.mockReset();
  });

  it("fetches version successfully", async () => {
    const mockResponse = { version: "1.0.0" };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    });

    const result = await fetchVersion();

    expect(mockFetch).toHaveBeenCalledWith("http://localhost/api/version");
    expect(result).toEqual({ version: "1.0.0" });
  });

  it("throws error when response is not ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(fetchVersion()).rejects.toThrow("Failed to fetch version");
  });

  it("throws error when fetch fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    await expect(fetchVersion()).rejects.toThrow("Network error");
  });
});
