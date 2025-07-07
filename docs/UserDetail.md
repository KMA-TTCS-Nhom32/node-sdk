# UserDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**phone** | **string** |  | [default to undefined]
**verified_email** | **boolean** |  | [default to undefined]
**verified_phone** | **boolean** |  | [default to undefined]
**identifier_type** | **string** |  | [default to undefined]
**is_blocked** | **boolean** |  | [default to undefined]
**role** | **string** |  | [default to undefined]
**is_active** | **boolean** | Whether the user is active | [default to true]
**bookings** | [**Array&lt;Booking&gt;**](Booking.md) | User bookings history | [default to undefined]
**loyalty_points** | **number** | User loyalty points | [default to 0]
**blockHistory** | [**Array&lt;BlockActivity&gt;**](BlockActivity.md) | History of blocks received by user | [default to undefined]
**blockedByMe** | [**Array&lt;BlockActivity&gt;**](BlockActivity.md) | History of blocks given by user | [default to undefined]
**birth_date** | **string** | The user birth date | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**avatar** | [**Image**](Image.md) | User avatar | [optional] [default to undefined]
**working_at** | [**Branch**](Branch.md) | Branch details where user works | [optional] [default to undefined]
**_count** | [**UserCount**](UserCount.md) |  | [optional] [default to undefined]
**blocked_at** | **string** | Date when user was blocked | [optional] [default to undefined]
**blocked_reason** | **string** | Reason for blocking the user | [optional] [default to undefined]
**deleted_reason** | **string** | Reason for deleting the user | [optional] [default to undefined]
**deleted_identity** | **string** | Stored identity (email/phone) before deletion | [optional] [default to undefined]
**branchId** | **string** | ID of the branch where user works (for staff) | [optional] [default to undefined]

## Example

```typescript
import { UserDetail } from '@ahomevilla-hotel/node-sdk';

const instance: UserDetail = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    name,
    email,
    phone,
    verified_email,
    verified_phone,
    identifier_type,
    is_blocked,
    role,
    is_active,
    bookings,
    loyalty_points,
    blockHistory,
    blockedByMe,
    birth_date,
    gender,
    avatar,
    working_at,
    _count,
    blocked_at,
    blocked_reason,
    deleted_reason,
    deleted_identity,
    branchId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
