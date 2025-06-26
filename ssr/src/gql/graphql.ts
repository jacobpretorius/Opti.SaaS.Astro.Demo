/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type ArticlePage = IData & _IContent & _IPage & {
  __typename?: 'ArticlePage';
  Heading?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<ContentReference>;
  MainBody?: Maybe<RichText>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ArticlePage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  Image?: Maybe<ContentReferenceAutocomplete>;
  MainBody?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  Image?: Maybe<ContentReferenceFacet>;
  MainBody?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ArticlePageOrderByInput = {
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  MainBody?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticlePageFacet>;
  item?: Maybe<ArticlePage>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  Image?: InputMaybe<ContentReferenceWhereInput>;
  MainBody?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogPage = IData & _IContent & _IPage & {
  __typename?: 'BlogPage';
  Description?: Maybe<RichText>;
  Heading?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type BlogPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlogPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlogPageAutocomplete = {
  __typename?: 'BlogPageAutocomplete';
  Description?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type BlogPageFacet = {
  __typename?: 'BlogPageFacet';
  Description?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type BlogPageOrderByInput = {
  Description?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type BlogPageOutput = {
  __typename?: 'BlogPageOutput';
  autocomplete?: Maybe<BlogPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlogPageFacet>;
  item?: Maybe<BlogPage>;
  items?: Maybe<Array<Maybe<BlogPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlogPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPageWhereInput = {
  Description?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<BlogPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlogPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlogPageWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Data_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type Experience_Carousel = IData & _IComponent & _IContent & {
  __typename?: 'Experience_Carousel';
  Carousel_Images?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Experience_Carousel_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Experience_Carousel_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Experience_CarouselAutocomplete = {
  __typename?: 'Experience_CarouselAutocomplete';
  Carousel_Images?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type Experience_CarouselFacet = {
  __typename?: 'Experience_CarouselFacet';
  Carousel_Images?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type Experience_CarouselOrderByInput = {
  Carousel_Images?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Experience_CarouselOutput = {
  __typename?: 'Experience_CarouselOutput';
  autocomplete?: Maybe<Experience_CarouselAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Experience_CarouselFacet>;
  item?: Maybe<Experience_Carousel>;
  items?: Maybe<Array<Maybe<Experience_Carousel>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Experience_CarouselOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Experience_CarouselWhereInput = {
  Carousel_Images?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<Experience_CarouselWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Experience_CarouselWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Experience_CarouselWhereInput>>>;
};

export type Experience_Hero = IData & _IComponent & _IContent & {
  __typename?: 'Experience_Hero';
  Description?: Maybe<RichText>;
  Heading?: Maybe<RichText>;
  Image?: Maybe<ContentUrl>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Experience_Hero_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Experience_Hero_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Experience_HeroAutocomplete = {
  __typename?: 'Experience_HeroAutocomplete';
  Description?: Maybe<RichTextAutocomplete>;
  Heading?: Maybe<RichTextAutocomplete>;
  Image?: Maybe<ContentUrlAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type Experience_HeroFacet = {
  __typename?: 'Experience_HeroFacet';
  Description?: Maybe<RichTextFacet>;
  Heading?: Maybe<RichTextFacet>;
  Image?: Maybe<ContentUrlFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type Experience_HeroOrderByInput = {
  Description?: InputMaybe<RichTextOrderByInput>;
  Heading?: InputMaybe<RichTextOrderByInput>;
  Image?: InputMaybe<ContentUrlOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Experience_HeroOutput = {
  __typename?: 'Experience_HeroOutput';
  autocomplete?: Maybe<Experience_HeroAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Experience_HeroFacet>;
  item?: Maybe<Experience_Hero>;
  items?: Maybe<Array<Maybe<Experience_Hero>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Experience_HeroOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Experience_HeroWhereInput = {
  Description?: InputMaybe<RichTextWhereInput>;
  Heading?: InputMaybe<RichTextWhereInput>;
  Image?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<Experience_HeroWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Experience_HeroWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Experience_HeroWhereInput>>>;
};

export type Experience_Rte = IData & _IComponent & _IContent & {
  __typename?: 'Experience_RTE';
  Text?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Experience_Rte_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Experience_Rte_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type Experience_RteAutocomplete = {
  __typename?: 'Experience_RTEAutocomplete';
  Text?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type Experience_RteFacet = {
  __typename?: 'Experience_RTEFacet';
  Text?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type Experience_RteOrderByInput = {
  Text?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type Experience_RteOutput = {
  __typename?: 'Experience_RTEOutput';
  autocomplete?: Maybe<Experience_RteAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<Experience_RteFacet>;
  item?: Maybe<Experience_Rte>;
  items?: Maybe<Array<Maybe<Experience_Rte>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type Experience_RteOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Experience_RteWhereInput = {
  Text?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<Experience_RteWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<Experience_RteWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<Experience_RteWhereInput>>>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FolderPage = IData & _IContent & _IPage & {
  __typename?: 'FolderPage';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type FolderPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type FolderPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type FolderPageAutocomplete = {
  __typename?: 'FolderPageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type FolderPageFacet = {
  __typename?: 'FolderPageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type FolderPageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type FolderPageOutput = {
  __typename?: 'FolderPageOutput';
  autocomplete?: Maybe<FolderPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<FolderPageFacet>;
  item?: Maybe<FolderPage>;
  items?: Maybe<Array<Maybe<FolderPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type FolderPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FolderPageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<FolderPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<FolderPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<FolderPageWhereInput>>>;
};

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type ImageRightContentPage = IData & _IContent & _IPage & {
  __typename?: 'ImageRightContentPage';
  Image?: Maybe<ContentReference>;
  MainBody?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type ImageRightContentPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageRightContentPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageRightContentPageAutocomplete = {
  __typename?: 'ImageRightContentPageAutocomplete';
  Image?: Maybe<ContentReferenceAutocomplete>;
  MainBody?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageRightContentPageFacet = {
  __typename?: 'ImageRightContentPageFacet';
  Image?: Maybe<ContentReferenceFacet>;
  MainBody?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageRightContentPageOrderByInput = {
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  MainBody?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageRightContentPageOutput = {
  __typename?: 'ImageRightContentPageOutput';
  autocomplete?: Maybe<ImageRightContentPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageRightContentPageFacet>;
  item?: Maybe<ImageRightContentPage>;
  items?: Maybe<Array<Maybe<ImageRightContentPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageRightContentPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageRightContentPageWhereInput = {
  Image?: InputMaybe<ContentReferenceWhereInput>;
  MainBody?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ImageRightContentPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageRightContentPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageRightContentPageWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type Query = {
  __typename?: 'Query';
  ArticlePage?: Maybe<ArticlePageOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlogPage?: Maybe<BlogPageOutput>;
  Data?: Maybe<DataOutput>;
  Experience_Carousel?: Maybe<Experience_CarouselOutput>;
  Experience_Hero?: Maybe<Experience_HeroOutput>;
  Experience_RTE?: Maybe<Experience_RteOutput>;
  FolderPage?: Maybe<FolderPageOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  ImageRightContentPage?: Maybe<ImageRightContentPageOutput>;
  StandardPage?: Maybe<StandardPageOutput>;
  StartPage?: Maybe<StartPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  image?: Maybe<ImageOutput>;
};


export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogPageWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryExperience_CarouselArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Experience_CarouselOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<Experience_CarouselWhereInput>;
};


export type QueryExperience_HeroArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Experience_HeroOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<Experience_HeroWhereInput>;
};


export type QueryExperience_RteArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Experience_RteOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<Experience_RteWhereInput>;
};


export type QueryFolderPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FolderPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FolderPageWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryImageRightContentPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageRightContentPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageRightContentPageWhereInput>;
};


export type QueryStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StandardPageWhereInput>;
};


export type QueryStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StartPageWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticlePage?: Maybe<ArticlePageOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  BlogPage?: Maybe<BlogPageOutput>;
  Data?: Maybe<DataOutput>;
  Experience_Carousel?: Maybe<Experience_CarouselOutput>;
  Experience_Hero?: Maybe<Experience_HeroOutput>;
  Experience_RTE?: Maybe<Experience_RteOutput>;
  FolderPage?: Maybe<FolderPageOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  ImageRightContentPage?: Maybe<ImageRightContentPageOutput>;
  StandardPage?: Maybe<StandardPageOutput>;
  StartPage?: Maybe<StartPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
  image?: Maybe<ImageOutput>;
};


export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlogPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<BlogPageWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefExperience_CarouselArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Experience_CarouselOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<Experience_CarouselWhereInput>;
};


export type QueryRefExperience_HeroArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Experience_HeroOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<Experience_HeroWhereInput>;
};


export type QueryRefExperience_RteArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<Experience_RteOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<Experience_RteWhereInput>;
};


export type QueryRefFolderPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<FolderPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<FolderPageWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefImageRightContentPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageRightContentPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageRightContentPageWhereInput>;
};


export type QueryRefStandardPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StandardPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StandardPageWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<_VideoWhereInput>;
};


export type QueryRefImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where?: InputMaybe<ImageWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type StandardPage = IData & _IContent & _IPage & {
  __typename?: 'StandardPage';
  MainBody?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type StandardPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StandardPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StandardPageAutocomplete = {
  __typename?: 'StandardPageAutocomplete';
  MainBody?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type StandardPageFacet = {
  __typename?: 'StandardPageFacet';
  MainBody?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type StandardPageOrderByInput = {
  MainBody?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StandardPageOutput = {
  __typename?: 'StandardPageOutput';
  autocomplete?: Maybe<StandardPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StandardPageFacet>;
  item?: Maybe<StandardPage>;
  items?: Maybe<Array<Maybe<StandardPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StandardPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StandardPageWhereInput = {
  MainBody?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StandardPageWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  BannerImages?: Maybe<Array<Maybe<_IContent>>>;
  Body?: Maybe<RichText>;
  CompanyName?: Maybe<Scalars['String']['output']>;
  DisableHeadDeploymentWebhook?: Maybe<Scalars['Boolean']['output']>;
  Heading?: Maybe<Scalars['String']['output']>;
  Logo?: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  BannerImages?: Maybe<_IContentAutocomplete>;
  Body?: Maybe<RichTextAutocomplete>;
  Logo?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  BannerImages?: Maybe<_IContentFacet>;
  Body?: Maybe<RichTextFacet>;
  Logo?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type StartPageOrderByInput = {
  BannerImages?: InputMaybe<_IContentOrderByInput>;
  Body?: InputMaybe<RichTextOrderByInput>;
  Logo?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete?: Maybe<StartPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StartPageFacet>;
  item?: Maybe<StartPage>;
  items?: Maybe<Array<Maybe<StartPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  BannerImages?: InputMaybe<_IContentWhereInput>;
  Body?: InputMaybe<RichTextWhereInput>;
  Logo?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Component_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Content_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Media_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Page_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type _Video_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
};


export type Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageAutocomplete = {
  __typename?: 'imageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageFacet = {
  __typename?: 'imageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageOutput = {
  __typename?: 'imageOutput';
  autocomplete?: Maybe<ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageFacet>;
  item?: Maybe<Image>;
  items?: Maybe<Array<Maybe<Image>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type ArticlePagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticlePagesQuery = { __typename?: 'Query', ArticlePage?: { __typename?: 'ArticlePageOutput', items?: Array<{ __typename?: 'ArticlePage', Heading?: string | null, MetaDescription?: string | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null } | null };

export type GetStartPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStartPageQuery = { __typename?: 'Query', StartPage?: { __typename?: 'StartPageOutput', items?: Array<{ __typename?: 'StartPage', Heading?: string | null, CompanyName?: string | null, Body?: { __typename?: 'RichText', html?: string | null } | null, BannerImages?: Array<{ __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Carousel', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Hero', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_RTE', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'image', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null, Logo?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', hierarchical?: string | null, default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', hierarchical?: string | null, default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', hierarchical?: string | null, default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', hierarchical?: string | null, default?: string | null } | null } | null, _link?: { __typename?: 'QueryRef', _Page?: { __typename?: '_PageOutput', items?: Array<{ __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, published?: any | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null } | null } | null } | null> | null } | null };

type ContentItemFields_ArticlePage_Fragment = { __typename?: 'ArticlePage', Heading?: string | null, MetaDescription?: string | null, MainBody?: { __typename?: 'RichText', html?: string | null } | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_ArticlePage_Fragment' };

type ContentItemFields_BlankExperience_Fragment = { __typename?: 'BlankExperience', composition?: { __typename?: 'CompositionStructureNode', nodeType?: string | null, key?: string | null, nodes?: Array<{ __typename?: 'CompositionComponentNode', nodeType?: string | null, key?: string | null, component?: { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience_Carousel', Carousel_Images?: Array<{ __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Carousel', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Hero', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_RTE', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'image', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null, _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience_Hero', Heading?: { __typename?: 'RichText', html?: string | null } | null, Description?: { __typename?: 'RichText', html?: string | null } | null, Image?: { __typename?: 'ContentUrl', default?: string | null } | null, _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience_RTE', Text?: { __typename?: 'RichText', html?: string | null } | null, _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null } | { __typename?: 'CompositionNode', nodeType?: string | null, key?: string | null } | { __typename?: 'CompositionStructureNode', nodeType?: string | null, key?: string | null } | null> | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_BlankExperience_Fragment' };

type ContentItemFields_BlankSection_Fragment = { __typename?: 'BlankSection', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_BlankSection_Fragment' };

type ContentItemFields_BlogPage_Fragment = { __typename?: 'BlogPage', Heading?: string | null, Description?: { __typename?: 'RichText', html?: string | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_BlogPage_Fragment' };

type ContentItemFields_Experience_Carousel_Fragment = { __typename?: 'Experience_Carousel', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_Experience_Carousel_Fragment' };

type ContentItemFields_Experience_Hero_Fragment = { __typename?: 'Experience_Hero', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_Experience_Hero_Fragment' };

type ContentItemFields_Experience_Rte_Fragment = { __typename?: 'Experience_RTE', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_Experience_Rte_Fragment' };

type ContentItemFields_FolderPage_Fragment = { __typename?: 'FolderPage', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_FolderPage_Fragment' };

type ContentItemFields_GenericMedia_Fragment = { __typename?: 'GenericMedia', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_GenericMedia_Fragment' };

type ContentItemFields_ImageMedia_Fragment = { __typename?: 'ImageMedia', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_ImageMedia_Fragment' };

type ContentItemFields_ImageRightContentPage_Fragment = { __typename?: 'ImageRightContentPage', MainBody?: { __typename?: 'RichText', html?: string | null } | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_ImageRightContentPage_Fragment' };

type ContentItemFields_StandardPage_Fragment = { __typename?: 'StandardPage', MainBody?: { __typename?: 'RichText', html?: string | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_StandardPage_Fragment' };

type ContentItemFields_StartPage_Fragment = { __typename?: 'StartPage', Heading?: string | null, CompanyName?: string | null, Body?: { __typename?: 'RichText', html?: string | null } | null, BannerImages?: Array<{ __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Carousel', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Hero', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_RTE', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'image', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_StartPage_Fragment' };

type ContentItemFields_SysContentFolder_Fragment = { __typename?: 'SysContentFolder', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_SysContentFolder_Fragment' };

type ContentItemFields_VideoMedia_Fragment = { __typename?: 'VideoMedia', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_VideoMedia_Fragment' };

type ContentItemFields__Component_Fragment = { __typename?: '_Component', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Component_Fragment' };

type ContentItemFields__Content_Fragment = { __typename?: '_Content', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Content_Fragment' };

type ContentItemFields__Experience_Fragment = { __typename?: '_Experience', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Experience_Fragment' };

type ContentItemFields__Folder_Fragment = { __typename?: '_Folder', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Folder_Fragment' };

type ContentItemFields__Image_Fragment = { __typename?: '_Image', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Image_Fragment' };

type ContentItemFields__Media_Fragment = { __typename?: '_Media', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Media_Fragment' };

type ContentItemFields__Page_Fragment = { __typename?: '_Page', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Page_Fragment' };

type ContentItemFields__Section_Fragment = { __typename?: '_Section', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Section_Fragment' };

type ContentItemFields__Video_Fragment = { __typename?: '_Video', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields__Video_Fragment' };

type ContentItemFields_Image_Fragment = { __typename?: 'image', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ContentItemFields_Image_Fragment' };

export type ContentItemFieldsFragment = ContentItemFields_ArticlePage_Fragment | ContentItemFields_BlankExperience_Fragment | ContentItemFields_BlankSection_Fragment | ContentItemFields_BlogPage_Fragment | ContentItemFields_Experience_Carousel_Fragment | ContentItemFields_Experience_Hero_Fragment | ContentItemFields_Experience_Rte_Fragment | ContentItemFields_FolderPage_Fragment | ContentItemFields_GenericMedia_Fragment | ContentItemFields_ImageMedia_Fragment | ContentItemFields_ImageRightContentPage_Fragment | ContentItemFields_StandardPage_Fragment | ContentItemFields_StartPage_Fragment | ContentItemFields_SysContentFolder_Fragment | ContentItemFields_VideoMedia_Fragment | ContentItemFields__Component_Fragment | ContentItemFields__Content_Fragment | ContentItemFields__Experience_Fragment | ContentItemFields__Folder_Fragment | ContentItemFields__Image_Fragment | ContentItemFields__Media_Fragment | ContentItemFields__Page_Fragment | ContentItemFields__Section_Fragment | ContentItemFields__Video_Fragment | ContentItemFields_Image_Fragment;

export type GetContentPageQueryVariables = Exact<{
  url: Scalars['String']['input'];
}>;


export type GetContentPageQuery = { __typename?: 'Query', _Content?: { __typename?: '_ContentOutput', items?: Array<{ __typename?: 'ArticlePage', Heading?: string | null, MetaDescription?: string | null, MainBody?: { __typename?: 'RichText', html?: string | null } | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', composition?: { __typename?: 'CompositionStructureNode', nodeType?: string | null, key?: string | null, nodes?: Array<{ __typename?: 'CompositionComponentNode', nodeType?: string | null, key?: string | null, component?: { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience_Carousel', Carousel_Images?: Array<{ __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Carousel', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Hero', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_RTE', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'image', _metadata?: { __typename?: 'ContentMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null, _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience_Hero', Heading?: { __typename?: 'RichText', html?: string | null } | null, Description?: { __typename?: 'RichText', html?: string | null } | null, Image?: { __typename?: 'ContentUrl', default?: string | null } | null, _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'Experience_RTE', Text?: { __typename?: 'RichText', html?: string | null } | null, _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null } | { __typename?: 'CompositionNode', nodeType?: string | null, key?: string | null } | { __typename?: 'CompositionStructureNode', nodeType?: string | null, key?: string | null } | null> | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', Heading?: string | null, Description?: { __typename?: 'RichText', html?: string | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Carousel', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Hero', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_RTE', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', MainBody?: { __typename?: 'RichText', html?: string | null } | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', MainBody?: { __typename?: 'RichText', html?: string | null } | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', Heading?: string | null, CompanyName?: string | null, Body?: { __typename?: 'RichText', html?: string | null } | null, BannerImages?: Array<{ __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'BlogPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Carousel', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_Hero', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'Experience_RTE', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'FolderPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'ImageRightContentPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StandardPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Content', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Folder', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Image', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Media', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Video', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'image', _metadata?: { __typename?: 'ContentMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null, _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Component', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Content', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Experience', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Folder', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Image', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Media', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Page', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Section', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: '_Video', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename?: 'image', _metadata?: { __typename: 'ContentMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'InstanceMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'ItemMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename: 'MediaMetadata', displayName?: string | null, published?: any | null, types?: Array<string | null> | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null } | null };

export type GetEditContentQueryVariables = Exact<{
  version: Scalars['String']['input'];
}>;


export type GetEditContentQuery = { __typename?: 'Query', _Content?: { __typename?: '_ContentOutput', items?: Array<(
      { __typename?: 'ArticlePage' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_ArticlePage_Fragment': ContentItemFields_ArticlePage_Fragment } }
    ) | (
      { __typename?: 'BlankExperience' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_BlankExperience_Fragment': ContentItemFields_BlankExperience_Fragment } }
    ) | (
      { __typename?: 'BlankSection' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_BlankSection_Fragment': ContentItemFields_BlankSection_Fragment } }
    ) | (
      { __typename?: 'BlogPage' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_BlogPage_Fragment': ContentItemFields_BlogPage_Fragment } }
    ) | (
      { __typename?: 'Experience_Carousel' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_Experience_Carousel_Fragment': ContentItemFields_Experience_Carousel_Fragment } }
    ) | (
      { __typename?: 'Experience_Hero' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_Experience_Hero_Fragment': ContentItemFields_Experience_Hero_Fragment } }
    ) | (
      { __typename?: 'Experience_RTE' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_Experience_Rte_Fragment': ContentItemFields_Experience_Rte_Fragment } }
    ) | (
      { __typename?: 'FolderPage' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_FolderPage_Fragment': ContentItemFields_FolderPage_Fragment } }
    ) | (
      { __typename?: 'GenericMedia' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_GenericMedia_Fragment': ContentItemFields_GenericMedia_Fragment } }
    ) | (
      { __typename?: 'ImageMedia' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_ImageMedia_Fragment': ContentItemFields_ImageMedia_Fragment } }
    ) | (
      { __typename?: 'ImageRightContentPage' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_ImageRightContentPage_Fragment': ContentItemFields_ImageRightContentPage_Fragment } }
    ) | (
      { __typename?: 'StandardPage' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_StandardPage_Fragment': ContentItemFields_StandardPage_Fragment } }
    ) | (
      { __typename?: 'StartPage' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_StartPage_Fragment': ContentItemFields_StartPage_Fragment } }
    ) | (
      { __typename?: 'SysContentFolder' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_SysContentFolder_Fragment': ContentItemFields_SysContentFolder_Fragment } }
    ) | (
      { __typename?: 'VideoMedia' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_VideoMedia_Fragment': ContentItemFields_VideoMedia_Fragment } }
    ) | (
      { __typename?: '_Component' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Component_Fragment': ContentItemFields__Component_Fragment } }
    ) | (
      { __typename?: '_Content' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Content_Fragment': ContentItemFields__Content_Fragment } }
    ) | (
      { __typename?: '_Experience' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Experience_Fragment': ContentItemFields__Experience_Fragment } }
    ) | (
      { __typename?: '_Folder' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Folder_Fragment': ContentItemFields__Folder_Fragment } }
    ) | (
      { __typename?: '_Image' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Image_Fragment': ContentItemFields__Image_Fragment } }
    ) | (
      { __typename?: '_Media' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Media_Fragment': ContentItemFields__Media_Fragment } }
    ) | (
      { __typename?: '_Page' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Page_Fragment': ContentItemFields__Page_Fragment } }
    ) | (
      { __typename?: '_Section' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Section_Fragment': ContentItemFields__Section_Fragment } }
    ) | (
      { __typename?: '_Video' }
      & { ' $fragmentRefs'?: { 'ContentItemFields__Video_Fragment': ContentItemFields__Video_Fragment } }
    ) | (
      { __typename?: 'image' }
      & { ' $fragmentRefs'?: { 'ContentItemFields_Image_Fragment': ContentItemFields_Image_Fragment } }
    ) | null> | null } | null };

export const ContentItemFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageRightContentPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"CompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"Body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"BannerImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_Carousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Carousel_Images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_RTE"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContentItemFieldsFragment, unknown>;
export const ArticlePagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ArticlePages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArticlePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"EnumValue","value":"en"}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"published"},"value":{"kind":"EnumValue","value":"DESC"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"Field","name":{"kind":"Name","value":"types"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ArticlePagesQuery, ArticlePagesQueryVariables>;
export const GetStartPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getStartPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"StartPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"EnumValue","value":"ALL"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"CompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"Body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"BannerImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_Page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStartPageQuery, GetStartPageQueryVariables>;
export const GetContentPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getContentPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"EnumValue","value":"en"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"url"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"default"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageRightContentPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"CompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"Body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"BannerImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_Carousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Carousel_Images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_RTE"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetContentPageQuery, GetContentPageQueryVariables>;
export const GetEditContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getEditContent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_Content"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"EnumValue","value":"en"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentItemFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentItemFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"types"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageRightContentPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlogPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StandardPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"CompanyName"}},{"kind":"Field","name":{"kind":"Name","value":"Body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"BannerImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_Carousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Carousel_Images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_Hero"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Experience_RTE"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEditContentQuery, GetEditContentQueryVariables>;