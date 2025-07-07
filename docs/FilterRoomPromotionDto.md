# FilterRoomPromotionDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | Filter by promotion code | [optional] [default to undefined]
**roomDetailId** | **string** | Filter by room detail ID | [optional] [default to undefined]
**applied_type** | **string** | Filter by booking type | [optional] [default to undefined]
**discount_type** | **string** | Filter by discount type | [optional] [default to undefined]
**isActive** | **boolean** | Filter by active promotions (based on current date) | [optional] [default to undefined]

## Example

```typescript
import { FilterRoomPromotionDto } from '@ahomevilla-hotel/node-sdk';

const instance: FilterRoomPromotionDto = {
    code,
    roomDetailId,
    applied_type,
    discount_type,
    isActive,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
