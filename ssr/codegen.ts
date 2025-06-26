import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.PUBLIC_APP_GRAPHQL_API,
  documents: ['src/**/*.ts'], // Temporarily removed 'src/**/*.astro'
  generates: {
    'src/gql/': {
      preset: 'client',
      config: {
        skipTypename: false, // Optional: if you don't want __typename fields
        useTypeImports: true, // Generate type-only imports for verbatimModuleSyntax
      },
      presetConfig: {
        gqlTagName: 'gql', // To pick up queries tagged with gql from @apollo/client
      }
    }
  }
}

export default config; 