
.PHONY: add_db_prisma
add_db_prisma:
	npm i -D prisma
	npm i @prisma/client


.PHONY: prisma_init
prisma_init:
	npx prisma init

prisma_migrate: prisma/schema.prisma
	npx prisma migrate dev --name init

.PHONY: prisma_studio
prisma_studio:
	npx prisma studio