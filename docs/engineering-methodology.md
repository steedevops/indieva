# Indieva — Engineering Methodology

## Purpose

Indieva is developed as a fictional engineering case study.

The objective is not only to build a working application, but also to demonstrate a structured engineering process in which product, software and infrastructure decisions can be explained and justified.

## Development Framework

Indieva combines:

- Lightweight Agile practices
- GitHub Flow
- DevOps practices
- An incremental engineering lifecycle

For each meaningful change, the engineering cycle is:

Requirement → Design → Implement → Test → Review

## Development Workflow

A typical Indieva feature follows this workflow:

1. Identify a product or technical requirement.
2. Create or select a GitHub Issue describing the requirement.
3. Create a dedicated `feature/*` branch.
4. Design the simplest solution that satisfies the current requirement.
5. Implement the solution incrementally.
6. Test and validate the implementation.
7. Create meaningful Git commits.
8. Push the branch to GitHub.
9. Open a Pull Request.
10. Review the changes.
11. Merge the validated work into `main`.
12. Close the corresponding Issue.

## Why Lightweight Agile?

Indieva is developed incrementally.

The project does not attempt to predict and design its final architecture from the beginning. Each iteration starts from a concrete requirement and produces a small, understandable and testable evolution of the platform.

This reduces unnecessary complexity and makes architectural decisions easier to justify.

## Why GitHub Flow?

GitHub Flow provides a simple version-control workflow suitable for incremental development.

The `main` branch represents the stable state of the project. New work is developed on dedicated branches such as:

`feature/initial-application`

Changes are committed incrementally and reviewed before being merged into `main`.

This provides:

- traceability;
- isolation of changes;
- readable project history;
- safer integration;
- a clear relationship between Issues, code changes and Pull Requests.

## Why DevOps Practices?

Indieva is intended to evolve beyond application development toward cloud and infrastructure engineering.

Development, testing, deployment, infrastructure and operations are therefore treated as parts of the same engineering lifecycle.

The application is intentionally built first. Infrastructure will then be introduced progressively when the application creates concrete operational requirements.

## Core Engineering Principle

**No technology without a concrete problem to solve.**

Indieva starts with the simplest architecture capable of satisfying the current product requirements.

Technologies such as containers, Kubernetes, cloud infrastructure, observability, GitOps or AI infrastructure must not be introduced simply because they are popular.

Each technology must solve an identifiable technical or operational problem.

## Initial Architecture

The initial application uses:

- Next.js + React + TypeScript for the web application;
- NestJS + TypeScript for the backend API;
- PostgreSQL for persistent application data.

The first objective is to make the complete application work locally.

Infrastructure complexity will be introduced progressively afterward.

## Architecture Evolution

The intended engineering progression is:

Application  
→ Containers  
→ CI/CD  
→ Kubernetes  
→ Cloud infrastructure  
→ Infrastructure as Code  
→ Observability and reliability  
→ GitOps and platform engineering  
→ AI workloads and AI infrastructure

This progression is not a mandatory technology checklist.

Each transition must be justified by a requirement or by a limitation encountered in the previous architecture.

## Engineering Decision Documentation

Important architectural decisions should answer three questions:

1. What problem were we trying to solve?
2. Why was this solution selected?
3. What alternatives or additional complexity were deliberately rejected or postponed?

This makes Indieva not only a software project, but a documented engineering case study.