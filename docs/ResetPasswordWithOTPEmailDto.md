# ResetPasswordWithOTPEmailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Email address of the user | [default to undefined]
**code** | **string** | Six digit verification code sent to email | [default to undefined]
**newPassword** | **string** | New password to set | [default to undefined]

## Example

```typescript
import { ResetPasswordWithOTPEmailDto } from '@ahomevilla-hotel/node-sdk';

const instance: ResetPasswordWithOTPEmailDto = {
    email,
    code,
    newPassword,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
