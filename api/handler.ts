import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'https://deno.land/x/lambda/mod.ts';
import template from './template.tsx';

export async function handler (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: `${template}`,
    headers: {
        'Content-Type': 'text/html; charset=utf-8'
    }
  };
}
