import { defineField, defineType } from "sanity";

export const account = defineType({
  title: 'Account',
  name: 'account',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'account',
      },
    }),
    defineField({
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
    }),
    defineField({
      title: 'Type',
      name: 'type',
      type: 'string',
    }),
    defineField({
      title: 'Provider',
      name: 'provider',
      type: 'string',
    }),
    defineField({
      title: 'Provider Account Id',
      name: 'providerAccountId',
      type: 'string',
    }),
    defineField({
      title: 'Refresh Token',
      name: 'refreshToken',
      type: 'string',
    }),
    defineField({
      title: 'Access Token',
      name: 'accessToken',
      type: 'string',
    }),
    defineField({
      title: 'Expires At',
      name: 'expiresAt',
      type: 'number',
    }),
    defineField({
      title: 'Token Type',
      name: 'tokenType',
      type: 'string',
    }),
    defineField({
      title: 'Scope',
      name: 'scope',
      type: 'string',
    }),
    defineField({
      title: 'ID Token',
      name: 'idToken',
      type: 'string',
    }),
    defineField({
      title: 'Session State',
      name: 'sessionState',
      type: 'string',
    }),
    defineField({
      title: 'OAuth Token Secret',
      name: 'oauthTokenSecret',
      type: 'string',
      hidden: true,
    }),
    defineField({
      title: 'OAuth Token',
      name: 'oauthToken',
      type: 'string',
    }),
  ],
});