import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

// Sanity GROQ-powered webhook → on-demand revalidation.
// Configure in Sanity Manage with projection `{ _type }`,
// filter `_type in ["location", "servicesPage"]`, and the same secret.
type WebhookPayload = { _type?: string }

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // wait for the CDN to settle before revalidating
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', { status: 401 })
    }
    if (!body?._type) {
      return new Response('Missing _type', { status: 400 })
    }

    revalidateTag(body._type, 'max')
    return NextResponse.json({ revalidated: true, tag: body._type })
  } catch (err) {
    return new Response((err as Error).message, { status: 500 })
  }
}
