import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  return NextResponse.json({ success: true, url: 'mock_url' }, { status: 201 })
}
