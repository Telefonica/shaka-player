/*! @license
 * Shaka Player
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

goog.provide('shakaDemo.MessageIds');

/* eslint-disable max-len */
/** @enum {string} */
shakaDemo.MessageIds = {
  /* Features. */
  ADS: 'DEMO_ADS',
  AUDIO_ONLY: 'DEMO_AUDIO_ONLY',
  CAPTIONS: 'DEMO_CAPTIONS',
  DASH: 'DEMO_DASH',
  HIGH_DEFINITION: 'DEMO_HIGH_DEFINITION',
  HLS: 'DEMO_HLS',
  LIVE: 'DEMO_LIVE',
  MP2TS: 'DEMO_MP2TS',
  MP4: 'DEMO_MP4',
  MULTIPLE_LANGUAGES: 'DEMO_MULTIPLE_LANGUAGES',
  OFFLINE: 'DEMO_OFFLINE',
  STORED: 'DEMO_STORED',
  SUBTITLES: 'DEMO_SUBTITLES',
  SURROUND: 'DEMO_SURROUND',
  THUMBNAILS: 'DEMO_THUMBNAILS',
  TRICK_MODE: 'DEMO_TRICK_MODE',
  ULTRA_HIGH_DEFINITION: 'DEMO_ULTRA_HIGH_DEFINITION',
  VOD: 'DEMO_VOD',
  WEBM: 'DEMO_WEBM',
  XLINK: 'DEMO_XLINK',
  /* Key systems. */
  CLEAR: 'DEMO_CLEAR',
  CLEAR_KEY: 'DEMO_CLEAR_KEY',
  FAIRPLAY: 'DEMO_FAIRPLAY',
  PLAYREADY: 'DEMO_PLAYREADY',
  WIDEVINE: 'DEMO_WIDEVINE',
  /* Sources. */
  APPLE: 'DEMO_APPLE',
  AXINOM: 'DEMO_AXINOM',
  AZURE_MEDIA_SERVICES: 'DEMO_AZURE_MEDIA_SERVICES',
  BITCODIN: 'DEMO_BITCODIN',
  CUSTOM: 'DEMO_CUSTOM',
  DASH_IF: 'DEMO_DASH_IF',
  GPAC: 'DEMO_GPAC',
  IRT: 'DEMO_IRT',
  METACDN: 'DEMO_METACDN',
  MICROSOFT: 'DEMO_MICROSOFT',
  NIMBLE_STREAMER: 'DEMO_NIMBLE_STREAMER',
  SHAKA: 'DEMO_SHAKA',
  UNIFIED_STREAMING: 'DEMO_UNIFIED_STREAMING',
  UPLYNK: 'DEMO_UPLYNK',
  /* HTML. */
  ALL_CONTENT: 'DEMO_ALL_CONTENT',
  CDN_HEADER: 'DEMO_CDN_HEADER',
  COMPILED_DEBUG: 'DEMO_COMPILED_DEBUG',
  COMPILED_RELEASE: 'DEMO_COMPILED_RELEASE',
  CONFIG: 'DEMO_CONFIG',
  CUSTOM_CONTENT: 'DEMO_CUSTOM_CONTENT',
  DEMO_MODE_HEADER: 'DEMO_DEMO_MODE_HEADER',
  DOCUMENTATION: 'DEMO_DOCUMENTATION',
  HOME: 'DEMO_HOME',
  JSDELIVR: 'DEMO_JSDELIVR',
  LIBRARIES: 'DEMO_LIBRARIES',
  LICENSE: 'DEMO_LICENSE',
  NPM: 'DEMO_NPM',
  PROJECT_LINKS_HEADER: 'DEMO_PROJECT_LINKS_HEADER',
  REPORT_BUG: 'DEMO_REPORT_BUG',
  SOURCE: 'DEMO_SOURCE',
  SUPPORT: 'DEMO_SUPPORT',
  UNCOMPILED: 'DEMO_UNCOMPILED',
  /* Common. */
  FAILURE_MISC: 'DEMO_FAILURE_MISC',
  FAILURE_NO_BROWSER_SUPPORT: 'DEMO_FAILURE_NO_BROWSER_SUPPORT',
  PLAY: 'DEMO_PLAY',
  PROMPT_NO: 'DEMO_PROMPT_NO',
  PROMPT_YES: 'DEMO_PROMPT_YES',
  UNSUPPORTED_DISABLED: 'DEMO_UNSUPPORTED_DISABLED',
  UNSUPPORTED_NO_DASH_SUPPORT: 'DEMO_UNSUPPORTED_NO_DASH_SUPPORT',
  UNSUPPORTED_NO_DOWNLOAD: 'DEMO_UNSUPPORTED_NO_DOWNLOAD',
  UNSUPPORTED_NO_FORMAT_SUPPORT: 'DEMO_UNSUPPORTED_NO_FORMAT_SUPPORT',
  UNSUPPORTED_NO_HLS_SUPPORT: 'DEMO_UNSUPPORTED_NO_HLS_SUPPORT',
  UNSUPPORTED_NO_OFFLINE: 'DEMO_UNSUPPORTED_NO_OFFLINE',
  UNSUPPORTED_NO_KEY_SUPPORT: 'DEMO_UNSUPPORTED_NO_KEY_SUPPORT',
  UNSUPPORTED_NO_LICENSE_SUPPORT: 'DEMO_UNSUPPORTED_NO_LICENSE_SUPPORT',
  /* Asset card. */
  DELETE_STORED_PROMPT: 'DEMO_DELETE_STORED_PROMPT',
  UNSUPPORTED: 'DEMO_UNSUPPORTED',
  /* Front panel. */
  FRONT_INTRO_DISMISS: 'DEMO_FRONT_INTRO_DISMISS',
  FRONT_INTRO_ONE: 'DEMO_FRONT_INTRO_ONE',
  FRONT_INTRO_TWO: 'DEMO_FRONT_INTRO_TWO',
  /* Custom panel. */
  AD_TAG_URL: 'DEMO_AD_TAG_URL',
  ADS_TAB: 'DEMO_ADS_TAB',
  IMA_ASSET_KEY: 'DEMO_IMA_ASSET_KEY',
  IMA_CONTENT_SRC_ID: 'DEMO_IMA_CONTENT_SRC_ID',
  IMA_MANIFEST_TYPE: 'DEMO_IMA_MANIFEST_TYPE',
  IMA_VIDEO_ID: 'DEMO_IMA_VIDEO_ID',
  CANCEL_BUTTON: 'DEMO_CANCEL_BUTTON',
  CUSTOM_INTRO_ONE: 'DEMO_CUSTOM_INTRO_ONE',
  CUSTOM_INTRO_TWO: 'DEMO_CUSTOM_INTRO_TWO',
  CUSTOM_INTRO_THREE: 'DEMO_CUSTOM_INTRO_THREE',
  DELETE_CUSTOM: 'DEMO_DELETE_CUSTOM',
  DELETE_CUSTOM_PROMPT: 'DEMO_DELETE_CUSTOM_PROMPT',
  DRM_SYSTEM: 'DEMO_DRM_SYSTEM',
  DRM_TAB: 'DEMO_DRM_TAB',
  EDIT_CUSTOM: 'DEMO_EDIT_CUSTOM',
  HEADERS_TAB: 'DEMO_HEADERS_TAB',
  ICON_URL: 'DEMO_ICON_URL',
  LICENSE_CERTIFICATE_URL: 'DEMO_LICENSE_CERTIFICATE_URL',
  LICENSE_HEADER_NAME: 'DEMO_LICENSE_HEADER_NAME',
  LICENSE_HEADER_TITLE: 'DEMO_LICENSE_HEADER_TITLE',
  LICENSE_HEADER_VALUE: 'DEMO_LICENSE_HEADER_VALUE',
  LICENSE_SERVER_URL: 'DEMO_LICENSE_SERVER_URL',
  MAIN_TAB: 'DEMO_MAIN_TAB',
  MANIFEST_URL: 'DEMO_MANIFEST_URL',
  MANIFEST_URL_ERROR: 'DEMO_MANIFEST_URL_ERROR',
  NAME: 'DEMO_NAME',
  NAME_ERROR: 'DEMO_NAME_ERROR',
  EXTRA_SHAKA_PLAYER_CONFIG: 'DEMO_EXTRA_SHAKA_PLAYER_CONFIG',
  EXTRA_TAB: 'DEMO_EXTRA_TAB',
  INVALID_JSON_CONFIG_ERROR: 'DEMO_INVALID_JSON_CONFIG_ERROR',
  MIME_TYPE: 'DEMO_MIME_TYPE',
  SAVE_BUTTON: 'DEMO_SAVE_BUTTON',
  /* Search panel. */
  AD_SEARCH: 'DEMO_AD_SEARCH',
  AUDIO_ONLY_SEARCH: 'DEMO_AUDIO_ONLY_SEARCH',
  CONTAINER_SEARCH: 'DEMO_CONTAINER_SEARCH',
  DRM_SEARCH: 'DEMO_DRM_SEARCH',
  HIGH_DEFINITION_SEARCH: 'DEMO_HIGH_DEFINITION_SEARCH',
  LIVE_SEARCH: 'DEMO_LIVE_SEARCH',
  MANIFEST_SEARCH: 'DEMO_MANIFEST_SEARCH',
  OFFLINE_SEARCH: 'DEMO_OFFLINE_SEARCH',
  STORED_SEARCH: 'DEMO_STORED_SEARCH',
  SUBTITLES_SEARCH: 'DEMO_SUBTITLES_SEARCH',
  SURROUND_SEARCH: 'DEMO_SURROUND_SEARCH',
  SOURCE_SEARCH: 'DEMO_SOURCE_SEARCH',
  TRICK_MODE_SEARCH: 'DEMO_TRICK_MODE_SEARCH',
  XLINK_SEARCH: 'DEMO_XLINK_SEARCH',
  /* Config panel. */
  ADAPTATION_RESTRICTIONS_SECTION_HEADER: 'DEMO_ADAPTATION_RESTRICTIONS_SECTION_HEADER',
  ADAPTATION_SECTION_HEADER: 'DEMO_ADAPTATION_SECTION_HEADER',
  ALWAYS_STREAM_TEXT: 'DEMO_ALWAYS_STREAM_TEXT',
  ALWAYS_STREAM_TEXT_WARNING: 'DEMO_ALWAYS_STREAM_TEXT_WARNING',
  AUDIO_CHANNEL_COUNT: 'DEMO_AUDIO_CHANNEL_COUNT',
  AUDIO_LANGUAGE: 'DEMO_AUDIO_LANGUAGE',
  AUDIO_ROBUSTNESS: 'DEMO_AUDIO_ROBUSTNESS',
  AUTO_CORRECT_DASH_DRIFT: 'DEMO_AUTO_CORRECT_DASH_DRIFT',
  AUTO_LOW_LATENCY: 'DEMO_AUTO_LOW_LATENCY',
  AVAILABILITY_WINDOW_OVERRIDE: 'DEMO_AVAILABILITY_WINDOW_OVERRIDE',
  BACKOFF_FACTOR: 'DEMO_BACKOFF_FACTOR',
  BASE_DELAY: 'DEMO_BASE_DELAY',
  BANDWIDTH_DOWNGRADE: 'DEMO_BANDWIDTH_DOWNGRADE',
  BANDWIDTH_ESTIMATE: 'DEMO_BANDWIDTH_ESTIMATE',
  BANDWIDTH_UPGRADE: 'DEMO_BANDWIDTH_UPGRADE',
  BUFFER_BEHIND: 'DEMO_BUFFER_BEHIND',
  BUFFERING_GOAL: 'DEMO_BUFFERING_GOAL',
  CLOCK_SYNC_URI: 'DEMO_CLOCK_SYNC_URI',
  CMCD_SECTION_HEADER: 'DEMO_CMCD_SECTION_HEADER',
  CONNECTION_TIMEOUT: 'DEMO_CONNECTION_TIMEOUT',
  CONTENT_ID: 'DEMO_CONTENT_ID',
  DEFAULT_AUDIO_CODEC: 'DEMO_DEFAULT_AUDIO_CODEC',
  DEFAULT_PRESENTATION_DELAY: 'DEMO_DEFAULT_PRESENTATION_DELAY',
  DEFAULT_VIDEO_CODEC: 'DEMO_DEFAULT_VIDEO_CODEC',
  DELAY_LICENSE: 'DEMO_DELAY_LICENSE',
  DISABLE_AUDIO: 'DEMO_DISABLE_AUDIO',
  DISABLE_TEXT: 'DEMO_DISABLE_TEXT',
  DISABLE_THUMBNAILS: 'DEMO_DISABLE_THUMBNAILS',
  DISABLE_VIDEO: 'DEMO_DISABLE_VIDEO',
  DISABLE_XLINK_PROCESSING: 'DEMO_DISABLE_XLINK_PROCESSING',
  DISPATCH_ALL_EMSG_BOXES: 'DEMO_DISPATCH_ALL_EMSG_BOXES',
  OBSERVE_QUALITY_CHANGES: 'DEMO_OBSERVE_QUALITY_CHANGES',
  DRM_RETRY_SECTION_HEADER: 'DEMO_DRM_RETRY_SECTION_HEADER',
  DRM_SECTION_HEADER: 'DEMO_DRM_SECTION_HEADER',
  DRM_SESSION_TYPE: 'DEMO_DRM_SESSION_TYPE',
  DURATION_BACKOFF: 'DEMO_DURATION_BACKOFF',
  ENABLED: 'DEMO_ENABLED',
  FAST_HALF_LIFE: 'DEMO_FAST_HALF_LIFE',
  FORCE_HTTPS: 'DEMO_FORCE_HTTPS',
  FORCE_TRANSMUX_TS: 'DEMO_FORCE_TRANSMUX_TS',
  FUZZ_FACTOR: 'DEMO_FUZZ_FACTOR',
  GAP_DETECTION_THRESHOLD: 'DEMO_GAP_DETECTION_THRESHOLD',
  IGNORE_DASH_EMPTY_ADAPTATION_SET: 'DEMO_IGNORE_DASH_EMPTY_ADAPTATION_SET',
  IGNORE_DASH_DRM: 'DEMO_IGNORE_DASH_DRM',
  IGNORE_DASH_MAX_SEGMENT_DURATION: 'DEMO_IGNORE_DASH_MAX_SEGMENT_DURATION',
  IGNORE_DASH_SUGGESTED_PRESENTATION_DELAY: 'DEMO_IGNORE_DASH_SUGGESTED_PRESENTATION_DELAY',
  IGNORE_HLS_IMAGE_FAILURES: 'DEMO_IGNORE_HLS_IMAGE_FAILURES',
  IGNORE_HLS_TEXT_FAILURES: 'DEMO_IGNORE_HLS_TEXT_FAILURES',
  USE_FULL_SEGMENTS_FOR_START_TIME: 'DEMO_USE_FULL_SEGMENTS_FOR_START_TIME',
  IGNORE_MIN_BUFFER_TIME: 'DEMO_IGNORE_MIN_BUFFER_TIME',
  IGNORE_TEXT_FAILURES: 'DEMO_IGNORE_TEXT_FAILURES',
  INACCURATE_MANIFEST_TOLERANCE: 'DEMO_INACCURATE_MANIFEST_TOLERANCE',
  INITIAL_SEGMENT_LIMIT: 'DEMO_INITIAL_SEGMENT_LIMIT',
  JUMP_LARGE_GAPS: 'DEMO_JUMP_LARGE_GAPS',
  LANGUAGE_SECTION_HEADER: 'DEMO_LANGUAGE_SECTION_HEADER',
  LOG_LEVEL: 'DEMO_LOG_LEVEL',
  LOG_LEVEL_DEBUG: 'DEMO_LOG_LEVEL_DEBUG',
  LOG_LEVEL_INFO: 'DEMO_LOG_LEVEL_INFO',
  LOG_LEVEL_V: 'DEMO_LOG_LEVEL_V',
  LOG_LEVEL_VV: 'DEMO_LOG_LEVEL_VV',
  LOG_LICENSE_EXCHANGE: 'DEMO_LOG_LICENSE_EXCHANGE',
  LOW_LATENCY: 'DEMO_LOW_LATENCY',
  MANIFEST_RETRY_SECTION_HEADER: 'DEMO_MANIFEST_RETRY_SECTION_HEADER',
  MANIFEST_SECTION_HEADER: 'DEMO_MANIFEST_SECTION_HEADER',
  MAX_ATTEMPTS: 'DEMO_MAX_ATTEMPTS',
  MAX_BANDWIDTH: 'DEMO_MAX_BANDWIDTH',
  MAX_FRAMERATE: 'DEMO_MAX_FRAMERATE',
  MAX_HEIGHT: 'DEMO_MAX_HEIGHT',
  MAX_PIXELS: 'DEMO_MAX_PIXELS',
  MAX_SMALL_GAP_SIZE: 'DEMO_MAX_SMALL_GAP_SIZE',
  MAX_WIDTH: 'DEMO_MAX_WIDTH',
  MIN_BANDWIDTH: 'DEMO_MIN_BANDWIDTH',
  MIN_BYTES: 'DEMO_MIN_BYTES',
  MIN_FRAMERATE: 'DEMO_MIN_FRAMERATE',
  MIN_HEIGHT: 'DEMO_MIN_HEIGHT',
  MIN_PIXELS: 'DEMO_MIN_PIXELS',
  MIN_TOTAL_BYTES: 'DEMO_MIN_TOTAL_BYTES',
  MIN_WIDTH: 'DEMO_MIN_WIDTH',
  NETWORK_INFORMATION: 'DEMO_NETWORK_INFORMATION',
  NUMBER_DECIMAL_WARNING: 'DEMO_NUMBER_DECIMAL_WARNING',
  NUMBER_INTEGER_WARNING: 'DEMO_NUMBER_INTEGER_WARNING',
  NUMBER_NONZERO_DECIMAL_WARNING: 'DEMO_NUMBER_NONZERO_DECIMAL_WARNING',
  NUMBER_NONZERO_INTEGER_WARNING: 'DEMO_NUMBER_NONZERO_INTEGER_WARNING',
  OFFLINE_SECTION_HEADER: 'DEMO_OFFLINE_SECTION_HEADER',
  PREFER_FORCED_SUBS: 'DEMO_PREFER_FORCED_SUBS',
  PREFER_NATIVE_HLS: 'DEMO_PREFER_NATIVE_HLS',
  REBUFFERING_GOAL: 'DEMO_REBUFFERING_GOAL',
  RESTRICTIONS_SECTION_HEADER: 'DEMO_RESTRICTIONS_SECTION_HEADER',
  SAFE_SEEK_OFFSET: 'DEMO_SAFE_SEEK_OFFSET',
  SAFE_SKIP_DISTANCE: 'DEMO_SAFE_SKIP_DISTANCE',
  SESSION_ID: 'DEMO_SESSION_ID',
  SHAKA_CONTROLS: 'DEMO_SHAKA_CONTROLS',
  SLOW_HALF_LIFE: 'DEMO_SLOW_HALF_LIFE',
  STALL_DETECTOR_ENABLED: 'DEMO_STALL_DETECTOR_ENABLED',
  STALL_THRESHOLD: 'DEMO_STALL_THRESHOLD',
  STALL_TIMEOUT: 'DEMO_STALL_TIMEOUT',
  START_AT_SEGMENT_BOUNDARY: 'DEMO_START_AT_SEGMENT_BOUNDARY',
  STREAMING_RETRY_SECTION_HEADER: 'DEMO_STREAMING_RETRY_SECTION_HEADER',
  STREAMING_SECTION_HEADER: 'DEMO_STREAMING_SECTION_HEADER',
  SWITCH_INTERVAL: 'DEMO_SWITCH_INTERVAL',
  TEXT_LANGUAGE: 'DEMO_TEXT_LANGUAGE',
  TEXT_ROLE: 'DEMO_TEXT_ROLE',
  TIMEOUT: 'DEMO_TIMEOUT',
  TRICK_PLAY_CONTROLS: 'DEMO_TRICK_PLAY_CONTROLS',
  TRICK_PLAY_CONTROLS_WARNING: 'DEMO_TRICK_PLAY_CONTROLS_WARNING',
  UI_LOCALE: 'DEMO_UI_LOCALE',
  UPDATE_EXPIRATION_TIME: 'DEMO_UPDATE_EXPIRATION_TIME',
  UPDATE_INTERVAL_SECONDS: 'DEMO_UPDATE_INTERVAL_SECONDS',
  USE_HEADERS: 'DEMO_USE_HEADERS',
  USE_NATIVE_HLS_SAFARI: 'DEMO_USE_NATIVE_HLS_SAFARI',
  USE_PERSISTENT_LICENSES: 'DEMO_USE_PERSISTENT_LICENSES',
  VIDEO_ROBUSTNESS: 'DEMO_VIDEO_ROBUSTNESS',
  XLINK_FAIL_GRACEFULLY: 'DEMO_XLINK_FAIL_GRACEFULLY',
};
/* eslint-enable max-len */
