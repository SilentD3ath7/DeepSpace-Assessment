import type { CollectionSchema } from 'deepspace/schema'

export const walletsSchema: CollectionSchema = {
  name: 'wallets',
  ownerField: 'ownerId',
  columns: [
    { name: 'name', storage: 'text', interpretation: 'plain', required: true },
    { name: 'icon', storage: 'text', interpretation: 'plain', required: true },
    { name: 'ownerId', storage: 'text', interpretation: 'plain', userBound: true, immutable: true },
  ],
  permissions: {
    viewer: { read: 'own', create: true, update: 'own', delete: 'own' },
    member: { read: 'own', create: true, update: 'own', delete: 'own' },
    admin: { read: true, create: true, update: true, delete: true },
  },
}
