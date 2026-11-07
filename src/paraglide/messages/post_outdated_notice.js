/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown>, days: NonNullable<unknown> }} Post_Outdated_NoticeInputs */

const zh_post_outdated_notice = /** @type {(inputs: Post_Outdated_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`本文最后更新于 ${i?.date}，距今已有 ${i?.days} 天，文中部分信息可能已经过时。`)
};

const en_post_outdated_notice = /** @type {(inputs: Post_Outdated_NoticeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This post was last updated on ${i?.date}, ${i?.days} days ago. Some of it may be out of date.`)
};

/**
* | output |
* | --- |
* | "This post was last updated on {date}, {days} days ago. Some of it may be out of date." |
*
* @param {Post_Outdated_NoticeInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const post_outdated_notice = /** @type {((inputs: Post_Outdated_NoticeInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Post_Outdated_NoticeInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_post_outdated_notice(inputs)
	return zh_post_outdated_notice(inputs)
});