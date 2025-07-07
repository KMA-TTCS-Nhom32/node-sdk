# CreateProvinceDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the province | [default to undefined]
**zip_code** | **string** | ZIP/Postal code of the province | [default to undefined]
**slug** | **string** | URL-friendly slug of the province name | [default to undefined]
**translations** | [**Array&lt;ProvinceTranslationDto&gt;**](ProvinceTranslationDto.md) | Translations for the province | [optional] [default to undefined]

## Example

```typescript
import { CreateProvinceDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateProvinceDto = {
    name,
    zip_code,
    slug,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
