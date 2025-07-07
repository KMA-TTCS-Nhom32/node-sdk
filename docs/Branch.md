# Branch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to undefined]
**isDeleted** | **boolean** | Soft delete flag | [default to undefined]
**deletedAt** | **string** | Soft delete timestamp | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**provinceId** | **string** | ID of the province where this branch is located | [default to undefined]
**province** | [**Province**](Province.md) | Province where this branch is located | [default to undefined]
**thumbnail** | [**Image**](Image.md) | Branch\&#39;s thumbnail image | [default to undefined]
**images** | [**Array&lt;Image&gt;**](Image.md) | Branch\&#39;s image gallery | [default to undefined]
**name** | **string** | Branch\&#39;s name | [default to undefined]
**slug** | **string** | Branch\&#39;s slug | [default to undefined]
**description** | **string** | Branch\&#39;s description | [default to undefined]
**phone** | **string** | Branch\&#39;s contact phone number | [default to undefined]
**is_active** | **boolean** | Branch\&#39;s active status | [default to undefined]
**address** | **string** | Branch\&#39;s physical address | [default to undefined]
**rating** | **number** | Branch\&#39;s rating | [default to undefined]
**translations** | [**Array&lt;BranchTranslationsInner&gt;**](BranchTranslationsInner.md) | List of translations for the branch | [default to undefined]
**availableLanguages** | **Array&lt;string&gt;** | List of available languages for this branch | [default to undefined]

## Example

```typescript
import { Branch } from '@ahomevilla-hotel/node-sdk';

const instance: Branch = {
    id,
    isDeleted,
    deletedAt,
    createdAt,
    updatedAt,
    provinceId,
    province,
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
    availableLanguages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
