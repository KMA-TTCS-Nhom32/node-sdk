# RoomDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**slug** | **string** | Hotel Detail\&#39;s slug | [default to undefined]
**branchId** | **string** | ID of the branch where this room is located | [default to undefined]
**thumbnail** | [**Image**](Image.md) | Hotel Room\&#39;s thumbnail image | [default to undefined]
**images** | [**Array&lt;Image&gt;**](Image.md) | Hotel Room\&#39;s image gallery | [default to undefined]
**description** | **string** |  | [default to undefined]
**room_type** | **string** |  | [default to undefined]
**bed_type** | **string** |  | [default to undefined]
**area** | **number** | Room area in square meters | [default to undefined]
**amenities** | [**Array&lt;Amenity&gt;**](Amenity.md) |  | [default to undefined]
**max_adults** | **number** |  | [default to undefined]
**max_children** | **number** |  | [default to undefined]
**quantity** | **number** |  | [default to undefined]
**base_price_per_hour** | **string** | Hotel Room\&#39;s base price per hour | [default to undefined]
**base_price_per_night** | **string** | Hotel Room\&#39;s base price per night | [default to undefined]
**base_price_per_day** | **string** | Hotel Room\&#39;s base price per day | [default to undefined]
**is_available** | **boolean** | Whether this room is available for booking | [default to undefined]
**translations** | [**Array&lt;RoomPriceHistoryTranslationsInner&gt;**](RoomPriceHistoryTranslationsInner.md) | List of translations for the room detail | [default to undefined]
**special_price_per_hour** | **string** | Hotel Room\&#39;s special price per hour | [optional] [default to undefined]
**special_price_per_night** | **string** | Hotel Room\&#39;s special price per night | [optional] [default to undefined]
**special_price_per_day** | **string** | Hotel Room\&#39;s special price per day | [optional] [default to undefined]
**roomPriceHistories** | [**Array&lt;RoomPriceHistory&gt;**](RoomPriceHistory.md) | Price history of this room | [optional] [default to undefined]

## Example

```typescript
import { RoomDetail } from '@ahomevilla-hotel/node-sdk';

const instance: RoomDetail = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    name,
    slug,
    branchId,
    thumbnail,
    images,
    description,
    room_type,
    bed_type,
    area,
    amenities,
    max_adults,
    max_children,
    quantity,
    base_price_per_hour,
    base_price_per_night,
    base_price_per_day,
    is_available,
    translations,
    special_price_per_hour,
    special_price_per_night,
    special_price_per_day,
    roomPriceHistories,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
