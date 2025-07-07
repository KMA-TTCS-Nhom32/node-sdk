# AuthApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authControllerChangePassword**](#authcontrollerchangepassword) | **POST** /api/auth/change-password | Change user password|
|[**authControllerGetActiveSessions**](#authcontrollergetactivesessions) | **GET** /api/auth/sessions | Get active sessions|
|[**authControllerGetProfile**](#authcontrollergetprofile) | **GET** /api/auth/profile | Get current user profile|
|[**authControllerGetSessionAnalytics**](#authcontrollergetsessionanalytics) | **GET** /api/auth/sessions/analytics | Get session analytics|
|[**authControllerGetSuspiciousActivities**](#authcontrollergetsuspiciousactivities) | **GET** /api/auth/users/{userId}/suspicious-activities | Get suspicious activities|
|[**authControllerInitiateForgotPassword**](#authcontrollerinitiateforgotpassword) | **POST** /api/auth/forgot-password/email/initiate | Initiate forgot password process|
|[**authControllerLogin**](#authcontrollerlogin) | **POST** /api/auth/login | |
|[**authControllerLogout**](#authcontrollerlogout) | **POST** /api/auth/logout | Logout user|
|[**authControllerRefreshTokens**](#authcontrollerrefreshtokens) | **POST** /api/auth/refresh | Refresh access token|
|[**authControllerRegister**](#authcontrollerregister) | **POST** /api/auth/register | |
|[**authControllerResetPasswordWithOTP**](#authcontrollerresetpasswordwithotp) | **POST** /api/auth/forgot-password/email/reset | Reset password using OTP|
|[**authControllerRevokeSession**](#authcontrollerrevokesession) | **POST** /api/auth/sessions/{sessionId}/revoke | Revoke specific session|
|[**authControllerUpdateProfile**](#authcontrollerupdateprofile) | **PATCH** /api/auth/profile | Update user profile|
|[**authControllerVerifyEmail**](#authcontrollerverifyemail) | **POST** /api/auth/verify-email | Verify email with OTP code|

# **authControllerChangePassword**
> authControllerChangePassword(changePasswordDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ChangePasswordDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let changePasswordDto: ChangePasswordDto; //

const { status, data } = await apiInstance.authControllerChangePassword(
    changePasswordDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePasswordDto** | **ChangePasswordDto**|  | |


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
|**200** | Password changed successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerGetActiveSessions**
> SessionResponseDto authControllerGetActiveSessions()

Retrieve all active sessions for the current user

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authControllerGetActiveSessions();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**SessionResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | List of active sessions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerGetProfile**
> User authControllerGetProfile()


### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authControllerGetProfile();
```

### Parameters
This endpoint does not have any parameters.


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
|**200** | Current user profile |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerGetSessionAnalytics**
> authControllerGetSessionAnalytics()

Get analytics data for user sessions. Requires ADMIN role.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.authControllerGetSessionAnalytics(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | Session analytics retrieved successfully |  -  |
|**403** | User does not have required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerGetSuspiciousActivities**
> authControllerGetSuspiciousActivities()

Get suspicious activities for a specific user. Requires ADMIN role.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.authControllerGetSuspiciousActivities(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


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
|**200** | Suspicious activities retrieved successfully |  -  |
|**403** | User does not have required permissions |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerInitiateForgotPassword**
> authControllerInitiateForgotPassword(initiateForgotPasswordEmailDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    InitiateForgotPasswordEmailDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let initiateForgotPasswordEmailDto: InitiateForgotPasswordEmailDto; //

const { status, data } = await apiInstance.authControllerInitiateForgotPassword(
    initiateForgotPasswordEmailDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **initiateForgotPasswordEmailDto** | **InitiateForgotPasswordEmailDto**|  | |


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
|**200** | Password reset initiated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerLogin**
> LoginResponseDto authControllerLogin(loginDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    LoginDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let userAgent: string; // (default to undefined)
let loginDto: LoginDto; //

const { status, data } = await apiInstance.authControllerLogin(
    userAgent,
    loginDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **loginDto** | **LoginDto**|  | |
| **userAgent** | [**string**] |  | defaults to undefined|


### Return type

**LoginResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerLogout**
> LogoutResponseDto authControllerLogout()

Revoke the current refresh token, effectively logging out the user

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authControllerLogout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**LogoutResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User logged out successfully |  -  |
|**401** | User not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRefreshTokens**
> RefreshTokenResponseDto authControllerRefreshTokens(refreshTokenDto)

Exchange a valid refresh token for a new access token and refresh token pair

### Example

```typescript
import {
    AuthApi,
    Configuration,
    RefreshTokenDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let refreshTokenDto: RefreshTokenDto; //

const { status, data } = await apiInstance.authControllerRefreshTokens(
    refreshTokenDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refreshTokenDto** | **RefreshTokenDto**|  | |


### Return type

**RefreshTokenResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Tokens refreshed successfully |  -  |
|**401** | Invalid or expired refresh token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRegister**
> RegisterResponseDto authControllerRegister(registerDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    RegisterDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let registerDto: RegisterDto; //

const { status, data } = await apiInstance.authControllerRegister(
    registerDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **registerDto** | **RegisterDto**|  | |


### Return type

**RegisterResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerResetPasswordWithOTP**
> authControllerResetPasswordWithOTP(resetPasswordWithOTPEmailDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    ResetPasswordWithOTPEmailDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let resetPasswordWithOTPEmailDto: ResetPasswordWithOTPEmailDto; //

const { status, data } = await apiInstance.authControllerResetPasswordWithOTP(
    resetPasswordWithOTPEmailDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resetPasswordWithOTPEmailDto** | **ResetPasswordWithOTPEmailDto**|  | |


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
|**200** | Password reset successfully |  -  |
|**422** | Invalid or expired OTP |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerRevokeSession**
> RevokeSessionResponseDto authControllerRevokeSession()

Revoke a specific session by its ID

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.authControllerRevokeSession(
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**RevokeSessionResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Session revoked successfully |  -  |
|**404** | Session not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerUpdateProfile**
> User authControllerUpdateProfile(updateProfileDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    UpdateProfileDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let updateProfileDto: UpdateProfileDto; //

const { status, data } = await apiInstance.authControllerUpdateProfile(
    updateProfileDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateProfileDto** | **UpdateProfileDto**|  | |


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
|**200** | Profile updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authControllerVerifyEmail**
> authControllerVerifyEmail(verifyEmailDto)


### Example

```typescript
import {
    AuthApi,
    Configuration,
    VerifyEmailDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let verifyEmailDto: VerifyEmailDto; //

const { status, data } = await apiInstance.authControllerVerifyEmail(
    verifyEmailDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyEmailDto** | **VerifyEmailDto**|  | |


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
|**200** | Email verified successfully |  -  |
|**422** | Invalid verification code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

