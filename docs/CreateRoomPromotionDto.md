# CreateRoomPromotionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Unique code for the promotion | [default to undefined]
**description** | **string** | Description of the promotion | [default to undefined]
**applied_type** | **string** | Type of booking this promotion applies to | [default to undefined]
**discount_type** | **string** | Type of discount (percentage or fixed amount) | [default to undefined]
**discount_value** | **number** | Value of the discount (percentage or fixed amount) | [default to undefined]
**start_date** | **string** | Start date of the promotion | [default to undefined]
**end_date** | **string** | End date of the promotion | [default to undefined]
**applied_room_ids** | **Array&lt;string&gt;** | IDs of room details this promotion applies to | [default to undefined]
**min_hours** | **number** | Minimum hours required for hourly booking promotion | [optional] [default to undefined]
**min_nights** | **number** | Minimum nights required for nightly booking promotion | [optional] [default to undefined]
**min_days** | **number** | Minimum days required for daily booking promotion | [optional] [default to undefined]
**total_code** | **number** | Total number of codes available for the promotion | [optional] [default to undefined]
**translations** | [**Array&lt;PromotionTranslationDto&gt;**](PromotionTranslationDto.md) | Translations for the promotion | [optional] [default to undefined]

## Example

```typescript
import { CreateRoomPromotionDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateRoomPromotionDto = {
    code,
    description,
    applied_type,
    discount_type,
    discount_value,
    start_date,
    end_date,
    applied_room_ids,
    min_hours,
    min_nights,
    min_days,
    total_code,
    translations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
