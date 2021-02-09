export async function handler(event) {
  const { name } = event.queryStringParameters;

  return {
    statusCode: 200,
    body:
      JSON.stringify(
        {
          msg: `Hello, ${name || 'World'}. ${new Date().toISOString()}`,
          params: event.queryStringParameters,
        },
        null,
        4
      ) + '\n',
  };
}
