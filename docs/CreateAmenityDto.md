# CreateAmenityDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the amenity | [default to undefined]
**slug** | **string** | URL-friendly version of the name (lowercase, hyphenated) | [default to undefined]
**type** | **string** | Type of amenity (ROOM, PROPERTY, or SERVICE) | [default to undefined]
**icon** | [**Image**](Image.md) | Icon image details | [default to undefined]
**translations** | [**Array&lt;AmenityTranslationDto&gt;**](AmenityTranslationDto.md) | Translations for the amenity | [optional] [default to undefined]

## Example

```typescript
import { CreateAmenityDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateAmenityDto = {
    name,
    slug,
    type,
    icon,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
