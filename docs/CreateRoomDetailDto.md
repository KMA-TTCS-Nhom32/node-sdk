# CreateRoomDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**slug** | **string** | Hotel Room\&#39;s slug | [default to undefined]
**branchId** | **string** | ID of the branch where this room is located | [default to undefined]
**thumbnail** | [**Image**](Image.md) | Hotel Room\&#39;s thumbnail image | [default to undefined]
**images** | [**Array&lt;Image&gt;**](Image.md) | Hotel Room\&#39;s image gallery | [default to undefined]
**description** | **string** |  | [default to undefined]
**room_type** | **string** |  | [default to undefined]
**bed_type** | **string** |  | [default to undefined]
**amenityIds** | **Array&lt;string&gt;** |  | [default to undefined]
**max_adults** | **number** |  | [default to undefined]
**max_children** | **number** |  | [default to undefined]
**area** | **number** | Room area(m2) | [default to undefined]
**base_price_per_hour** | **string** | Hotel Room\&#39;s base price per hour | [default to undefined]
**base_price_per_night** | **string** | Hotel Room\&#39;s base price per night | [default to undefined]
**base_price_per_day** | **string** | Hotel Room\&#39;s base price per day | [default to undefined]
**translations** | [**Array&lt;RoomDetailTranslationDto&gt;**](RoomDetailTranslationDto.md) | Translations for the room detail | [optional] [default to undefined]

## Example

```typescript
import { CreateRoomDetailDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateRoomDetailDto = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
