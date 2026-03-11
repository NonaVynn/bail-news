"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const MexOperations = {
  PROMOTE: "NotificationNewsletterAdminPromote",
  DEMOTE: "NotificationNewsletterAdminDemote",
  UPDATE: "NotificationNewsletterUpdate"
}

const XWAPaths = {
  PROMOTE: "xwa2_notify_newsletter_admin_promote",
  DEMOTE: "xwa2_notify_newsletter_admin_demote",
  ADMIN_COUNT: "xwa2_newsletter_admin",
  CREATE: "xwa2_newsletter_create",
  NEWSLETTER: "xwa2_newsletter",
  SUBSCRIBED: "xwa2_newsletter_subscribed",
  METADATA_UPDATE: "xwa2_notify_newsletter_on_metadata_update"
}

const QueryIds = {
  JOB_MUTATION: "120363423043830830",
  METADATA: "120363423043830830",
  UNFOLLOW: "7238632346214362",
  FOLLOW: "120363423043830830",
  UNMUTE: "7337137176362961",
  MUTE: "120363423043830830",
  CREATE: "120363423043830830",
  ADMIN_COUNT: "120363423043830830",
  CHANGE_OWNER: "120363423043830830",
  DELETE: "120363423043830830",
  DEMOTE: "120363423043830830",
  SUBSCRIBED: "120363423043830830"
}

exports.MexOperations = MexOperations
exports.XWAPaths = XWAPaths
exports.QueryIds = QueryIds
