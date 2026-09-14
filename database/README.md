# Indieva — Database

Ce dossier contient la structure PostgreSQL versionnée du projet Indieva.

## Fichiers

- `schema.sql` : décrit l’état actuel attendu de la base.
- `migrations/` : contient l’historique des évolutions du schéma.

## Modèle actuel

Le modèle relationnel actuel contient deux tables principales :

- `creators`
- `products`

Un créateur peut être lié à plusieurs produits.

Chaque produit doit obligatoirement être lié à un créateur existant via `creator_id`.

## Contraintes d’intégrité

La base impose notamment :

- un nom de produit obligatoire ;
- un nom de créateur obligatoire ;
- un prix strictement supérieur à 0 ;
- un stock supérieur ou égal à 0 ;
- un créateur valide pour chaque produit.

## Migration 001

`001_product_creator_model.sql` représente la première version de référence du modèle relationnel Indieva.

Elle est destinée à reconstruire cette structure sur une base vide.

Elle ne doit pas être exécutée directement sur la base locale actuelle, car les tables existent déjà.

## Principe de versionnement

Toute évolution future importante du schéma devra être :

1. justifiée par un besoin du projet ;
2. écrite dans une nouvelle migration ;
3. testée ;
4. validée ;
5. versionnée dans Git.