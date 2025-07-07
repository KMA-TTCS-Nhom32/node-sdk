# EmailApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**emailControllerSendVerificationEmail**](#emailcontrollersendverificationemail) | **POST** /api/email/send-verification | Send verification email|

# **emailControllerSendVerificationEmail**
> ResponseWithMessage emailControllerSendVerificationEmail(verificationEmailDto)


### Example

```typescript
import {
    EmailApi,
    Configuration,
    VerificationEmailDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let verificationEmailDto: VerificationEmailDto; //

const { status, data } = await apiInstance.emailControllerSendVerificationEmail(
    verificationEmailDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **verificationEmailDto** | **VerificationEmailDto**|  | |


### Return type

**ResponseWithMessage**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Email sent successfully |  -  |
|**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

