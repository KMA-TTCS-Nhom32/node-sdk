# CreateBookingAtHotelDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Booking type | [default to undefined]
**start_date** | **string** | Start date of the booking | [default to undefined]
**end_date** | **string** | End date of the booking | [default to undefined]
**start_time** | **string** | Start time of the booking | [default to undefined]
**end_time** | **string** | End time of the booking | [default to undefined]
**number_of_guests** | **number** | Number of guests | [default to undefined]
**adults** | **number** | Number of adults | [default to undefined]
**children** | **number** | Number of children | [default to undefined]
**infants** | **number** | Number of infants | [default to undefined]
**roomId** | **string** | ID of the room being booked | [default to undefined]
**check_in_time** | **string** | Check in time | [default to undefined]
**name** | **string** | Name of the guest | [optional] [default to undefined]
**phone** | **string** | Phone number of the guest | [optional] [default to undefined]
**special_requests** | **string** | Special requirements | [optional] [default to undefined]
**guest_details** | [**GuestDetail**](GuestDetail.md) | Guest details | [optional] [default to undefined]

## Example

```typescript
import { CreateBookingAtHotelDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateBookingAtHotelDto = {
    type,
    start_date,
    end_date,
    start_time,
    end_time,
    number_of_guests,
    adults,
    children,
    infants,
    roomId,
    check_in_time,
    name,
    phone,
    special_requests,
    guest_details,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
