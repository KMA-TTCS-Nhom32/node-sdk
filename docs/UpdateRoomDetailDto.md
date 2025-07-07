# UpdateRoomDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**slug** | **string** | Hotel Room\&#39;s slug | [optional] [default to undefined]
**branchId** | **string** | ID of the branch where this room is located | [optional] [default to undefined]
**thumbnail** | [**Image**](Image.md) | Hotel Room\&#39;s thumbnail image | [optional] [default to undefined]
**images** | [**Array&lt;Image&gt;**](Image.md) | Hotel Room\&#39;s image gallery | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**room_type** | **string** |  | [optional] [default to undefined]
**bed_type** | **string** |  | [optional] [default to undefined]
**amenityIds** | **Array&lt;string&gt;** | Branch amenities | [optional] [default to undefined]
**max_adults** | **number** |  | [optional] [default to undefined]
**max_children** | **number** |  | [optional] [default to undefined]
**area** | **number** | Room area(m2) | [optional] [default to undefined]
**base_price_per_hour** | **string** | Hotel Room\&#39;s base price per hour | [optional] [default to undefined]
**base_price_per_night** | **string** | Hotel Room\&#39;s base price per night | [optional] [default to undefined]
**base_price_per_day** | **string** | Hotel Room\&#39;s base price per day | [optional] [default to undefined]
**translations** | [**Array&lt;RoomDetailTranslationDto&gt;**](RoomDetailTranslationDto.md) | Translations for the room detail | [optional] [default to undefined]
**special_price_per_hour** | **string** | Hotel Room\&#39;s special price per hour | [optional] [default to undefined]
**special_price_per_night** | **string** | Hotel Room\&#39;s special price per night | [optional] [default to undefined]
**special_price_per_day** | **string** | Hotel Room\&#39;s special price per day | [optional] [default to undefined]

## Example

```typescript
import { UpdateRoomDetailDto } from '@ahomevilla-hotel/node-sdk';

const instance: UpdateRoomDetailDto = {
    name,
    slug,
    branchId,
    thumbnail,
    images,
    description,
    room_type,
    bed_type,
    amenityIds,
    max_adults,
    max_children,
    area,
    base_price_per_hour,
    base_price_per_night,
    base_price_per_day,
    translations,
    special_price_per_hour,
    special_price_per_night,
    special_price_per_day,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
