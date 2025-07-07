# AnalyticsSummaryDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revenue** | [**RevenueTimelineDto**](RevenueTimelineDto.md) |  | [default to undefined]
**occupancyRate** | **number** | Average occupancy rate percentage | [default to undefined]
**cancellationRate** | **number** | Overall cancellation rate percentage | [default to undefined]
**roomPerformance** | [**Array&lt;RoomPerformanceDto&gt;**](RoomPerformanceDto.md) | Performance metrics by room type | [default to undefined]
**bookingStats** | **object** | Additional booking statistics | [optional] [default to undefined]

## Example

```typescript
import { AnalyticsSummaryDto } from '@ahomevilla-hotel/node-sdk';

const instance: AnalyticsSummaryDto = {
    revenue,
    occupancyRate,
    cancellationRate,
    roomPerformance,
    bookingStats,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
