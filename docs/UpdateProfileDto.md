# UpdateProfileDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Full name of the user | [optional] [default to undefined]
**avatar** | [**Image**](Image.md) | Avatar of the user | [optional] [default to undefined]
**birth_date** | **string** | Birth date of the user | [optional] [default to undefined]
**gender** | **string** | User gender | [optional] [default to undefined]
**email** | **string** | User email | [optional] [default to undefined]
**phone** | **string** | User phone number | [optional] [default to undefined]

## Example

```typescript
import { UpdateProfileDto } from '@ahomevilla-hotel/node-sdk';

const instance: UpdateProfileDto = {
    name,
    avatar,
    birth_date,
    gender,
    email,
    phone,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
