# GetAnalyticsQueryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branchId** | **string** | Branch ID to get analytics for | [optional] [default to undefined]
**startDate** | **string** | Start date for analytics (YYYY-MM-DD) | [optional] [default to undefined]
**endDate** | **string** | End date for analytics (YYYY-MM-DD) | [optional] [default to undefined]
**periodType** | **string** | Period type for analytics | [optional] [default to undefined]
**months** | **number** | Number of months to analyze | [optional] [default to undefined]

## Example

```typescript
import { GetAnalyticsQueryDto } from '@ahomevilla-hotel/node-sdk';

const instance: GetAnalyticsQueryDto = {
    branchId,
    startDate,
    endDate,
    periodType,
    months,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
