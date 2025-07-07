# BlockActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**userId** | **string** | ID of user who was blocked/unblocked | [default to undefined]
**user** | [**User**](User.md) | Details of user who was blocked/unblocked | [default to undefined]
**blockedBy** | **string** | ID of user who performed the block/unblock action | [default to undefined]
**blockedByUser** | [**User**](User.md) | Details of user who performed the block/unblock action | [default to undefined]
**action** | **string** | Type of action performed (BLOCK/UNBLOCK) | [default to undefined]
**reason** | **string** | Reason for the block/unblock action | [default to undefined]

## Example

```typescript
import { BlockActivity } from '@ahomevilla-hotel/node-sdk';

const instance: BlockActivity = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    userId,
    user,
    blockedBy,
    blockedByUser,
    action,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
