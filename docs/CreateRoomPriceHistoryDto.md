# CreateRoomPriceHistoryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Day that the price is applied | [default to undefined]
**roomDetailId** | **string** | ID of the room detail | [default to undefined]
**effective_from** | **string** | Effective from date | [default to undefined]
**description** | **string** | Description of the price history | [optional] [default to undefined]
**price_per_hour** | **string** | Hotel Room\&#39;s base price per hour | [optional] [default to undefined]
**price_per_day** | **string** | Hotel Room\&#39;s base price per day | [optional] [default to undefined]
**price_per_night** | **string** | Hotel Room\&#39;s base price per night | [optional] [default to undefined]
**effective_to** | **string** | Effective to date | [optional] [default to undefined]
**translations** | [**Array&lt;RoomPriceHistoryTranslationDto&gt;**](RoomPriceHistoryTranslationDto.md) | Translations for the price history | [optional] [default to undefined]

## Example

```typescript
import { CreateRoomPriceHistoryDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateRoomPriceHistoryDto = {
    name,
    roomDetailId,
    effective_from,
    description,
    price_per_hour,
    price_per_day,
    price_per_night,
    effective_to,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
