# Freecommerce

An ecommerce from scratch with a modern tech stack:

- nx
- react
- nextjs
- tailwind
- daisyui
- typescript

Until know we have a working anonymous shopping cart with persistence using redux and redis.

The plan is to make a multi tenancy ecommerce.

```
git clone https://github.com/hanspoo/freecommerce
cd freecommerce
```

Levantar redis

```
cd docker/
docker compose -f redis.yml up
```

En otro terminal ejecutar app

```
npm install
npm run dev
```

Ir al navegador:

http://localhost:3000
