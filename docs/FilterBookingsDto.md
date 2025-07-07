# FilterBookingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **Array&lt;string&gt;** | Filter by booking status | [optional] [default to undefined]
**type** | **string** | Filter by booking type | [optional] [default to undefined]
**keyword** | **string** | Search by keyword | [optional] [default to undefined]
**branchId** | **string** | Filter by branch | [optional] [default to undefined]
**userId** | **string** | Filter by user | [optional] [default to undefined]
**detailId** | **string** | Filter by room detail | [optional] [default to undefined]
**roomId** | **string** | Filter by room | [optional] [default to undefined]
**start_date** | **string** | Filter by start date | [optional] [default to undefined]
**end_date** | **string** | Filter by end date | [optional] [default to undefined]
**payment_status** | **string** | Filter by payment status | [optional] [default to undefined]
**payment_method** | **string** | Filter by payment method | [optional] [default to undefined]

## Example

```typescript
import { FilterBookingsDto } from '@ahomevilla-hotel/node-sdk';

const instance: FilterBookingsDto = {
    status,
    type,
    keyword,
    branchId,
    userId,
    detailId,
    roomId,
    start_date,
    end_date,
    payment_status,
    payment_method,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
