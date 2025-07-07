# RoomPriceHistoriesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**roomPriceHistoryControllerCreate**](#roompricehistorycontrollercreate) | **POST** /api/room-price-histories | Create a new room price history|
|[**roomPriceHistoryControllerFindManyByRoomDetail**](#roompricehistorycontrollerfindmanybyroomdetail) | **GET** /api/room-price-histories/room-detail/{roomDetailId} | Get all price histories for a specific room detail|
|[**roomPriceHistoryControllerRemove**](#roompricehistorycontrollerremove) | **DELETE** /api/room-price-histories/{id} | Delete a room price history|
|[**roomPriceHistoryControllerUpdate**](#roompricehistorycontrollerupdate) | **PATCH** /api/room-price-histories/{id} | Update a room price history|

# **roomPriceHistoryControllerCreate**
> RoomPriceHistory roomPriceHistoryControllerCreate(createRoomPriceHistoryDto)


### Example

```typescript
import {
    RoomPriceHistoriesApi,
    Configuration,
    CreateRoomPriceHistoryDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPriceHistoriesApi(configuration);

let createRoomPriceHistoryDto: CreateRoomPriceHistoryDto; //

const { status, data } = await apiInstance.roomPriceHistoryControllerCreate(
    createRoomPriceHistoryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoomPriceHistoryDto** | **CreateRoomPriceHistoryDto**|  | |


### Return type

**RoomPriceHistory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Room price history has been successfully created. |  -  |
|**400** | At least one price must be provided. |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPriceHistoryControllerFindManyByRoomDetail**
> Array<RoomPriceHistory> roomPriceHistoryControllerFindManyByRoomDetail()


### Example

```typescript
import {
    RoomPriceHistoriesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPriceHistoriesApi(configuration);

let roomDetailId: string; // (default to undefined)

const { status, data } = await apiInstance.roomPriceHistoryControllerFindManyByRoomDetail(
    roomDetailId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **roomDetailId** | [**string**] |  | defaults to undefined|


### Return type

**Array<RoomPriceHistory>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all price histories for the room detail |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPriceHistoryControllerRemove**
> roomPriceHistoryControllerRemove()


### Example

```typescript
import {
    RoomPriceHistoriesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPriceHistoriesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomPriceHistoryControllerRemove(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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
|**204** | Room price history has been successfully deleted. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room price history not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPriceHistoryControllerUpdate**
> RoomPriceHistory roomPriceHistoryControllerUpdate(updateRoomPriceHistoryDto)


### Example

```typescript
import {
    RoomPriceHistoriesApi,
    Configuration,
    UpdateRoomPriceHistoryDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPriceHistoriesApi(configuration);

let id: string; // (default to undefined)
let updateRoomPriceHistoryDto: UpdateRoomPriceHistoryDto; //

const { status, data } = await apiInstance.roomPriceHistoryControllerUpdate(
    id,
    updateRoomPriceHistoryDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomPriceHistoryDto** | **UpdateRoomPriceHistoryDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomPriceHistory**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room price history has been successfully updated. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room price history not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

