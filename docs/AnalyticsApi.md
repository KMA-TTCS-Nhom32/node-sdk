# AnalyticsApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**analyticsControllerGetAnalyticsSummary**](#analyticscontrollergetanalyticssummary) | **GET** /api/analytics/summary | Get analytics summary for a branch|
|[**analyticsControllerGetOccupancyRate**](#analyticscontrollergetoccupancyrate) | **GET** /api/analytics/occupancy | Get occupancy rate analytics|
|[**analyticsControllerGetRevenueAnalytics**](#analyticscontrollergetrevenueanalytics) | **GET** /api/analytics/revenue | Get revenue analytics|
|[**analyticsControllerGetRoomPerformance**](#analyticscontrollergetroomperformance) | **GET** /api/analytics/room-performance | Get room performance analytics|

# **analyticsControllerGetAnalyticsSummary**
> AnalyticsSummaryDto analyticsControllerGetAnalyticsSummary()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let branchId: string; //Branch ID to get analytics for (optional) (default to undefined)
let startDate: string; //Start date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let endDate: string; //End date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let periodType: 'DAILY' | 'MONTHLY' | 'YEARLY'; //Period type for analytics (optional) (default to undefined)
let months: number; //Number of months to analyze (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsControllerGetAnalyticsSummary(
    branchId,
    startDate,
    endDate,
    periodType,
    months
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchId** | [**string**] | Branch ID to get analytics for | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **periodType** | [**&#39;DAILY&#39; | &#39;MONTHLY&#39; | &#39;YEARLY&#39;**]**Array<&#39;DAILY&#39; &#124; &#39;MONTHLY&#39; &#124; &#39;YEARLY&#39;>** | Period type for analytics | (optional) defaults to undefined|
| **months** | [**number**] | Number of months to analyze | (optional) defaults to undefined|


### Return type

**AnalyticsSummaryDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsControllerGetOccupancyRate**
> OccupancyRateResponseDto analyticsControllerGetOccupancyRate()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let branchId: string; //Branch ID to get analytics for (optional) (default to undefined)
let startDate: string; //Start date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let endDate: string; //End date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let periodType: 'DAILY' | 'MONTHLY' | 'YEARLY'; //Period type for analytics (optional) (default to undefined)
let months: number; //Number of months to analyze (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsControllerGetOccupancyRate(
    branchId,
    startDate,
    endDate,
    periodType,
    months
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchId** | [**string**] | Branch ID to get analytics for | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **periodType** | [**&#39;DAILY&#39; | &#39;MONTHLY&#39; | &#39;YEARLY&#39;**]**Array<&#39;DAILY&#39; &#124; &#39;MONTHLY&#39; &#124; &#39;YEARLY&#39;>** | Period type for analytics | (optional) defaults to undefined|
| **months** | [**number**] | Number of months to analyze | (optional) defaults to undefined|


### Return type

**OccupancyRateResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsControllerGetRevenueAnalytics**
> RevenueTimelineDto analyticsControllerGetRevenueAnalytics()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let branchId: string; //Branch ID to get analytics for (optional) (default to undefined)
let startDate: string; //Start date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let endDate: string; //End date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let periodType: 'DAILY' | 'MONTHLY' | 'YEARLY'; //Period type for analytics (optional) (default to undefined)
let months: number; //Number of months to analyze (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsControllerGetRevenueAnalytics(
    branchId,
    startDate,
    endDate,
    periodType,
    months
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchId** | [**string**] | Branch ID to get analytics for | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **periodType** | [**&#39;DAILY&#39; | &#39;MONTHLY&#39; | &#39;YEARLY&#39;**]**Array<&#39;DAILY&#39; &#124; &#39;MONTHLY&#39; &#124; &#39;YEARLY&#39;>** | Period type for analytics | (optional) defaults to undefined|
| **months** | [**number**] | Number of months to analyze | (optional) defaults to undefined|


### Return type

**RevenueTimelineDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **analyticsControllerGetRoomPerformance**
> Array<RoomPerformanceDto> analyticsControllerGetRoomPerformance()


### Example

```typescript
import {
    AnalyticsApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new AnalyticsApi(configuration);

let branchId: string; //Branch ID to get analytics for (optional) (default to undefined)
let startDate: string; //Start date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let endDate: string; //End date for analytics (YYYY-MM-DD) (optional) (default to undefined)
let periodType: 'DAILY' | 'MONTHLY' | 'YEARLY'; //Period type for analytics (optional) (default to undefined)
let months: number; //Number of months to analyze (optional) (default to undefined)

const { status, data } = await apiInstance.analyticsControllerGetRoomPerformance(
    branchId,
    startDate,
    endDate,
    periodType,
    months
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **branchId** | [**string**] | Branch ID to get analytics for | (optional) defaults to undefined|
| **startDate** | [**string**] | Start date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **endDate** | [**string**] | End date for analytics (YYYY-MM-DD) | (optional) defaults to undefined|
| **periodType** | [**&#39;DAILY&#39; | &#39;MONTHLY&#39; | &#39;YEARLY&#39;**]**Array<&#39;DAILY&#39; &#124; &#39;MONTHLY&#39; &#124; &#39;YEARLY&#39;>** | Period type for analytics | (optional) defaults to undefined|
| **months** | [**number**] | Number of months to analyze | (optional) defaults to undefined|


### Return type

**Array<RoomPerformanceDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

