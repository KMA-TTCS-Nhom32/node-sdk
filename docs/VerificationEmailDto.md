# VerificationEmailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | **string** | Email address to send verification code | [default to undefined]
**code** | **string** | Verification code to be sent | [default to undefined]
**type** | **string** | Type of verification email | [default to TypeEnum_VerifyAccount]
**lang** | **string** | Language for email template | [optional] [default to LangEnum_En]

## Example

```typescript
import { VerificationEmailDto } from '@ahomevilla-hotel/node-sdk';

const instance: VerificationEmailDto = {
    to,
    code,
    type,
    lang,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
