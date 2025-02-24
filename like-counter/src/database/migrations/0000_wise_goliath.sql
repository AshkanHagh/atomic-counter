CREATE TABLE "likes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"count" bigint DEFAULT 0 NOT NULL
);
