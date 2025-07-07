# ProvincesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**provincesControllerCreate**](#provincescontrollercreate) | **POST** /api/provinces | Create a new province|
|[**provincesControllerFindDeleted**](#provincescontrollerfinddeleted) | **GET** /api/provinces/deleted | Get all soft-deleted provinces|
|[**provincesControllerFindMany**](#provincescontrollerfindmany) | **GET** /api/provinces | Get all provinces with pagination and filters|
|[**provincesControllerFindOne**](#provincescontrollerfindone) | **GET** /api/provinces/{id} | Get province by ID|
|[**provincesControllerRemove**](#provincescontrollerremove) | **DELETE** /api/provinces/{id} | Delete a province|
|[**provincesControllerRestore**](#provincescontrollerrestore) | **POST** /api/provinces/{id}/restore | Restore a soft-deleted province|
|[**provincesControllerUpdate**](#provincescontrollerupdate) | **PATCH** /api/provinces/{id} | Update a province|

# **provincesControllerCreate**
> Province provincesControllerCreate(createProvinceDto)


### Example

```typescript
import {
    ProvincesApi,
    Configuration,
    CreateProvinceDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

let createProvinceDto: CreateProvinceDto; //

const { status, data } = await apiInstance.provincesControllerCreate(
    createProvinceDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createProvinceDto** | **CreateProvinceDto**|  | |


### Return type

**Province**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Province has been successfully created. |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provincesControllerFindDeleted**
> Array<Province> provincesControllerFindDeleted()


### Example

```typescript
import {
    ProvincesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

const { status, data } = await apiInstance.provincesControllerFindDeleted();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Province>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all soft-deleted provinces |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provincesControllerFindMany**
> ProvincePaginationResultDto provincesControllerFindMany()


### Example

```typescript
import {
    ProvincesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterProvincesDto (optional) (default to undefined)
let sort: string; //JSON string of SortProvinceDto[] (optional) (default to undefined)

const { status, data } = await apiInstance.provincesControllerFindMany(
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
| **filters** | [**string**] | JSON string of FilterProvincesDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortProvinceDto[] | (optional) defaults to undefined|


### Return type

**ProvincePaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated provinces list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provincesControllerFindOne**
> Province provincesControllerFindOne()


### Example

```typescript
import {
    ProvincesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.provincesControllerFindOne(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Province**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a province |  -  |
|**404** | Province not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provincesControllerRemove**
> provincesControllerRemove()


### Example

```typescript
import {
    ProvincesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.provincesControllerRemove(
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
|**204** | Province has been successfully deleted. |  -  |
|**401** | Unauthorized |  -  |
|**404** | Province not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provincesControllerRestore**
> Province provincesControllerRestore()


### Example

```typescript
import {
    ProvincesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.provincesControllerRestore(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Province**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Province restored successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | Province not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provincesControllerUpdate**
> Province provincesControllerUpdate(updateProvinceDto)


### Example

```typescript
import {
    ProvincesApi,
    Configuration,
    UpdateProvinceDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ProvincesApi(configuration);

let id: string; // (default to undefined)
let updateProvinceDto: UpdateProvinceDto; //

const { status, data } = await apiInstance.provincesControllerUpdate(
    id,
    updateProvinceDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProvinceDto** | **UpdateProvinceDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Province**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Province has been successfully updated. |  -  |
|**401** | Unauthorized |  -  |
|**404** | Province not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

