# Freecommerce

An ecommerce from scratch with a modern tech stack:

- nx
- react
- nextjs
- tailwind
- daisyui
- typescript

Until know we have a working anonymous shopping cart persisted using redux and redis.
The plan is to make a multi tenancy ecommerce.

```
git clone https://github.com/hanspoo/freecommerce
cd freecommerce
```

Start redis with docker:

```
cd docker/
docker compose -f redis.yml up
```

Booot up dev env in another terminal:

```
npm install
npm run dev
```

Test in the browser:

http://localhost:3000
