import { Cart, CartItem } from '@coba/api-interfaces';
import { NextResponse } from 'next/server';

const cart: Cart = {
  createdAt: 0,
  items: [],
};

export async function GET(request: Request) {
  return NextResponse.json(cart, { status: 200 });
}

export async function POST(request: Request) {
  const item: CartItem = (await request.json()) as any;
  cart.items = cart.items.concat(item);
  return NextResponse.json(cart, { status: 200 });
}
