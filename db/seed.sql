CREATE TABLE "emails" (
  "id" SERIAL PRIMARY KEY,
  "email" varchar(200) UNIQUE,
  "email_list" boolean,
  "contacted" boolean,
  "subscribed" boolean,
  "date" timestamp
);