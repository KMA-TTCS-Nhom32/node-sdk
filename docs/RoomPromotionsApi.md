# RoomPromotionsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**roomPromotionControllerCreate**](#roompromotioncontrollercreate) | **POST** /api/room-promotions | Create a new room promotion|
|[**roomPromotionControllerFindDeleted**](#roompromotioncontrollerfinddeleted) | **GET** /api/room-promotions/deleted | Get all soft-deleted room promotions|
|[**roomPromotionControllerFindMany**](#roompromotioncontrollerfindmany) | **GET** /api/room-promotions | Get all room promotions with pagination and filters|
|[**roomPromotionControllerFindOne**](#roompromotioncontrollerfindone) | **GET** /api/room-promotions/{id} | Get room promotion by ID|
|[**roomPromotionControllerRemove**](#roompromotioncontrollerremove) | **DELETE** /api/room-promotions/{id} | Delete a room promotion|
|[**roomPromotionControllerRestore**](#roompromotioncontrollerrestore) | **POST** /api/room-promotions/{id}/restore | Restore a soft-deleted room promotion|
|[**roomPromotionControllerUpdate**](#roompromotioncontrollerupdate) | **PATCH** /api/room-promotions/{id} | Update a room promotion|
|[**roomPromotionControllerValidatePromotionCode**](#roompromotioncontrollervalidatepromotioncode) | **GET** /api/room-promotions/validate/{code}/room/{roomDetailId} | Validate a promotion code for a specific room|

# **roomPromotionControllerCreate**
> RoomPromotion roomPromotionControllerCreate(createRoomPromotionDto)


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration,
    CreateRoomPromotionDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let createRoomPromotionDto: CreateRoomPromotionDto; //

const { status, data } = await apiInstance.roomPromotionControllerCreate(
    createRoomPromotionDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createRoomPromotionDto** | **CreateRoomPromotionDto**|  | |


### Return type

**RoomPromotion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Room promotion has been successfully created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerFindDeleted**
> Array<RoomPromotion> roomPromotionControllerFindDeleted()


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

const { status, data } = await apiInstance.roomPromotionControllerFindDeleted();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<RoomPromotion>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all soft-deleted room promotions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerFindMany**
> RoomPromotionPaginationResultDto roomPromotionControllerFindMany()


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterRoomPromotionDto (optional) (default to undefined)
let sort: string; //JSON string of SortRoomPromotionDto (optional) (default to undefined)

const { status, data } = await apiInstance.roomPromotionControllerFindMany(
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
| **filters** | [**string**] | JSON string of FilterRoomPromotionDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortRoomPromotionDto | (optional) defaults to undefined|


### Return type

**RoomPromotionPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated room promotions list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerFindOne**
> RoomPromotion roomPromotionControllerFindOne()


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomPromotionControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomPromotion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a room promotion |  -  |
|**404** | Room promotion not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerRemove**
> roomPromotionControllerRemove()


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomPromotionControllerRemove(
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
|**204** | Room promotion has been successfully deleted. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room promotion not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerRestore**
> RoomPromotion roomPromotionControllerRestore()


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.roomPromotionControllerRestore(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomPromotion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room promotion restored successfully |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room promotion not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerUpdate**
> RoomPromotion roomPromotionControllerUpdate(updateRoomPromotionDto)


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration,
    UpdateRoomPromotionDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let id: string; // (default to undefined)
let updateRoomPromotionDto: UpdateRoomPromotionDto; //

const { status, data } = await apiInstance.roomPromotionControllerUpdate(
    id,
    updateRoomPromotionDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateRoomPromotionDto** | **UpdateRoomPromotionDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RoomPromotion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Room promotion has been successfully updated. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Room promotion not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **roomPromotionControllerValidatePromotionCode**
> RoomPromotion roomPromotionControllerValidatePromotionCode()


### Example

```typescript
import {
    RoomPromotionsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new RoomPromotionsApi(configuration);

let code: string; // (default to undefined)
let roomDetailId: string; // (default to undefined)

const { status, data } = await apiInstance.roomPromotionControllerValidatePromotionCode(
    code,
    roomDetailId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] |  | defaults to undefined|
| **roomDetailId** | [**string**] |  | defaults to undefined|


### Return type

**RoomPromotion**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns the validated promotion details |  -  |
|**400** | Invalid promotion code. |  -  |
|**404** | Promotion code not found or not valid for this room. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

