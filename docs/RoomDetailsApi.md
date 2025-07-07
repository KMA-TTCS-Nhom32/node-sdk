# RoomDetailsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**roomDetailControllerCreate**](#roomdetailcontrollercreate) | **POST** /api/room-details | Create a new room detail|
|[**roomDetailControllerFindDeleted**](#roomdetailcontrollerfinddeleted) | **GET** /api/room-details/deleted | Get all soft-deleted room details|
|[**roomDetailControllerFindMany**](#roomdetailcontrollerfindmany) | **GET** /api/room-details | Get all room details with pagination and filters|
|[**roomDetailControllerFindManyInfinite**](#roomdetailcontrollerfindmanyinfinite) | **GET** /api/room-details/infinite | Get all room details with infinite pagination and filters|
|[**roomDetailControllerFindOne**](#roomdetailcontrollerfindone) | **GET** /api/room-details/{id} | Get a room detail by id|
|[**roomDetailControllerRemove**](#roomdetailcontrollerremove) | **DELETE** /api/room-details/{id} | Soft delete a room detail|
|[**roomDetailControllerRestore**](#roomdetailcontrollerrestore) | **POST** /api/room-details/{id}/restore | Restore a soft-deleted room detail|
|[**roomDetailControllerUpdate**](#roomdetailcontrollerupdate) | **PATCH** /api/room-details/{id} | Update a room detail|

# **roomDetailControllerCreate**
> RoomDetail roomDetailControllerCreate(createRoomDetailDto)


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration,
    CreateRoomDetailDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let createRoomDetailDto: CreateRoomDetailDto; //

const { status, data } = await apiInstance.roomDetailControllerCreate(
    createRoomDetailDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoomDetailDto** | **CreateRoomDetailDto**|  | |


### Return type

**RoomDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Room detail has been successfully created. |  -  |
|**400** | Invalid input data. |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerFindDeleted**
> Array<RoomDetail> roomDetailControllerFindDeleted()


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

const { status, data } = await apiInstance.roomDetailControllerFindDeleted();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<RoomDetail>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all soft-deleted room details |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerFindMany**
> RoomDetailPaginationResultDto roomDetailControllerFindMany()


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterRoomDetailDto (optional) (default to undefined)
let sort: Array<string>; // (optional) (default to undefined)

const { status, data } = await apiInstance.roomDetailControllerFindMany(
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
| **filters** | [**string**] | JSON string of FilterRoomDetailDto | (optional) defaults to undefined|
| **sort** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|


### Return type

**RoomDetailPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated room details list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerFindManyInfinite**
> RoomDetailInfinitePaginationResultDto roomDetailControllerFindManyInfinite()


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterRoomDetailDto (optional) (default to undefined)
let sort: Array<string>; // (optional) (default to undefined)

const { status, data } = await apiInstance.roomDetailControllerFindManyInfinite(
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
| **filters** | [**string**] | JSON string of FilterRoomDetailDto | (optional) defaults to undefined|
| **sort** | **Array&lt;string&gt;** |  | (optional) defaults to undefined|


### Return type

**RoomDetailInfinitePaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated room details list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerFindOne**
> RoomDetail roomDetailControllerFindOne()


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomDetailControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room detail found |  -  |
|**404** | Room detail not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerRemove**
> roomDetailControllerRemove()


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomDetailControllerRemove(
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
|**204** | Room detail has been successfully deleted. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room detail not found. |  -  |
|**409** | Cannot delete room detail with active bookings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerRestore**
> RoomDetail roomDetailControllerRestore()


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomDetailControllerRestore(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room detail restored successfully |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room detail not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomDetailControllerUpdate**
> RoomDetail roomDetailControllerUpdate(updateRoomDetailDto)


### Example

```typescript
import {
    RoomDetailsApi,
    Configuration,
    UpdateRoomDetailDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomDetailsApi(configuration);

let id: string; // (default to undefined)
let updateRoomDetailDto: UpdateRoomDetailDto; //

const { status, data } = await apiInstance.roomDetailControllerUpdate(
    id,
    updateRoomDetailDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomDetailDto** | **UpdateRoomDetailDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room detail has been successfully updated. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room detail not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

