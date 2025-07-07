# UpdateAmenityDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the amenity | [optional] [default to undefined]
**slug** | **string** | URL-friendly version of the name (lowercase, hyphenated) | [optional] [default to undefined]
**type** | **string** | Type of amenity (ROOM, PROPERTY, or SERVICE) | [optional] [default to undefined]
**icon** | [**Image**](Image.md) | Icon image details | [optional] [default to undefined]
**translations** | [**Array&lt;AmenityTranslationDto&gt;**](AmenityTranslationDto.md) | Translations for the amenity | [optional] [default to undefined]

## Example

```typescript
import { UpdateAmenityDto } from '@ahomevilla-hotel/node-sdk';

const instance: UpdateAmenityDto = {
    name,
    slug,
    type,
    icon,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
