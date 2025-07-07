# FilterBranchesDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyword** | **string** | Search by keyword | [optional] [default to undefined]
**is_active** | **boolean** | Filter by active status | [optional] [default to undefined]
**rating** | **number** | Filter by rating | [optional] [default to undefined]
**provinceId** | **string** | Filter by province | [optional] [default to undefined]
**provinceSlug** | **string** | Filter by province slug | [optional] [default to undefined]
**amenities** | **Array&lt;string&gt;** |  | [optional] [default to undefined]

## Example

```typescript
import { FilterBranchesDto } from '@ahomevilla-hotel/node-sdk';

const instance: FilterBranchesDto = {
    keyword,
    is_active,
    rating,
    provinceId,
    provinceSlug,
    amenities,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
