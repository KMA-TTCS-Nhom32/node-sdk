# RoomPriceHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**name** | **string** | Name of the price history | [default to undefined]
**description** | **string** | Description of the price history | [default to undefined]
**roomDetailId** | **string** | ID of the room detail this price history belongs to | [default to undefined]
**price_per_hour** | **string** | Price per hour for the room | [default to undefined]
**price_per_night** | **string** | Price per night for the room | [default to undefined]
**price_per_day** | **string** | Price per day for the room | [default to undefined]
**effective_from** | **string** | Start date when this price becomes effective | [default to undefined]
**effective_to** | **string** | End date when this price expires | [default to undefined]
**is_applied** | **boolean** | Whether this price is currently being applied | [default to false]
**translations** | [**Array&lt;RoomPriceHistoryTranslationsInner&gt;**](RoomPriceHistoryTranslationsInner.md) | List of translations for the price history | [default to undefined]
**roomDetail** | [**RoomDetail**](RoomDetail.md) | The associated room detail | [optional] [default to undefined]

## Example

```typescript
import { RoomPriceHistory } from '@ahomevilla-hotel/node-sdk';

const instance: RoomPriceHistory = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    name,
    description,
    roomDetailId,
    price_per_hour,
    price_per_night,
    price_per_day,
    effective_from,
    effective_to,
    is_applied,
    translations,
    roomDetail,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
