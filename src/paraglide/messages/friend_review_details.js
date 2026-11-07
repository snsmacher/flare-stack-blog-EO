/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Review_DetailsInputs */

const zh_friend_review_details = /** @type {(inputs: Friend_Review_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`站点详情`)
};

const en_friend_review_details = /** @type {(inputs: Friend_Review_DetailsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Site details`)
};

/**
* | output |
* | --- |
* | "Site details" |
*
* @param {Friend_Review_DetailsInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_review_details = /** @type {((inputs?: Friend_Review_DetailsInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Review_DetailsInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_review_details(inputs)
	return zh_friend_review_details(inputs)
});