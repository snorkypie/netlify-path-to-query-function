export async function handler(event) {
  const { name } = event.queryStringParameters;

  return {
    statusCode: 200,
    headers: {
      'Cache-Control': 'max-age=365000000,immutable',
    },
    body: `Hello, ${name || 'World'}. ${new Date().toISOString()}\n`,
  };
}