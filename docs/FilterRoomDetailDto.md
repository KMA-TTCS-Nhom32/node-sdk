# FilterRoomDetailDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **string** |  | [optional] [default to undefined]
**room_type** | **string** |  | [optional] [default to undefined]
**bed_type** | **string** |  | [optional] [default to undefined]
**rating_from** | **number** | Filter by rating | [optional] [default to undefined]
**rating_to** | **number** | Filter by rating | [optional] [default to undefined]
**branchId** | **string** | Filter by branch ID | [optional] [default to undefined]
**branchSlug** | **string** | Filter by branch slug | [optional] [default to undefined]
**provinceId** | **string** | Filter by province ID | [optional] [default to undefined]
**provinceSlug** | **string** | Filter by province slug | [optional] [default to undefined]
**amenities** | **Array&lt;string&gt;** | Filter by amenities | [optional] [default to undefined]
**minPrice** | **object** | Filter by minimum price | [optional] [default to undefined]
**maxPrice** | **object** | Filter by maximum price | [optional] [default to undefined]
**startDate** | **string** | Filter by start date (DD-MM-YYYY) | [optional] [default to undefined]
**endDate** | **string** | Filter by end date (DD-MM-YYYY) | [optional] [default to undefined]
**startTime** | **string** | Filter by start time | [optional] [default to undefined]
**endTime** | **string** | Filter by end time | [optional] [default to undefined]
**bookingType** | **string** | Filter by booking type | [optional] [default to undefined]
**adults** | **number** | Filter by number of adults | [optional] [default to undefined]
**children** | **number** | Filter by number of children | [optional] [default to undefined]

## Example

```typescript
import { FilterRoomDetailDto } from '@ahomevilla-hotel/node-sdk';

const instance: FilterRoomDetailDto = {
    keyword,
    room_type,
    bed_type,
    rating_from,
    rating_to,
    branchId,
    branchSlug,
    provinceId,
    provinceSlug,
    amenities,
    minPrice,
    maxPrice,
    startDate,
    endDate,
    startTime,
    endTime,
    bookingType,
    adults,
    children,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
