# mega-scaffold

Hello everyone here sharing this small core for new projects, it makes work together the next technologies:

- nx
- nextjs
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

Create two databases, one for zitadel and the other for the app, for example:

```
createdb mega-scaffold
createdb zitadel
```

Then replace database credentials in .env and in zitadel-server/run.sh.

## Generate prisma client

```
nx prisma-generate dao-prisma
nx prisma-push dao-prisma
```

## Create .env file in project root:

```
NEXTAUTH_URL=http://localhost:3000
ZITADEL_CLIENT_ID=1c7061a0-bf70-48dd-a0ed-a989340d9474
ZITADEL_CLIENT_SECRET=1c7061a0-bf70-48dd-a0ed-a989340d9474
ZITADEL_ISSUER=http://localhost:8080
NEXTAUTH_SECRET=1c7061a0-bf70-48dd-a0ed-a989340d9474

DATABASE_URL=postgresql://user:pass@localhost:5432/mega-scaffold

RESEND_API_KEY=1c7061a0-bf70-48dd-a0ed-a989340d9474
RESEND_FROM=xxxx@resend.dev
```

## Run zitadel server, first modify run.sh with your configuration.

```
cd zitadel-server
./run.sh
```

# Todo

Configure JWT validation in server side.
