# Booking


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**code** | **string** | Booking code | [default to undefined]
**type** | **string** | Type of booking | [default to undefined]
**create_type** | **string** | Type of booking | [default to undefined]
**roomId** | **string** | ID of the room being booked | [default to undefined]
**room** | [**HotelRoom**](HotelRoom.md) | Room being booked | [default to undefined]
**userId** | **string** | ID of the user making the booking | [default to undefined]
**user** | [**User**](User.md) | User making the booking | [default to undefined]
**start_date** | **string** | Booking start date | [default to undefined]
**end_date** | **string** | Booking end date | [default to undefined]
**start_time** | **string** | Booking start time | [default to undefined]
**end_time** | **string** | Booking end time | [default to undefined]
**total_amount** | **string** | Number of adults | [default to undefined]
**status** | **string** | Booking status | [default to undefined]
**cancel_reason** | **string** | Reason for canceling the booking | [default to undefined]
**payment_method** | **string** | Payment method | [default to undefined]
**number_of_guests** | **number** | Number of guests | [default to undefined]
**adults** | **number** | Number of adults | [default to undefined]
**children** | **number** | Number of children | [default to undefined]
**infants** | **number** | Number of infants | [default to undefined]
**special_requests** | **string** | Special requirements | [default to undefined]
**check_in_time** | **string** | Check in time | [default to undefined]
**check_out_time** | **string** | Check out time | [default to undefined]
**payment_status** | **string** | Payment status | [default to undefined]
**payment_details** | **object** | Payment details | [default to undefined]
**guest_details** | [**GuestDetail**](GuestDetail.md) | Guest details | [default to undefined]
**promotion_code** | **string** | Promotion code | [default to undefined]
**is_business_trip** | **boolean** | Is business trip | [default to undefined]

## Example

```typescript
import { Booking } from '@ahomevilla-hotel/node-sdk';

const instance: Booking = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    code,
    type,
    create_type,
    roomId,
    room,
    userId,
    user,
    start_date,
    end_date,
    start_time,
    end_time,
    total_amount,
    status,
    cancel_reason,
    payment_method,
    number_of_guests,
    adults,
    children,
    infants,
    special_requests,
    check_in_time,
    check_out_time,
    payment_status,
    payment_details,
    guest_details,
    promotion_code,
    is_business_trip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
