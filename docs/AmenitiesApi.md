# AmenitiesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**amenitiesControllerCreate**](#amenitiescontrollercreate) | **POST** /api/amenities | Create new amenity|
|[**amenitiesControllerFindMany**](#amenitiescontrollerfindmany) | **GET** /api/amenities | Get amenities|
|[**amenitiesControllerFindOne**](#amenitiescontrollerfindone) | **GET** /api/amenities/{id} | Get amenity by ID|
|[**amenitiesControllerRemove**](#amenitiescontrollerremove) | **DELETE** /api/amenities/{id} | Delete amenity|
|[**amenitiesControllerUpdate**](#amenitiescontrollerupdate) | **PUT** /api/amenities/{id} | Update amenity|

# **amenitiesControllerCreate**
> Amenity amenitiesControllerCreate(createAmenityDto)


### Example

```typescript
import {
    AmenitiesApi,
    Configuration,
    CreateAmenityDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AmenitiesApi(configuration);

let createAmenityDto: CreateAmenityDto; //

const { status, data } = await apiInstance.amenitiesControllerCreate(
    createAmenityDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAmenityDto** | **CreateAmenityDto**|  | |


### Return type

**Amenity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Amenity has been successfully created. |  -  |
|**400** | Invalid input data. |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **amenitiesControllerFindMany**
> AmenitiesPaginationResultDto amenitiesControllerFindMany()


### Example

```typescript
import {
    AmenitiesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AmenitiesApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterAmenityDto (optional) (default to undefined)
let sort: string; //JSON string of SortAmenityDto (optional) (default to undefined)

const { status, data } = await apiInstance.amenitiesControllerFindMany(
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
| **filters** | [**string**] | JSON string of FilterAmenityDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortAmenityDto | (optional) defaults to undefined|


### Return type

**AmenitiesPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Amenities found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **amenitiesControllerFindOne**
> Amenity amenitiesControllerFindOne()


### Example

```typescript
import {
    AmenitiesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AmenitiesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.amenitiesControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Amenity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Amenity found |  -  |
|**404** | Amenity not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **amenitiesControllerRemove**
> amenitiesControllerRemove()


### Example

```typescript
import {
    AmenitiesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AmenitiesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.amenitiesControllerRemove(
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
|**204** | Amenity has been successfully deleted. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Amenity not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **amenitiesControllerUpdate**
> Amenity amenitiesControllerUpdate(updateAmenityDto)


### Example

```typescript
import {
    AmenitiesApi,
    Configuration,
    UpdateAmenityDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AmenitiesApi(configuration);

let id: string; // (default to undefined)
let updateAmenityDto: UpdateAmenityDto; //

const { status, data } = await apiInstance.amenitiesControllerUpdate(
    id,
    updateAmenityDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateAmenityDto** | **UpdateAmenityDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Amenity**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Amenity has been successfully updated. |  -  |
|**400** | Invalid input data. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Amenity not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

