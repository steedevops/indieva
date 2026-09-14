## Summary

- Connect the NestJS API to the local PostgreSQL database.
- Add a database service using `pg`.
- Load database configuration through environment variables.
- Replace the temporary hardcoded products with data stored in PostgreSQL.
- Update the existing unit tests to support the new database dependency.

## Validation

- NestJS build completed successfully.
- Backend tests: 3/3 passed.
- `GET /products` returns products stored in PostgreSQL.
- The Next.js frontend displays the products returned by the API.
- The local `.env` file remains excluded from Git.

## Project context

Until this step, the `/products` endpoint returned a temporary hardcoded dataset.

I first used that simple version to validate the flow between Next.js and NestJS. Once that worked, I connected the backend to PostgreSQL so the application could start using stored data.

This keeps the project incremental: validate one layer before introducing the next one.

## Current architecture

`Browser -> Next.js -> NestJS -> ProductsController -> ProductsService -> DatabaseService -> PostgreSQL`

The frontend does not access PostgreSQL directly. Data access remains on the backend side.

## Next step

Verify the complete flow by changing data in PostgreSQL and confirming that the updated value is returned by the API and displayed by Next.js.

## Related commit

`d2fc1ea` - `feat(api): connect products service to PostgreSQL`
