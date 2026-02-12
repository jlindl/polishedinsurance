import { NextRequest, NextResponse } from 'next/server'

const GHL_API_KEY = 'pit-389c567c-9a43-445c-9833-35472d6f192d'
const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      )
    }

    // Create contact in Go High Level
    const response = await fetch(GHL_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify({
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || '',
        email: email,
        phone: phone,
        source: 'Facebook Landing Page',
        locationId: 'vIV4NhwxQjnUUCi2kwMw',
      }),
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('GHL API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        body: errorData,
        headers: Object.fromEntries(response.headers.entries())
      })
      return NextResponse.json(
        {
          error: 'Failed to create contact in GHL',
          details: errorData,
          status: response.status,
          statusText: response.statusText
        },
        { status: response.status }
      )
    }

    const data = await response.json()

    return NextResponse.json(
      { success: true, contact: data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error creating GHL contact:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
