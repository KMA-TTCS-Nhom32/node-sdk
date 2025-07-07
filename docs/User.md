# User


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
**birth_date** | **string** | The user birth date | [optional] [default to undefined]
**gender** | **string** |  | [optional] [default to undefined]
**avatar** | [**Image**](Image.md) | User avatar | [optional] [default to undefined]
**working_at** | [**Branch**](Branch.md) | Branch details where user works | [optional] [default to undefined]
**_count** | [**UserCount**](UserCount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { User } from '@ahomevilla-hotel/node-sdk';

const instance: User = {
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
    birth_date,
    gender,
    avatar,
    working_at,
    _count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
