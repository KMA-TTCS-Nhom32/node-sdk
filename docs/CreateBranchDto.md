# CreateBranchDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provinceId** | **string** | ID of the province where this branch is located | [default to undefined]
**thumbnail** | [**Image**](Image.md) | The branch\&#39;s thumbnail image. | [default to undefined]
**images** | [**Array&lt;Image&gt;**](Image.md) | The branch\&#39;s images. | [default to undefined]
**name** | **string** | The branch\&#39;s name. | [default to undefined]
**slug** | **string** | The branch\&#39;s slug. | [default to undefined]
**description** | **string** | The branch\&#39;s description. | [default to undefined]
**phone** | **string** | The branch\&#39;s phone number. | [default to undefined]
**is_active** | **boolean** | The branch\&#39;s active status. | [default to undefined]
**address** | **string** | The branch\&#39;s address. | [default to undefined]
**rating** | **number** | The branch\&#39;s rating. | [default to undefined]
**translations** | [**Array&lt;BranchTranslationDto&gt;**](BranchTranslationDto.md) | Translations for the branch | [optional] [default to undefined]

## Example

```typescript
import { CreateBranchDto } from '@ahomevilla-hotel/node-sdk';

const instance: CreateBranchDto = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
