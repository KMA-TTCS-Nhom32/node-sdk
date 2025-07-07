# VerificationApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**verificationControllerVerifyCode**](#verificationcontrollerverifycode) | **POST** /api/verification/verify | Verify a code|
|[**verificationControllerVerifyEmailOTP**](#verificationcontrollerverifyemailotp) | **POST** /api/verification/verify-email-otp | Verify an email OTP|

# **verificationControllerVerifyCode**
> VerifyCodeResponseDto verificationControllerVerifyCode(verifyCodeDto)


### Example

```typescript
import {
    VerificationApi,
    Configuration,
    VerifyCodeDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new VerificationApi(configuration);

let verifyCodeDto: VerifyCodeDto; //

const { status, data } = await apiInstance.verificationControllerVerifyCode(
    verifyCodeDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyCodeDto** | **VerifyCodeDto**|  | |


### Return type

**VerifyCodeResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Code verified successfully |  -  |
|**400** | Invalid input data |  -  |
|**422** | Invalid or expired verification code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verificationControllerVerifyEmailOTP**
> VerifyCodeResponseDto verificationControllerVerifyEmailOTP(verifyEmailOTP)


### Example

```typescript
import {
    VerificationApi,
    Configuration,
    VerifyEmailOTP
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new VerificationApi(configuration);

let verifyEmailOTP: VerifyEmailOTP; //

const { status, data } = await apiInstance.verificationControllerVerifyEmailOTP(
    verifyEmailOTP
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verifyEmailOTP** | **VerifyEmailOTP**|  | |


### Return type

**VerifyCodeResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email OTP verified successfully |  -  |
|**400** | Invalid input data |  -  |
|**422** | Invalid or expired verification code |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

