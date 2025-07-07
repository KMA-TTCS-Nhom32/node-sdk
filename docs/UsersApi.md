# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**usersControllerAdminGetUserDetail**](#userscontrolleradmingetuserdetail) | **GET** /api/users/admin/{id} | Get detailed user information (Admin only)|
|[**usersControllerAdminUpdateUser**](#userscontrolleradminupdateuser) | **PATCH** /api/users/admin/{id} | Update user information (Admin only)|
|[**usersControllerBlockUser**](#userscontrollerblockuser) | **POST** /api/users/block-action/{id} | Block or unblock a user|
|[**usersControllerDeleteUser**](#userscontrollerdeleteuser) | **DELETE** /api/users/{id} | Soft delete a user (Admin only)|
|[**usersControllerGetUsers**](#userscontrollergetusers) | **GET** /api/users | |
|[**usersControllerRestoreUser**](#userscontrollerrestoreuser) | **POST** /api/users/{id}/restore | Restore a deleted user (Admin only)|

# **usersControllerAdminGetUserDetail**
> UserDetail usersControllerAdminGetUserDetail()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersControllerAdminGetUserDetail(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UserDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User details retrieved successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerAdminUpdateUser**
> UserDetail usersControllerAdminUpdateUser(adminUpdateUserDto)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    AdminUpdateUserDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)
let adminUpdateUserDto: AdminUpdateUserDto; //

const { status, data } = await apiInstance.usersControllerAdminUpdateUser(
    id,
    adminUpdateUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **adminUpdateUserDto** | **AdminUpdateUserDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UserDetail**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User updated successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |
|**409** | Cannot change own role |  -  |
|**422** | Invalid role change request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerBlockUser**
> usersControllerBlockUser(blockOrUnblockUserDto)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    BlockOrUnblockUserDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)
let blockOrUnblockUserDto: BlockOrUnblockUserDto; //

const { status, data } = await apiInstance.usersControllerBlockUser(
    id,
    blockOrUnblockUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **blockOrUnblockUserDto** | **BlockOrUnblockUserDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


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
|**200** | User blocked/unblocked successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerDeleteUser**
> User usersControllerDeleteUser(deleteUserDto)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    DeleteUserDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)
let deleteUserDto: DeleteUserDto; //

const { status, data } = await apiInstance.usersControllerDeleteUser(
    id,
    deleteUserDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteUserDto** | **DeleteUserDto**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User deleted successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |
|**409** | User has active bookings |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerGetUsers**
> UsersPaginationResultDto usersControllerGetUsers()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let page: number; // (optional) (default to undefined)
let pageSize: number; // (optional) (default to undefined)
let filters: string; //JSON string of FilterUserDto (optional) (default to undefined)
let sort: string; //JSON string of SortUserDto (optional) (default to undefined)

const { status, data } = await apiInstance.usersControllerGetUsers(
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
| **filters** | [**string**] | JSON string of FilterUserDto | (optional) defaults to undefined|
| **sort** | [**string**] | JSON string of SortUserDto | (optional) defaults to undefined|


### Return type

**UsersPaginationResultDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Get users list successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersControllerRestoreUser**
> User usersControllerRestoreUser()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.usersControllerRestoreUser(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**User**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User restored successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | User not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

