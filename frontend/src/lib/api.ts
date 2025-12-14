function getApiBaseUrl(): string {
  if (typeof window === "undefined") {
    return process.env.API_URL as string;
  }
  return process.env.NEXT_PUBLIC_API_URL as string;
}

export async function fetchVersion(): Promise<{ version: string }> {
  const response = await fetch(`${getApiBaseUrl()}/api/version`);
  if (!response.ok) {
    throw new Error("Failed to fetch version");
  }
  return response.json();
}
