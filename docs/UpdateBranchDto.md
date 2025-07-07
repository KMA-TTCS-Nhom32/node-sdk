# UpdateBranchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provinceId** | **string** | ID of the province where this branch is located | [optional] [default to undefined]
**thumbnail** | [**Image**](Image.md) | The branch\&#39;s thumbnail image. | [optional] [default to undefined]
**images** | [**Array&lt;Image&gt;**](Image.md) | The branch\&#39;s images. | [optional] [default to undefined]
**name** | **string** | The branch\&#39;s name. | [optional] [default to undefined]
**slug** | **string** | The branch\&#39;s slug. | [optional] [default to undefined]
**description** | **string** | The branch\&#39;s description. | [optional] [default to undefined]
**phone** | **string** | The branch\&#39;s phone number. | [optional] [default to undefined]
**is_active** | **boolean** | The branch\&#39;s active status. | [optional] [default to undefined]
**address** | **string** | The branch\&#39;s address. | [optional] [default to undefined]
**rating** | **number** | The branch\&#39;s rating. | [optional] [default to undefined]
**translations** | [**Array&lt;BranchTranslationDto&gt;**](BranchTranslationDto.md) | Translations for the branch | [optional] [default to undefined]
**amenityIds** | **Array&lt;string&gt;** | Branch amenities | [optional] [default to undefined]
**nearBy** | [**Array&lt;NearBy&gt;**](NearBy.md) | Nearby locations | [optional] [default to undefined]

## Example

```typescript
import { UpdateBranchDto } from '@ahomevilla-hotel/node-sdk';

const instance: UpdateBranchDto = {
    provinceId,
    thumbnail,
    images,
    name,
    slug,
    description,
    phone,
    is_active,
    address,
    rating,
    translations,
    amenityIds,
    nearBy,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
