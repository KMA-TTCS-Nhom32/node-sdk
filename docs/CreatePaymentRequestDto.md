# CreatePaymentRequestDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderCode** | **number** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**cancelUrl** | **string** |  | [default to undefined]
**returnUrl** | **string** |  | [default to undefined]
**buyerName** | **string** |  | [optional] [default to undefined]
**buyerEmail** | **string** |  | [optional] [default to undefined]
**buyerPhone** | **string** |  | [optional] [default to undefined]
**buyerAddress** | **string** |  | [optional] [default to undefined]
**items** | [**Array&lt;RoomDetail&gt;**](RoomDetail.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CreatePaymentRequestDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreatePaymentRequestDto = {
    orderCode,
    amount,
    description,
    cancelUrl,
    returnUrl,
    buyerName,
    buyerEmail,
    buyerPhone,
    buyerAddress,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
