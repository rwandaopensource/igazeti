CREATE TABLE "laws" (
  "id" bigserial PRIMARY KEY,
  "article" varchar NOT NULL,
  "law_text" bigint NOT NULL,
  "dateOfCreation" varchar NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);
