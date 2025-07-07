# UpdateHotelRoomDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Hotel Room\&#39;s name | [optional] [default to undefined]
**slug** | **string** | Hotel Room\&#39;s slug | [optional] [default to undefined]
**status** | **string** | Hotel Room\&#39;s status | [optional] [default to undefined]
**translations** | [**Array&lt;HotelRoomTranslationDto&gt;**](HotelRoomTranslationDto.md) | Translations for the hotel room | [optional] [default to undefined]

## Example

```typescript
import { UpdateHotelRoomDto } from '@ahomevilla-hotel/node-sdk';

const instance: UpdateHotelRoomDto = {
    name,
    slug,
    status,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
