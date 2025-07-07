# BranchesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**branchControllerCreate**](#branchcontrollercreate) | **POST** /api/branches | Create a new branch|
|[**branchControllerFindDeleted**](#branchcontrollerfinddeleted) | **GET** /api/branches/deleted | Get all soft-deleted branches|
|[**branchControllerFindMany**](#branchcontrollerfindmany) | **GET** /api/branches | Get all branches with pagination and filters|
|[**branchControllerFindManyInfinite**](#branchcontrollerfindmanyinfinite) | **GET** /api/branches/infinite | Get branches with infinite scroll for client app|
|[**branchControllerFindOne**](#branchcontrollerfindone) | **GET** /api/branches/{idOrSlug} | Get branch by ID or slug|
|[**branchControllerGetLatestBranches**](#branchcontrollergetlatestbranches) | **GET** /api/branches/latest | Get latest branches|
|[**branchControllerRemove**](#branchcontrollerremove) | **DELETE** /api/branches/{id} | Delete a branch|
|[**branchControllerRestore**](#branchcontrollerrestore) | **POST** /api/branches/{id}/restore | Restore a soft-deleted branch|
|[**branchControllerUpdate**](#branchcontrollerupdate) | **PATCH** /api/branches/{id} | Update a branch|

# **branchControllerCreate**
> Branch branchControllerCreate(createBranchDto)


### Example

```typescript
import {
    BranchesApi,
    Configuration,
    CreateBranchDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let createBranchDto: CreateBranchDto; //

const { status, data } = await apiInstance.branchControllerCreate(
    createBranchDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBranchDto** | **CreateBranchDto**|  | |


### Return type

**Branch**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Branch has been successfully created. |  -  |
|**400** | Invalid input data. |  -  |
|**401** | Unauthorized. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerFindDeleted**
> Array<Branch> branchControllerFindDeleted()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

const { status, data } = await apiInstance.branchControllerFindDeleted();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Branch>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns all soft-deleted branches |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerFindMany**
> BranchesPaginationResultDto branchControllerFindMany()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterBranchesDto (optional) (default to undefined)
let sort: string; //JSON string of SortBranchDto[] (optional) (default to undefined)

const { status, data } = await apiInstance.branchControllerFindMany(
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
| **filters** | [**string**] | JSON string of FilterBranchesDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortBranchDto[] | (optional) defaults to undefined|


### Return type

**BranchesPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns paginated branches list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerFindManyInfinite**
> BranchesInfinitePaginationResultDto branchControllerFindManyInfinite()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterBranchesDto (optional) (default to undefined)
let sort: string; //JSON string of SortBranchDto[] (optional) (default to undefined)

const { status, data } = await apiInstance.branchControllerFindManyInfinite(
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
| **filters** | [**string**] | JSON string of FilterBranchesDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortBranchDto[] | (optional) defaults to undefined|


### Return type

**BranchesInfinitePaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns branches with infinite pagination |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerFindOne**
> BranchDetail branchControllerFindOne()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let idOrSlug: string; // (default to undefined)
let acceptLanguage: string; //Language preference (en, vi) (optional) (default to undefined)

const { status, data } = await apiInstance.branchControllerFindOne(
    idOrSlug,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **idOrSlug** | [**string**] |  | defaults to undefined|
| **acceptLanguage** | [**string**] | Language preference (en, vi) | (optional) defaults to undefined|


### Return type

**BranchDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns a branch |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerGetLatestBranches**
> Array<Branch> branchControllerGetLatestBranches()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let limit: number; //Number of branches to get (optional) (default to 3)
let acceptLanguage: string; //Language preference (en, vi) (optional) (default to undefined)

const { status, data } = await apiInstance.branchControllerGetLatestBranches(
    limit,
    acceptLanguage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **limit** | [**number**] | Number of branches to get | (optional) defaults to 3|
| **acceptLanguage** | [**string**] | Language preference (en, vi) | (optional) defaults to undefined|


### Return type

**Array<Branch>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Returns latest branches |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerRemove**
> branchControllerRemove()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.branchControllerRemove(
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
|**204** | Branch has been successfully deleted. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Branch not found. |  -  |
|**409** | Cannot delete branch with active bookings. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerRestore**
> branchControllerRestore()


### Example

```typescript
import {
    BranchesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.branchControllerRestore(
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
|**200** | Branch restored successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **branchControllerUpdate**
> Branch branchControllerUpdate(updateBranchDto)


### Example

```typescript
import {
    BranchesApi,
    Configuration,
    UpdateBranchDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new BranchesApi(configuration);

let id: string; // (default to undefined)
let updateBranchDto: UpdateBranchDto; //

const { status, data } = await apiInstance.branchControllerUpdate(
    id,
    updateBranchDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateBranchDto** | **UpdateBranchDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Branch**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Branch has been successfully updated. |  -  |
|**401** | Unauthorized. |  -  |
|**404** | Branch not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

