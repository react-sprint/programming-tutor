export function mockFetch(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(5), 1000);
  });
}
