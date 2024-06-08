import { Cart, CartItem } from '@coba/api-interfaces';
import { NextResponse } from 'next/server';
import { session } from '../../../lib/session'; //We import it from the initialisation file we created earlier

export async function GET(request: Request) {
  let cart: Cart = (await session().get('cart')) as any;
  if (!cart) {
    cart = await newCart();
  }

  return NextResponse.json(cart, { status: 200 });
}

export async function POST(request: Request) {
  const item: CartItem = (await request.json()) as any;

  let cart: Cart = (await session().get('cart')) as any;
  if (!cart) {
    cart = await newCart();
  }

  cart.items = cart.items.concat(item);
  await session().set('cart', cart);

  return NextResponse.json(cart, { status: 200 });
}

export async function DELETE(request: Request) {
  const cart = await newCart();
  return NextResponse.json(cart, { status: 200 });
}

async function newCart(): Promise<Cart> {
  const cart = {
    createdAt: new Date().getTime(),
    items: [],
  };
  await session().set('cart', cart);
  return cart;
}
