# BookingApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**bookingControllerCancelBooking**](#bookingcontrollercancelbooking) | **PATCH** /api/booking/cancel/{bookingId} | Cancel a booking|
|[**bookingControllerCreateBookingDirectly**](#bookingcontrollercreatebookingdirectly) | **POST** /api/booking/directly | Create a new booking directly at the hotel|
|[**bookingControllerCreateBookingOnline**](#bookingcontrollercreatebookingonline) | **POST** /api/booking | Create a new booking online|
|[**bookingControllerFindById**](#bookingcontrollerfindbyid) | **GET** /api/booking/{bookingId} | Get booking details|
|[**bookingControllerGetBookings**](#bookingcontrollergetbookings) | **GET** /api/booking | Get all bookings with pagination and filters|
|[**bookingControllerGetMyBookings**](#bookingcontrollergetmybookings) | **GET** /api/booking/my-bookings | Get all my bookings with pagination and filters|
|[**bookingControllerHandlePaymentWebhook**](#bookingcontrollerhandlepaymentwebhook) | **POST** /api/booking/webhook/payment | Handle payment webhook from PayOS|
|[**bookingControllerUpdateBookingStatus**](#bookingcontrollerupdatebookingstatus) | **PATCH** /api/booking/update-status/{bookingId} | Update booking status|

# **bookingControllerCancelBooking**
> Booking bookingControllerCancelBooking(cancelBookingDto)


### Example

```typescript
import {
    BookingApi,
    Configuration,
    CancelBookingDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let bookingId: string; // (default to undefined)
let cancelBookingDto: CancelBookingDto; //

const { status, data } = await apiInstance.bookingControllerCancelBooking(
    bookingId,
    cancelBookingDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelBookingDto** | **CancelBookingDto**|  | |
| **bookingId** | [**string**] |  | defaults to undefined|


### Return type

**Booking**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Booking has been successfully canceled |  -  |
|**400** | Cannot cancel booking in current status |  -  |
|**401** | Unauthorized |  -  |
|**404** | Booking not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerCreateBookingDirectly**
> Booking bookingControllerCreateBookingDirectly(createBookingAtHotelDto)


### Example

```typescript
import {
    BookingApi,
    Configuration,
    CreateBookingAtHotelDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let createBookingAtHotelDto: CreateBookingAtHotelDto; //

const { status, data } = await apiInstance.bookingControllerCreateBookingDirectly(
    createBookingAtHotelDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBookingAtHotelDto** | **CreateBookingAtHotelDto**|  | |


### Return type

**Booking**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Booking has been successfully created. |  -  |
|**400** | Invalid booking data |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerCreateBookingOnline**
> Booking bookingControllerCreateBookingOnline(createBookingOnlineDto)


### Example

```typescript
import {
    BookingApi,
    Configuration,
    CreateBookingOnlineDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let createBookingOnlineDto: CreateBookingOnlineDto; //

const { status, data } = await apiInstance.bookingControllerCreateBookingOnline(
    createBookingOnlineDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBookingOnlineDto** | **CreateBookingOnlineDto**|  | |


### Return type

**Booking**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Booking has been successfully created. |  -  |
|**400** | Invalid booking data |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerFindById**
> Booking bookingControllerFindById()


### Example

```typescript
import {
    BookingApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let bookingId: string; // (default to undefined)

const { status, data } = await apiInstance.bookingControllerFindById(
    bookingId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bookingId** | [**string**] |  | defaults to undefined|


### Return type

**Booking**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns booking details |  -  |
|**401** | Unauthorized |  -  |
|**404** | Booking not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerGetBookings**
> BookingsPaginationResultDto bookingControllerGetBookings()


### Example

```typescript
import {
    BookingApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterBookingsDto (optional) (default to undefined)
let sort: string; //JSON string of SortBookingsDto[] (optional) (default to undefined)

const { status, data } = await apiInstance.bookingControllerGetBookings(
    page,
    pageSize,
    filters,
    sort
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **filters** | [**string**] | JSON string of FilterBookingsDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortBookingsDto[] | (optional) defaults to undefined|


### Return type

**BookingsPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated bookings list |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerGetMyBookings**
> BookingsPaginationResultDto bookingControllerGetMyBookings()


### Example

```typescript
import {
    BookingApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //Filter my bookings (optional) (default to undefined)

const { status, data } = await apiInstance.bookingControllerGetMyBookings(
    page,
    pageSize,
    filters
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] |  | (optional) defaults to undefined|
| **pageSize** | [**number**] |  | (optional) defaults to undefined|
| **filters** | [**string**] | Filter my bookings | (optional) defaults to undefined|


### Return type

**BookingsPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated bookings list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerHandlePaymentWebhook**
> bookingControllerHandlePaymentWebhook()


### Example

```typescript
import {
    BookingApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

const { status, data } = await apiInstance.bookingControllerHandlePaymentWebhook();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bookingControllerUpdateBookingStatus**
> Booking bookingControllerUpdateBookingStatus(updateBookingStatusDto)


### Example

```typescript
import {
    BookingApi,
    Configuration,
    UpdateBookingStatusDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BookingApi(configuration);

let bookingId: string; // (default to undefined)
let updateBookingStatusDto: UpdateBookingStatusDto; //

const { status, data } = await apiInstance.bookingControllerUpdateBookingStatus(
    bookingId,
    updateBookingStatusDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBookingStatusDto** | **UpdateBookingStatusDto**|  | |
| **bookingId** | [**string**] |  | defaults to undefined|


### Return type

**Booking**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Booking status has been successfully updated |  -  |
|**400** | Invalid status transition |  -  |
|**401** | Unauthorized |  -  |
|**404** | Booking not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

