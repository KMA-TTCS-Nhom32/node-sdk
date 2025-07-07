# Amenity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**slug** | **string** |  | [default to undefined]
**icon** | [**Image**](Image.md) | Icon image for the amenity | [default to undefined]
**type** | **string** |  | [default to undefined]
**translations** | [**Array&lt;ProvinceTranslationsInner&gt;**](ProvinceTranslationsInner.md) | List of translations for the amenity | [default to undefined]

## Example

```typescript
import { Amenity } from '@ahomevilla-hotel/node-sdk';

const instance: Amenity = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    name,
    slug,
    icon,
    type,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
