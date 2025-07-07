# HotelRoom


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**name** | **string** | Hotel Room\&#39;s name | [default to undefined]
**slug** | **string** | Hotel Room\&#39;s slug | [default to undefined]
**status** | **string** | Hotel Room\&#39;s status | [default to undefined]
**detailId** | **string** | ID of the room detail | [default to undefined]
**translations** | [**Array&lt;ProvinceTranslationsInner&gt;**](ProvinceTranslationsInner.md) | List of translations for the hotel room | [default to undefined]
**bookings** | [**Array&lt;Booking&gt;**](Booking.md) | List of bookings | [optional] [default to undefined]
**_count** | [**UserCount**](UserCount.md) |  | [optional] [default to undefined]

## Example

```typescript
import { HotelRoom } from '@ahomevilla-hotel/node-sdk';

const instance: HotelRoom = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    name,
    slug,
    status,
    detailId,
    translations,
    bookings,
    _count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
