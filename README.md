# mega-scaffold

Hello everyone here sharing this small core for new projects, it makes work together the next technologies:

- nx
- nextjs & next-auth
- zitadel
- prisma
- postgreSQL
- resend
- tailwind
- daisyui

It has a public and admin zone, admin zone managed with zitadel.

In the public zone you can post articles and in the admin zone you display and manage them.

When posting an article an email is sent to the author.

The articles get stored via prisma in postgreSQL.

Zitadel using postgres as database.

## Starting

```
git clone https://github.com/hanspoo/mega-scaffold
cd mega-scaffold
npm install
```

## Databases

Create the database for our data, in this case article and item tables.

```
createdb mega-scaffold
```

## Generate prisma client

```
nx prisma-generate dao-prisma
nx prisma-push dao-prisma
```

## Create .env file in project root:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=qwertyuioqwertyui

ZITADEL_CLIENT_ID=274419814053775107@kproject
ZITADEL_CLIENT_SECRET=fa3c7629-2bcf-4416-8d4c-703df13559cb
ZITADEL_ISSUER=http://localhost:8080
ZITADEL_REDIRECT_URI=http://localhost:3000/api/auth/callback/zitadel

DATABASE_URL=postgresql://postgres:123456@localhost:5432/mega-scaffold

RESEND_API_KEY=ede18da1-dd66-4d96-941e-f50d7b64ec96
RESEND_FROM=onboarding@resend.dev

```

## Run zitadel server

```
cd zitadel-server
docker compose up
```

Zitadel Web Admin is at:

`http://localhost:8080/ui/console`

## Start the nextjs project

`nx dev mega`

Open your browser in:

`http://localhost:3000`

Click the button to Create an article.

Click in the footer of the page in administration or go directly to:

`http://localhost:3000/admin`

Login with user and pass:

`zitadel-admin@zitadel.localhost`

and password

`Password1!`

## Todo

Configure JWT validation in server side.

## Apologies

We have not finished the translations, so it's mostly spanglish right now.
