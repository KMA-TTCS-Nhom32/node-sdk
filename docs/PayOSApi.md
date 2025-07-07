# PayOSApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**payosControllerCancelPayment**](#payoscontrollercancelpayment) | **POST** /api/payos/cancel-payment | Cancel a payment link|
|[**payosControllerCreatePaymentRequest**](#payoscontrollercreatepaymentrequest) | **POST** /api/payos/payment-request | Create a new payment request|
|[**payosControllerGetPaymentStatus**](#payoscontrollergetpaymentstatus) | **GET** /api/payos/payment-status/{paymentLinkId} | Get payment status|
|[**payosControllerHandleWebhook**](#payoscontrollerhandlewebhook) | **POST** /api/payos/webhook | Handle payment confirmation webhook|

# **payosControllerCancelPayment**
> object payosControllerCancelPayment(cancelPaymentRequestDto)


### Example

```typescript
import {
    PayOSApi,
    Configuration,
    CancelPaymentRequestDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new PayOSApi(configuration);

let cancelPaymentRequestDto: CancelPaymentRequestDto; //

const { status, data } = await apiInstance.payosControllerCancelPayment(
    cancelPaymentRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cancelPaymentRequestDto** | **CancelPaymentRequestDto**|  | |


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment cancelled successfully |  -  |
|**400** | Invalid payment cancellation request |  -  |
|**404** | Payment link not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payosControllerCreatePaymentRequest**
> object payosControllerCreatePaymentRequest(createPaymentRequestDto)


### Example

```typescript
import {
    PayOSApi,
    Configuration,
    CreatePaymentRequestDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new PayOSApi(configuration);

let createPaymentRequestDto: CreatePaymentRequestDto; //

const { status, data } = await apiInstance.payosControllerCreatePaymentRequest(
    createPaymentRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createPaymentRequestDto** | **CreatePaymentRequestDto**|  | |


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment request created successfully |  -  |
|**400** | Invalid payment request data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payosControllerGetPaymentStatus**
> object payosControllerGetPaymentStatus()


### Example

```typescript
import {
    PayOSApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new PayOSApi(configuration);

let paymentLinkId: string; // (default to undefined)

const { status, data } = await apiInstance.payosControllerGetPaymentStatus(
    paymentLinkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentLinkId** | [**string**] |  | defaults to undefined|


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment status retrieved successfully |  -  |
|**401** | Unauthorized |  -  |
|**404** | Payment link not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payosControllerHandleWebhook**
> boolean payosControllerHandleWebhook(confirmPaymentWebhookDto)


### Example

```typescript
import {
    PayOSApi,
    Configuration,
    ConfirmPaymentWebhookDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new PayOSApi(configuration);

let confirmPaymentWebhookDto: ConfirmPaymentWebhookDto; //

const { status, data } = await apiInstance.payosControllerHandleWebhook(
    confirmPaymentWebhookDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **confirmPaymentWebhookDto** | **ConfirmPaymentWebhookDto**|  | |


### Return type

**boolean**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Webhook processed successfully |  -  |
|**400** | Invalid webhook data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

