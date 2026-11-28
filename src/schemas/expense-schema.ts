import type { CollectionSchema } from 'deepspace/schema'

export const expensesSchema: CollectionSchema = {
  name: 'expenses',
  ownerField: 'ownerId',
  columns: [
    { name: 'name', storage: 'text', interpretation: 'plain', required: true },
    {
      name: 'walletId',
      storage: 'text',
      interpretation: { kind: 'reference', targetTable: 'wallets', displayColumn: 'name' },
      required: true,
    },
    { name: 'icon', storage: 'text', interpretation: 'plain', required: true },
    {
      name: 'amount',
      storage: 'number',
      interpretation: { kind: 'currency', symbol: '$', decimals: 2 },
      required: true,
    },
    { name: 'creationDate', storage: 'text', interpretation: { kind: 'datetime' }, required: true },
    { name: 'ownerId', storage: 'text', interpretation: 'plain', userBound: true, immutable: true },
  ],
  permissions: {
    viewer: { read: 'own', create: true, update: 'own', delete: 'own' },
    member: { read: 'own', create: true, update: 'own', delete: 'own' },
    admin: { read: true, create: true, update: true, delete: true },
  },
}
