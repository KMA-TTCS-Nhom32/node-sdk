# CreateHotelRoomDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Hotel Room\&#39;s name | [default to undefined]
**slug** | **string** | Hotel Room\&#39;s slug | [default to undefined]
**status** | **string** | Hotel Room\&#39;s status | [default to undefined]
**detailId** | **string** | ID of the room detail | [default to undefined]
**translations** | [**Array&lt;HotelRoomTranslationDto&gt;**](HotelRoomTranslationDto.md) | Translations for the hotel room | [optional] [default to undefined]

## Example

```typescript
import { CreateHotelRoomDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateHotelRoomDto = {
    name,
    slug,
    status,
    detailId,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
