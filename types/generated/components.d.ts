import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsButtonBlock extends Schema.Component {
  collectionName: 'components_components_button_blocks';
  info: {
    displayName: 'BUTTON:SUBTITLE:BLOCK';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Text: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    Subtitle: Attribute.String;
    External_link: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface LayoutButtonsGridBlock extends Schema.Component {
  collectionName: 'components_layout_buttons_grid_blocks';
  info: {
    displayName: 'BUTTONS:GRID:BLOCK';
    icon: 'apps';
  };
  attributes: {
    Buttons: Attribute.Component<'components.button-block', true>;
  };
}

export interface LayoutMainTitleBlock extends Schema.Component {
  collectionName: 'components_layout_main_title_blocks';
  info: {
    displayName: 'MAIN:TITLE:SUBTITLE:BLOCK';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Subtitle: Attribute.String;
    Inverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutSecondaryTitleSubtitleBlock extends Schema.Component {
  collectionName: 'components_layout_secondary_title_subtitle_blocks';
  info: {
    displayName: 'SECONDARY:TITLE:SUBTITLE:BLOCK';
    icon: 'quote';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 140;
      }>;
    Subtitle: Attribute.String;
    Inverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

export interface LayoutTitleTextBlock extends Schema.Component {
  collectionName: 'components_layout_title_text_blocks';
  info: {
    displayName: 'TITLE:TEXT:SUBTITLE:BLOCK';
    icon: 'layer';
    description: '';
  };
  attributes: {
    Title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 140;
      }>;
    Text: Attribute.Blocks & Attribute.Required;
    Inverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    Align: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.Required &
      Attribute.DefaultTo<'left'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.button-block': ComponentsButtonBlock;
      'layout.buttons-grid-block': LayoutButtonsGridBlock;
      'layout.main-title-block': LayoutMainTitleBlock;
      'layout.secondary-title-subtitle-block': LayoutSecondaryTitleSubtitleBlock;
      'layout.title-text-block': LayoutTitleTextBlock;
    }
  }
}
