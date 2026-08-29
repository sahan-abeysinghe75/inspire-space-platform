import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // Simulated event request creation
    return NextResponse.json({ success: true, id: 'req_123' }, { status: 201 })
  } catch (error) {
    console.error('Event request error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
