# Province


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**name** | **string** | Name of the province | [default to undefined]
**zip_code** | **string** | ZIP/Postal code of the province | [default to undefined]
**slug** | **string** | Slug of the province | [default to undefined]
**translations** | [**Array&lt;ProvinceTranslationsInner&gt;**](ProvinceTranslationsInner.md) | List of translations for the province | [default to undefined]
**_count** | [**ProvinceCount**](ProvinceCount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Province } from '@ahomevilla-hotel/node-sdk';

const instance: Province = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    name,
    zip_code,
    slug,
    translations,
    _count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
