## Summary

- Add the first versioned PostgreSQL schema for Indieva.
- Create the `creators` and `products` relational model.
- Link products to creators with a foreign key.
- Add database rules for required fields, positive prices and non-negative stock.
- Add the first database migration.

## Validation

- The relationship between `products` and `creators` was tested successfully.
- PostgreSQL rejects invalid creator references.
- Product and creator data can be retrieved together with a SQL JOIN.
- The schema is documented and versioned in Git.

## Project context

I am building the Indieva database step by step instead of creating the complete data model at once.

At this stage, the goal was to create a simple relational model that the backend could use later.

The next step is to connect the NestJS API to PostgreSQL and replace the temporary product data returned by the application.

## Current model

`creators -> products`

One creator can have several products.

Each product must reference an existing creator.
