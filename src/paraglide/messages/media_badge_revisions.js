/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Media_Badge_RevisionsInputs */

const zh_media_badge_revisions = /** @type {(inputs: Media_Badge_RevisionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅历史版本引用`)
};

const en_media_badge_revisions = /** @type {(inputs: Media_Badge_RevisionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisions only`)
};

/**
* | output |
* | --- |
* | "Revisions only" |
*
* @param {Media_Badge_RevisionsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const media_badge_revisions = /** @type {((inputs?: Media_Badge_RevisionsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Media_Badge_RevisionsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_media_badge_revisions(inputs)
	return zh_media_badge_revisions(inputs)
});