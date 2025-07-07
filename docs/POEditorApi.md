# POEditorApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**poeditorControllerAddTranslation**](#poeditorcontrolleraddtranslation) | **POST** /api/poeditor/translations | Add translations to POEditor project|
|[**poeditorControllerGetTranslations**](#poeditorcontrollergettranslations) | **POST** /api/poeditor/translations-list | Get translations from POEditor project|

# **poeditorControllerAddTranslation**
> poeditorControllerAddTranslation(addTranslationDto)


### Example

```typescript
import {
    POEditorApi,
    Configuration,
    AddTranslationDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new POEditorApi(configuration);

let addTranslationDto: AddTranslationDto; //

const { status, data } = await apiInstance.poeditorControllerAddTranslation(
    addTranslationDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addTranslationDto** | **AddTranslationDto**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Translations added successfully |  -  |
|**400** | Invalid input data |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **poeditorControllerGetTranslations**
> ListTranslationResponseDto poeditorControllerGetTranslations(getTranslationsRequestDto)


### Example

```typescript
import {
    POEditorApi,
    Configuration,
    GetTranslationsRequestDto
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new POEditorApi(configuration);

let getTranslationsRequestDto: GetTranslationsRequestDto; //

const { status, data } = await apiInstance.poeditorControllerGetTranslations(
    getTranslationsRequestDto
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **getTranslationsRequestDto** | **GetTranslationsRequestDto**|  | |


### Return type

**ListTranslationResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Translations fetched successfully |  -  |
|**400** | Invalid input data |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

