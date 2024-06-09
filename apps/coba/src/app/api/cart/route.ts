import { Cart, CartItem } from '@coba/api-interfaces';
import { NextRequest, NextResponse } from 'next/server';
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

  const index = cart.items.findIndex((it) => it.id === item.id);
  if (index >= 0) {
    const it = cart.items[index];
    cart.items[index] = { ...it, quantity: it.quantity + 1 };
  } else {
    cart.items = cart.items.concat(item);
  }
  await session().set('cart', cart);

  return NextResponse.json(cart, { status: 200 });
}

type ParamsType = {
  params: {
    id: string;
  };
};

export async function DELETE(request: NextRequest) {
  let cart: Cart;

  const id = request.nextUrl.searchParams.get('id');
  console.log({ id });
  if (!id || id === 'all') {
    cart = await newCart();
  } else {
    cart = (await session().get('cart')) as any;
    if (!cart) {
      cart = await newCart();
    }
    cart.items = cart.items.filter((item) => item.id !== id);
  }
  await session().set('cart', cart);
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
