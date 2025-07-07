# QueryBookingsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **number** |  | [optional] [default to undefined]
**pageSize** | **number** |  | [optional] [default to undefined]
**filters** | **string** | JSON string of FilterBookingsDto | [optional] [default to undefined]
**sort** | **string** | JSON string of SortBookingsDto[] | [optional] [default to undefined]

## Example

```typescript
import { QueryBookingsDto } from '@ahomevilla-hotel/node-sdk';

const instance: QueryBookingsDto = {
    page,
    pageSize,
    filters,
    sort,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
