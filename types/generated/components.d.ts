import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 200;
      }> &
      Attribute.DefaultTo<'Advith Consulting'>;
    metaDescription: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 250;
      }>;
    metaImage: Attribute.Media<'images'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
    schema: Attribute.Component<'shared.page-schema', true>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedPageSchema extends Schema.Component {
  collectionName: 'components_shared_page_schemas';
  info: {
    displayName: 'Page Schema';
  };
  attributes: {
    jsonSchema: Attribute.JSON;
    schemaName: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface HomeTestimonialSection extends Schema.Component {
  collectionName: 'components_home_testimonial_sections';
  info: {
    displayName: 'testimonialSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    testimonialItems: Attribute.Component<'home.testimonial-items', true>;
  };
}

export interface HomeTestimonialItems extends Schema.Component {
  collectionName: 'components_home_testimonial_items';
  info: {
    displayName: 'testimonialItems';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeOverview extends Schema.Component {
  collectionName: 'components_home_overviews';
  info: {
    displayName: 'overview';
  };
  attributes: {
    description: Attribute.Text;
    title: Attribute.String;
    leftImage: Attribute.Media<'images'>;
    centerImage: Attribute.Media<'images'>;
    rightImage: Attribute.Media<'images'>;
  };
}

export interface HomeHome extends Schema.Component {
  collectionName: 'components_home_homes';
  info: {
    displayName: 'home';
  };
  attributes: {
    banner: Attribute.Component<'home.banner'>;
  };
}

export interface HomeCounter extends Schema.Component {
  collectionName: 'components_home_counters';
  info: {
    displayName: 'counter';
    description: '';
  };
  attributes: {
    bgImage: Attribute.Media<'images'>;
    counterItem: Attribute.Component<'home.counter-item', true>;
  };
}

export interface HomeCounterItem extends Schema.Component {
  collectionName: 'components_home_counter_items';
  info: {
    displayName: 'counterItem';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    prefix: Attribute.String;
    suffix: Attribute.String;
    count: Attribute.String;
  };
}

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    animationText: Attribute.Text;
    desktopBanner: Attribute.Media<'images'>;
    mobileBanner: Attribute.Media<'images'>;
  };
}

export interface HomeAwards extends Schema.Component {
  collectionName: 'components_home_awards';
  info: {
    displayName: 'awards';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    awardItems: Attribute.Component<'home.award-items', true>;
  };
}

export interface HomeAwardItems extends Schema.Component {
  collectionName: 'components_home_award_items';
  info: {
    displayName: 'awardItems';
    description: '';
  };
  attributes: {
    year: Attribute.String;
    awardName: Attribute.String;
    awardDescription: Attribute.Text;
    awardImage: Attribute.Media<'images'>;
  };
}

export interface ProjectTeam extends Schema.Component {
  collectionName: 'components_project_teams';
  info: {
    displayName: 'team';
    description: '';
  };
  attributes: {
    details: Attribute.RichText;
    name: Attribute.String;
    designation: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ProjectProjectConfiguration extends Schema.Component {
  collectionName: 'components_project_project_configurations';
  info: {
    displayName: 'projectConfiguration';
    description: '';
  };
  attributes: {
    primaryImage: Attribute.Media<'images'>;
    secondaryImage: Attribute.Media<'images'>;
    areas: Attribute.Component<'project.areas', true>;
  };
}

export interface ProjectOverview extends Schema.Component {
  collectionName: 'components_project_overviews';
  info: {
    displayName: 'overview';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
    overviewContent: Attribute.RichText;
    brochure: Attribute.Media<'files'>;
  };
}

export interface ProjectLocationAdvantage extends Schema.Component {
  collectionName: 'components_project_location_advantages';
  info: {
    displayName: 'locationAdvantage';
    description: '';
  };
  attributes: {
    details: Attribute.Component<'project.details', true>;
    name: Attribute.String;
  };
}

export interface ProjectGallery extends Schema.Component {
  collectionName: 'components_project_galleries';
  info: {
    displayName: 'gallery';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media<'images', true>;
  };
}

export interface ProjectFloorPlans extends Schema.Component {
  collectionName: 'components_project_floor_plans';
  info: {
    displayName: 'floorPlans';
  };
  attributes: {
    title: Attribute.Text;
    images: Attribute.Media<'images', true>;
  };
}

export interface ProjectFeaturedSection extends Schema.Component {
  collectionName: 'components_project_featured_sections';
  info: {
    displayName: 'featuredSection';
  };
  attributes: {
    primaryImage: Attribute.Media<'images'>;
    secondaryImage: Attribute.Media<'images'>;
    date: Attribute.String;
    smallDescription: Attribute.Text;
  };
}

export interface ProjectDetails extends Schema.Component {
  collectionName: 'components_project_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    title: Attribute.String;
    distance: Attribute.String;
  };
}

export interface ProjectConstructionUpdates extends Schema.Component {
  collectionName: 'components_project_construction_updates';
  info: {
    displayName: 'constructionUpdates';
  };
  attributes: {
    title: Attribute.String;
    constructionItems: Attribute.Component<'project.construction-items', true>;
  };
}

export interface ProjectConstructionItems extends Schema.Component {
  collectionName: 'components_project_construction_items';
  info: {
    displayName: 'constructionItems';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ProjectBanner extends Schema.Component {
  collectionName: 'components_project_banners';
  info: {
    displayName: 'banner';
    description: '';
  };
  attributes: {
    desktopBanner: Attribute.Media<'images'>;
    mobileBanner: Attribute.Media<'images'>;
    title: Attribute.Text;
  };
}

export interface ProjectAreas extends Schema.Component {
  collectionName: 'components_project_areas';
  info: {
    displayName: 'areas';
  };
  attributes: {
    bhk: Attribute.String;
    area: Attribute.String;
  };
}

export interface ProjectAmenityItem extends Schema.Component {
  collectionName: 'components_project_amenity_items';
  info: {
    displayName: 'amenityItem';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ProjectAmenities extends Schema.Component {
  collectionName: 'components_project_amenities';
  info: {
    displayName: 'amenities';
    description: '';
  };
  attributes: {
    amenityTitle: Attribute.Text;
    amenities: Attribute.Relation<
      'project.amenities',
      'oneToMany',
      'api::amenity.amenity'
    >;
    amenityBg: Attribute.Media<'images'>;
  };
}

export interface ContactOfficeLocation extends Schema.Component {
  collectionName: 'components_contact_office_locations';
  info: {
    displayName: 'officeLocation';
    description: '';
  };
  attributes: {
    mapLink: Attribute.Text;
    locationItems: Attribute.Component<'contact.location-items', true>;
  };
}

export interface ContactLocationItems extends Schema.Component {
  collectionName: 'components_contact_location_items';
  info: {
    displayName: 'locationItems';
  };
  attributes: {
    name: Attribute.String;
    location: Attribute.Text;
  };
}

export interface ContactGetInTouch extends Schema.Component {
  collectionName: 'components_contact_get_in_touches';
  info: {
    displayName: 'getInTouch';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    contactNo: Attribute.String;
    email: Attribute.String;
  };
}

export interface AboutVisionMission extends Schema.Component {
  collectionName: 'components_about_vision_missions';
  info: {
    displayName: 'visionMission';
    description: '';
  };
  attributes: {
    visionImage: Attribute.Media<'images'>;
    visionTitle: Attribute.String;
    visionDescription: Attribute.Text;
    missionImage: Attribute.Media<'images'>;
    missionTitle: Attribute.String;
    missionDescription: Attribute.Text;
  };
}

export interface AboutPartners extends Schema.Component {
  collectionName: 'components_about_partners';
  info: {
    displayName: 'partners';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface AboutOverview extends Schema.Component {
  collectionName: 'components_about_overviews';
  info: {
    displayName: 'overview';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    leftImage: Attribute.Media<'images'>;
    rightImage: Attribute.Media<'images'>;
    overview: Attribute.RichText;
  };
}

export interface AboutManagement extends Schema.Component {
  collectionName: 'components_about_managements';
  info: {
    displayName: 'management';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    team: Attribute.Component<'project.team', true>;
    bgImage: Attribute.Media<'images'>;
  };
}

export interface AboutLoanPartners extends Schema.Component {
  collectionName: 'components_about_loan_partners';
  info: {
    displayName: 'loanPartners';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    partners: Attribute.Component<'about.partners', true>;
    bgImage: Attribute.Media<'images'>;
  };
}

export interface AboutBankCollabs extends Schema.Component {
  collectionName: 'components_about_bank_collabs';
  info: {
    displayName: 'bankCollabs';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    collabs: Attribute.Media<'images', true>;
  };
}

export interface CareerListingSection extends Schema.Component {
  collectionName: 'components_career_listing_sections';
  info: {
    displayName: 'listingSection';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    available_jobs: Attribute.Relation<
      'career.listing-section',
      'oneToMany',
      'api::job.job'
    >;
  };
}

export interface CareerBadges extends Schema.Component {
  collectionName: 'components_career_badges';
  info: {
    displayName: 'badges';
  };
  attributes: {
    badge: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.page-schema': SharedPageSchema;
      'shared.meta-social': SharedMetaSocial;
      'shared.media': SharedMedia;
      'home.testimonial-section': HomeTestimonialSection;
      'home.testimonial-items': HomeTestimonialItems;
      'home.overview': HomeOverview;
      'home.home': HomeHome;
      'home.counter': HomeCounter;
      'home.counter-item': HomeCounterItem;
      'home.banner': HomeBanner;
      'home.awards': HomeAwards;
      'home.award-items': HomeAwardItems;
      'project.team': ProjectTeam;
      'project.project-configuration': ProjectProjectConfiguration;
      'project.overview': ProjectOverview;
      'project.location-advantage': ProjectLocationAdvantage;
      'project.gallery': ProjectGallery;
      'project.floor-plans': ProjectFloorPlans;
      'project.featured-section': ProjectFeaturedSection;
      'project.details': ProjectDetails;
      'project.construction-updates': ProjectConstructionUpdates;
      'project.construction-items': ProjectConstructionItems;
      'project.banner': ProjectBanner;
      'project.areas': ProjectAreas;
      'project.amenity-item': ProjectAmenityItem;
      'project.amenities': ProjectAmenities;
      'contact.office-location': ContactOfficeLocation;
      'contact.location-items': ContactLocationItems;
      'contact.get-in-touch': ContactGetInTouch;
      'about.vision-mission': AboutVisionMission;
      'about.partners': AboutPartners;
      'about.overview': AboutOverview;
      'about.management': AboutManagement;
      'about.loan-partners': AboutLoanPartners;
      'about.bank-collabs': AboutBankCollabs;
      'career.listing-section': CareerListingSection;
      'career.badges': CareerBadges;
    }
  }
}
