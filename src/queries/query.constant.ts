export enum QUERY_KEYS {
  UserListing = 'UserListing',
  UserDetail = 'UserDetail',
  UserInfo = 'UserInfo',
  CourseListing = 'CourseListing',
  CourseAreaDetail = 'CourseAreaDetail',
  CourseBigSelectOption = 'CourseBigSelectOption',
  TopicListing = 'TopicListing',
  TopicBigSelectOption = 'TopicBigSelectOption',
  TopicDetail = 'TopicDetail',
  LessonListing = 'LessonListing',
  LessonDetail = 'LessonDetail',
  Setting = 'Setting',
  AnswerListing = 'AnswerListing',
  ImageAll = 'ImageAll',
  UserPointHistoryListing = 'UserPointHistoryListing',
  UserStreakHistory = 'UserStreakHistory',
  GetStatistics = 'GetStatistics',
  UserReferral = 'UserReferral'
}

export const MINUTE = 60 * 1000;
export const STALE_TIME = 5 * MINUTE;
export const GC_TIME = 10 * MINUTE;
export const RETRY_QUERY_TIMES = 3;
export const RETRY_MUTATION_TIMES = 1;
