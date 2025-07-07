# RoomsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**roomControllerCreate**](#roomcontrollercreate) | **POST** /api/rooms | Create a new room|
|[**roomControllerFindDeleted**](#roomcontrollerfinddeleted) | **GET** /api/rooms/deleted | Get all soft-deleted rooms|
|[**roomControllerFindMany**](#roomcontrollerfindmany) | **GET** /api/rooms | Get all rooms with pagination and filters|
|[**roomControllerFindManyByBranchId**](#roomcontrollerfindmanybybranchid) | **GET** /api/rooms/in-branch/{branchId} | ADMIN - STAFF Get all rooms by branch ID|
|[**roomControllerFindOne**](#roomcontrollerfindone) | **GET** /api/rooms/{id} | Get a room by id|
|[**roomControllerPermanentDelete**](#roomcontrollerpermanentdelete) | **DELETE** /api/rooms/permanent-delete | ADMIN - Delete rooms permanently|
|[**roomControllerRemove**](#roomcontrollerremove) | **DELETE** /api/rooms/{id} | Soft delete a room|
|[**roomControllerRestore**](#roomcontrollerrestore) | **POST** /api/rooms/{id}/restore | Restore a soft-deleted room|
|[**roomControllerUpdate**](#roomcontrollerupdate) | **PATCH** /api/rooms/{id} | Update a room|

# **roomControllerCreate**
> HotelRoom roomControllerCreate(createHotelRoomDto)


### Example

```typescript
import {
    RoomsApi,
    Configuration,
    CreateHotelRoomDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let createHotelRoomDto: CreateHotelRoomDto; //

const { status, data } = await apiInstance.roomControllerCreate(
    createHotelRoomDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createHotelRoomDto** | **CreateHotelRoomDto**|  | |


### Return type

**HotelRoom**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Room has been successfully created. |  -  |
|**400** | Invalid input data. |  -  |
|**401** | Unauthorized. |  -  |
|**409** | Room with this slug already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerFindDeleted**
> Array<HotelRoom> roomControllerFindDeleted()


### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

const { status, data } = await apiInstance.roomControllerFindDeleted();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<HotelRoom>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all soft-deleted rooms |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerFindMany**
> HotelRoomPaginationResultDto roomControllerFindMany()


### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterHotelRoomDto (optional) (default to undefined)
let sort: string; //JSON string of SortHotelRoomDto[] (optional) (default to undefined)

const { status, data } = await apiInstance.roomControllerFindMany(
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
| **filters** | [**string**] | JSON string of FilterHotelRoomDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortHotelRoomDto[] | (optional) defaults to undefined|


### Return type

**HotelRoomPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated rooms list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerFindManyByBranchId**
> Array<HotelRoom> roomControllerFindManyByBranchId()


### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let branchId: string; // (default to undefined)

const { status, data } = await apiInstance.roomControllerFindManyByBranchId(
    branchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchId** | [**string**] |  | defaults to undefined|


### Return type

**Array<HotelRoom>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all rooms by branch ID |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerFindOne**
> HotelRoom roomControllerFindOne()


### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HotelRoom**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room found |  -  |
|**404** | Room not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerPermanentDelete**
> roomControllerPermanentDelete(immediateDeleteRoomsDto)


### Example

```typescript
import {
    RoomsApi,
    Configuration,
    ImmediateDeleteRoomsDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let immediateDeleteRoomsDto: ImmediateDeleteRoomsDto; //

const { status, data } = await apiInstance.roomControllerPermanentDelete(
    immediateDeleteRoomsDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **immediateDeleteRoomsDto** | **ImmediateDeleteRoomsDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | Rooms have been successfully deleted permanently. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Rooms not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerRemove**
> roomControllerRemove()


### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomControllerRemove(
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
|**204** | Room has been successfully deleted. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room not found. |  -  |
|**409** | Cannot delete room with active bookings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerRestore**
> ResponseWithMessage roomControllerRestore()


### Example

```typescript
import {
    RoomsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomControllerRestore(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResponseWithMessage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room restored successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomControllerUpdate**
> HotelRoom roomControllerUpdate(updateHotelRoomDto)


### Example

```typescript
import {
    RoomsApi,
    Configuration,
    UpdateHotelRoomDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomsApi(configuration);

let id: string; // (default to undefined)
let updateHotelRoomDto: UpdateHotelRoomDto; //

const { status, data } = await apiInstance.roomControllerUpdate(
    id,
    updateHotelRoomDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateHotelRoomDto** | **UpdateHotelRoomDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HotelRoom**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room has been successfully updated. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room not found. |  -  |
|**409** | Room with this slug already exists. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

