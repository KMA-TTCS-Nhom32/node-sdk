# BranchTranslationDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **string** | Language of the translation | [default to undefined]
**name** | **string** | Translated name of the branch | [default to undefined]
**description** | **string** | Translated description of the branch | [default to undefined]
**address** | **string** | Translated address of the branch | [default to undefined]
**nearBy** | [**Array&lt;NearBy&gt;**](NearBy.md) | Translated nearby locations information | [optional] [default to undefined]

## Example

```typescript
import { BranchTranslationDto } from '@ahomevilla-hotel/node-sdk';

const instance: BranchTranslationDto = {
    language,
    name,
    description,
    address,
    nearBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
